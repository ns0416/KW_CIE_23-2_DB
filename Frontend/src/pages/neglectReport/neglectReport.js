import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './neglectReport.module.css';
import Header from '../../header.js';

export default function NeglectReport() {


    return (
        <>
<body scroll="yes" class="ie8m">
    {/* <div class="wrap" id="sub">   

    <!--웹 : 헤더추가--><div id="layer" class="layer-wrap" style={{display:none "> 
		<div class="pop-layer">  */}
	<div class="container">
		<div class="content">
			<div class="trouble">
				<div class="top">
					<h3>방치 신고</h3>
					{/* <!-- <button class="back right"></button>
					<button class="close"></button> --> */}
				</div>
				<div class="my_box">
	            	<table>
	            		<colgroup>
							<col width="120px" />
							<col width="70%" />
						</colgroup>
						<tbody>
							<tr>
								<th>자전거 번호</th>
								<td>
									SPB-<div class="pay_input" style={{width:"40%"}}>
                                        <input type="number" id="bikeNo" name="" maxlength="5" style={{height:"25px", width: "100%"}} oninput="maxLengthCheck(this)"/></div>
									&nbsp",<button class="id_check" id="bikeDupChk">중복확인</button>
								</td>
							</tr>
							<tr>
								<th>방치 주소</th>
								<td>
									<div class="pay_input" style={{width:"100%",border:"none"}}>
                                        <input type="text" readonly="readonly" id="address" name="address" maxlength="5" style={{height:"25px", width:"100%"}} placeholder="지도에서 위치 선택시 주소 자동입력"/>
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
							<td id="maptd" style={{width: "270px", height: "382px"}} colspan="2">
								<div class="side_location" style={{}}>
									<a class="location">현재위치</a>
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
									<div class="upload-wrapper" style={{width: "100%"}}>
										<input type="file" accept="image/*" id="upload" name="enfrcFile" class="image-upload" style={{width:"100%"}} />
									</div>
									<input type="hidden" name="enfrcFileNoList" value="0"/>
									<input type="hidden" name="enfrcFileStateList" value="I"/>
								</td>
							</tr>
						
					</tbody>
                    </table>		
					<div class="register">
						<a id="reportBtn" class="btn">등록</a>
					</div> 
				</div>
				<div class="my">
    				<div class="go"><a href="/app/err/getLeaveReportList.do">방치신고내역 보기</a></div>
    			</div>
			</div>
		</div>
	</div>


    


</body>
        </>
    );
}

// export default myLeftPage",