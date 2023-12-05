import React, { useEffect, useState } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import style from './joinpage3.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function Joinpage3()
{
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if(location.state === null)
        {
            alert("잘못된 접근입니다!");
            navigate('/joinpage1');
        }
    }, [])
    
    let arr = [];
    
    const [values, setvalues] = React.useState({
        weight: 0,
        age: 0,
        sex: "",
    })
    
    function ChangeHandler(e) {
        if(e.target.name == "age")
        {
            setvalues({
                ...values,
            [e.target.name]: Number(e.target.value,)
            })
            return;
        }
        setvalues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }
	
	function makeyear() {
        const dt = new Date();
        const year = dt.getFullYear();
        
        
        for(let i =year-5; i>1899; i--)
        {
            arr.push(
                <option>{i}</option>)
        }
        return arr;
    }

    function Authorize() {	
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/registerMember",values)
        .then((res)=>{
            console.log(res)
            if(res.data.result === "success")
            {
                alert("회원가입 완료");
				navigate('/myLeftpage');
            }
            else{
                alert('잘못된 입력 입니다.');
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
        <div className={style.rcorners}>
            <p className={style.optin}>필수 입력 항목입니다.</p>
            <div id="frm">
                <div className={style.years}>
                    <span>생년</span>
                    <div style={{float:"right", width: "40%"}}>
                        <select id="birthYear" name="age" style={{display: "block"}} onChange={ChangeHandler}>
                            <option></option>
                            {makeyear()}
                        </select>
                    </div>
                </div>
                <div className={style.gender}>
                    <span>성별</span>
                    <div className={style.radio_box} style={{float:"right"}}>
                        <span className={style.radiobox}>
                            <input type='radio' name="sex" id='male' value="M" onChange={ChangeHandler}/>
                            <label htmlFor='male'><span></span> 남 </label>
                        </span>
                        <span className={style.radiobox}>
                            <input type='radio' name="sex" id='female' value="F" onChange={ChangeHandler}/>
                            <label htmlFor='female'><span></span> 여 </label>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.lconer}>
            <p className={style.optin}>선택 입력 항목입니다.</p><br/>
            <p className={style.explan}>운동소비량 계산을 위한 몸무게 입력입니다.</p>
            <div className={style.weight}>
                <input type="number" id="memkg" name="userWeight" placeholder="미 입력시 65kg으로 운동량 계산" onChange={ChangeHandler}/>
                <span>kg</span>
            </div>
        </div>         
		
		
	   <div className={style.btn} id="join" onClick={Authorize}><a href="#">다음</a></div>
	   


	</div>
	</div>
</div>
        </>
    )

}