import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './neglectReport.module.css';
import Header from '../../header.js';

export default function NeglectReport() {
	const [data, setData] = useState({bike_id:0, lat:0, lon:0, detail_address:"", attachment:[]});
	const setUpdateMode = ()=>{
		axios.get("/rest/service/setArticleUpdateMode", {params:{att_uid:0}})
		.then((res) => {
			if(res.data.result== "success") {
				return;
			}
			else { //대여소 조회 실패
				//console.log(res.data);
				console.log("get station error!")
			}
		})
		.catch((err) => console.log(err))
	}
	function report() {
		var values = {
			board_name:"neglect",
			title:"",
			content:"",
			bike_id : data.bike_id,
			lat : data.lat,
			lon : data.lon,
			detail_address : data.detail_address
		}
		if(values.break_type == "")
		{
			alert("고장부위를 선택해주세요");
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
	useEffect(()=>{
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
                                        <input type="number" id="bikeNo" name="" maxLength="5" style={{height:"25px", width: "100%"}} onInput="maxLengthCheck(this)"/></div>
									<button className={style.id_check} id="bikeDupChk">중복확인</button>
								</td>
							</tr>
							<tr>
								<th>방치 주소</th>
								<td>
									<div className={style.pay_input} style={{width:"100%",border:"none"}}>
                                        <input type="text" readonly="readonly" id="address" name="address" maxLength="5" style={{height:"25px", width:"100%"}} placeholder="지도에서 위치 선택시 주소 자동입력"/>
                                        </div>
								</td>
							</tr>
							<tr>
							<th>상세 주소</th>
							<td>
								<div>
									<textarea id="addr_detail" style={{width:"100%", height:"50px"}} placeholder="예시) 청계천 박물관 옆 거리"></textarea>
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
							<td id="maptd" style={{width: "270px", height: "382px"}} Colspan="2">
								<div className={style.side_location} style={{}}>
									<a className={style.location}>현재위치</a>
								</div>
                                {/* 맵 */}
								 </td>
						</tr>
						<form id="frm" name="frm" enctype="multipart/form-data" method="POST"></form>
							<input type="hidden" name="equipmentId"/>
							<input type="hidden" name="voucherSeq" value=""/>
							<input type="hidden" name="rendClsCd" value=""/>
							<input type="hidden" name="usrSeq" value=""/>
							<input type="hidden" name="adminId" value="" />
							<input type="hidden" name="enfrcReturnStationId" value=""/>
							<input type="hidden" name="deviceCnncCd" value=""/>
							<input type="hidden" name="enfrcReturnCd" value=""/>
							<input type="hidden" name="photoYn" value=""/>
							<input type="hidden" name="emrgncyYn" value=""/>
							<input type="hidden" name="parkingLocation" value=""/>
							<input type="hidden" name="parkingLocationYn" value=""/>
							<input type="hidden" name="latitude" id="latitude" value=""/>
							<input type="hidden" name="longitude" id="longitude" value=""/>
							<input type="hidden" name="parkingLocationReason" value="4"/>
							<input type="hidden" name="parkingLocationDesc" value=""/>
							<input type="hidden" name="rentBikeId" value=""/>
							<input type="hidden" name="addr" id="addr" value=""/>
							<input type="hidden" name="enfrcGubunCd" value="1"/>
							<input type="hidden" name="enfrcReturnHistSeq" value=""/>
							<input type="hidden" name="dupChkResult"/>
						
						<form id="fileFrm" name="fileFrm" enctype="multipart/form-data" method="POST"></form>
							<tr>
								<th>
									사진 첨부<br />
									<a style={{fontWeight: "normal", textDecoration:"underline", fontSize: "12px"}} value="" href="javascript:l_fadeIn()">(예시보기)</a>
								</th>
								<td>
									<div className="upload-wrapper" style={{width: "100%"}}>
										<input type="file" accept="image/*" id="upload" name="enfrcFile" className="image-upload" style={{width:"100%"}} />
									</div>
									<input type="hidden" name="enfrcFileNoList" value="0"/>
									<input type="hidden" name="enfrcFileStateList" value="I"/>
								</td>
							</tr>
						
					</tbody>
                    </table>		
					<div className={style.register}>
						<a id="reportBtn" className={style.btn}>등록</a>
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