import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './neglectReportList.module.css';
import Header from '../../header.js';
import axios from 'axios';


export default function NeglectReportList() {
    const [list, setList] = useState([]);
    const getList = ()=>{
        let param={};
        axios.get("/rest/service/getNeglectList", {params:param})
        .then((res) => {
            if(res.data.result== "success") {
                //console.log(res.data);
				//console.log(res.data.data);
				setList(res.data.data)
            }
            else { //대여소 조회 실패
                //console.log(res.data);
                console.log("get station error!")
            }
        })
        .catch((err) => console.log(err))
    }
    useEffect(()=>{getList()},[])

    return (
        <>
<div scroll="yes" className={style.ie8m}>

<div className={`${style.wrap} ${style.my}`} id="sub">

    <Header title={"방치 신고"}/>
    <div className={style.content}>
        <div className={style.my}>
             <div className={style.top}>
                <h3>방치 신고</h3>
            </div>
            <form id="searchFrm">
	            <input type="hidden" name="currentPageNo" value="1"/>
	        </form>
            <div className={style.payment_box}>
            	<p className={style.caption}>Total : <span> 0</span>건</p>
            	<table>
                	<colgroup>
                        <col width="20%"/>
                        <col width="27.5%"/>
                        <col width="27.5%"/>
                        <col width="25%"/>
                    </colgroup>
                	<tbody><tr>
                    	<th className={style.center}>자전거 번호</th>
                        <th className={style.center}>신고위치</th>
                        <th className={style.center}>신고내역</th>
                        <th className={style.center}>신고날짜</th>
                    </tr>
                    {list.length <= 0 ? 
                        <tr>
                        		<td Colspan="3" className={style.nodata}>내역없음</td>
                        </tr>
                        :
                        list.map(function(a, i){
                            return(
                                <tr>
                        		    <td className={style.center}>SPB-{a.bike_uid}</td>
                                    <td className={style.center}>{a.lat}, {a.lon}</td>
                                    <td className={style.center}>{a.detail_address}</td>
                                    <td className={style.center}>{a.created_date}</td>
                                </tr>
                            );

                        })
                        
                    }
					</tbody></table>
            </div>
            <div className={style.paging}>
	        	<div id="pagingWeb" style={{display :"none"}}>
	            	<span className={style.on}><a href="#"><strong>1</strong></a></span></div>
	            <div id="pagingMobile" className={style.num} style={{display: "inline"}}>
	            	<span className={style.on}><a href="#"><strong>1</strong></a></span></div>
	        </div>
            <div className={style.btn_pay}>
            	<a id="regist" href="/app/err/moveBikeParkingLocation.do">신고하기</a>
            </div>
        </div>
	</div>
</div>
</div>
        </>
    );
}

// export default myLeftPage",