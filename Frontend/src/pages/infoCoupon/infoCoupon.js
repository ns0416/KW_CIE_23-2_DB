import React from 'react';
import style from './infoCoupon.module.css';
import Header from '../../header.js';

export default function InfoCoupon() {
    return(
        <>
        {/* <div className={[style.wrap, style.guide].join(' ')} id='sub'> */}
        <Header title="이용권 사용안내"/>
        <div className={style.pay}>
            <div className={style.pay_info}>
	            <ul>
	            	<li><span style = {{color: "blue", fontWeight: "600"}}>첫 대여 후 대여시간(1시간/2시간) 안에 정상 반납시 권종별 기간 동안은 대여횟수 제한없이 재대여 가능</span></li>
	            	<li><strong>이용 가능시간</strong>은 첫 회 대여시점을 기준으로 계산합니다.</li>
	                <li>서울자전거 <strong>모든 대여소에서 사용이 가능</strong>합니다.</li>
	                <li>취소, 환불은 서울자전거 아래 <strong>환불규정</strong>에 따릅니다.</li>
	                <li>이용권을 다른 사람에게 <strong>양도</strong>할 수 없으며, 양도로 인해 발생하는 불이익은 구매자가 책임지셔야 합니다.</li>
	            </ul>
         	</div>
            
            <div className={style.info_box}>
                <p className={style.stitle2}>상품안내</p>
                <table className={style.psboard3}>
                    <caption>
                        <details>
                            <summary>상품안내</summary>
                            <p>구분, 회원제 서비스, 비회원</p>
                        </details>
                    </caption>
                    <colgroup>
                        <col style={{width: "12%"}}/>
                        <col style={{width: "12%"}}/>
                        <col style={{width: "12%"}}/>
                        <col style={{width: "12%"}}/>
                        <col style={{width: "12%"}}/>
                        <col style={{width: "12%"}}/> 
        		    </colgroup>
                    <thead>
                        <tr>
                            <th scope="col" style={{textAlign: "center", fontWeight: "bold", fontSize: "13px"}}>구분</th>
                            <th colspan="3" style={{textAlign: "center", fontWeight: "bold", fontSize: "13px"}} scope="col">정기권(회원전용)</th>
                            <th colspan="2" style={{textAlign: "center", fontWeight: "bold", fontSize: "13px"}} scope="col">일일권</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="2" scope="rowgroup" style={{textAlign: "center", fontWeight: "bold", fontSize:"13px"}}>상품</td>
                            <td style={{textAlign: "center", fontWeight: "bold", fontSize:"13px"}}>종별</td>
                            <td style={{textAlign: "center", fontWeight: "bold", fontSize:"13px"}}>1시간권</td>
                            <td style={{textAlign: "center", fontWeight: "bold", fontSize:"13px"}}>2시간권</td>
                            <td style={{textAlign: "center", fontWeight: "bold", fontSize:"13px"}}>1시간권</td>
                            <td style={{textAlign: "center", fontWeight: "bold", fontSize:"13px"}}>2시간권</td> 
                        </tr>
                        <tr>
                            <td style={{borderLeft:"1px solid #d2d2d2", textAlign: "center", fontWeight: "bold",  fontSize:"13px"}}>
                            7일권<br/>
                            30일권<br/>
                            180일권<br/>
                            365일권<br/>
                            </td>
                            <td style={{textAlign: "center", fontWeight:"bold", fontSize:"13px"}}>
                            3,000원<br/>
                                5,000원<br/>
                                15,000원<br/>
                                30,000원<br/>
                                </td>
                            <td style={{textAlign: "center", fontWeight:"bold", fontSize:"13px"}}>
                            4,000원<br/>
                            7,000원<br/>
                            20,000원<br/>
                            40,000원<br/>
                            </td>
                            
                            <td style={{textAlign: "center", fontWeight:"bold", fontSize:"13px"}}>
                            1,000원</td>
                            <td style={{textAlign: "center", fontWeight:"bold", fontSize:"13px"}}>
                            2,000원</td>
                            
                        </tr>
                        <tr>
                            <td style={{textAlign: "center"}}>결제</td>
                            <td colspan="5" scope="col">휴대폰,신용카드,PAYCO, 카카오페이, 제로페이, Discover Pass(외국인전용)</td>
                        </tr>
                        <tr name="add">
                            <td style={{textAlign:"center"}}>추가요금</td>
                            <td colspan="5" scope="col">
                            · 1시간(2시간) 단위 반복 이용권을 1시간(2시간) 이내 대여소 미반납시 초과 5분당 200원씩 과금<br/>
                            · 자전거 대여 후 기본 대여 시간 초과 시 추가 요금 부과(추가 요금 미납시 재대여 불가)<br/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{textAlign:"center"}}>이용시간</td>
                            <td colspan="5">
                            - [1시간권] 1시간 단위 반복 이용권<br/> 
                            - [2시간권] 2시간 단위 반복 이용권<br/>
                            </td>
                        </tr>
                    </tbody>
                </table>                
                <p className={style.stitle2} >주의사항</p>
                <table className={style.psboard3}>
                    <caption>
                        <details>
                            <summary>주의사항</summary>
                            <p>주의사항 01, 02, 03</p>
                        </details>
                    </caption>
                    <colgroup>
                        <col style={{width:"auto"}}/>
                        <col style={{width:"90%"}}/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>01</td>
                            <td className={style.tl}>
                            <b>- 이용권 사용가능기간은 첫 회 대여시점부터 계산합니다.</b><br/>
                            (예 : 1일권을 13시에 구매 한 후 15시에 처음으로 사용한 경우 사용가능기간은 다음날 15시까지입니다.)<br/>
                            - 1시간권 : 1회 대여 시 기본 대여시간은 60(분)입니다.  60(분)을 초과하는 경우 추가요금을 지불해야하므로 반납 후 다시 대여하여 이용하세요.<br/>
                            - 2시간권 : 1회 대여 시 기본 대여시간은 120(분)입니다. 120(분)을 초과하는 경우 추가요금을 지불해야하므로 반납 후 다시 대여하여 이용하세요.<br/>
                            <span className={style.redt}>(기본 대여시간이내에 반납하는 것을 반복하면 추가요금 없이 연속적으로 자전거를 이용할 수 있습니다.)</span><br/>
                            <span className={style.redt}>※ 이용권 유효기간은 결제일로부터 3년</span>
                            </td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td className={style.tl}>

                            - 기본이용시간을 초과할 경우, 초과된 시간만큼의 비용이 처음 이용권 구매 시 사용된 결제수단이나 이용자가 설정한 추가 과금 지불수단을 통해 부과됩니다.

                            </td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td className={style.tl}>
                            <span className={style.redt}>
                            - 대여 후 4시간동안 반납이 이루어지지 않을 경우 도난자전거로 간주되어, 경찰 신고 등이 이루어지므로, 반납이 어려울 경우 운영센터(1599-0120)로 연락하시기 바랍니다.
                            </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <p className={style.stitle2}>환불규정</p>
                <table className={style.psboard3} name="refund">
                    <caption>
                        <details>
                            <summary>환불규정</summary>
                            <p>구분, 365일권 / 180일권, 사용 시, 미사용 시</p>
                        </details>
                    </caption>
                    <colgroup>
                        <col style={{width:"10%"}}/>
                        <col style={{width:"15%"}}/>
                        <col style={{width:"30%"}}/>
                        <col style={{width:"30%"}}/>
                        <col style={{width:"15%"}}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th rowspan="2" colspan="2" scope="rowgroup">구분</th>
                            <th colspan="2" scope="colgroup">사용시 </th>
                            <th rowspan="2" scope="rowgroup">미사용시</th>
                        </tr>
                        <tr>
                            <th scope="col" style={{borderLeft: "1px solid #d2d2d2"}}>이용개시일로부터<br/>7일이내</th>
                            <th scope="col">이용개시일로부터<br/>7일초과</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="4" scope="rowgroup">정기권</td>
                            <td>365일권</td>
                            <td rowspan="3" scope="rowgroup">7일권 이용요금 공제</td>
                            <td rowspan="2" scope="rowgroup">환불 요청일까지의 월별 이용요금 공제(사용월수 x 30일권 이용요금)</td>
                            <td rowspan="5" scope="rowgroup">전액 환불</td>
                        </tr>
                        <tr>
                            <td style={{borderLeft: "1px solid #d2d2d2"}}>180일권</td>
                        </tr>
                        <tr>
                            <td style={{borderLeft: "1px solid #d2d2d2"}}>30일권</td>
                            <td rowspan="2" scope="rowgroup">환불 불가</td>
                        </tr>
                        <tr>
                            <td style={{borderLeft: "1px solid #d2d2d2"}}>7일권</td>
                            <td>이용개시일로부터  2일이내 일일권 이용요금 공제</td>
                        </tr>
                        <tr>
                            <td colspan="2">일일권</td>
                            <td colspan="2">환불 불가</td>
                        </tr>
                        <tr>
                        	<td colspan="5">
                        		<font color="red">※ 이용권 사용한 경우(이용권 개시일 기준)<br/>
                        		1일권 : 환불불가 , 7일권 : 2일이내, 30일권 : 7일이내, 180일권 : 60일이내, 365일권은 150일이내 신청해야만 환불이 가능합니다.</font>
                        	</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}