import {React,useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './SetLost.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function SetLost() {
	const navigate = useNavigate();
	const [pw_cur, setPWCur] = useState("");
	const updateLost = ()=>{
        let member_infonew = {
            pw_cur:pw_cur,
        };
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/setLost", member_infonew)
        .then((res) => {
            if(res.data.result == "success") {
                alert("분실 신고 완료");
				navigate("/");
            }
            else {
                alert("분실 신고 실패");
            }
        })
        .catch((err) => console.log(err))
    }
    return (
        <>
	<div className={`${style.wrap} ${style.my}`} id="sub" >
    <Header title="이메일 분실신고"/>
    <div className={style.container}>
			<div className={style.content}>
				<div className={style.my}>
					<form id="frm">   
						<div className={`${style.my_box} ${style.noline}`}>
							<input type="hidden" name="userId" value="" />
							<table>
								<tbody><tr id="comPw" style={{}}>
									<th className={style.first}>비밀번호</th>
									<td className={style.first} ><div className={`${style.pay_input} ${style.w45}`}><input type="password" className={style.w100} id="pw" name="pw" defaultValue={pw_cur} onChange={(e)=>{setPWCur(e.target.value);}} /* onkeyup="noSpaceForm(this);" onchange="noSpaceForm(this);"*/ /></div></td>
								</tr>
							</tbody></table>
						</div> 
						<div className={style.btns}><a href="#" className={style.modify} onClick={updateLost} id="modify">신고</a> <a href="#" className={style.del} id="cancel">취소</a></div>
					</form>	
				</div>
			</div>
		</div>
	</div>

        </>
    );
}
