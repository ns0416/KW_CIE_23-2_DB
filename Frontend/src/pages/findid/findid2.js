import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import style from './findid2.module.css';
import Header from '../../header.js';
import { useState } from 'react';
import axios from 'axios';

export default function Findid2()
{
    const [id,setid] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(()=>{
        if(location.state === null)
        {
            alert("잘못된 접근입니다!");
            navigate('/')
            return
        }
        console.log(location.state.email)
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/findID",{params: {email:location.state.email}})
        .then((res)=>{
            if(res.data.result == "success"){
                setid(res.data.id);
            }
            else{
                alert("등록되지 않은 사용자 정보입니다.")
            }
        })
        .catch((err)=>{console.log(err);})
    },[])

    return(
        <>
        <Header title="아이디 찾기"/>
        <div className={style.container}>
		    <div className={style.content}>
		    	<div className={style.login}>
		    		    <div className={style.srch_box}>
		    		    	<span>회원님의 아이디는 아래와 같습니다.</span>
		    		    	<br />
		    		    	<span className={style.findID}>{id}</span>
		    		    </div>
		    		<div className={style.btn} id="join"><a href="/myLeftpage" id="login">로그인하기</a></div>
		    	</div>
		    </div>
        </div>
        </>
    )
}