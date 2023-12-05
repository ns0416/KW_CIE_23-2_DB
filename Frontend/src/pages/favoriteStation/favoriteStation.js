import style from './favoriteStation.module.css';
import React from 'react';


export default function FavoriteStation() {
	return (
		<>
<div className={style.wrap} id="sub">
	{/* <!--웹 : 헤더추가--> */}
    <div className={style.header_wrap}>
        <div className={style.header}>
        	<div className={style.top}>
				<div className={style.m_sub_header_wrap}>
					<div className={style.m_sub_header}>
						<button className={style.back}></button>
						<button className={style.close}></button>
						<span id="title">즐겨찾는 대여소
                        {/* <!-- 즐겨찾는 대여소 --> */}
                         </span>
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
        {/* <!-- <div className="bike_tap">
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
    </div>
<form id="frm"></form>
{/* <!--검색-->     */}
<form action="/app/mybike/favoriteStation.do" className={style.fa_search} id="search" role="search">
	<select id="searchParameter" name="searchParameter">
		<option value="stationName">대여소명,번호</option>
	</select>
	{/* <!-- <script>$("select").styledSelect();</script> --> */}
	<fieldset className={style.fld_sch}>
		<legend className={style.screen_out}>검색어 입력폼</legend>
		<div className={style.fa_box_search}>                    
			<input type="search" id="searchValue" value="" name="searchValue" title="검색어 입력" placeholder="원하시는 지역이 어디신가요?" />
			<button onclick="searchStation(); return false;">
                {/* <span className={style.noview}>검색</span> */}
                </button>
		</div>
	</fieldset>
</form>
{/* <!--검색--> */}
   
<div className={style.container}>
	<div className={style.content}>
		<div className={style.favorite} id="favoriteList">
			<div id="progress" style={{display: "none"}}>
				<img src="/img/loding.gif" className={style.lazyload} />
				<p id="rentBikeText">대여 진행중</p>
			</div>
			<div style={{position: "fixed", bottom: "145px", top: "90px", width: "100%", overflow:"scroll"}}>
				<h1>즐겨찾는 대여소</h1>
				<ul>
					<li>
							<div className={style.place} style={{width:"200px", textOverflow: "ellipsis",  overflow: "hidden", whiteSpace: "nowrap"}}>
								<strong><a href="">540. 군자역 7번출구 베스트샵 앞</a></strong></div>
							<div className={style.bike}>일반 / 새싹<p>19 / 0</p></div>
							<button className={style.sclose} onclick="delFavoriteFnc('993737')"><span>&nbsp;</span></button>
						</li>
					</ul>
			</div>
		</div>
	</div>
</div>
<div className={style.favorite_bottom}> 
	<div className={style.fa_check}>
		<ul> 
			<li> 
				<input type="radio" name="mainType" id="main_text" value="text" />
				<label for="main_text" id="label_text"><span></span>즐겨찾기 화면을 메인으로 설정하기</label> 
			</li>
			<li>  
				<input type="radio" name="mainType" id="main_map" value="map" />
				<label for="main_map" id="label_map"><span></span>지도화면을 메인으로 설정하기</label>
			</li>
		</ul>
	</div>
	{/* <!-- //fa_check --> */}
{/* <!--	<a href="javascript:goQrRent();">
		<div className="bottom main favorite"> 
			<img src="../../img/bottom_pic.png" alt="" />대여하기
		</div>
	</a>  --> */}
	{/* <!-- 모바일 하단바 end --> */}
</div> 
<form id="QRfrm">
    <input type="hidden" id="voucherSeq" name="voucherSeq" value="" />
    <input type="hidden" id="rentType" name="rentType" value="" />
    <input type="hidden" id="deviceId" name="deviceId" value="" />
    <input type="hidden" id="bikeId" name="bikeId" value="" />
    <input type="hidden" id="stationId" name="stationId" value="" />
    <input type="hidden" id="rackId" name="rackId" value="" />
    <input type="hidden" id="deviceName" name="deviceName" value="" />
    <input type="hidden" id="useTime" name="useTime" value="" />
    <input type="hidden" id="beaconId" name="beaconId" value="" />
    <input type="hidden" id="lat" name="lat" value="" />
    <input type="hidden" id="log" name="log" value="" />
</form>
{/* <!-- //.favorite_bottom --> */}

{/* <!--하단바--> */}
    <div className={style.bottom}>
        <dl> 
            <dd className={style.my}>
            	<button id="showLeft" className={style.my} style={{display: "none"}}></button>
            	<a href="/leftPage.do"></a>
                
            </dd>
            <dd className={style.bookmark}><a href="/app/mybike/favoriteStation.do"></a></dd>
            <dt className={style.guide}><a href="/info/infoReg.do"></a></dt>
            <dd className={style.qr}><a href="javascript:goQrRent();" id="qr"></a></dd>
            <dd className={style.ticket}><a href="/app/ticket/member/buyTicketList.do"></a></dd>
        </dl>
        
    </div>
    {/* <!--하단바--><!--footer--> */}


		</>);
}


