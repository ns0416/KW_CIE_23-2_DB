import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './memberInfoEdit.module.css';
import Header from '../../header.js';
import axios from 'axios';


export default function MemberInfoEdit() {
	const navigate = useNavigate();
	const [userinfo, setUserInfo] = useState({id:'', email:'', phone:''});
	const [email_split, setEmailSplit] = useState(['', '']);
	const  email_list = useState(['직접입력', 'daum.net', 'empal.com', 'gmail.com', 'hanmail.net', 'hotmail.com', 'naver.com', 'nate.com', 'yahoo.co.kr']);

	const getUserInfo = ()=>{
		axios.get("/rest/service/getUserInfo", {params:{detail:1}})
		.then((res) => {
			if(res.data.logged== true) {
				//console.log(res.data);
				//console.log(res.data.data);
				setUserInfo(res.data.data);
			}
			else { //대여소 조회 실패
				//console.log(res.data);
				console.log("get station error!")
			}
		})
		.catch((err) => console.log(err))
	}
	const updateUserInfo = ()=>{
        let member_infonew = {
            weight:Number(userinfo.weight),
			phone:userinfo.phone
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/updateMember", member_infonew)
        .then((res) => {
            if(res.data.result == "success") {
                alert("회원 수정 완료");
            }
            else {
                alert("회원 수정 실패");
            }
        })
        .catch((err) => console.log(err))
    }
	
	const splitEmailAddr = ()=>{
		let email = userinfo.email;
		let email_sp = email.split("@");
		setEmailSplit(email_sp);
	}

	const onChangeHandler = (e)=>{
		setUserInfo({...userinfo, [e.target.name] :e.target.value})
	}
	useEffect(()=>{
		getUserInfo();
	}, []);
	useEffect(()=>{
		console.log(userinfo)
	}, [userinfo]);
    return (
        <>
<div className={`${style.wrap} ${style.my}`} id="sub">
	<Header title="개인정보 수정"/>
    <div className={style.container}>
		
					
<div className={style.content}>
<div className={style.my}>
				<p className={style.caption}>
					<img src="/img/ic_needs.gif" alt=""/>
					표시는 필수입력 사항입니다.</p>
				<form id="frm">
					<input type="hidden" name="sReserved1" value=""/>
					<input type="hidden" name="sReserved2" value=""/>
					<input type="hidden" name="sReserved3" value=""/>
					<input type="hidden" name="mobAgency"/>
					<input type="hidden" name="userMob1"/> 
					<input type="hidden" name="userMob2"/> 
					<input type="hidden" name="userMob3"/> 
					<input type="hidden" name="emailRecvYn"/>
					<div className={style.my_box}>
						<table>
							<colgroup>
								<col width="25%"/>
								<col width="75%"/>
							</colgroup>
							<tbody><tr>
								<th className={style.first}>아이디</th>
								<td className={style.first} style={{position:"relative"}}>
		                        <span style={{float: "left", lineHeight: "43px", position:"absolute", top:"50%", transform:"translateY(-50%)"}}>{userinfo.id}</span>
		                        </td>
							</tr>
							<tr>
								<th>비밀번호</th>
								<td>
									<button type="button" onClick={(e)=>{navigate("/passwordChange")}}>
										비밀번호 변경</button>
								</td>
							</tr>
							<tr>
								<th>이메일주소<img src="/img/ic_needs.gif" alt=""/></th>
								<td>
									<div className={`${style.pay_input} ${style.w25}`}>
										<span id="mobInfo">{userinfo.email}&nbsp;</span><br/>
									</div>
									<div>
										<button type="button" id="mobNoUpdate" onClick={(e)=>{navigate("/changeEmail")}} style={{marginTop: "5px"}}>
											이메일주소 변경 </button>
										<button type="button" onClick={(e)=>{navigate("/setLost")}} id="mobLostReport">이메일 분실 신청 </button>
									</div>
								</td>
							</tr>
							<tr>
								<th>휴대전화번호<img src="/img/ic_needs.gif" alt=""/>
								</th>
								<td>
									<div className={`${style.pay_input}`}>
										<input title="휴대전화번호 입력" type="text" className={style.w100} id="mmemail" name="phone" defaultValue={userinfo.phone} onChange={onChangeHandler}/>
									</div>
								</td>
							</tr>
							<tr id="parentInfo" style={{display: "none"}}>
								<th>부모<br/>휴대전화번호<img src="/img/ic_needs.gif" alt=""/></th>
								<td>
									<span id="mobInfo">&nbsp;</span><br/>
									<button type="button" /*onclick="guardianCertify();"*/ style={{marginTop: "5px"}}>
										휴대 전화번호 변경 </button>
								</td>
							</tr>
						<tr>
								<th>체중</th>
								<td>
									<div className={`${style.pay_input} ${style.w30}`}>
										<input type="text" className={style.w100} id="memkg" name="weight" placeholder="65" maxLength="3" defaultValue={userinfo.weight}/*onInput={maxLengthCheck(this)}*/ style={{width:"100%"}} onChange={onChangeHandler}/>
									</div>
									kg
									<p>운동량 계산을 위해 필요한 정보입니다.<br/>미기재시 65kg으로 계산됩니다.</p>
								</td>
							</tr>
						</tbody></table>
					</div> 
					<div className={style.btn}>
						<a href="#" onClick={updateUserInfo} id="modify">
							수정</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
        </>
    );
}
