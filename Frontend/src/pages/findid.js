import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './findid.module.css';
import Header from '../header.js';

export default function Findid()
{
    return(
        <>
        <div className={style.wrap} id="sub">
            <Header title="아이디 찾기"/>
            <div className={style.container}>
		        <div className={style.content}>
			        <div className={style.login}>
                        <h2>휴대전화번호를 입력해주세요.</h2>
                        <form id="searchFrm">
                        <div className={style.phone}>
                            <label><input title="휴대번호 첫번째 입력" name="userMob1" id="userMob1" type="number"  style={{width: "50px"}} class="vm center" maxlength="3" oninput="maxLengthCheck(this)"/></label> - 
			            	<label><input title="휴대번호 두번째 입력" name="userMob2" id="userMob2" type="number"  style={{width: "50px"}} class="vm center" maxlength="4" oninput="maxLengthCheck(this)"/></label> - 
			            	<label><input title="휴대번호 세번째 입력" name="userMob3" id="userMob3" type="number"  style={{width: "50px"}} class="vm center" maxlength="4" oninput="maxLengthCheck(this)"/></label>
                        </div>
            
                        {/* <h2 id="sendMobText"><br/><br/></h2> */}
            
                        {/* <div id="sms_number" style={{display: "none"}}>
	                        <div class="phone">
	                            <input type="number" id="smsNumber" name="smsNumber" class="vm center"  maxlength="6" oninput="maxLengthCheck(this)" />
	                        </div>
	            
	                        <div class="count"> <span  id="countdown"></span> </div>
                        </div> */}

                        <div className={style.btn} id="memberSmsAuth"><a href="#">아이디 찾기</a></div>

			            <input type="hidden" name="userMob" id="userMob" value=""/>
			            <input type="hidden" name="userId" id="userId" value="" />
           	            <input type="hidden" name="authSmsHistSeq" value=""/>
           	            <input type="hidden" name="smsNo" value=""/>
			            <input type="hidden" name="serialNo" value="0" />
			            <input type="hidden" name="findType" value="id" />
			            </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}