import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './joinpage1.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function Joinpage1()
{
    const navigate = useNavigate();

    const [email,setemail] = React.useState("");
    const emailHandler = e=>{setemail(e.target.value);}
    
    //const [counter, setcounter] = React.useState(300);
    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(59);

    function Submit_handler() { //인증 메일 발송 함수
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/sendAuthMail", {email:email})
        .then((res) => {
            if(res.data.result == "success")
            {
                alert(email+"에서 인증번호를 확인해 주세요")
                //카운터 활성화
            }
            else{
                alert("인증번호 전송 실패")
            }
        })
        .catch((err) => {
            console.log(err)
        })

        // 카운터 활성화 part
        setFormShow(false);
        setMinutes(4);
        setSeconds(59);

    }
    

    const [form_show, setFormShow] = useState(true);
    const [authcode,setauthcode] = React.useState();
    const inputHandler = (e) => {setauthcode(e.target.value);} // 인증번호 input 입력

    function Authorize () { // 인증번호 검증
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/checkAuthCode", {authcode:authcode})
        .then((res)=>{
            if(res.data.result == "success"){
                navigate('/joinpage2',{ state: email })
            }
            else{
                alert("올바른 인증번호를 입력해 주세요")
            }
        })
        .catch((err)=>{console.log(err)})
    }

    // React.useEffect(() => {console.log(email)},[email])
    useEffect(() => {
        if(form_show === true){
            return
        }
        const countdown = setInterval(() => {
           if(parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds)-1);
           }
           if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
              clearInterval(countdown);
            } else {
              setMinutes(parseInt(minutes) - 1);
              setSeconds(59);
            }
          }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes,seconds,form_show]);
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
                {form_show?
                <h2>이메일을 입력해주세요.</h2>:
                <h2>인증번호를 입력해주세요.</h2>
                }
            </div>
            {
                form_show ?
            <form id="frm">
                <div className={style.phone}>
                <label><input type="email" id="email" pattern=".+@example\.com" size="30" value={email} onChange={emailHandler} required /></label>
                    {/* <label><input title="휴대번호 첫번째 입력" name="userMob1" type="number"  style={{width:"50px"}} className={style.vm} maxlength="3" min="0" max="9" /></label>
			    	<label><input title="휴대번호 두번째 입력" name="userMob2" type="number"  style={{width:"50px"}} className={style.vm} maxlength="4" min="0" max="9" /></label> - 
			    	<label><input title="휴대번호 세번째 입력" name="userMob3" type="number"  style={{width:"50px"}} className={style.vm} maxlength="4" min="0" max="9" /></label> */}

                </div>
            
                {/* <div className={style.check}><input type="checkbox" name="check1" id="check1"/><label for="check1"><span></span>만 14세 이상입니다.</label></div>
                <p className={style.info}>회원가입은 만 14세 이상만 가능합니다.<br/> 허위사항을 기재할 시 불이익을 받으실 수 있습니다.<br/> 
			    만 14세 미만의 경우 서울 자전거 규정에 따라 서비스를 이용할 수 없습니다.</p> */}
            	<div className={style.btn} id="submit_button"><a onClick={Submit_handler}>다음</a></div>
                {/* <div className={style.btn}><button type='button' onClick={}>다음</button></div> */}
                {/* <button className={style.btn}>다음</button> */}
			</form>
            :
            <>
            <div className={style.phone}>
                  <input type="number" id="auth_code" size="30" value={authcode} onChange={inputHandler} required />  
            </div>
            <div style={{textAlign: "center", color: "red", fontWeight: "bold", marginTop: "10px"}}> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
            <div style={{textAlign: "center", color: "green", fontWeight: "bold", marginTop: "10px", cursor: "pointer"}} onClick={Submit_handler}> 인증번호 재발송 &gt;</div>
            <div className={style.btn} id="submit_button"><a onClick={Authorize}>다음</a></div>
            </>
            }
        </div>

        
        </div>
    </div>
        </>
    )
}