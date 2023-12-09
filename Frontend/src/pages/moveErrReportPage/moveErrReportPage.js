import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import style from './moveErrReportPage.module.css';
import Header from '../../header.js';
import axios from 'axios';

export default function NeglectReportList() {
	//const isLoggedIn = useSelector((state) => state.logged.value);
	const navigate = useNavigate();

    // const [brokenChecked, setbrkchk] = useState("");

	const [values, setvalues] = React.useState({
        bike_uid: "",
        break_type: "",
        content: "",
    });

	function brokenHandler(e) {
		if(e.target.id == values.break_type){
			setvalues({...values,
				break_type:""})
			return;
		}
		
		setvalues({...values, break_type:e.target.id});
	}

	// useEffect(() => {
	// 	// if(isLoggedIn === false) {
	// 	// 	navigate("/myLeftPage");
	// 	// }
	// 	console.log(values);
	// });

	function ChangeHandler(e) {
		if(e.target.name == "bike_uid")
        {
            setvalues({
                ...values,
            [e.target.name]: Number(e.target.value),
            })
            return;
        }
        setvalues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }


	function reportErr() {
		if(values.break_type == "")
		{
			alert("고장부위를 선택해주세요");
			return;
		}
		axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/writeBreakdown", values)
		.then((res)=>{
			if(res.data.result === "success"){
				alert("신고완료 되었습니다. 감사합니다.");
				navigate("/");
			}
			else{
				alert("신고 실패");
				console.log(res.data);
			}
		})
		.catch((err)=>console.log(err))
	}

    return (
        <>
<body id="app" scroll="yes" className={style.ie8m}>
<div className={style.wrap}>   
	<Header title={"고장(장애)신고"}/>
	<div className={style.container}>
		<div className={style.content}>
			<div className={style.trouble}>
				<div className={style.my_box}>
					<table>
						<tbody><tr>
							<th className={style.first}>자전거 번호</th>
							<td className={style.first}>
								SPB-<div className={`${style.pay_input} ${style.w30}`}>
                                    <input type="number" className={style.w100} name="bike_uid" maxLength={5} style={{height:"25px",width:"80px"}} onInput={(e)=>{
										if(e.target.value.length > e.target.maxLength)
										{
											e.target.value = e.target.value.slice(0, e.target.maxLength);
										}
									}} onChange={ChangeHandler} /></div>
							</td>
						</tr>
					</tbody></table>
				</div>
				<div className={style.inner}>
					<div className={style.bike} id="bikeImg">
						<ul>
							<li className={style.workstation}><a onClick={brokenHandler} style={values.break_type === "device" ? ({background: "#056531"}) : ({background: "#333"})} id="device" name="bikeBtn">단말기</a></li>
							<li className={style.saddle}><a onClick={brokenHandler} style={values.break_type === "saddle" ? ({background: "#056531"}) : ({background: "#333"})} id="saddle" name="bikeBtn">안장</a></li>
							<li className={style.tire}><a onClick={brokenHandler} style={values.break_type === "tire" ? ({background: "#056531"}) : ({background: "#333"})} id="tire" name="bikeBtn">타이어</a></li>
							<li className={style.pedal}><a onClick={brokenHandler} style={values.break_type === "fedal" ? ({background: "#056531"}) : ({background: "#333"})} id="fedal" name="bikeBtn">페달</a></li>
							<li className={style.chain}><a onClick={brokenHandler} style={values.break_type === "chain" ? ({background: "#056531"}) : ({background: "#333"})} id="chain" name="bikeBtn">체인</a></li>
						</ul>
					</div>
					<div className={style.btn_etc}><a onClick={brokenHandler} style={values.break_type === "etc" ? ({background: "#056531"}) : ({background: "#333"})} id="etc" name="bikeBtn">기타</a></div>
					<div className={style.register}>
						<textarea className={style.w100} name="content" style={{height:"100px"}} placeholder="신고내역을 입력해주세요." onChange={ChangeHandler}></textarea>
						<a id="reportBtn" className={style.btn} onClick={reportErr}>등록</a>
					</div> 
				</div>
			</div>
			<div className={style.my}>
				<div className={style.go}><a href="/moveErrReportPagetList">고장(장애)신고내역 보기</a></div>
			</div>
		</div>
	</div>
</div>

</body>
        </>
    );
}

// export default myLeftPage",