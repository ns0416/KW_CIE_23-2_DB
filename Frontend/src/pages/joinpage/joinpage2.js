import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import style from './joinpage2.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function Joinpage2()
{
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if(location.state === null)
        {
            alert("잘못된 접근입니다!");
            //window.history.back();
            navigate('/joinpage1');
        }
    },[])
    

    const [values, setvalues] = React.useState({
        id: "",
        pw: "",
        phone: "",
        pw_cfm: "",
        name: "",
    })

    function ChangeHandler(e) {
        setvalues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }
	
	const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
    function Authorize() {
        // 비번 규칙 체크
		if(!passwordRegEx.test(values.pw))
		{
			alert("비밀번호는 영문, 숫자를 혼합하여 8~20자로 입력해주세요")
			return
		}
		
		// 비번 체크
        if(values.pw !== values.pw_cfm)
		{
			alert("입력한 비밀번호가 다릅니다.")
			return
		}
		
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/registerMember1Step",values)
        .then((res)=>{
            if(res.data.result === "success")
            {
				navigate('/joinpage3',{ state: res.data.result})
            }
            else{
                alert('비밀번호를 확인해 주세요')
            }
        })
        .catch((err)=>{console.log(err)})
    }

    return(
        <>
        <Header title="회원가입"/>
	<div className={style.container}>
	<div className={style.content}>

	<div className={style.join}>            
		
		<p className={style.optin}>필수 입력 항목입니다.</p>
		<form id="frm">
		<div className={style.id}>
			<p>아이디</p>
			<input type="text" value={values.id} name="id" placeholder="영문, 숫자 6~20자리" onChange={ChangeHandler}/>
			{/* <button className={style.id_check} id="idDupChk">중복확인</button> */}
		</div>
		
		<div className={style.pw}>
			<p>비밀번호</p>
			<input type="password" value={values.pw} name="pw" placeholder="영문, 숫자, 특수문자(!@#$^&*?~)조합 8~15자리" onChange={ChangeHandler} />
		</div>
			
		<div className={style.pw_check}>
			<p>비밀번호 확인</p>
			<input type="password" value={values.pw_cfm} name="pw_cfm" placeholder="비밀번호를 한번 더 입력하여 확인" onChange={ChangeHandler} />
		</div>
		<div className={style.id}>
            <p>이름</p>
			<input type="text" value={values.name} maxLength="30" name="name" onChange={ChangeHandler}/>
		</div>

		{/* <div className={style.phone}>
			
		</div> */}

		<div className={style.id}>
			<p>휴대폰 번호</p>
            <label><input type="number" title='phone_number' maxLength="11" name="phone" placeholder="-를 제외하고 숫자만 입력" value={values.phone} onChange={ChangeHandler}/></label>
            {/* <label><input title="휴대번호 첫번째 입력" name="userMob1" id="userMob1" type="number"  style={{width: "50px"}} className="vm center" maxLength="3" onInput="maxLengthCheck(this)"/></label> -  */}
		    {/* <label><input title="휴대번호 두번째 입력" name="userMob2" id="userMob2" type="number"  style={{width: "50px"}} className="vm center" maxLength="4" onInput="maxLengthCheck(this)"/></label> -  */}
		    {/* <label><input title="휴대번호 세번째 입력" name="userMob3" id="userMob3" type="number"  style={{width: "50px"}} className="vm center" maxLength="4" onInput="maxLengthCheck(this)"/></label> */}
        </div>
		 
	   <div className={style.btn} id="join" onClick={Authorize}><a href="#">다음</a></div>
	   
	   </form>

	</div>
	</div>
</div>
        </>
    )

}