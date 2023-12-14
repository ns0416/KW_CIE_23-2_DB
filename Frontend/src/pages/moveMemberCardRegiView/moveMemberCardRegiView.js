import style from './common.css';
import React from 'react';


export default function MoveMemberCardRegiView() {
	return (
		<>

{/* <body scroll="yes" className="ie8m"> */}
	<div className="wrap my" id="sub">
		{/* <!--웹 : 헤더추가--> */}
    <div className="header_wrap">
        <div className="header">
        	<div className="top">
				<div className="m_sub_header_wrap">
					<div className="m_sub_header">
						<button className="back"></button>
						<button className="close"></button>
						<span id="title" style={{fontFamily: 'notokr-regular',
							color: "#333",
							textAlign: "center",
							fontWeight: "bold",
							lineHeight: "50px",
							margin: 0,
							padding: 0,
							fontSize: "100%"}}>환승카드 관리
						{/* <!-- 카드관리(대여,환승) --> */}
						 </span>
					</div>
					{/* <!-- //.m_sub_header --> */}
				</div>
				{/* <!-- //.m_sub_header_wrap --> */}
			
        		{/* <div className="m_menu">메뉴열기</div>
				<div className="m_global">언어선택</div>
				<div className="info"><a href="/info/infoReg.do">이용안내</a></div>
				<a className="join" href="/app/mybike/getMemberUseHistory.do?appOsType=">나의 공간</a>
						<a className="login" href="/logout.do">
							로그아웃</a> 
					<div className="global">
					<ul>
						<li className="en"><a href="https://www.bikeseoul.com:457/main.do?lang=en">ENGLISH</a></li>
						<li className="ch"><a href="https://www.bikeseoul.com:457/main.do?lang=zh">中國語</a></li>
						<li className="ja"><a href="https://www.bikeseoul.com:457/main.do?lang=ja">日本語</a></li>
						<li className="ko"><a href="https://www.bikeseoul.com:457/main.do?lang=ko">한국어</a></li>
					</ul>
				</div> */}
				
				
			</div>
			{/* <!-- 모바일 화면 --> */}
			{/* <div className="logo"><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이" /></a></div> */}
            
            {/* <!--메뉴(웹)--> */}
            {/* <div className="menu_web">
                <ul>
                    <li><a href="/main.do#bike_info">사업소개</a></li>
                    <li><a href="/app/station/moveStationRealtimeStatus.do">대여소 조회</a></li>
                    <li><a href="/app/ticket/member/buyTicketList.do">이용권 구매</a></li>
                    <li><a href="/customer/opinionBoard/opinionBoardList.do">문의/FAQ</a></li>
                    <li><a href="/customer/notice/noticeList.do">공지사항</a></li>
                    <li><a href="/customer/faq/faqList.do">안전수칙</a></li>
                </ul>
            </div> */}
            {/* <!--메뉴(웹)-->  */}
        </div>
        {/* <!--
		 <div className="bike_tap">
		  	<ul>
				<li className="first"><span id="all">전체</span></li>
				<li className="second"><span id="lcd">LCD형</span></li>
				<li className="third"><span id="qr">QR형</span></li>
				<li className="forth"><span id="yg">새싹</span></li>
			</ul>
		</div>
		 <div className="remarks">
			<ul>
				<li className="title">&nbsp;</li>
				<li className="place01">LCD형,&nbsp;QR형&nbsp;반납가능</li>
				<li className="place02">QR형&nbsp;반납가능<span className="lcd">(LCD형&nbsp;반납불가)</span></li>
			</ul>
		</div>  --> */}
		{/* <!-- //remarks --> */}
    </div>
    {/* <!--웹 : 헤더추가--> */}
	{/* <div className="container"> */}
			{/* <!-- 20220407 공통 수정 --> */}
			{/* <style>
	#member_note_profile dd {float: left}
	#member_note_my_list li { width: 30%; text-align: center; text-decoration: underline;	}
</style> */}

<div className="my_navi">
	<div className="head">
		<dl className="profile" id="member_note_profile">
			<dd className="name">vlvksbdof12님</dd>
				<dd className="ticket"><span>이용권 유효기간&nbsp;2024-05-23 12:19</span></dd>
				</dl>
		<div className="my_list" id="member_note_my_list">
			<ul>
				<li style={{width:"20%"}}>
					<a href="/app/mybike/moveMemberCardRegiView.do?card=Trans">
					
						환승카드 관리
					</a>
				</li>
				<li style={{width:"20%"}}>
					<a href="/app/mybike/milehistory/getMileHistory.do">
					
						환승 마일리지
					</a>
				</li>
				<li style={{width:"20%"}}>
					<a href="/app/ticket/guest/getTicketNonPayInfo.do">
						미납요금
						{/* <!-- 미납요금  --> */}
					</a>
				</li>


			</ul>
		</div>
	</div>
	
	
	<div className="tabs">
		<ul>
			<li id="memberNoteTab1" className="tab-1 on" onclick="location.href='/app/mybike/memberInfo/memberInfoEdit.do'">
				<a href="/app/mybike/memberInfo/memberInfoEdit.do">회원정보 관리</a>
			</li>
			<li id="memberNoteTab2" className="tab-2" onclick="location.href='/app/mybike/payhistory/getPayHistory.do'">
				<a href="/app/mybike/payhistory/getPayHistory.do">결제 관리</a>
			</li>
			<li id="memberNoteTab3" className="tab-3" onclick="location.href='/app/mybike/getMemberUseHistory.do'">
				<a href="/app/mybike/getMemberUseHistory.do">이용정보 관리</a>
			</li>
		</ul> 
	</div> 	
</div>							
{/* <div className="content">
        		<!-- 20220407 공통 수정 -->	
        		<style>
	.category_tab dd {width:33%} 
</style> */}
<div className="category_tab">
	<dl>
		<dd id="member_manage_card" className="on"><a href="/app/mybike/moveMemberCardRegiView.do">환승카드 관리</a></dd>
		<dd id="member_manage_siminAnswer"><a href="/app/mybike/memberOpinion/memberOpinionList.do">상담내역</a></dd>
		<dd id="member_manage_faq"><a href="/customer/opinionBoard/opinionBoardEdit.do">시민의견등록</a></dd>
		<dd id="member_manage_update"><a href="/app/mybike/memberInfo/memberInfoEdit.do">개인정보수정</a></dd>
		<dd id="member_manage_sns"><a href="/app/mybike/setSnsLoginInfo.do">sns 로그인 연동 설정</a></dd>
		<dd id="member_manage_withDraw"><a href="/app/mybike/memberInfo/memberSecede.do">회원탈퇴</a></dd>
	</dl>
</div><form id="frm"></form>
				{/* <!--나의공간 > 회원카드등록--> */}
				<div className="my">
					<ul className="tabs">
						<li style={{display: "none"}} className="tab-link current" data-tab="card-tab-2" id="transfer_tab">환승카드</li>
								{/* <!-- 환승카드 --> */}
					</ul>
					 
					
					{/* <!--환승카드--> */}
					<div id="card-tab-2" className="tab-content current">
						<div className="pay_info" style={{border :"0px"}}>
							<ul>
								<li>서울자전거와 대중교통을 30분 이내에 환승하여 이용한 경우에는 마일리지를 적립해 드립니다.</li>
								<li>환승마일리지 서비스 신청과 ㈜한국스마트카드의 정보제공에 동의하고, 대중교통 이용시 사용하는 교통카드를 등록하여야 합니다.  <br/><br/> ※ 후불교통카드의 경우, 등록하신 환승카드의 번호와 티머니에서 전송받은 대중교통 사용 내역의 카드번호가 일치하는 경우에 한하여 마일리지 적립이 진행되고 있습니다. <br/><br/> ※ 이용일 기준 4일 후, 마일리지 적립이 안 될 경우, 카드번호 확인이 필요합니다. <br/><br/> 이경우 거래하고계신 카드사에 교통거래가 발생한 카드번호를 확인하여 등록하신 환승카드번호와 일치하는지 확인하여 주시기 바랍니다. <br/><br/> (교통카드의 경우, 플라스틱 카드의 번호와 대중교통 이용내역[카드사에서 티머니로 제공]에서 제공하는 카드번호가 상이하여 마일리지 누락이 일어날 수 있습니다.)  </li>
								<li style={{color: "red"}}>※ 현재 KBANK, 신한 아멕스카드(15자리), 지하철 정기권, 모바일 페이 등의 경우  카드사 정책에 의해 적립이 불가하오니, 해당 카드이외의 카드 사용을 부탁드립니다.  <br/> ※ 티머니 기능이 있는 후불교통카드 등 카드 한장에 두 개의 신용카드 번호가 존재하는 경우, 대중교통 결제시 이용되는 카드번호를 반드시 확인하여주시기 바랍니다</li>
								<li><a href="/info/infoReg.do#tab-5">대중교통 환승마일리지 안내 바로가기</a></li>
							</ul> 
						</div>
						<section id="confirmForm" style={{display: "block"}}>
							<h1>환승마일리지 서비스 신청(주의사항)</h1>
							<div className="my_info" style={{border :"0px"}}>
								<p>개인정보의 제3자 제공</p>
								<ul>
									<li>카드번호를 잘못 입력한 경우에는 환승마일리지가 적립되지 않으니, 카드번호를 정확히 입력했는지 확인하셔야 합니다. </li>
									<li>대중교통에 이용하시는 교통카드의 번호를 입력하셔야만 환승마일리지가 적립됩니다. 대중교통에서 이용하시는 교통카드가 변경되는 경우 즉시 재등록하셔야 합니다. </li>
								</ul>
								<div className="my_box">
									<table>
										<colgroup>
											<col align="center" style={{width:"40%"}} />
											<col align="center" style={{width:"60%"}} />
										</colgroup>
										<tbody>
											<tr>
												<th scope="col" align="center">개인정보를 제공받는자</th>
												<td align="center"><strong>티머니</strong></td>
											</tr>
											<tr>
												<th scope="col" align="center">개인정보를 제공 받는 자의 개인정보 이용목적</th>
												<td align="center"><strong>대중교통 간 환승에 따른 마일리지 적립</strong></td>
											</tr>
											<tr>
												<th scope="col" align="center">제공되는 개인정보 항목</th>
												<td align="center">환승카드정보</td>
											</tr>
											<tr>
												<th scope="col" align="center">개인정보를 제공받는 자의 개인정보 보유 및 이용기간</th>
												<td align="center"><strong>사용자 해지 요청 시까지</strong></td>
											</tr>
											<tr>
												<th scope="col" align="center">개인정보 제공 동의 거부 권리 및 동의 거부 따른 불이익 내용 또는 제한 사항</th>
												<td align="center">귀하는 개인정보 제공 동의를 거부할 권리가 있으며, 동의거부 시 마일리지 적립을 진행할 수 없습니다.</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="check agree"><input type="checkbox" name="check4" id="check4" /><label htmlFor="check4"><span></span>환승마일리지 서비스 신청과 ㈜티머니의 정보제공에 동의합니다.</label></div>
						</section>
						<section id="inputForm" style={{display: "none"}}>
							<div className="my_box">
								<table id="transT1">
									<tbody><tr>
										<th className="first">카드유형</th>
										<td className="first">
											<div className="select_wrap w90">
												<select className="w65" id="tid2" name="tid2">
													<option>선택</option><option id="comm_CAD_001" value="CAD_001">T-MONEY</option><option id="comm_CAD_002" value="CAD_002">후불교통카드</option>
												</select>
											</div>
										</td>
									</tr>
									<tr>
										<th>카드번호</th>
										<td>
											<div className="pay_input w20"><input className="w100" title="카드번호 첫번째 4자리 입력" name="tNum" type="number" min="0" max="9" maxLength="4" onInput="memCard.maxLengthCheck(this)" id="cdnum2" onchange="" /></div>
											<div className="pay_input w20"><input className="w100" title="카드번호 두번째 4자리 입력" name="tNum" type="number" min="0" max="9" maxLength="4" onInput="memCard.maxLengthCheck(this)" /></div>
											<div className="pay_input w20"><input className="w100" title="카드번호 세번째 4자리 입력" name="tNum" type="number" min="0" max="9" maxLength="4" onInput="memCard.maxLengthCheck(this)" /></div>
											<div className="pay_input w20"><input className="w100" title="카드번호 네번째 4자리 입력" name="tNum" type="number" min="0" max="9" maxLength="4" onInput="memCard.maxLengthCheck(this)" /></div>
											<p>카드번호 16자리 입력</p> 
										</td>
									</tr>
								</tbody></table>
							</div> 
							<div className="btn"><a href="#" id="transferRegBtn">저장</a></div>
						</section>
						<section id="transferDetail" style={{display: "none"}}>
							<div className="pay_info">
								<ul>
									<li>회원님께서 등록하신 카드는 아래와 같으며, 회원카드는 정보 수정 및 삭제 후 재등록이 가능합니다.</li>
								</ul> 
							</div>
							<div className="my_box">
								<table id="transT2">
									<tbody><tr>
										<th className="first">카드유형</th>
										<td className="first"><span></span></td>
									</tr>
									<tr>
										<th>카드번호</th>
										<td><span></span></td>
									</tr>
									<tr>
										<th>등록일자</th>
										<td><span></span></td>
									</tr>
								</tbody></table>
							</div> 
							<div className="btns">
								<a href="#" className="modify" id="transferChaBtn">수정</a>
								<a href="#" className="del" id="delTransferChaBtn">삭제</a>
							</div>
						</section>
					</div>
				</div>
			</div>
		{/* </div> */}
	{/* </div> */}
{/* <!--footer--> */}

    {/* <div className="footer_wrap">
        <div className="footer">
        	<div className="left">
            <ul>
                <!--<li><a href="">개인정보처리방침</a></li>
                <li className="line"><a href="">이메일주소무단수집거부</a></li>-->
                <li><a href="/app/use/moveUseMenuClauseInfo.do">이용약관</a></li>
                
                <li className="line"><a href="/app/use/moveUseMenuClauseInfo.do?tabInfo=4">위치정보관련 약관</a></li>
                
                <li className="line"><a href="/app/use/moveUseMenuClauseInfo.do?tabInfo=2">개인정보처리방침</a></li>
                <li className="line"><a href="/app/use/moveUseMenuInsurance.do">보험안내</a></li>
                <li className="line"><a href="/customer/donor/donorList.do">도움주신 분</a></li>
            </ul>
            <p>서울특별시 중구 세종대로 110 서울특별시 대표자 오세훈, Tel : 1599-0120 (사업자등록번호 : 104-83-00469) 우편번호 04524</p>
            <p>COPYRIGHT ⓒ 2018 bikeseoul All RIGHTS RESERVED.</p>
            </div>
            <ul> 
			<li style={{background:"url(/images/inc/instaLink.png) no-repeat", width:"33px", height:"33px", display:"inline-block", cursor:"pointer"}} className="instaLink" onclick="javascript:moveSnsViewPage('snsInsta')" title="인스타 링크"></li>
						<li style={{background:"url(/images/inc/facebookLink.png) no-repeat", height:"33px", display:"inline-block", cursor:"pointer"}} className="faceLink" onclick="javascript:moveSnsViewPage('snsFacebook')" title="페이스북 링크"></li>
						<li style={{background:"url(/images/inc/naverblogLink.png) no-repeat", width:"33px", height:"33px", display:"inline-block", cursor:"pointer"}} className="naverBlogLink" onclick="javascript:moveSnsViewPage('snsNaverBlog')" title="네이버블로그 링크"></li>
            </ul>
        </div>
    </div> */}
    
    {/* <div id="frogue-container" className="position-right-bottom" data-chatbot="be43e811-a4e0-4e6e-a400-27b72c0f31b9" data-user="사용자ID" data-init-key="value"><div className="frogue-chat" id="frogue-chat" style=""><div className="frogue-fullscreen-close" id="frogue-fullscreen-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.19 64.19"><defs><style>.frogue-bg{fill:#555a9c;} .frogue-x{fill:none;stroke:#fff;stroke-linecap:round;stroke-miterlimit:10;stroke-width:2.73px;}</style></defs><title>close</title><g data-name="frogue-close"><circle cx="32.1" cy="32.1" r="32.1" className="frogue-bg"></circle><line x1="41.58" x2="22.62" y1="22.28" y2="41.24" className="frogue-x"></line><line x1="41.58" x2="22.62" y1="41.24" y2="22.28" className="frogue-x"></line></g></svg></div><iframe id="frogue-chat-iframe" src="https://frogue.danbee.ai/?chatbot_id=be43e811-a4e0-4e6e-a400-27b72c0f31b9&amp;user_id=사용자ID" allow="microphone; autoplay" allowusermedia="true" style="position: relative!important;height:100%!important;width: 100%!important;border: none!important;"></iframe></div><div id="frogue-talkpop" className="frogue-talkpop look-at-me-talk" style="display: none"><span id="frogue-talkpop-close" className="cross"><div className="cross-div"></div><div className="cross-div"></div></span><span id="frogue-talkpop-message" className="frogue-talkpop-message"> 거기 튜토리얼 봇을 복사하신 분! 여기를 클릭해서 제 말좀 들어보세요 </span></div><div className="frogue-launcher" id="frogue-launcher" style=""><div id="frogue-btn-iframe-wrap" className="frogue-btn-iframe-wrap"><iframe id="frogue-btn-iframe" className="frogue-btn-iframe" src="https://frogue.danbee.ai/button/?chatbot_id=be43e811-a4e0-4e6e-a400-27b72c0f31b9" allow="microphone; autoplay" allowusermedia="true" frameborder="0" style="width:60px; position:relative; height:60px; overflow: hidden"></ifarme></div></div></iframe></div></div></div> */}
    {/* <!-- data-init-식별키=값 으로 셋팅하면 챗플로우에 파라미터와 연동가능. 식별키는 소문자만 가능 --> */}
    
    

		</>);
}


