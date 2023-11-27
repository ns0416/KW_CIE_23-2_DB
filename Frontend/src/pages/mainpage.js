import React from 'react';
import {Link} from 'react-router-dom';
import style from './mainpage.css';
// import './newStation';

export default function Mainpage() {
    const [isLoggedIn, setisLoggedIn] = React.useState(false);
    return(
        <>

	<input type="hidden" id="tabId" />

	<div id="layer" class="layer-wrap" style={{display:"none"}}> 
		<div class="pop-layer"> 
			<div class="pop-container"> 
				<h1 style={{color:"blue", fontSize:"1.3em", margin:"10px 0px"}}>따릉이 장애안내</h1> 
				{/* <!-- <span id="hyPopup">
					<img src="images/popup/hyPopUp.jpg" alt="hyPopupImg">
				</span> --> */}



				
				
				<div class="btn-r"> 
					<button onclick="l_out_20220718()">오늘 하루 열지 않음</button>
					<button onclick="l_fadeOut()">닫기</button>
				</div>
                 {/* <!--// content-->  */}
			</div> 
		</div>
	</div>
   
	<div class="wrap">
		{/* <!--header--> */}
		{/* <!--웹 : 헤더추가--> */}
    <div class="header_wrap">
        <div class="header">
        	<div class="top">
				<div class="m_sub_header_wrap">
					<div class="m_sub_header">
						<button class="back"></button>
						<button class="close"></button>
						<span id="title"></span>
					</div>
					{/* <!-- //.m_sub_header --> */}
				</div>
				{/* <!-- //.m_sub_header_wrap --> */}
			
        		<div class="m_menu">메뉴열기</div>
				<div class="m_global">언어선택</div>
				<div class="info"><a href="/info/infoReg.do">이용안내</a></div>
				<a class="join" href="/memberCertify.do?appOsType=">회원가입</a>
						<a class="login" href="/login.do">
							로그인</a>
					<div class="global">
					<ul>
						<li class="en"><a href="https://www.bikeseoul.com:457/main.do?lang=en">ENGLISH</a></li>
						<li class="ch"><a href="https://www.bikeseoul.com:457/main.do?lang=zh">中國語</a></li>
						<li class="ja"><a href="https://www.bikeseoul.com:457/main.do?lang=ja">日本語</a></li>
						<li class="ko"><a href="https://www.bikeseoul.com:457/main.do?lang=ko">한국어</a></li>
					</ul>
				</div>
				
				
			</div>
			{/* <!-- 모바일 화면 --> */}
			<div class="logo"><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이" /></a></div>
            
            {/* <!--메뉴(웹)--> */}
            <div class="menu_web">
                <ul>
                    <li><a href="/main.do#bike_info">사업소개</a></li>
                    <li><a href="/app/station/moveStationRealtimeStatus.do">대여소 조회</a></li>
                    <li><a href="/app/ticket/member/buyTicketList.do">이용권 구매</a></li>
                    <li><a href="/customer/opinionBoard/opinionBoardList.do">문의/FAQ</a></li>
                    <li><a href="/customer/notice/noticeList.do">공지사항</a></li>
                    <li><a href="/customer/faq/faqList.do">안전수칙</a></li>
                </ul>
            </div>
            {/* <!--메뉴(웹)-->  */}
        </div>
        {/* <!-- <div class="bike_tap">
		  	<ul>
				<li class="first"><span id="all">전체</span></li>
				<li class="second"><span id="lcd">LCD형</span></li>
				<li class="third"><span id="qr">QR형</span></li>
				<li class="forth"><span id="yg">새싹</span></li>
			</ul>
		</div>
		 <div class="remarks">
			<ul>
				<li class="title">&nbsp;</li>
				<li class="place01">LCD형,&nbsp;QR형&nbsp;반납가능</li>
				<li class="place02">QR형&nbsp;반납가능<span class="lcd">(LCD형&nbsp;반납불가)</span></li>
			</ul>
		</div>  --> */}
		{/* <!-- //remarks --> */}
    </div>
    {/* <!--웹 : 헤더추가--><script>
	
		function moveSnsViewPage(flag){
			
			var tUrl = "";
			if(flag === 'snsFacebook') {
				tUrl = "https://www.facebook.com/seoulbike";
		    } else {
		    	tUrl = "https://twitter.com/seoulbike";
		    }
			switch(window.osType){
			    case "web" :
			    	window.open(tUrl,"_blank");
			        break;
			    case "android" :
			        var pData = {targetUrl  :tUrl, returnFnc : "", title : "서울자전거sns" };
			        window.android.openWebviewPopup(JSON.stringify(pData));
			        break;
			    case "ios" : 
			        var iosUrl = 'toApp://?{"targetUrl" : "'+tUrl+'","title" : "서울자전거sns", "returnFnc" : "", "call":"openWebviewPopup"}';
			        window.location = iosUrl;
			        break;
		    }
		}
	</script> */}
<div class="mask">
			<div class="maskwrap">
				<div class="mask_close">닫기</div>
				<div class="change_lang" id="changeLang">
					<ul>
						<li class="en"><a href="https://www.bikeseoul.com:457/main.do?lang=en">ENGLISH</a></li>
						<li class="ch"><a href="https://www.bikeseoul.com:457/main.do?lang=zh">中國語</a></li>
						<li class="ja"><a href="https://www.bikeseoul.com:457/main.do?lang=ja">日本語</a></li>
						<li class="ko"><a href="https://www.bikeseoul.com">한국어</a></li>
				
					</ul>
				</div>
	  			{/* <!-- //.change_lang --> */}
				<div class="search_content">
					<form id="frm"></form>
				 
					<form class="search" id="search" role="search">
						<fieldset class="fld_sch">
							<legend class="screen_out">검색어 입력폼</legend>
							<div class="box_search">                    
								<input type="text" id="searchValue" value="" name="searchValue" title="검색어 입력" placeholder="원하시는 지역이 어디신가요?" />
								<div id="search_data"></div>
							</div>
						</fieldset>
						<input type="hidden" name="searchType" id="searchType" />
					</form>
					{/* <!-- <script>$("select").styledSelect();</script> -->  */}
				</div>
				{/* <!-- //.search_content --> */}
			</div>
			{/* <!-- //.maskwrap --> */}
		</div> 
		{/* <!-- //mask --> */}
	
		{/* <!-- 정류장 정보 start --> */}
		<div class="location_info" style={{display: "none"}}>
			<div class="location_info_wrap">
				{/* <!-- 창닫기  --> */}
				<div class="mask_close location_close">
					창닫기                    
				</div>
				{/* <!-- //.close --> */}

				<p class="location_name">
					<span id="location_id"></span>
				</p>

				<div class="location_box" id="location_02"> 
					<div class="name">일반 따릉이</div>
					<div class="num" id="parkingQRBikeCnt"></div>
				</div>
				
				<div class="location_box" id="location_03"> 
					<div class="name">새싹 따릉이</div>
					<div class="num" id="parkingELECBikeCnt"></div>
				</div>
			</div>
			{/* <!-- //.location_info_wrap  --> */}
		</div>
	 
		{/* <!-- 웹 메인 --> */}
		<div class="container" id="main">
			<div class="map" id="mapDiv" style={{height: "932px", position: "relative", overflow: "hidden", background: "rgb(248, 249, 250)"}}>
				<div class="side_area">
					<a class="search_bike search_open">검색하기</a>
					<a class="refresh">새로고침</a>
					<a class="question">이용안내</a>
				</div>
				{/* <!-- //side_area --> */}
				<div id="progress" style={{display: "none"}}>
					<img src="/img/loding.gif" class="lazyload" alt="이미지  대기용" />
				</div>
			
			<div class="main_image">
				<div class="content">
						<div class="login_box">
								<form name="loginForm" action="/j_spring_security_check" method="POST">
									<fieldset>
										<legend>로그인</legend>
										<a href="" class="close"></a>
										<p>로그인 후 자전거 대여하실 수 있습니다.</p>
										<div>
											<input class="inputlogin" onkeypress="" name="j_username" id="j_username" value="" size="18" maxlength="20" placeholder="아이디" />
										</div>
										<div>
											<input class="inputlogin" onkeypress="" name="j_password" value="" type="password" id="mempw" size="18" maxlength="20" placeholder="비밀번호" />
										</div>
										<div class="autologin">
											<input type="checkbox" name="loginchk" id="logchk" title="자동로그인" value="true" />
											<label for="logchk"><span></span>자동로그인</label>
										</div> 
										<a href="/memberIdFind.do" class="idpw_srch">아이디</a>/<a href="memberPwFind.do" class="idpw_srch">비밀번호찾기</a>
										<div class="btn">
											<input class="btn_login" type="button" title="로그인" value="로그인" id="loginBtn" onclick="loginFnc()" />
										</div>
										<a href="https://www.bikeseoul.com:457/main.do?lang=ko" class="nonmember">비회원<img src="/images/arrow_login.jpg" alt="" /></a>
										<a href="https://www.bikeseoul.com:457/main.do?lang=en" class="foreigner">foreigner<img src="/images/arrow_login.jpg" alt="" /></a>
										
										<input type="hidden" id="ostype" name="appOsType" value="web" /> 
										<input type="hidden" id="usrDeviceId" name="usrDeviceId" /> 
									</fieldset> 
								</form>
							</div>
							</div>    
			</div>
       
			<div class="main_tab">
				<ul>
					<li class="mt_1"><a href="/app/use/moveUseMenuRentCpn.do">대여방법</a></li>
					<li class="mt_2"><a href="/info/infoDuty.do">반납방법</a></li>
					<li class="mt_3"><a href="/app/station/moveStationRealtimeStatus.do">대여소현황</a></li>
					<li class="mt_4"><a href="/info/infoCoupon.do">이용요금안내</a></li>
					{/* <!--li class="mt_4"><a href="/app/mybike/favoriteStation.do">대여하기</a></li--> */}
				</ul>
			</div>

			{/* <div class="main" id="bike_info">
				<h1><img src="/images/ko/bikeseoul_web.png" alt="자전거와 함께하는 건강한 도시, 세계적인 자전거 도시 서울" class="lazyload" /></h1>
				
				<div class="bikeseoul_bn">
				</div>
				
				<div class="rental_guide">
					<h2>대여소 안내</h2>
					<ul>
						<li class="guide_1">
							<div class="img"></div>
							<div class="info">
								<dl>
									<dt>대여소란?</dt>
									<dd>서울자전거를 대여하고 반납할수 있는<br/>무인 정류장 형태의 자전거 거치 시설입니다.</dd>
								</dl>
							</div>
						</li>
						<li class="guide_2">
							<div class="img"></div>
							<div class="info">
								<dl>
									<dt>대여소의 위치</dt>
									<dd>
										대여소는 지하철 출입구, 버스정류장, 주택단지,<br/>
										관공서, 학교, 은행 등 접근이 편리한 주변 생활시설<br/>
										및 통행장소를 중심으로 운영하고 있습니다.
									</dd>
								</dl>
							</div>
						</li>
						<li class="guide_4">
							<div class="img"></div>
							<div class="info">
								<dl>
									<dt>이용방법</dt>
									<dd>
										대여소가 설치된 곳이면 어디에서나<br/>
										'따릉이 앱'을 통해 서울 자전거를 대여하고<br/>
										반납할 수 있습니다.
									</dd>
								</dl>
							</div>
						</li>
					</ul>
				</div>
				
				<div class="rental_info">
					<h2>대여소 구성요소</h2>
					<ul>
						<li class="guide_1">
							<div class="img"></div>
							<div class="info">
								<dl>
									<dt>자전거</dt>
									<dd>누구나 이용할 수 있는 자전거로, 내구성이 강한 소재와 고급기어를 사용하여<br/>주행 안정성과 편의성을 최우선으로 제작하였습니다.</dd>
								</dl>
							</div>
						</li>
						<li class="guide_2">
							<div class="img"></div>
							<div class="info">
								<dl>
									<dt>거치대</dt>
									<dd>
										거치대는 자전거를 안전하게 세워 보관하는 시설이며, 따릉이 고유 색상과 형태를 지녀<br/>
										복잡한 서울 시내에서 쉽게 눈에 띄도록 제작되었습니다.
									</dd>
								</dl>
							</div>
						</li>
					</ul>
				</div>


				<div class="meta_info">	

					<a href="https://www.roblox.com/games/7594841232/seoulbike" target="_blank"><img src="/img/metaLink.jpg" /></a>
				</div>



			
				<div class="main_app_info">	
					<div class="textArea">
						<h1>새롭게 단장하고 찾아온 따릉이 앱</h1>
						<p>
							간편해진 UI와 시스템으로, 사용자들이 더욱 편리하게 이용 할 수 있게 변신했습니다.<br/>
							지금 바로 이용해 보세요.
						</p>
						
						<a target="_blank" href="https://apps.apple.com/kr/app/%EC%84%9C%EC%9A%B8%EC%9E%90%EC%A0%84%EA%B1%B0-%EB%94%B0%EB%A6%89%EC%9D%B4/id1037272004">
							<img src="/img/app_ios.png" alt="" class="" />
						</a>
						<a target="_blank" href="https://play.google.com/store/apps/details?id=com.dki.spb_android&amp;hl=ko&amp;gl=US">
							<img src="/img/app_and.png" alt="" class="" />
						</a>
					</div>
				</div>
				



			</div> */}


	</div>
</div>	 
</div>
	<script src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=4791tlnwi5&amp;submodules=geocoder"></script><script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps-geocoder.js"></script> 
<script src="/js/newStation.js?ver=0412"></script>
<script src="/js/common_spb.js"></script>
<script src="/js/select/jquery.styled-select-box_main.js"></script>
<script src="/js/lazysizes.min.js" async=""></script>


            <h3>this is main page</h3>
            <Link to='/myLeftPage' state={{isLoggedIn: isLoggedIn}}>마이페이지</Link>
            <Link to='/test'>테스트페이지</Link>
        </>

    );
}

