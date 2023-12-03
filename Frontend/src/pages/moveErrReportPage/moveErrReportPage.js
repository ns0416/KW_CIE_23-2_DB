import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './moveErrReportPage.module.css';
import Header from '../../header.js';

export default function NeglectReportList() {


    return (
        <>
<body id="app" scroll="yes" className={style.ie8m}>
<div className={style.wrap}>   
	<div className={style.m_sub_header_wrap}>
		<div className={style.m_sub_header}>
			<button className={style.back}></button>
			<button className={style.close}></button>
			<h3>고장(장애)신고</h3>
		</div>
	
	</div>
	<div className={style.container}>
		<div className={style.content}>
			<div className={style.trouble}>
				<div className={style.top}>
					<h3>고장(장애)신고</h3>
					<button className={`${style.back} ${style.right}`}></button>
					<button className={style.close}></button>
				</div>
				<form id="frm">
					<input type="hidden" name="equipmentId" />
					<input type="hidden" name="equipmentClsCd" />
					<input type="hidden" name="faultContent" />
					<input type="hidden" name="fmtBikeNo" id="fmtBikeNo" />
					<input type="hidden" name="dupChkResult" />
				</form>
				<div className={style.my_box}>
					<table>
						<tbody><tr>
							<th className={style.first}>자전거 번호</th>
							<td className={style.first}>
								SPB-<div className={`${style.pay_input} ${style.w30}`}>
                                    <input type="number" className={style.w100} id="bikeNo" name="" maxlength="5" style={{height:"25px",width:"80px"}} oninput="maxLengthCheck(this)" onkeydown="javascript: return event.keyCode == 69 ? false : true" onblur="inBikeNumber()" /></div>
								<button onclick="goQrRent()">QR 스캔</button>
								&nbsp;<button className={style.id_check} id="bikeDupChk">중복확인</button>
							</td>
						</tr>
					</tbody></table>
				</div>
				<div className={style.inner}>
					<div className={style.bike} id="bikeImg">
						<ul>
							<li className={style.workstation}><a href="#" id="ELB_005" name="bikeBtn">단말기</a></li>
							<li className={style.saddle}><a href="#" id="ELB_003" name="bikeBtn">안장</a></li>
							<li className={style.tire}><a href="#" id="ELB_001" name="bikeBtn">타이어</a></li>
							<li className={style.pedal}><a href="#" id="ELB_004" name="bikeBtn">페달</a></li>
							<li className={style.chain}><a href="#" id="ELB_002" name="bikeBtn">체인</a></li>
						</ul>
					</div>
					<div className={style.btn_etc}><a href="#" id="ELB_006" name="bikeBtn">기타</a></div>
					<div className={style.register}>
						<textarea className={style.w100} id="content" style={{height:"100px"}} placeholder="신고내역을 입력해주세요."></textarea>
						<a href="reportBtn" id="reportBtn" className={style.btn}>등록</a>
					</div> 
				</div>
			</div>
			<div className={style.my}>
				<div className={style.go}><a href="/app/err/getErrReportList.do">고장(장애)신고내역 보기</a></div>
			</div>
		</div>
	</div>
</div>

</body>
        </>
    );
}

// export default myLeftPage",