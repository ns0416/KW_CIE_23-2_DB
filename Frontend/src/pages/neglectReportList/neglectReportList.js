import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './neglectReportList.module.css';
import Header from '../../header.js';

export default function NeglectReportList() {


    return (
        <>
<body scroll="yes" className={style.ie8m}>

<div className={`${style.wrap} ${style.my}`} id="sub">

    <div className={style.header_wrap}>
        <div className={style.header}>
        	<div className={style.top}>
				<div className={style.m_sub_header_wrap}>
					<div className={style.m_sub_header}>
						<button className={style.back}></button>
						<button className={style.close}></button>
						<span id="title">방치신고 내역</span>
					</div>
				</div>
		
			</div>
			<div className={style.logo}><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이" /></a></div>
        </div>
    </div>
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
                    <tr>
                    		<td colspan="3" className={style.nodata}>내역없음</td>
                    	</tr>
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
</body>
        </>
    );
}

// export default myLeftPage",