import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './findid.module.css';
import Header from '../../header.js';

export default function Findid()
{

    const navigate = useNavigate();

    const [email,setemail] = React.useState("");
    const emailHandler = e=>{setemail(e.target.value);}

    function Submit_handler() { //인증 메일 발송 함수
        navigate('/findid2',{ state: {email: email} })
    }

    return(
        <>
        <Header title="아이디 찾기"/>
        <div className={style.container}>
    	    <div className={style.content}>
                <div className={style.join}>
                    <div className={style.join_label}>
                        <h2>이메일을 입력해주세요.</h2>
                    </div>
                    <form id="frm">
                        <div className={style.phone}>
                            <label><input type="email" name="email" id="email" pattern=".+@example\.com" size="30" value={email} onChange={emailHandler} required /></label>
                        </div>
                    	<div className={style.btn} id="submit_button"><a onClick={Submit_handler}>다음</a></div>
		        	</form>
                </div>
            </div>
        </div>
        </>
    )
}