import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './findpw.module.css';
import Header from '../header.js';

export default function Findpw()
{
    const navigate = useNavigate();
    const gohome =() => {
        navigate('/');
    }
    return (
        <>
        <div className={style.wrap} id="sub">
            <Header title="비밀번호 찾기"/>
            <div className={style.container}>
		        <div className={style.content}>
			        <div className={style.login}>
                        <form id="searchFrm">
                        <div className={style.id}>
            	            <input type="text" id="pwFindId" maxlength="20" name="pwFindId" placeholder="아이디" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" />
                        </div>

                        <h2>휴대전화번호를 입력해주세요.</h2>
                        
                        <div className={style.phone}>
                            <label><input title="휴대번호 첫번째 입력" name="userMob1" id="userMob1" type="number"  style={{width: "50px"}} class="vm center" maxlength="3" oninput="maxLengthCheck(this)"/></label> - 
			            	<label><input title="휴대번호 두번째 입력" name="userMob2" id="userMob2" type="number"  style={{width: "50px"}} class="vm center" maxlength="4" oninput="maxLengthCheck(this)"/></label> - 
			            	<label><input title="휴대번호 세번째 입력" name="userMob3" id="userMob3" type="number"  style={{width: "50px"}} class="vm center" maxlength="4" oninput="maxLengthCheck(this)"/></label>
                        </div>
                        <div className={style.btn} id="findPwBtn"><a href="#">비밀번호 찾기</a></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}