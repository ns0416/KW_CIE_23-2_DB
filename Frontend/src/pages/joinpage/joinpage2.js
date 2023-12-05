import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import style from './joinpage2.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function Joinpage2()
{
    // const location = useLocation();
    // useEffect(() => {
    //     if(location.state === null)
    //     {
    //         alert("잘못된 접근입니다!");
    //         window.history.back();
    //     }
    // })
    const navigate = useNavigate();

    const [values, setvalues] = React.useState({
        id: "",
        pw: "",
        phone: "",
        pw_cfm: "",
    })

    function ChangeHandler(e) {
        setvalues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    function Authorize() {
        // 비번 체크
        if(pw === pw_cfm && pw)
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/registerMember1Step",values)
        .then((res)=>{
            if(res.data.result == "success")
            {
                navigate('/joinpage3')
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
			<input type="text" value={values.id} placeholder="영문, 숫자 6~12자리" onChange={ChangeHandler}/><button className={style.id_check} id="idDupChk">중복확인</button>
		</div>
		
		<div className={style.pw}>
			<p>비밀번호</p>
			<input type="password" value={values.pw} placeholder="영문, 숫자, 특수문자(!@#$^&*?~)조합 8~12자리" onChange={ChangeHandler} />
		</div>
			
		<div className={style.pw_check}>
			<p>비밀번호 확인</p>
			<input type="password" value={values.pw_cfm} placeholder="비밀번호를 한번 더 입력하여 확인" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);" />
		</div>
		<div className={style.id}>
            <p>이름</p>
			<input type="text" id="userName" name="userName" maxlength="30" onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"/>
		</div>

		{/* <div className={style.phone}>
			
		</div> */}

		<div className={style.id}>
			<p>휴대폰 번호</p>
            <label><input title='휴대폰 번호' value={values.phone}/></label>
            {/* <label><input title="휴대번호 첫번째 입력" name="userMob1" id="userMob1" type="number"  style={{width: "50px"}} class="vm center" maxlength="3" oninput="maxLengthCheck(this)"/></label> -  */}
		    {/* <label><input title="휴대번호 두번째 입력" name="userMob2" id="userMob2" type="number"  style={{width: "50px"}} class="vm center" maxlength="4" oninput="maxLengthCheck(this)"/></label> -  */}
		    {/* <label><input title="휴대번호 세번째 입력" name="userMob3" id="userMob3" type="number"  style={{width: "50px"}} class="vm center" maxlength="4" oninput="maxLengthCheck(this)"/></label> */}
        </div>
		 
	   <div className={style.btn} id="join" onClick={Authorize}><a href="#">다음</a></div>
	   
	   </form>

	</div>
	</div>
</div>
        </>
    )

}