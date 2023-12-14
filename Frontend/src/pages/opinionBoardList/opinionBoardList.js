import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './opinionBoardList.module.css';
import Header from '../../header.js';

export default function OpinionBoardList() {
    return (
        <>
<div className={style.wrap} id="sub"> 
    <div className={style.header_wrap}>
        <div className={style.header}>
        	<div className={style.top}>
				<div className={style.m_sub_header_wrap}>
					<div className={style.m_sub_header}>
						<button className={style.back}></button>
						<button className={style.close}></button>
						<span id="title">문의/FAQ</span>
					</div>
				</div>
			</div>
			<div className={style.logo}><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이"/></a></div>
        
        </div>

    </div>
    <div className={style.container}>
    	<div className={style.content}>
    		<div className={style.faq}>
				<div className={style.top}>
					<h3>문의/FAQ</h3>
				</div>
				
				<div className={style.tabs_wrap}>
	                <ul className={style.tabs}>
	                    <li className={`tab-link ${style.current}`} data-tab="tab-1">문의하기<p>궁금한 점이 있으세요? 분야별 담당자들이 도와드리겠습니다.</p></li>
	                    <li className={`tab-link`} data-tab="tab-2">자주하는 질문<p>자주하는질문을 이용하시면 보다 빠르게 답변을 얻으실 수 있습니다. </p></li>
	                </ul>
	            </div>
	        
				
			
			
            <form id="frm">
            	<input type="hidden" id="cateCD" name="cateCD" value=""/>
            </form>
	            <div id="tab-1" className={`tab-content ${style.current}`} style={{display: "block"}}>
	            	<div className={style.opinion_btns}>
	            		<dl>
	            			<dd className={style.ticket}><a href="javascript:goCateList('FAQ_002');"><label>대여 및 반납</label><span><img src="/images/opi/opi_1.png" alt="대여/반납"/></span><span><b>대여 및 반납</b></span></a></dd>
	            			<dd className={style.ticket}><a href="javascript:goCateList('FAQ_010');"><label>자전거 추가배치</label><span><img src="/images/opi/opi_2.png" alt="추가배치"/></span><span><b>자전거 추가배치</b></span></a></dd>
	            			<dd className={style.ticket}><a href="javascript:goCateList('FAQ_005');"><label>대여소(개설 및 폐쇄)</label><span><img src="/images/opi/opi_3.png" alt="대여소"/></span><span><b>대여소(개설/폐쇄)</b></span></a></dd>
	            			<dd className={style.ticket}><a href="javascript:goCateList('FAQ_004');"><label>결제/환불/마일리지</label><span><img src="/images/opi/opi_4.png" alt="결제"/></span><span><b>결제/환불/마일리지</b></span></a></dd>
	            			<dd className={style.ticket}><a href="javascript:goCateList('FAQ_009');"><label>운영 및 정책</label><span><img src="/images/opi/opi_5.png" alt="운영정책"/></span><span><b>운영 및 정책</b></span></a></dd>
	            			
	            			<dd className={style.ticket}><a href="javascript:goCateList('FAQ_007');"><label>자전거, 시설관리</label><span><img src="/images/opi/opi_6.png" alt="시설관리"/></span><span><b>자전거 및 시설관리</b></span></a></dd>
	            			<dd className={style.ticket}><a href="javascript:goCateList('FAQ_003');"><label>앱, 홉페이지</label><span><img src="/images/opi/opi_7.png" alt="앱/홈페이지"/></span><span><b>앱 또는 홈페이지 문의</b></span></a></dd>
	            			<dd className={style.ticket}><a href="/app/err/moveBikeParkingLocation.do"><label>방치자전거</label><span><img src="/images/opi/opi_8.png" alt="방치신고"/></span><span><b>방치 자전거 발견</b></span></a></dd>
	            			<dd className={style.ticket}><a href="/customer/opinionBoard/opinionBoardEdit.do?cateCD=OPI_012"><label>기타 문의사항</label><span><img src="/images/opi/opi_9.png" alt="글쓰기"/></span><span><b>1:1 문의하기</b></span></a></dd>
	            			<dd className={style.ticket}><a href="/app/mybike/memberOpinion/memberOpinionList.do"><label>내가 문의한 내역</label><span><img src="/images/opi/opi_10.png" alt="문의내역확인"/></span><span><b>문의내역 확인</b></span></a></dd>
	            			
	            		</dl>
	            	</div>
	            </div>


			</div>


		</div>
	</div>
</div>

        </>
    );
}
