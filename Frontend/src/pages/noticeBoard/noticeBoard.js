import React, { useEffect, useState } from 'react';
import {Link, Navigate} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './noticeBoard.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function NoticeBoard() {
	const navigate = useNavigate();
	const [articles, setarticles] = useState([]);
	useEffect(() => { //공지사항 게시판 조회
		axios.get("http://seoulbike-kw.namisnt.com:8082/rest/getBoardArticleList", {params: {board_uid:2},})
        .then((res) => {
            if(res.data.result== "success") {
                console.log(res.data);
				//console.log(res.data.data);
				setarticles(res.data.data);
            }
            else { //게시판 조회 실패
                console.log(res.data);
                console.log("get Board Article error!")
            }
        })
        .catch((err) => console.log(err))
	}, [])

    return (
    <>
<div className={style.wrap} id="sub">   

    <Header title={"공지사항"}/>
    <div className={style.container}>
		<div className={style.content}>
			<div className={style.board}>
				<div className={style.board_srch_help}>
					<form id="frm" name="frm" action="/customer/notice/noticeList.do" accept-charset="utf-8">
						<div className={`${style.input} ${style.w70}`}><input type="text" className={style.w100} id="searchValue" name="searchValue" placeholder="검색어를 입력해주세요" value=""/></div>
						<div className={style.btn_search}><a href="#" id="searchButton" name="searchButton">검색</a></div>
					</form>
				</div>
				
				<div className={style.board_box}>
					<table>
						<colgroup>
							<col width="75%"/>
							<col width="25%"/>
						</colgroup>
						<tbody><tr>
							<th style={{textAlign:"center"}}>제목</th>
							<th style={{textAlign:"center"}}>날짜</th>
						</tr>
						{articles.map(function(a,idx) {
							return (<>
								<tr>
									<td className={style.left}>
										<Link to={{pathname: "/noticeBoardView/"+a.uid}}>
											<span style={{fontSize: "15px"}}>{a.title}</span>
										</Link>
									</td>
									<td>{a.updated_date.slice(0,-9)}</td>
								</tr>
							</>)
						})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

    

		


        </>
    );
}

// export default myLeftPage;