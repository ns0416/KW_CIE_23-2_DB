import {React,useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './passwordChange.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function PasswordChange() {
	const [pw_cur, setPWCur] = useState("");
	const [pw_new, setPWNew] = useState("");
	const [pw_cfm, setPWCfm] = useState("");
	const changePW = ()=>{
        let changepw = {
            pw_cur:pw_cur,
			pw:pw_new,
			pw_cfm:pw_cfm
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/changePW", changepw)
        .then((res) => {
            if(res.data.result == "success") {
                alert("비밀번호 수정 완료");
                window.history.back();
            }
            else {
                alert("비밀번호 수정 실패");
            }
        })
        .catch((err) => console.log(err))
    }
    return (
        <>
	<div className={`${style.wrap} ${style.my}`} id="sub" >
    <Header title="비밀번호 변경"/>
    <div className={style.container}>
			<div className={style.content}>
				<div className={style.my}>
					<form id="frm">   
						<div className={`${style.my_box} ${style.noline}`}>
							<input type="hidden" name="userId" value="" />
							<table>
								<tbody><tr id="comPw" style={{}}>
									<th className={style.first}>기존 비밀번호</th>
									<td className={style.first} ><div className={`${style.pay_input} ${style.w45}`}><input type="password" className={style.w100} id="pw" name="pw" defaultValue={pw_cur} onChange={(e)=>{setPWCur(e.target.value);}} /* onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"*/ /></div></td>
								</tr>
								<tr>
									<th>새 비밀번호</th>
									<td>
										<div className={`${style.pay_input} ${style.w45}`}><input type="password" className={style.w100} id="npw" name="userPw" defaultValue={pw_new} onChange={(e)=>{setPWNew(e.target.value);}} /*onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"*/ /></div>
										<p>개인정보 보호 정책에 따라 영문+숫자+특수문자 조합 8~12자리 입력 (특수문자는 !@#$%^&amp;*?~외 사용불가)</p>
									</td>
								</tr>
								<tr>
									<th>새 비밀번호<br/>확인</th>
									<td>
										<div className={`${style.pay_input} ${style.w45}`}><input type="password" className={style.w100} id="npwc" name="userPwOk" defaultValue={pw_cfm} onChange={(e)=>{setPWCfm(e.target.value);}} /*onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"*/ /></div>
									</td>
								</tr>
							</tbody></table>
						</div> 
						<div className={style.btns}><a href="#" className={style.modify} onClick={changePW} id="modify">수정</a> <a href="#" className={style.del} id="cancel">취소</a></div>
					</form>	
				</div>
			</div>
		</div>
	</div>

        </>
    );
}
