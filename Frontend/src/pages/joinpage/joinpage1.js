import React from 'react';
import style from './joinpage1.module.css';
import Header from '../../header.js';

export default function Joinpage1()
{
    return(
        <>
        <Header title="회원가입"/>
        <div className={style.container}>
    	<div className={style.content}>

        <div className={style.join}>
            {/* <div className={style.join_tab}>
            	<ul>
                <li><a href="#">약관동의</a></li>
                <li className={style.on}>본인인증</li><li><a href="#">정보입력</a></li>
                </ul>
            </div> */}
            
            
            <div className={style.join_label}>
                {/* <p><span>2</span></p> */}
                <h2>휴대전화번호를 입력해주세요.</h2>
            </div>
            
            <form id="frm">
                <div className={style.phone}>
                    <label><input title="휴대번호 첫번째 입력" name="userMob1" type="number"  style={{width:"50px"}} className={style.vm} maxlength="3" min="0" max="9" /></label> - 
			    	<label><input title="휴대번호 두번째 입력" name="userMob2" type="number"  style={{width:"50px"}} className={style.vm} maxlength="4" min="0" max="9" /></label> - 
			    	<label><input title="휴대번호 세번째 입력" name="userMob3" type="number"  style={{width:"50px"}} className={style.vm} maxlength="4" min="0" max="9" /></label>

                    <input name="snsType" type="hidden" value="" />
                    <input name="snsId" type="hidden" value="" />
                    <input name="accessToken" type="hidden" value="" />
                    <input name="userEmail" type="hidden" value=""/>
                    <input type="hidden" name="result" id="result" value="" />
			    	<input type="hidden" name="result" id="resultMessage" value="" />
			    	<input name="consentYn" type="hidden" value="N" />
			    	<input type="hidden" name="certifyYn" value=""/>
			    	<input type="hidden" name="infoAgree" value=""/>
			    	<input type="hidden" name="infoAgree2" value=""/>
                </div>
            
                {/* <div className={style.check}><input type="checkbox" name="check1" id="check1"/><label for="check1"><span></span>만 14세 이상입니다.</label></div>
                <p className={style.info}>회원가입은 만 14세 이상만 가능합니다.<br/> 허위사항을 기재할 시 불이익을 받으실 수 있습니다.<br/> 
			    만 14세 미만의 경우 서울 자전거 규정에 따라 서비스를 이용할 수 없습니다.</p> */}
            	<div className={style.btn} ><a href="#" id="consent">다음</a></div>
			</form>
        </div>

        
        </div>
    </div>
        </>
    )
}