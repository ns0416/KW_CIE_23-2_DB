import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './neglectReport.module.css';
import Header from '../../header.js';
import axios from 'axios';
import MapNaverDefaultNeglect from '../../components/mapNaverDefault_neglect.js';
import { Container as MapDiv } from 'react-naver-maps';

export default function NeglectReport() {
	const [data, setData] = useState({bike_id:0, lat:0, lon:0, detail_address:""});
	const [updateSet, setUpdateSet] = useState(false);
	const [curLocation, setCurLocation] = useState([37.619799199999974,127.05843630000007]);
	const setUpdateMode = ()=>{
		axios.get("/rest/service/setArticleUpdateMode", {params:{att_uid:0}})
		.then((res) => {
			if(res.data.result== "success") {
				setUpdateSet(true);
				return;
			}
			else { //대여소 조회 실패
				//console.log(res.data);
				console.log("get station error!")
			}
		})
		.catch((err) => console.log(err))
	}
	const onChangeHandler = (e)=>{
		setData({...data, [e.target.name]: e.target.value});
	}
	const onFileChangeHandler = (e)=>{
    	//fd.append("file", event.target.files)
		uploadAttachment(e.target.files);
	}
	function uploadAttachment(files) {
		const formData = new FormData();
		formData.append("file", files[0])
		axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/uploadAttachment", formData)
		.then((res)=>{
			if(res.data.result === "success"){
				alert("첨부파일 업로드 성공");
			}
			else{
				alert("첨부파일 업로드 실패");
				console.log(res.data);
				document.getElementById("upload").value="";
			}
		})
		.catch((err)=>console.log(err))
	}
	function report() {
		var values = {
			board_name:"neglect",
			title:"",
			content:"",
			bike_id : Number(data.bike_id),
			lat : curLocation[0],
			lon : curLocation[1],
			detail_address : data.detail_address
		}
		if(data.bike_id <=0 )
		{
			alert("올바른 자전거 번호를 입력해주세요");
			return;
		}
		if(data.detail_address == "")
		{
			alert("상세주소를 입력해주세요");
			return;
		}
		axios.post("http://seoulbike-kw.namisnt.com:8082/rest/service/writeArticle", values)
		.then((res)=>{
			if(res.data.result === "success"){
				alert("신고완료 되었습니다. 감사합니다.");
				window.history.back();
			}
			else{
				alert("신고 실패");
				console.log(res.data);
			}
		})
		.catch((err)=>console.log(err))
	}
	const getGPSLoc = ()=>{
		navigator.geolocation.getCurrentPosition(
			(position) => {
				setCurLocation([position.coords.latitude,position.coords.longitude]);
			},
			(error) => console.log(error)
		  );
	}
	useEffect(() => {
		getGPSLoc();
	  }, []);
	useEffect(()=>{
		if(updateSet == false)
			setUpdateMode();
	}, [])
    return (
        <>
<div scroll="yes" className={style.ie8m}>
    {/* <div className={style.wrap" id="sub">   

    <!--웹 : 헤더추가--><div id="layer" className={style.layer-wrap" style={{display:none "> 
		<div className={style.pop-layer">  */}
	<div className={style.container}>
		<div className={style.content}>
			<div className={style.trouble}>
				<Header title={"방치 신고"}/>
				<div className={style.my_box}>
	            	<table>
	            		<colgroup>
							<col width="120px" />
							<col width="70%" />
						</colgroup>
						<tbody>
							<tr>
								<th>자전거 번호</th>
								<td>
									SPB-<div className={style.pay_input} style={{width:"40%"}}>
                                        <input type="number" id="bikeNo" name="bike_id" maxLength="5" style={{height:"25px", width: "100%"}} onChange={onChangeHandler}/></div>
									<button className={style.id_check} id="bikeDupChk">중복확인</button>
								</td>
							</tr>
							<tr>
								<th>방치 주소</th>
								<td>
									<div className={style.pay_input} style={{width:"100%",border:"none"}}>
                                        <input type="text" id="address" name="address" maxLength="5" style={{height:"25px", width:"100%"}} value={curLocation[0] + ", "+curLocation[1]} placeholder="지도에서 위치 선택시 주소 자동입력" readOnly/>
                                        </div>
								</td>
							</tr>
							<tr>
							<th>상세 주소</th>
							<td>
								<div>
									<textarea id="addr_detail" style={{width:"100%", height:"50px"}} name="detail_address" defaultValue={data.detail_address}  onChange={onChangeHandler} placeholder="예시) 청계천 박물관 옆 거리"></textarea>
								</div>
							</td>
						</tr>
						</tbody>
					</table>
					<table>
						<colgroup>
							<col width="120px" />
							<col width="70%" />
						</colgroup>
						<tbody>
                            <tr>
								<td id="maptd" style={{width: "270px", height: "380px", paddingBottom:"50px"}} colSpan="2">
									<div className={style.side_location} style={{}}>
										<a className={style.location}>현재위치</a>
									</div>
                        	        <MapDiv style={{ width: '100%', height: '100%' }}>
        	    						<MapNaverDefaultNeglect curLocation={curLocation} setCurLocation={setCurLocation}/>
        							</MapDiv>
									 </td>
							</tr>
							<tr>
								<th>
									사진 첨부<br />
									<a style={{fontWeight: "normal", textDecoration:"underline", fontSize: "12px"}} value="">(예시보기)</a>
								</th>
								<td>
									<div className="upload-wrapper" style={{width: "100%"}}>
										<input type="file" accept="image/*" id="upload" name="enfrcFile" className="image-upload" style={{width:"100%"}} onChange={onFileChangeHandler} />
									</div>
									<input type="hidden" name="enfrcFileNoList" value="0"/>
									<input type="hidden" name="enfrcFileStateList" value="I"/>
								</td>
							</tr>
						
					</tbody>
                    </table>		
					<div className={style.register}>
						<a id="reportBtn" onClick={(e)=>{report();}} className={style.btn}>등록</a>
					</div> 
				</div>
				<div className={style.my}>
    				<div className={style.go}><Link to="/neglectReportList">방치신고내역 보기</Link></div>
    			</div>
			</div>
		</div>
	</div>


    


</div>
        </>
    );
}

// export default myLeftPage",