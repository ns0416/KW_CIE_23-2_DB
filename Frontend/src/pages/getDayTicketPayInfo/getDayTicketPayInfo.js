import style from './getDayTicketPayInfo.module.css';
import React from 'react';


export default function GetDayTicketPayInfo() {
	return (
		<>
<div className={`${style.wrap} ${style.pay}`} id="sub">

	{/* <!--웹 : 헤더추가--> */}
    <div className={style.header_wrap}>
        <div className={style.header}>
        	<div className={style.top}>
				<div className={style.m_sub_header_wrap}>
					<div className={style.m_sub_header}>
						<button className={style.back}></button>
						<button className={style.close}></button>
						<span id="title">일일권</span>
					</div>
					{/* <!-- //.m_sub_header --> */}
				</div>
				{/* <!-- //.m_sub_header_wrap --> */}
			
        		<div className={style.m_menu}>메뉴열기</div>
				<div className={style.m_global}>언어선택</div>
				<div className={style.info}><a href="/info/infoReg.do">이용안내</a></div>
				<a className={style.join} href="/app/mybike/getMemberUseHistory.do?appOsType=">나의 공간</a>
						<a className={style.login} href="/logout.do">
							로그아웃</a> 
					<div className={style.global}>
					<ul>
						<li className={style.en}><a href="https://www.bikeseoul.com:457/main.do?lang=en">ENGLISH</a></li>
						<li className={style.ch}><a href="https://www.bikeseoul.com:457/main.do?lang=zh">中國語</a></li>
						<li className={style.ja}><a href="https://www.bikeseoul.com:457/main.do?lang=ja">日本語</a></li>
						<li className={style.ko}><a href="https://www.bikeseoul.com:457/main.do?lang=ko">한국어</a></li>
					</ul>
				</div>
				
				
			</div>
			{/* <!-- 모바일 화면 --> */}
			<div className={style.logo}><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이" /></a></div>
            
            {/* <!--메뉴(웹)--> */}
            <div className={style.menu_web}>
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
        {/* <!-- <div className={style.bike_tap">
		  	<ul>
				<li className={style.first"><span id="all">전체</span></li>
				<li className={style.second"><span id="lcd">LCD형</span></li>
				<li className={style.third"><span id="qr">QR형</span></li>
				<li className={style.forth"><span id="yg">새싹</span></li>
			</ul>
		</div>
		 <div className={style.remarks">
			<ul>
				<li className={style.title">&nbsp;</li>
				<li className={style.place01">LCD형,&nbsp;QR형&nbsp;반납가능</li>
				<li className={style.place02">QR형&nbsp;반납가능<span className={style.lcd">(LCD형&nbsp;반납불가)</span></li>
			</ul>
		</div>  --> */}
	
    </div>
    
    <div className={style.container} style={{height: "100%"}}>
    	<div className={style.content}>
	    	
	        <h3 className={style.ticket_title}>이용권 구매</h3>
            <style>
	{/* @media screen and (min-width:500px){
	  .wrap{min-height: 1200px;}
	} */}
</style>

<div className={style.ticket_tab} style={{padding:"0px", height: "50px", padding:"0px"}}>
    <dl>
     	<dd id="line1" className={style.on} style={{padding:"0px", height: "50px", padding:"0px"}}><a href="/app/ticket/member/getDayTicketPayInfo.do">일일권</a></dd>
     	<dd id="line2" style={{padding:"0px", height: "50px", padding:"0px"}}><a href="/app/ticket/member/getSeasonTicketPayInfo.do">정기권</a></dd>
        <dd id="line4" style={{padding:"0px", height: "50px", padding:"0px"}}><a href="/app/ticket/member/getSeasonTicketGiftInfo.do">정기권선물</a></dd>
		<dd id="line5" style={{padding:"0px", height: "50px", padding:"0px"}}><a href="/app/ticket/member/getDayTicketGiftInfo.do">일일권선물</a></dd> 
		
    </dl>
</div> 

<form id="searchFrm">
	<input type="hidden" name="paymentClsCd" value="BIL_006"/>
	<input type="hidden" name="paymentClsCdNm" value="일일권/"/>
	<input type="hidden" name="paymentMethodCd" value=""/>
	<input type="hidden" name="paymentMethod" value=""/>
	<input type="hidden" name="paymentConfmNo" value=""/>
	<input type="hidden" name="totAmt" value="0"/>
    <input type="hidden" name="mileagePaymentAmt" value="0"/>
    <input type="hidden" name="useMileage" id="useMileage" value=""/>
    <input type="hidden" name="rentOverFeeSum" value="0"/>
    <input type="hidden" name="partyUseCnt" value="1"/>
	<input type="hidden" name="errCd" value=""/>
	<input type="hidden" name="errMsg" value=""/>
	<input type="hidden" name="authDiVal" value=""/>
	<input type="hidden" name="giftYn" value="N"/>
	<input type="hidden" name="mpnNo" value=""/>
	<input type="hidden" name="order_id" value=""/>
	<input type="hidden" name="cardNo" value=""/>
	<input type="hidden" name="billingKey" value=""/>
	<input type="hidden" name="mbSerialNo" value=""/>
	<input type="hidden" name="mb_serial_no" value=""/>
	<input type="hidden" name="reduction_check_yn" value="N"/>
	<input type="hidden" name="LGD_MID" value=""/>
	<input type="hidden" name="LGD_OID" value=""/>
	<input type="hidden" name="LGD_AMOUNT" value=""/>
	<input type="hidden" name="LGD_TIMESTAMP" value=""/>
	<input type="hidden" name="LGD_MERTKEY" value=""/>
	<input type="hidden" name="order_url" id="order_num" value=""/>
	<input type="hidden" name="order_url" id="order_url" value=""/>
	<input type="hidden" name="result" id="result" value=""/>
	<input type="hidden" name="result" id="resultMessage" value=""/>
	<input type="hidden" name="productInfo" value="일일권"/>
	{/* <!-- 선물권용 --> */}
	<input type="hidden" name="usrMpnNo" value=""/>
	
	<input type="hidden" name="usrSeq" id="usrSeq" value=""/>
	<input type="hidden" name="point" id="point" value=""/>
</form>

<form id="zeroPayFrm" name="zeroPayFrm" method="post">
	<input type="hidden" name="mid" id="mid" value="M20190819100004"/>
	<input type="hidden" name="rUrl" id="rUrl" value="https://172.27.0.136:443/app/ticket/guest/addTicketPayRes.do"/>
	<input type="hidden" name="cUrl" id="cUrl" value="https://www.bikeseoul.com/"/>
	<input type="hidden" name="rMethod" id="rMethod" value="POST"/>
	<input type="hidden" name="payType" id="payType" value="ZP"/>
	<input type="hidden" name="buyItemnm" id="buyItemnm" value="일일권"/>
	<input type="hidden" name="buyReqamt" id="buyReqamt" value="1000"/>
	<input type="hidden" name="buyItemcd" id="buyItemcd" value="BIL_006"/>
	<input type="hidden" name="buyerid" id="buyerid" value="vlvksbdof12"/>
	<input type="hidden" name="buyernm" id="buyernm" value=""/>
	<input type="hidden" name="orderno" id="orderno" value="ORDER20231129062923"/>
	<input type="hidden" name="orderdt" id="orderdt" value="20231129"/>
	<input type="hidden" name="ordertm" id="ordertm" value="062923"/>
	<input type="hidden" name="checkHash" id="checkHash" value=""/>
	<input type="hidden" name="recentUsage" id="recentUsage" value=""/>
	<input type="hidden" name="reserved01" id="reserved01" value=""/>
	<input type="hidden" name="reserved02" id="reserved02" value=""/>
	<input type="hidden" name="returnAppUrl" id="returnAppUrl" value=""/>
</form>
<form method="post" name="LGD_PAYINFO" id="LGD_PAYINFO" action="">
<input type="hidden" name="LGD_CUSTOM_SWITCHINGTYPE " id="LGD_CUSTOM_SWITCHINGTYPE " value="IFRAME"/>
<input type="hidden" name="LGD_MPILOTTEAPPCARDWAPURL" id="LGD_MPILOTTEAPPCARDWAPURL" value=""/>
<input type="hidden" name="LGD_PAYKEY" id="LGD_PAYKEY" value=""/>
<input type="hidden" name="LGD_WINDOW_TYPE" id="LGD_WINDOW_TYPE" value="iframe"/>
<input type="hidden" name="LGD_MONEPAYAPPYN" id="LGD_MONEPAYAPPYN" value="N"/>
<input type="hidden" name="LGD_RETURNURL" id="LGD_RETURNURL" value="https://www.bikeseoul.com:446/app/ticket/guest/addTicketPayRes.do"/>
<input type="hidden" name="LGD_RESPMSG" id="LGD_RESPMSG" value=""/>
<input type="hidden" name="LGD_PCVIEWYN" id="LGD_PCVIEWYN" value="null"/>
<input type="hidden" name="LGD_PAYWINDOWTYPE" id="LGD_PAYWINDOWTYPE" value="CardBillingAuth_smartphone"/>
<input type="hidden" name="LGD_HASHDATA" id="LGD_HASHDATA" value=""/>
<input type="hidden" name="LGD_PROVIDE_TERM" id="LGD_PROVIDE_TERM" value="1"/>
<input type="hidden" name="paymentMethodCd" id="paymentMethodCd" value="BIM_008"/>
<input type="hidden" name="CUSTOM_PARAMETER1" id="CUSTOM_PARAMETER1" value=""/>
<input type="hidden" name="LGD_ENCODING" id="LGD_ENCODING" value="UTF-8"/>
<input type="hidden" name="LGD_CUSTOM_FIRSTPAY" id="LGD_CUSTOM_FIRSTPAY" value="SC0060"/>
<input type="hidden" name="LGD_CUSTOM_PROCESSTYPE" id="LGD_CUSTOM_PROCESSTYPE" value="TWOTR"/>
<input type="hidden" name="CST_MID" id="CST_MID" value="bikeSeoul"/>
<input type="hidden" name="LGD_VERSION" id="LGD_VERSION" value="JSP_Non-ActiveX_SmartXPay"/>
<input type="hidden" name="LGD_RETURN_MERT_CUSTOM_PARAM" id="LGD_RETURN_MERT_CUSTOM_PARAM" value="Y"/>
<input type="hidden" name="LGD_CHECKSSNYN" id="LGD_CHECKSSNYN" value="N"/>
<input type="hidden" name="CST_PLATFORM" id="CST_PLATFORM" value="service"/>
<input type="hidden" name="LGD_TIMESTAMP" id="LGD_TIMESTAMP" value="1234567890"/>
<input type="hidden" name="LGD_BUYER" id="LGD_BUYER" value="vlvksbdof12"/>
<input type="hidden" name="LGD_BUYERSSN" id="LGD_BUYERSSN" value=""/>
<input type="hidden" name="LGD_PRODUCTINFO" id="LGD_PRODUCTINFO" value="일일권"/>
<input type="hidden" name="LGD_WINDOW_VER" id="LGD_WINDOW_VER" value="2.5"/>
<input type="hidden" name="LGD_ENCODING_RETURNURL" id="LGD_ENCODING_RETURNURL" value="UTF-8"/>
<input type="hidden" name="LGD_OID" id="LGD_OID" value="null"/>
<input type="hidden" name="CST_WINDOW_TYPE" id="CST_WINDOW_TYPE" value="submit"/>
<input type="hidden" name="LGD_OSTYPE_CHECK" id="LGD_OSTYPE_CHECK" value="P"/>
<input type="hidden" name="LGD_RESPCODE" id="LGD_RESPCODE" value=""/>
<input type="hidden" name="LGD_AMOUNT" id="LGD_AMOUNT" value="1004"/>
<input type="hidden" name="LGD_MID" id="LGD_MID" value="bikeSeoul"/>
</form><div className={style.pay}>
        	<div className={style.pc_top}>
            <div className={style.top}>
            </div>
            <div className={style.pay_infoBtn}><a href="/info/infoCoupon.do" target="_blank">이용권 사용안내</a></div>
            
            <div className={style.pay_info}>
	            <ul>
	            	<li>1회 1매씩 구매가 가능합니다.</li>
	                <li>대여시간은 1시간입니다.</li>
	                <li>초과시 5분마다 추가요금(200원)과금됩니다.<br />
	                	<span>예시- 기본 초과 1분 ~ 5분 : 200원, 6분 ~ 10분 : 400원</span>
	                </li>
	                <li>추가요금은 이용권 결제수단으로 자동결제됩니다.</li>
	            </ul>
         	</div>
         	
         	</div>
         	<div className={style.h70} style={{height:"0px"}}></div>
            
            <div className={style.pc_bottom}>
	            <div className={`${style.pay_box} ${style.ml20i} ${style.line}`}>
	            	<p>일일권종류선택</p>
	                <div className={`${style.select_wrap} ${style.w55} ${style.fl}`}>
	                   <select id="comPaymentClsCd" name="comPaymentClsCd">
						<option id="BIL_006" value="1000" etc1="1000" etc2="1000">일일 회원(1시간권)</option><option id="BIL_016" value="2000" etc1="2000" etc2="2000">일일 회원(2시간권)</option></select>
	                </div>
	                
	            	<div className={`${style.pay_input} ${style.w40}`}><input type="text" className={style.w80} id="TICKET_PRICE" name="TICKET_PRICE" value="1000" readonly="readonly" /><span>원</span></div>
	            </div>
	            
	            
	            <div className={`${style.pay_box} ${style.ml20i} ${style.line}`}>
    <div style={{lineHeight: "200%"}}>
		<p>결제<span style={{color: "red",display: "none",fontSize:"12px",fontWeight:"bold"}} id="zeroPayGuide"></span></p>
		<div className={`${style.radio} ${style.w30}`} id="zeropayRadio"><input type="radio" id="radio5" name="radioPayMethod" value="BIM_012" onclick="radioChk(5)"/><label htmlFor="radio5"><span></span><strong style={{fontSize: "14px"}}><font color="red">제로페이</font></strong></label></div>
		<div className={`${style.radio} ${style.w30}`} ><input type="radio" id="radio2" name="radioPayMethod" value="SC0010" onclick="radioChk(2)"/><label htmlFor="radio2"><span></span>신용/체크카드</label></div>
		<div className={`${style.radio} ${style.w30}`} ><input type="radio" id="radio3" name="radioPayMethod" onclick="radioChk(3)" value="BIM_007"/><label htmlFor="radio3"><span></span><img src="/images/payco.png" alt="payco" style={{height:"13px"}}/></label></div>
		<div className={`${style.radio} ${style.w30}`} ><input type="radio" id="radio4" name="radioPayMethod" onclick="radioChk(4)" value="BIM_010"/><label htmlFor="radio4"><span></span><img src="/images/ico_kakaopay.gif" alt="kakaopay" style={{marginTop:"-3px", verticalAligh:"top"}}/></label></div>
		{/* <!-- 네이버 페이 일시 중단 --> */}
		{/* <!-- <div className={style.radio w30" id="naverpayRadio"  style="display: none"><input type="radio" id="radio6" name="radioPayMethod" onclick='radioChk(6)' value="BIM_015" /><label htmlFor="radio6"><span></span><img src="/images/ico_naverpay.png" alt="naverpay" style="height:20px"></label></div> --> */}
		<div className={style.radio}><input type="radio" id="radio1" name="radioPayMethod" value="SC0060" onclick="radioChk(1)" /><label htmlFor="radio1"><span></span>휴대폰결제</label></div>
	</div>
	{/* <!--payco--> */}
	<div id="paycoInfo" className={style.payco_box} style={{display: "none"}}>
		<ul>
			<li>PAYCO는 온/오프라인 쇼핑은 물론 송금, 멤버십 적립까지 가능한 통합 서비스입니다.</li>
			<li>휴대폰과 카드 명의자가 동일해야 결제 가능하며, 결제금액 제한은 없습니다.</li>
			<li>지원카드 : 모든 신용/체크카드 결제 가능</li>
		</ul>
	</div>
	{/* <!--payco--> */}

	{/* <!--kakao--> */}
	<div id="kakaoInfo" className={style.payco_box} style={{display: "none"}}>
		<ul>
		    <li>카카오톡에서 신용/체크카드 연결하고, 결제도 지문으로 쉽고 편리하게 이용하세요!</li>
		    <li>본인명의 스마트폰에서 본인명의 카드 등록 후 사용 가능</li>
		    <li>(카드등록 : 카카오톡 &gt; 더보기 &gt; 카카오페이 &gt; 카드)</li>
		    <li>30만원 이상 결제, ARS 추가 인증 필요</li>
		    <li>이용가능 카드사 : 모든 국내 신용/체크카드</li>
		    <li>카카오페이는 무이자할부 및 제휴카드 혜택 내용과 관계가 없으며, 자세한 사항은 카카오페이 공지사항에서 확인하실 수 있습니다.</li>
		</ul>
	</div>
	{/* <!--kakao--> */}

	{/* <!--zeropay--> */}
	<div id="zeropayInfo" className={style.payco_box} style={{display: "none", margin: "0 0 20px 0"}}>
		<ul>
			<li>제로페이를 이용하시면 우리나라 소상공인에게 힘이 됩니다!!</li>
			<li style={{fontWeight:"bold",fontSize:"13px"}}>제로페이 결제시 필수 확인사항</li>
			<li><span style={{color: "red",fontWeight:"bold"}}>① 따릉이 앱 최신버전 다운로드</span></li>
			<li><span style={{color: "red",fontWeight:"bold"}}>②<a href="/customer/notice/noticeView.do?noticeSeq=1852" style={{color:"blue",textDecoration:"underline"}}> 참여결제사</a>(은행권, 간편결제사)앱 최신 버전 다운로드</span></li>
			<li style={{fontWeight:"bold"}}>③ 추가요금 결제를 위해 결제수단 등록을 꼭 확인해주세요.<br/>(따릉이 앱 나의공간 &gt; 결제관리 &gt; 추가과금 수단변경)</li>
			<li>④  기타 제로페이 결제<a href="/customer/notice/noticeView.do?noticeSeq=1851" style={{color:"blue",textDecoration:"underline"}}>사용법</a> 및 관련<a href="/customer/notice/noticeView.do?noticeSeq=1852" style={{color:"blue",textDecoration:"underline"}}>연락처</a> 확인</li>
		</ul>
	</div>

	{/* <!-- <div id="naverpayInfo" className={style.payco_box" style="display: none; margin: 0 0 20px 0;">
		<ul>
			<li>네이버페이는 네이버ID로 신용카드 또는 은행계좌 정보를 등록하여 결제할 수 있는 간편결제 서비스입니다.</li>
			<li>주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사 정책에 따라 변경될 수 있습니다.</li>
			<li>지원 가능 결제수단 : 네이버페이 결제창 내 노출되는 모든 카드/계좌</li>
			<li>네이버페이를 통해 결제를 진행하게 되면 정기/반복 결제가 등록됩니다.</li>
			<li>이용권 초과 사용 시 자동 결제가 되기 위한 수단으로 사용되며 이용권이 종료되면 해당 정기 반복 결제는 사용되지 않습니다.</li> 
			<li>신규 서비스를 이용할 때 네이버페이 결제를 사용하게 되면 해지 알림과 신규 등록 알림을 동시에 받으실 수 있습니다.</li>	
		</ul>
	</div> -->  */}
				</div>
            
            <div className={`${style.pay_box} ${style.total}`} style={{margin: "10px 15px 0 15px"}}>
            	<p>결제금액</p><input type="text" className={style.w80} id="TOT_AMOUNT" name="TOT_AMOUNT" value="0" readonly="readonly"/><span>원</span>
            </div>
            <div id="totMMobileDiv" className={`${style.pay_box} ${style.total}`} style={{margin:"0px 15px", display:"none"}}>
            	<p style={{fontSize:"10px", color:"#464646"}}>자전거 인증제 합격 할인</p>
				<input type="text" className={style.w80} id="totMMobile" name="totMMobile" value="0" readonly="readonly" style={{width:"70%", fontSize:"13px", color:"#000"}}/>
				<span style={{fontSize:"13px"}}>원</span>
          	 </div>
            
            <ul className={style.ticket_use}>
				<li>이용권<span id="totM">원</span></li>
				</ul>
			

            <div className={style.check}><input type="checkbox" id="agree" name="agree" value="General"/><label htmlFor="agree"><span></span>&nbsp;&nbsp;&nbsp;추가요금자동결제,환불규정, <a href="/app/use/moveUseMenuClauseInfo.do">이용약관</a>에 동의하며 결제를 진행합니다.<a href="/info/infoCoupon.do">이용권 사용안내</a></label></div>
            
            <div className={style.check2} style={{letterSpacing:"-1px",lineHeight: "normal",textAlign: "left",margin: "0 15px",marginBottom: "20px"}}><input type="checkbox" id="agree2" name="agree2" value="General" /><label htmlFor="agree2"><span></span>&nbsp;&nbsp;&nbsp;만 13세 미만의 미성년자가 서비스를 이용하는 경우, 사고 발생 시 보험 적용을 받을 수 없는 등의 불이익을 받으실 수 있습니다. (만 15세 미만의 경우 상법 제732조에 의거하여 사망 보험 적용 불가)</label></div>
             
            <div className={style.btn}><a href="javascript:dayTicket.doPay();">결제하기</a></div>
        </div>
        </div>
        </div>
    </div>
</div>
    
    

		</>);
}


