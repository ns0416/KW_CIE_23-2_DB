import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './passwordChange.module.css';
import Header from '../../header.js';

export default function PasswordChange() {
    return (
        <>
	<div className={`${style.wrap} ${style.my}`} id="sub">
    <div className={style.header_wrap}>
        <div className={style.header}>
        	<div className={style.top}>
				<div className={style.m_sub_header_wrap}>
					<div className={style.m_sub_header}>
						<button className={style.back}></button>
						<button className={style.close}></button>
						<span id="title">비밀번호 변경</span>
					</div>
				</div>
			</div>
			<div className={style.logo}><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이"/></a></div>
        </div>
    </div>
    <div className={style.container} style={{marginTop:"40px"}}>
			<div className={style.content}>
				<div className={style.my}>
					<div className={style.top}>
						<h3>비밀번호 변경</h3> 
					</div>
					<form id="frm">   
						<div className={`${style.my_box} ${style.noline}`}>
							<input type="hidden" name="userId" value="" />
							<table>
								<tbody><tr id="comPw" style={{}}>
									<th className={style.first}>기존 비밀번호</th>
									<td className={style.first}><div className={`style.pay_input ${style.w45}`}><input type="password" className={style.w100} id="pw" name="commonPw" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" /></div></td>
								</tr>
								<tr>
									<th>새 비밀번호</th>
									<td>
										<div className={`${style.pay_input} ${style.w45}`}><input type="password" className={style.w100} id="npw" name="userPw" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" /></div>
										<p>개인정보 보호 정책에 따라 영문+숫자+특수문자 조합 8~12자리 입력 (특수문자는 !@#$%^&amp;*?~외 사용불가)</p>
									</td>
								</tr>
								<tr>
									<th>새 비밀번호<br/>확인</th>
									<td>
										<div className={`${style.pay_input} ${style.w45}`}><input type="password" className={style.w100} id="npwc" name="userPwOk" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" /></div>
									</td>
								</tr>
							</tbody></table>
						</div> 
						<div className={style.btns}><a href="#" className={style.modify} id="modify">수정</a> <a href="#" className={style.del} id="cancel">취소</a></div>
					</form>	
				</div>
			</div>
		</div>
	</div>

        </>
    );
}
