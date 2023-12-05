import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import style from './noticeBoardView.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function NoticeBoardView(props) {
    const params  = useParams();
    const art_uid = params.uid;
    const [articles, setarticles] = useState([]);
    const [curart, set_curart] = useState({
        article:"",
        attachments:"",
        comments:"",
});
    const [cur, setcur] = useState(-1);

    useEffect(() => {
        for(let i =0; i< articles.length;i++)
        {
            //console.log(articles[i]["uid"])
            if(articles[i]["uid"] == art_uid)
            {
                setcur(i);
            }
        }
    },[articles])


    useEffect(() => { //공지사항 게시판 조회
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/getBoardArticleList", {params: {board_uid:2},})
        .then((res) => {
            if(res.data.result== "success") {
                console.log(res.data);
                setarticles(res.data.data);
            }
            else { //게시판 조회 실패
                console.log(res.data);
                console.log("get Board Article error!")
            }
        })
        .catch((err) => console.log(err))

        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/getBoardArticle", {params: {uid:art_uid},})
        .then((res) => { // 게시글 조회
            if(res.data.result== "success") {
                //console.log(res.data);
                set_curart({...res.data,
                    articles:res.data.article,
                    attachments:res.data.attachments,
                    comments:res.data.comments,
                });
            }
            else { //게시글 조회 실패
                console.log(res.data);
                console.log("get Board Article error!")
            }
        })
        .catch((err) => console.log(err))
    }, [params,props])
    
    useEffect(() => {
        console.log(curart)
    }, [curart])
    

    return (
        <>
        <Header title={"공지사항"} />
        <div className={style.read_box}>
        {cur === -1 ? (
            <>
            </>
        ):(
            <>
            <dl>
            <dt>
                <p>{articles[cur]["title"]}</p>
                <span>{articles[cur]["updated_date"].slice(0,-9)}</span>
            </dt>
            <dd>
            	<p><br/></p>
                {/* <p style="text-align: center;">
                    <img src="https://bikeseoul.com/upload/daum/notice/notice_img_202311101427042.jpg" class="txc-image" style="clear:none;float:none;"/>
                </p> */}
                <p id="content">
                    {articles[cur]["content"]}
                </p>
            </dd>
            <dd className={style.file}>
				<span>첨부파일</span>
				<span>
					{/* <a href="#" class="last" id="7752,/upload/daum/notice/notice_img_202311101427042.jpg">자전거 주행 에티켓(평일용).jpg</a> */}
                </span>
			</dd>
		</dl>
        <table>
                	<colgroup>
                        <col width="25%"/>
                        <col width="75%"/>
                    </colgroup>
                    <tbody><tr>
                    	<th className={`${style.first} ${style.prev}`}>이전글</th>
                        <td className={style.first}>
                        {cur > 0 ? (
                            <>
                            <Link to={{pathname: "/noticeBoardView/"+articles[cur-1]["uid"]}}>
								<span style={{float: "left"}}>{articles[cur-1]["title"]}</span><span style={{float:"right"}}>{articles[cur-1]["updated_date"].slice(0,-9)}</span>
							</Link>
                            </>
                        ):(
                            <>
                            이전글이 없습니다.
                            </>
                        )}
                        </td>
                    </tr>
                    <tr>
                    	<th className={style.next}>다음글</th>
                        <td>
                        {cur < articles.length -1 ? (
                            <>
                            <Link to={{pathname: "/noticeBoardView/"+articles[cur+1]["uid"]} }>
                            <span style={{float: "left"}}>{articles[cur+1]["title"]}</span><span style={{float:"right"}}>{articles[cur+1]["updated_date"].slice(0,-9)}</span>
							</Link>
                            </>
                        ):(
                            <>
                            다음글이 없습니다.
                            </>
                        )
                            
                        }
                        </td>
                    </tr>
                    </tbody></table>
            </>
        )}
        </div>
        <div className={style.btns}>
            <Link to="/noticeBoard" className={style.list}>목록</Link>
        </div>
    </>
        
    )
}