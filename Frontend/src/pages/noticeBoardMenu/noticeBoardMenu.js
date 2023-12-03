import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './noticeBoardMenu.module.css';
import Header from '../../header.js';

export default function NoticeBoardMenu() {
    return (
    <>
    <div className={`${style.wrap} ${style.myleft}`} id="sub">
    <div className={style.header_wrap}>

    </div>
</div>

<div className={style.container}>
	<div className={style.content}>
		<div className="cbp-spmenu">
			<div id="waitPage" style={{zIndex: 98, display:"none"}}>
				
<form id="listForm" method="POST" className={`repeater form-horizontal`} action="">
</form>
<div className="containerT">
    <div className={style.row} id="isWaitPage" style={{display:"none"}}>
	<div className="mobile-size" style={{border: "4px solid #033074",width:"100%",height:"auto",overflow:"hidden"}}>
        <div className="col-md-12" style={{width:"100%",height:"auto",background:"#fff",border: "8px solid #d0dcea"}}>
		<div className={style.main_logo} style={{position:"absolute",right:"2%",top:"12px"}}> <img src="/images/logo2.png" style={{width:"90px",height:"auto",marginTop: "10px"}} /> </div>
        	<div className="text-center" style={{paddingTop:"20px"}}></div>
            <div className={`text-center m-b-md`}>
                <h3 style={{fontWeight:"bold",fontSize:"22px",color:"#033074",marginTop:"5px",letterSpacing: "-0.04em",textAlign: "center"}}>서비스 접속 대기 중입니다. </h3>
            </div>
		<div id="loading3" style={{marginBottom:"30px"}}>
                                                <div className={style.line1}></div><div className={style.line2}></div><div className={style.line3}></div><div className={style.line4}></div>
                                                <div className={style.line5}></div><div className={style.line6}></div><div className={style.line7}></div><div className={style.line8}></div>
                                                <div className={style.line9}></div><div className={style.line10}></div><div className={style.line11}></div><div className={style.line12}></div>
                                                <div className={style.line13}></div><div className={style.line14}></div><div className={style.line15}></div><div className={style.line16}></div>
                                        </div>

            <div className={style.hpanel} style={{width:"88%",margin: "0 auto",background:"#d0dcea",padding:" 14px 0 14px 0",marginTop:"20px"}}>
                <div className={`panel-bodyT`} style={{border:"none"}}>
			<div id="wait_value">고객님의 대기열을 확인중입니다.</div>
                    
                   <div className={style.sub_text} style={{letterSpacing:" -0.04em",fontWeight:"600",fontSize:"0.8em",color:"#1e1e1e",padding:" 0 20px 0 20px"}}>현재 접속 사용자가 많아 대기중이며, 잠시만 기다리시면 자동 접속됩니다.</div>
		
                </div>
            </div>
		<div style={{textAlign:"right",padding:"10px 10px 6px",fontSize:"10px",opacity:"0.8"}}>TRACER - Copyright 2018-2020 WELLCONN Corp.</div>
        </div>
	</div>
    </div>


	<div className={style.row} id="isRejectPage" style={{display:"none"}}>
	<div className={`mobile-size`} style={{border:" 4px solid #033074",width:"100%",height:"auto",overflow:"hidden"}}>
        <div className={`col-md-12`} style={{width:"100%",background:"#fff",border:" 8px solid #d0dcea"}}>
		<div className={style.main_logo} style={{position:"absolute",right:"2%",top:"12px"}}> <img src="/images/logo2.png" style={{width:"90px",height:"auto",marginTop:" 10px"}} /> </div>
        	<div className={`text-center`} style={{paddingTop:"20px"}}></div>
            <div className={`text-center m-b-md`}>
                <h3 style={{fontWeight:"bold",fontSize:"22px",color:"#033074",marginTop:"5px",letterSpacing:" -0.04em",textAlign:"center"}}>서비스 접속이 차단 되었습니다. </h3>
            </div>
            <div className={style.hpanel} style={{width:"88%",margin:" 0 auto",background:"#d0dcea",padding:" 16px 0 16px 0",marginTop:"0px"}}>
                <div className={`panel-bodyT`} style={{border:"none"}}>
			<div id="wait_value2"></div>
                   <div className={style.sub_text} style={{letterSpacing:" -0.04em",fontWeight:"600",fontSize:"1.0em",color:"#1e1e1e"}}>현재 접속하신 아이피에서는<br/> 접속이 불가능합니다.</div>
                </div>
            </div>
		<div style={{textAlign:"right",padding:"16px 10px 6px",fontSize:"10px",opacity:"0.8"}}>TRACER - Copyright 2018-2020  WELLCONN Corp.</div>
        </div>
	</div>
    </div>

	<div className={style.row} id="isNotUse" style={{display:"none"}}>
	<div className={`mobile-size`} style={{border:" 4px solid #033074",width:"100%",height:"auto",overflow:"hidden"}}>
        <div className={`col-md-12`} style={{width:"100%",background:"#fff",border:" 8px solid #d0dcea"}}>
		<div className={style.main_logo} style={{position:"absolute",right:"2%",top:"12px"}}> <img src="/images/logo2.png" style={{width:"90px",height:"auto",marginTop:" 10px"}} /> </div>
        	<div className={`text-center`} style={{paddingTop:"20px"}}></div>
            <div className={`text-center m-b-md`}>
                <h3 style={{fontWeight:"bold",fontSize:"22px",color:"#033074",marginTop:"5px",letterSpacing:" -0.04em",textAlign:" center"}}>서비스 접속이 불가합니다. </h3>
            </div>
            <div className={style.hpanel} style={{width:"88%",margin:" 0 auto",background:"#d0dcea",padding:" 16px 0 16px 0",marginTop:"0px"}}>
                <div className={`panel-bodyT`} style={{border:"none"}}>
			<div id="wait_value2"></div>
                   <div className={style.sub_text} style={{letterSpacing:" -0.04em",fontWeight:"600",fontSize:"1.0em",color:"#1e1e1e"}}>접속량이 많아 접속이 불가능합니다.<br/> 잠시 후 다시 접속해주세요</div>
                </div>
            </div>
		<div style={{textAlign:"right",padding:"16px 10px 6px",fontSize:"10px",opacity:"0.8"}}>TRACER - Copyright 2018-2020  WELLCONN Corp.</div>
        </div>
	</div>
    </div>


</div>
<div id="waitBackground"></div>


</div>
			<div className={style.my_menu}>
				<div className={style.head}>
					<button className={style.close}></button>
					<a className={style.backBtn} id="backBtn" style={{display:" block"}}></a>
					<dl className={style.profile}>
						<dd className={style.top_img}><img src="img/mypage_top_pic.png" alt="" /></dd>
						<dd className={style.user_title}>USER</dd>
						<dd className={style.name}>
							<span>vlvksbdof12</span><span style={{display:"none"}}>temp</span>
								</dd>
					</dl>
				</div>
				<form name="leftForm" method="POST">
					<input type="hidden" id="ostype" name="appOsType" value="web" /> 
					<input type="hidden" id="usrDeviceId" name="usrDeviceId" /> 
				</form>
				
				
				<div id="help_div" style={{display:" block"}}>
					<div className={`${style.help_desk} ${style.help}`}>
						따릉이&nbsp;공지사항 및 게시판<span className={style.tel}>1599-0120</span>
					</div>
				
					<ul className={style.help}>
						<a href="/customer/notice/noticeList.do"><li>공지사항</li></a>
						<a href="/app/use/moveUseMenuInsurance.do"><li>보험안내</li></a>
						<a href="/customer/faq/faqList.do"><li>안전수칙</li></a>
						<a href="/customer/opinionBoard/opinionBoardList.do"><li>문의/FAQ</li></a>
						<a href="javascript:goCateList('FAQ_005');"><li>대여소 설치건의</li></a> 
						<a href="/app/use/moveUseMenuClauseInfo.do"><li>이용약관</li></a>
					</ul>
				</div>
				
				<a href="/info/infoReg.do"> 
					<div className={style.bike_guide}>
						따릉이&nbsp;이용안내</div>
				</a>

				<div className={style.help_desk} id="help_info" style={{display:" none"}}>
					따릉이&nbsp;공지사항 및 게시판</div>
				
				<div className={style.logout_n}>
							<span className={style.pic}>
								<a href="/logout.do">
									로그아웃</a>
								<span className={style.tel}>
									☎1599-0120</span>
							</span>
						</div>             
			</div>
		</div>
	</div>
</div>
<form id="frm">
            	<input type="hidden" id="cateCD" name="cateCD" value="" />
            </form>

	
        </>
    );
}

// export default myLeftPage;