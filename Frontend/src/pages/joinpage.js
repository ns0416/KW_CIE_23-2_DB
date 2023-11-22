import React from 'react';
import style from './joinpage.module.css';

export default function Joinpage()
{
	return (
	<>
	<div className={style.header}>
		<div className={style.top}>
			<div className={style.m_sub_header_wrap}>
				<div className={style.m_sub_header}>
					<button className={style.back}></button>
					<button className={style.close}></button>
					<span id="title">회원가입</span>
				</div>
			</div>
		</div>
	</div>
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
		<div className={style.id}>
			<p>이름</p>
			<input type="text" id="userName" name="userName" maxlength="30" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"/>
		</div>

		<div className={style.email}>
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

