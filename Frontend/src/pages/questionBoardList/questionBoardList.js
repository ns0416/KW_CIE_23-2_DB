import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './questionBoardList.module.css';
import Header from '../../header.js';

export default function QuestionBoardList() {
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
						<span id="title">자주하는 질문</span>
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
					<h3>자주하는 질문</h3>
				</div>
				
				<div className={style.tabs_wrap}>
	                <ul className={style.tabs}>
	                    <li className={`tab-link `} data-tab="tab-1">문의하기<p>궁금한 점이 있으세요? 분야별 담당자들이 도와드리겠습니다.</p></li>
	                    <li className={`tab-link ${style.current}`} data-tab="tab-2">자주하는 질문<p>자주하는질문을 이용하시면 보다 빠르게 답변을 얻으실 수 있습니다. </p></li>
	                </ul>
	            </div>
	            <div id="tab-2" className={"tab-content"}>
		            <div className={style.board_srch}>
		            	<div className={style.select}>
		                <select id="comUpCD" name="comUpCD">
		                    <option value="">구분선택</option>
		                    <option value="FAQ_001">이용안내</option>
							<option value="FAQ_002">대여/반납</option>
							<option value="FAQ_003">앱/홈페이지</option>
							<option value="FAQ_004">결제/환불/마일리지</option>
							<option value="FAQ_005">대여소(개설/폐쇄)</option>
							<option value="FAQ_006">회원정보,로그인</option>
							<option value="FAQ_007">자전거/시설 관리</option>
							<option value="FAQ_008">기타</option>
							<option value="FAQ_009">운영 및 정책</option>
							<option value="FAQ_010">자전거 추가배치</option>
							<option value="FAQ_011">QR 따릉이</option>
							<option value="FAQ_012">새싹 따릉이</option>
							</select>
		                </div>
	                <form id="form" name="form" accept-charset="utf-8" onsubmit="return false">
	                <input type="hidden" id="comCD" name="comCD" value=""/>
					<div className={`${style.input} ${style.w60}`}><input type="text" className={style.w100} id="searchValue" name="" placeholder="제목/내용을 입력해주세요."/></div>
					<div className={style.btn_search}><a href="#" id="searchButton" name="searchButton">검색</a></div>
	                </form>
	                </div>
	                
	            

				<ul className={style.faq_list}>
					<li>
							<dl>
								<dt><a href="#"><span className={style.cont}>따릉이 시설물 현황을 알고 싶습니다.</span></a></dt>
								<dd id="102" style={{display: "none"}}><p> 2022년 12월 31일 기준
							자전거 43,500대/대여소 2,719개소/지역센터 11개소를 운영하고 있습니다.</p>
							<p>따릉이 단말기 고장 또는 통신상태에 일시 장애가 있는 경우 잠금장치가 해제되지 않을 수 있습니다.<br /></p></dd>
							</dl>
						</li>
					<li>
							<dl>
								<dt><a href="#"><span className={style.cont}>자전거 대여는 어떻게 하나요?</span></a></dt>
								<dd id="92" style={{display: "none"}}><p>
									<span >따릉이 단말기 고장 또는 통신상태에 일시 장애가 있는 경우 잠금장치가 해제되지 않을 수 있습니다.</span></p></dd>
							</dl>
						</li>
					<li>
							<dl>
								<dt><a href="#"><span className={style.cont}>대여를 시도했는데 자전거 잠금장치가 해제되지 않습니다.</span></a></dt>
								<dd id="93" style={{display: "none"}}><p> 따릉이 단말기 고장 또는 통신상태에 일시 장애가 있는 경우 잠금장치가 해제되지 않을 수 있습니다.</p><p> 전산상으로 대여 완료되었음에도 불구하고 잠금장치가 분리되지 않는 경우는 콜센터 1599-0120로 연락주시면 조치하도록 하겠습니다.<br /></p></dd>
							</dl>
						</li>
					</ul>
		</div>
		</div>
		</div>
		</div>
</div>
        </>
    );
}
