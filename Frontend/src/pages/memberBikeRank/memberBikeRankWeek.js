import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './memberBikeRank.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function MemberBikeRankWeek() {
	const [weekrank, setweekrank] = useState([]);
	useEffect(()=>{
		axios.get("http://seoulbike-kw.namisnt.com:8082/rest/getWeeklyRankingList")
		.then((res=>{
			if(res.data.result === "success") {
				console.log(res.data.data);
				setweekrank(res.data.data);
			}
			else {
				console.log(res.data);
				console.log("get week rank error");
			}
		}))
		.catch((err)=>console.log(err))
	}, [])

    return (
        <>
<div scroll="yes" className={style.ie8m}>
	<div className={`${style.wrap} ${style.my}`} id="sub">
	
	<Header title={"따릉이 이용 랭킹"}/>
    <div className={style.container}>
	<div className={style.content}>
	        <div className={style.my}>
	            <ul className={`${style.tabs} ${style.list}`}>
	            	<li className={`tab-link ${style.current}`} data-tab="tab-1">주간</li>
	            	<Link to='/memberBikeRankMonth'><li className={"link"} data-tab="tab-2">월간</li></Link>
	            </ul>
	            
	            <div id="tab-1" className={`${"tab-content"} ${style.current}`}>
	            	<h1>전주 월요일~일요일까지의 이용거리 실적<br/>※ 랭킹서비스 이용 거리는 실제 이용 거리와 다를 수 있습니다.</h1>
	            	<h1>나의 랭킹</h1>
	                <div className={`${style.my_box} ${style.list}`}>
	                <table>
	                	<tbody>
							<tr>
	                			<td>95264 등</td>
								<td>vlvksbdof12</td>
								<td>4 km</td>
							</tr>
	                	</tbody>
					</table>
	                </div>
	                <h1>전체 랭킹 목록</h1>
	                <div className={`${style.my_box} ${style.list}`}>
	                <table>
	                	<colgroup>
	                        <col width="10%"/>
	                        <col width="45%"/>
	                        <col width="45%"/>
	                    </colgroup>
	                	<tbody><tr>
	                    	<th className={style.first} style={{textAlign: "center"}}>등수</th>
	                        <th className={style.first} style={{textAlign: "center"}}>아이디</th>
	                        <th className={style.first} style={{textAlign: "center"}}>이용거리</th>
	                    </tr>
	                    <tr>
								<td><img src="../../../public/img/ic_medal_1.svg" alt=""/></td>
									<td>rhee***</td>
								<td>291 km</td>
									</tr>
						<tr>
								<td><img src="../../../public/img/ic_medal_2.svg" alt=""/></td>
									<td>ncj0**</td>
								<td>267 km</td>
									</tr>
						<tr>
								<td><img src="../../../public/img/ic_medal_3.svg" alt=""/></td>
									<td>ojkc**</td>
								<td>256 km</td>
									</tr>
						<tr>
								<td>4</td>
									<td>ansimon4***</td>
								<td>255 km</td>
						</tr>
						{weekrank.map(function(a,idx) {
							if(a.rank == 1)
							{
								return (
									<>
									<tr>
										<td><img src="../../../public/img/ic_medal_1.svg" alt=""/></td>
										<td>{a.member_id}</td>
										<td>{a.distance} km</td>
									</tr>
									</>
								)
							}
							else if(a.rank == 2)
							{
								return (
									<>
									<tr>
										<td><img src="../../../public/img/ic_medal_2.svg" alt=""/></td>
										<td>{a.member_id}</td>
										<td>{a.distance} km</td>
									</tr>
									</>
								)
							}
							else if(a.rank == 3)
							{
								return (
									<>
									<tr>
										<td><img src="../../../public/img/ic_medal_3.svg" alt=""/></td>
										<td>{a.member_id}</td>
										<td>{a.distance} km</td>
									</tr>
									</>
								)
							}
							else
							return (<>
								<tr>
									<td>{a.rank}</td>
									<td>{a.member_id}</td>
									<td>{a.distance} km</td>
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
	    

    </div>
    

</div>
        </>
    );
}