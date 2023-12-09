import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import style from './findpw.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function Findpw()
{
    const navigate = useNavigate();
    const [email,setemail] = React.useState("");
    const emailHandler = e=>{setemail(e.target.value);}

    const [minutes, setMinutes] = useState(4);
    const [seconds, setSeconds] = useState(59);

    const [form_show, setFormShow] = useState(true);
    const [authcode,setauthcode] = React.useState();
    const inputHandler = (e) => {setauthcode(e.target.value);} // 인증번호 input 입력

    const [id,setid] = React.useState("");
    const idHandler = e=>{setid(e.target.value);}

    function Submit_handler() { //인증 메일 발송 함수
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/findPW", {id:id, email:email})
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
                alert("존재하지 않는 사용자입니다.")
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    function Authorize () { // 인증번호 검증
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/checkAuthCode", {authcode:authcode})
        .then((res)=>{
            if(res.data.result == "success"){
                navigate('/findpw2',{ state: email })
            }
            else{
                alert("올바른 인증번호를 입력해 주세요")
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

    
    
    return (
        <>
        <div className={style.wrap} id="sub">
            <Header title="비밀번호 찾기"/>
            {/* <div className={style.container}>
		        <div className={style.content}>
			        <div className={style.login}>
                        <form id="searchFrm">
                        <div className={style.id}>
                        <h2>아이디를 입력해주세요.</h2>
            	            <input type="text" id="pwFindId" maxLength="20" name="pwFindId" placeholder="아이디" onChange={idHandler} />
                        </div>

                        
                        
                        <div className={style.id}>
                            <h2>이메일을 입력해주세요.</h2>
                            <label><input type="email" id="email" placeholder="이메일" pattern=".+@example\.com" size="30" value={email} onChange={emailHandler} required /></label>
                        </div>
            	        <div className={style.btn} id="submit_button"><a onClick={Submit_handler}>다음</a></div>
                        </form>
                    </div>
                </div>
            </div> */}
            <div className={style.container}>
    	        <div className={style.content}>
                    <div className={style.login}>
                        {form_show ?
                        <>
                        <form id="searchFrm">
                            <div className={style.id}>
                                <h2>아이디를 입력해주세요.</h2>
                	            <input type="text" id="pwFindId" maxLength="20" name="pwFindId" placeholder="아이디" onChange={idHandler} />
                            </div>
                            <div className={style.id}>
                                <h2>이메일을 입력해주세요.</h2>
                                <label><input type="email" id="email" placeholder="이메일" pattern=".+@example\.com" size="30" value={email} onChange={emailHandler} required /></label>
                            </div>
                	        <div className={style.btn} id="submit_button"><a onClick={Submit_handler}>다음</a></div>
                        </form>
                        </>
                        :
                        <>
                        <h2>인증번호를 입력해주세요.</h2>
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
        </div>
        </>
    )
}