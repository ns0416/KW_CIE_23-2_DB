import React from 'react';
import style from './joinpage.module.css';
import Header from '../../header.js';

export default function Joinpage()
{
	return (
	<>
	<Header title="회원가입"/>
	<div className={style.container}>
	<div className={style.content}>

	<div className={style.join}>            
		
		<p className={style.optin}>필수 입력 항목입니다.</p>
		<form id="frm">
		<input type="hidden" name="dupChkResult"/>
		<input type="hidden" name="emailRecvYn"/>
		<input type="hidden" name="sDupInfo"/>
		<input type="hidden" name="certifyType"/>
		<input type="hidden" name="memberType"/>
		<input type="hidden" name="mobAgency"/>
		<input type="hidden" name="userGender"/>
		<input type="hidden" name="userMob1" value="010"/>
		<input type="hidden" name="userMob2" value="3057"/>
		<input type="hidden" name="userMob3" value="3187"/>
		<input type="hidden" name="snsType" value=""/>
		<input type="hidden" name="snsId" value=""/>
		<input type="hidden" name="accessToken" value=""/>
		<input type="hidden" name="userEmail" value=""/>
		<input type="hidden" name="infoAgree" value="Y"/>
		<input type="hidden" name="infoAgree2" value="N"/>
		<input type="hidden" name="certifyYn" value=""/>
		<input type="hidden" name="userBirth" value=""/>
		<input type="hidden" name="parentGender" value=""/>
		<input type="hidden" name="parentBirth" value=""/>
		<input type="hidden" name="parentMob1" value=""/>
		<input type="hidden" name="parentMob2" value=""/>
		<input type="hidden" name="parentMob3" value=""/>

		<div className={style.id}>
			<p>아이디</p>
			<input type="text" id="userId" name="userId" placeholder="영문, 숫자 6~12자리"  onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"/><button className={style.id_check} id="idDupChk">중복확인</button>
		</div>
		
		<div className={style.pw}>
			<p>비밀번호</p>
			<input type="password" id="mmpw" name="userPw" placeholder="영문, 숫자, 특수문자(!@#$^&*?~)조합 8~12자리" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" />
		</div>
			
		<div className={style.pw_check}>
			<p>비밀번호 확인</p>
			<input type="password" id="mmpwok" name="userPwOk" placeholder="비밀번호를 한번 더 입력하여 확인" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" />
		</div>
		<div className={style.phoneb}>
			<div className={style.inline_div}>
				<p>이름</p>
				<div class="w40" style={{margin: "20px 0 40px 0", display: "inline-block"}} >
					<input type="text" id="userName" name="userName" maxLength="30" style={{borderBottom: "1px #222 solid", }}onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"/>
				</div>
			</div>
			<div className={style.inline_div}>
				<p>생년</p>
				<div class="w40" style={{margin: "20px 0 40px 0", display: "inline-block"}} >
				{/* style={{float: "right"}} */}
					<select id="birthYear" name="birthYear">
					{/* style={{display: "block"}} */}
						<option>생년</option>
						<option></option>
						<option></option>
					</select>
				</div>
			</div>
			<div className={style.inline_div}>
				<p>성별</p>
					{/* <div class="radio_box" style="float:right;"> */}
						<span class="radiobox"><input type="radio" name="mmgender" id="male" value="male" /><label for="male"><span></span> 남</label></span>
						<span class="radiobox ml10"><input type="radio" name="mmgender" id="female" value="female" /><label for="female"><span></span> 여</label></span>
					{/* </div> */}
			</div>
		</div>

		{/* <div className={style.phone}>
			
		</div> */}

		<div className={style.phone}>
			<p>휴대폰 번호</p>
            <label><input title="휴대번호 첫번째 입력" name="userMob1" id="userMob1" type="number"  style={{width: "50px"}} class="vm center" maxLength="3" onInput={maxLengthCheck(this)}/></label> - 
		    <label><input title="휴대번호 두번째 입력" name="userMob2" id="userMob2" type="number"  style={{width: "50px"}} class="vm center" maxLength="4" onInput={maxLengthCheck(this)}/></label> - 
		    <label><input title="휴대번호 세번째 입력" name="userMob3" id="userMob3" type="number"  style={{width: "50px"}} class="vm center" maxLength="4" onInput={maxLengthCheck(this)}/></label>
        </div>

		<div className={style.phone}>
			
		</div>

		


		<div className={style.email}>
			<p>이메일</p>
			<input type="text" id="mmemail" name="userEmail1" placeholder="ID" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" />
			<span>@</span>
			<input type="text" id="userEmail2" name="userEmail2" placeholder="email . com"  onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" />
			<div className={style.sel_box}>
				<select name="userEmailSlt">
					<option value="">직접 입력</option>
					<option value="daum.net">daum.net</option>
					<option value="empal.com">empal.com</option>
					<option value="gmail.com">gmail.com</option>
					<option value="hanmail.net">hanmail.net</option>
					<option value="hotmail.com">hotmail.com</option>
					<option value="naver.com">naver.com</option>
					<option value="nate.com">nate.com</option>
					<option value="yahoo.co.kr">yahoo.co.kr</option>
				</select>
			</div>
		</div>
		<div className={style.check}><input type="checkbox" name="emailDenyYn" id="emailDenyYn" /><label htmlFor="emailDenyYn"><span></span>이메일 수신거부</label></div>
		
		<p className={style.info}>단, 회원의 서비스 이용과 관련한 권리 및 의무 등에 관한 사항에 대해 변경될 경우 통지 <br />의무사항에 따라 수신 동의 여부와 무관하게 메일이 발송될 수 있음을 참고해 주시기 바랍니다.</p>
		 
	   <div className={style.btn} id="join"><a href="#">다음</a></div>
	   
	   </form>

	</div>
	</div>
</div>
</>);
}

