import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './ChangeEmail1.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function ChangeEmail1()
{
    const navigate = useNavigate();

    const [email,setemail] = React.useState("");
    const emailHandler = e=>{setemail(e.target.value);}
    
    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(59);

    function Submit_handler() { //인증 메일 발송 함수
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/sendAuthMail", {email:email})
        .then((res) => {
            if(res.data.result == "success")
            {
                alert(email+"에서 인증번호를 확인해 주세요")
                // 카운터 활성화 part
                setFormShow(false);
                setMinutes(4);
                setSeconds(59);
            }
            else{
                alert("인증번호 전송 실패")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
    

    const [form_show, setFormShow] = useState(true);
    const [authcode,setauthcode] = React.useState();
    const inputHandler = (e) => {setauthcode(e.target.value);} // 인증번호 input 입력

    function Authorize () { // 인증번호 검증
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/checkAuthCode", {authcode:authcode})
        .then((res)=>{
            if(res.data.result == "success"){
                updateEmail();
            }
            else{
                alert("올바른 인증번호를 입력해 주세요")
            }
        })
        .catch((err)=>{console.log(err)})
    }
    function updateEmail () { // 이메일변경
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/updateEmail", {authcode:authcode})
        .then((res)=>{
            if(res.data.result == "success"){
                alert("이메일이 변경되었습니다 :)");
                navigate('/memberInfoEdit')
            }
            else if(res.data.result == 'same_email'){
                alert("해당 이메일을 사용하는 계정이 이미 존재합니다.");
                navigate('/memberInfoEdit')
            }else{
                alert("이메일 변경 실패")
            }
        })
        .catch((err)=>{console.log(err)})
    }

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
        <Header title="이메일주소 변경"/>
        <div className={style.container} style={{marginTop:"10px"}}>
    	    <div className={style.content}>
                <div className={style.join}>
                    <div className={style.join_label}>
                        {form_show?
                        <h2>변경하실 이메일을 입력해주세요.</h2>:
                        <h2>인증번호를 입력해주세요.</h2>
                        }
                    </div>
                    {form_show ?
                    <form id="frm">
                        <div className={style.phone}>
                            <label><input type="email" id="email" pattern=".+@example\.com" size="30" value={email} onChange={emailHandler} required /></label>
                        </div>
                    	<div className={style.btn} id="submit_button"><a onClick={Submit_handler}>다음</a></div>
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