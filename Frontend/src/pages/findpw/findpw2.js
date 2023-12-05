import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import style from './findpw.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function Findpw()
{
    const navigate = useNavigate();
    const [values, setvalues] = React.useState({
        pw: "",
        pw_cfm: "",
    })

    function ChangeHandler(e) {
        setvalues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }
	
    const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    function Changepwd()
    {
        if(!passwordRegEx.test(values.pw))
		{
			alert("비밀번호는 영문, 숫자를 혼합하여 8~20자로 입력해주세요");
			return;
		}
        if(values.pw !== values.pw_cfm)
        {
            alert("입력한 비밀번호가 다릅니다!");
            return;
        }
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/updatePW", values)
        .then((res) =>{
            if(res.data.result === "success")
            {
                alert('비밀번호가 변경되었습니다.\n 변경된 비밀번호로 로그인 해 주세요');
				navigate('/myLeftPage');
            }
            else{
                alert('비밀번호를 확인해 주세요');
            }
        })
        .catch((err)=>{console.log(err);})
    }


    return(
        <>
        <Header title={"비밀번호 변경"}/>
        <div className={style.container}>
    	        <div className={style.content}>
                    <div className={style.login}>
                        <h2>새로운 비밀번호를 입력해주세요.</h2>
                        <div className={style.phone}>
                              <input type="password" name="pw" value={values.pw} onChange={ChangeHandler} required />  
                        </div>
                        <h2>비밀번호 확인.</h2>
                        <div className={style.phone}>
                              <input type="password" name="pw_cfm" value={values.pw_cfm} onChange={ChangeHandler} required />  
                        </div>
                        <div className={style.btn} id="submit_button"><a onClick={Changepwd}>다음</a></div>
                    </div>
                </div>
            </div>
        </>
    )
}