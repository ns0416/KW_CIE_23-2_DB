import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './memberInfoEdit.module.css';
import Header from '../../header.js';

export default function MemberInfoEdit() {
    return (
        <>
<div class={`${style.wrap} ${style.my}`} id="sub">
    <div class={style.header_wrap}>
        <div class={style.header}>
        	<div class={style.top}>
				<div class={style.m_sub_header_wrap}>
					<div class={style.m_sub_header}>
						<button class={style.back}></button>
						<button class={style.close}></button>
						<span id="title">개인정보수정</span>
					</div>
					
				</div>
			</div>
        </div>
		
    </div>
    <div class={style.container}>
		
					
<div class={style.content}>
<div class={style.my}>
				<p class={style.caption}>
					<img src="/images/ic_needs.gif" alt=""/>
					표시는 필수입력 사항입니다.</p>
				<form id="frm">
					<input type="hidden" name="sReserved1" value=""/>
					<input type="hidden" name="sReserved2" value=""/>
					<input type="hidden" name="sReserved3" value=""/>
					<input type="hidden" name="mobAgency"/>
					<input type="hidden" name="userMob1"/> 
					<input type="hidden" name="userMob2"/> 
					<input type="hidden" name="userMob3"/> 
					<input type="hidden" name="emailRecvYn"/>
					<div class={style.my_box}>
						<table>
							<colgroup>
								<col width="25%"/>
								<col width="75%"/>
							</colgroup>
							<tbody><tr>
								<th class={style.first}>아이디</th>
								<td class={style.first} style={{position:"relative"}}>
		                        <span style={{float: "left", lineHeight: "43px", position:"absolute", top:"50%", transform:"translateY(-50%)"}}>vlvksbdof12</span>
		                        </td>
							</tr>
							<tr>
								<th>비밀번호</th>
								<td>
									<button type="submit" formaction="/app/mybike/memberInfo/passwordChange.do">
										비밀번호 변경</button>
								</td>
							</tr>
							<tr>
								<th>이메일주소<img src="/images/ic_needs.gif" alt=""/></th>
								<td>
									<div class={`${style.pay_input} ${style.w25}`}>
										<input title="이메일주소 첫번째 입력" type="text" class={style.w100} id="mmemail" name="userEmail1" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"/>
									</div>
									<span>@</span>
									<div class={`${style.pay_input} ${style.w25}`}>
										<input title="이메일주소 두번째 입력" type="text" class={style.w10} id="" name="userEmail2" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" />
									</div>
									<select name="userEmailSlt" style={{width: "30%"}}>
										<option value="">
											직접입력</option>
										<option value="daum.net">daum.net</option>
										<option value="empal.com">empal.com</option>
										<option value="gmail.com">gmail.com</option>
										<option value="hanmail.net">hanmail.net</option>
										<option value="hotmail.com">hotmail.com</option>
										<option value="naver.com">naver.com</option>
										<option value="nate.com">nate.com</option>
										<option value="yahoo.co.kr">yahoo.co.kr</option>
									</select>
									<div class={`${style.check} ${style.agree}`}>
										<input type="checkbox" id="emailDenyYn" name="emailDenyYn"/>
										<label for="emailDenyYn">
											<span></span>
											이메일 수신거부 </label>
									</div>
								</td>
							</tr>
							<tr>
								<th>휴대전화번호<img src="/images/ic_needs.gif" alt=""/></th>
								<td>
									<span id="mobInfo">010-5662-7346&nbsp;</span><br/>
									<button type="button" id="mobNoUpdate" style={{marginTop: "5px"}}>
										휴대 전화번호 변경 </button>
									<button type="button" id="mobLostReport">휴대폰 분실 신청 </button>
										</td>
							</tr>
							<tr id="parentInfo" style={{display: "none"}}>
								<th>부모<br/>휴대전화번호<img src="/images/ic_needs.gif" alt=""/></th>
								<td>
									<span id="mobInfo">&nbsp;</span><br/>
									<button type="button" onclick="guardianCertify();" style={{marginTop: "5px"}}>
										휴대 전화번호 변경 </button>
								</td>
							</tr>
						<tr>
								<th>체중</th>
								<td>
									<div class={`${style.pay_input} ${style.w30}`}>
										<input type="text" class={style.w100} id="memkg" name="userWeight" placeholder="65" maxLength="3" /*onInput={maxLengthCheck(this)}*/ style={{width:"100%"}} value="60" /*onKeyup={noSpaceForm(this)} onChange={noSpaceForm(this)}*//>
									</div>
									kg
									<p>운동량 계산을 위해 필요한 정보입니다.<br/>미기재시 65kg으로 계산됩니다.</p>
								</td>
							</tr>
						</tbody></table>
					</div> 
					<div class={style.btn}>
						<a href="#" id="modify">
							수정</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
        </>
    );
}
