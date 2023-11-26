import React from 'react';
import style from './infopage.module.css';
import Header from '../header.js';

export default function Infopage()
{
    return(
        <>
        <div className={[style.wrap, style.guide].join(' ')} id='sub'>
            <Header title="이용안내"/>
            {/* <li className={[style.test, style.test2].join(' ')}>test</li> */}
            <div className={style.container}>
                <div className={style.content}>
                    <div className={style.guide}>
                        <ul className={style.gallery_info}>
                            <a id='bike_tab2'>
                                <li className={style.info02}>따릉이 이용안내</li>
                            </a>
                            <a id='bike_tab3'>
                                <li className={style.info03}>안전수칙</li>
                            </a>
                        </ul>
                        <div className={[style.list_wrap, style.r_tabs].join(' ')} id='horizentalTab'>
                            {/* <ul>
                                <li className={[style.r_tabs_tab, style.r_tabs_state_defaul].join(' ')}><a id="tab1" href="#tab-1">대중교통 환승마일리지 서비스</a></li>	
                                <li><a id="tab2" href="#tab-2">이용권·추가요금 결제 안내​</a></li>	
                                <li><a id="tab3" href="#tab-3">자가잠금/연결반납 하기</a></li>	
                                <li><a id="tab4" href="#tab-4">LCD자전거 태깅 대여카드 등록​</a></li>
                                <li><a id="tab5" href="#tab-5">비회원/외국관광객 이용절차</a></li>	
		                        <li><a id="tab7" href="#tab-7">제로페이 이용방법</a></li>
                            </ul>  */}
                            <div className={[style.r_tabs_accordion_title, style.r_tabs_state_defaul].join(' ')}>
                                <a href='#tab-1' className={style.r_tabs_anchor}>대중교통 환승 마일리지 서비스</a>    
                            </div>
                            <div className={[style.bike_list, style.r_tabs_panel, style.r_tabs_state_defaul].join(' ')}>
                	            <ul className={style.tabs}>
                                    <li class="tab-link current" id="taba" data-tab="tab-a">티머니</li>
                                    <li class="tab-link" id="tabb" data-tab="tab-b">후불교통카드</li>
                                    <li class="tab-link" id="tabc" data-tab="tab-c">환승마일리지 사용법​</li>
                  	            </ul>
                 
                  	            <div id="tab-a" className={[style.tab_content, style.current].join(' ')}>
                                	<div id="gallery1" className={style.gallery}>
                                        <div className={style.mainHolder}>
                                            <ul className={style.main}>
                                                <li><h1>1. 메뉴 &gt; 내정보 보기<br /><p>로그인 상태에서 내 정보 메뉴를 선택합니다.​</p><p></p></h1><img src="/infoimg/guide_01a_1.png" alt="" /></li>
                                                <li><h1>2. 내 정보 &gt; 마일리지 선택​<p></p></h1><img src="/infoimg/guide_01a_2.png" alt=""/></li>
                                                <li><h1>3. 카드 등록하기<p>환승 마일리지 탭에서 적립 카드를 틍록해 주세요.<br />이미 등록된 카드를 변경할 때는 오른쪽 상단의 더보기를 눌러주세요.​</p></h1><img src="/infoimg/guide_01a_3.png" alt=""/></li>
                                                <li><h1>4. 티머니 카드 등록<br /><p>카드번호 15~16자리를 입력해 주세요.</p></h1><img src="/infoimg/guide_01a_4.png" alt=""/></li>
                                                <li><h1>5. 주의사항<br /><p>모바일 티머니 카드는 카드번호를 잘 확인해 주세요.​</p></h1><img src="/infoimg/guide_01a_5.png" alt=""/></li>
                                                <li><h1>6. 주의사항 <br />​<p>환승마일리지는 정기권 365일 사용자만 적립 가능합니다.</p></h1><img src="/infoimg/guide_01a_6.png" alt=""/></li>
                                                <li><h1>7. 주의사항<br /><p>교통카드를 변경하거나 등록하신 카드번호가 단말기에 태깅된 카드번호와 일치하지 않는 경우 적립되지 않습니다. 등록이력에서 등록된 적립카드 번호를 확인해 주세요.​</p></h1><img src="/infoimg/guide_01a_7.png" alt=""/></li>
                                            </ul>
                                             <div className={style.nav}>
                                                <div className={style.prevBtn}><img src="/infoimg/prevBtn.jpg" alt=""/></div>
                                                <div className={style.nextBtn}><img src="/infoimg/nextBtn.jpg" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>	     
                                </div>
                    
                  	            <div id="tab-b" class="tab-content">
                                	<div id="gallery2" className={style.gallery}>
                                        <div className={style.mainHolder}>
                                            <ul className={style.main}>
                                                <li><h1>1. 메뉴 &gt; 내정보 보기<br /><p>로그인 상태에서 내 정보 메뉴를 선택합니다.</p></h1><img src="/infoimg/guide_01b_1.png" alt=""/></li>
                                                <li><h1>2. 내 정보 &gt; 마일리지 선택​<p></p></h1><img src="/infoimg/guide_01b_2.png" alt=""/></li>
                                                <li><h1>3. 카드 등록하기<br /><p>환승 마일리지 탭에서 적립 카드를 틍록해 주세요.<br />이미 등록된 카드를 변경할 때는 오른쪽 상단의 더보기를 눌러주세요.​</p></h1><img src="/infoimg/guide_01b_3.png" alt=""/></li>
                                                <li><h1>4. 후불교통카드 등록<br /><p>카드번호 15~16자리를 입력해 주세요.</p></h1><img src="/infoimg/guide_01b_4.png" alt=""/></li>
                                            </ul>
                                             <div className={style.nav}>
                                                <div className={style.prevBtn}><img src="/infoimg/prevBtn.jpg" alt=""/></div>
                                                <div className={style.nextBtn}><img src="/infoimg/nextBtn.jpg" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                  	            <div id="tab-c" class="tab-content">
                                	<div id="gallery3" className={style.gallery}>
                                        <div className={style.mainHolder}>
                                            <ul className={style.main}>
                                                <li><h1>1.환승마일리지 적립 조건<br /><p>- 정기권 365일권 사용자<br />- 적립카드 등록 필수<br />- 1회 100점<br />- 1일 최대 200점<br />- 1년 최대 15,000점​</p></h1><img src="/infoimg/guide_01c_1.png" alt=""/></li>
                                                <li><h1>2. 마일리지 적립 확인<br /><p>- 환승마일리지 적립 페이지에서 적립된 일시를 확인할 수 있습니다.<br />- 카드사의 업무처리 사정에 의해 이용 4일 후 적립 내용이 반영됩니다.</p></h1><img src="/infoimg/guide_01c_2.png" alt=""/></li>
                                                <li><h1>3. 마일리지 적립 주의사항<br /><p>- 교통카드를 변경하거나 등록하신 카드번호가 단말기에 태깅된 카드번호와 일치하지 않는 경우 적립되지 않습니다.<br />- 4일이 지나도 적립이 되지 않는 경우는 등록이력에서 카드번호를 확인해 주세요.</p></h1><img src="/infoimg/guide_01c_3.png" alt=""/></li>
                                                <li><h1>4. 마일리지 사용<br /><p>적립된 마일리지는 정기권 365일권 구매 시, 결제금액에서 차감되는 방식으로 사용됩니다.​</p></h1><img src="/infoimg/guide_01c_4.png" alt=""/></li>
                                            </ul>
                                             <div className={style.nav}>
                                                <div className={style.prevBtn}><img src="/infoimg/prevBtn.jpg" alt=""/></div>
                                                <div className={style.nextBtn}><img src="/infoimg/nextBtn.jpg" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                
                            <div className={style.bike_list} id="tab-2">
                            	<ul className={style.tabs}>
                                    <li class="tab-link current" id="taba" data-tab="tab-d">이용권</li>	
                                    <li class="tab-link" id="tabb" data-tab="tab-e">추가요금</li>			
                              	</ul>

                              	<div id="tab-d" class="tab-content current">
                                	<div id="gallery4" className={style.gallery}>
                                        <div className={style.mainHolder}>
                                            <ul className={style.main}>
                                                <li><h1>1. 메뉴 &gt; 이용권 구매 선택​<p></p></h1><img src="/infoimg/guide_02a_1.png" alt=""/></li>
                                                <li><h1>2. 이용권 종류 선택​<p></p></h1><img src="/infoimg/guide_02a_2.png" alt=""/></li>
                                                <li><h1>3. 결제 수단 선택 후 결제 진행​<p></p></h1><img src="/infoimg/guide_02a_3.png" alt=""/></li>
                                                <li><h1>4. 구매 완료​<p></p></h1><img src="/infoimg/guide_02a_4.png" alt=""/></li>
                                            </ul>
                                             <div className={style.nav}>
                                                <div className={style.prevBtn}><img src="/infoimg/prevBtn.jpg" alt=""/></div>
                                                <div className={style.nextBtn}><img src="/infoimg/nextBtn.jpg" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>	     
                                </div>

                              	<div id="tab-e" class="tab-content">
                                	<div id="gallery5" className={style.gallery}>
                                        <div className={style.mainHolder}>
                                            <ul className={style.main}>
                                                <li><h1>1. 추가요금 발생<br /><p>기본대여시간을 초과하면 5분마다 200원의 추가요금이 발생합니다.​</p></h1><img src="/infoimg/guide_02b_1.png" alt=""/></li>
                                                <li><h1>2. 추가요금 확인<br /><p>주행 종료시 추가요금 발생 안내를 확인해 주세요.​</p></h1><img src="/infoimg/guide_02b_2.png" alt=""/></li>
                                                <li><h1>3. 추가요금 미납시 이용제한​<br /><p>미납된 추가요금이 있으면 대여시에 안내 팝업이 나타납니다.<br />미납요금을 먼저 납부한 뒤에 따릉이를 이용해 주세요.​</p></h1><img src="/infoimg/guide_02b_3.png" alt=""/></li>
                                                <li><h1>4. 비회원인 경우도 추가요금이 미납된 경우 추가요금을 지불하셔야 따릉이를 계속 이용할 수 있습니다.​<p></p></h1><img src="/infoimg/guide_02b_4.png" alt=""/></li>
                                                <li><h1>5. 결제 진행<br /><p>이용권 구매와 동일한 방법으로 결제를 진행해 주세요.<br />추가요금은 할인이 적용되지 않습니다.​</p></h1><img src="/infoimg/guide_02b_5.png" alt=""/></li>
                                            </ul>
                                             <div className={style.nav}>
                                                <div className={style.prevBtn}><img src="/infoimg/prevBtn.jpg" alt=""/></div>
                                                <div className={style.nextBtn}><img src="/infoimg/nextBtn.jpg" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                
                
                            <div className={style.bike_list} id="tab-5">
                            	<ul className={style.tabs}>
                                    <li class="tab-link current" id="tabf" data-tab="tab-h">비회원</li>	
                                    <li class="tab-link" id="tabg" data-tab="tab-i">외국관광객​</li>
                              	</ul>

                              	<div id="tab-h" class="tab-content current">
                                	<div id="gallery7" className={style.gallery}>
                                        <div className={style.mainHolder}>
                                            <ul className={style.main}>
                                                <li><h1>1. 비회원 이용<br /><p>따릉이는 회원가입을 하지 않아도 사용가능합니다.<br />초기 화면에서 ‘비회원＇을 선택해 주세요.​​</p></h1><img src="/infoimg/guide_05a_1.png" alt=""/></li>
                                                <li><h1>2. 이용권 선택<br /><p>비회원은 일일권 중 1시간 또는 2시간권을 선택할 수 있습니다.​</p></h1><img src="/infoimg/guide_05a_2.png" alt=""/></li>
                                                <li><h1>3. 비회원 연령제한<br /><p>- 보호자의 동의가 필요하므로 만13세의 회원은 새싹따릉이 회원가입 후 이용해 주세요.<br />
                                                	- 단, 만 12세 이하의 사용자는 이용할 수 없습니다.​​</p></h1><img src="/infoimg/guide_05a_3.png" alt=""/></li>
                                                <li><h1>4. QR 자전거 대여<br /><p>대여버튼을 누르고 QR자전거의 QR코드를 스캔하면 대여가 시작됩니다.​​</p></h1><img src="/infoimg/guide_05a_4.png" alt=""/></li>
                                            </ul>
                                             <div className={style.nav}>
                                                <div className={style.prevBtn}><img src="/infoimg/prevBtn.jpg" alt=""/></div>
                                                <div className={style.nextBtn}><img src="/infoimg/nextBtn.jpg" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                              	<div id="tab-i" class="tab-content">
                                	<div id="gallery8" className={style.gallery}>
                                        <div className={style.mainHolder}>
                                            <ul className={style.main}>
                                                <li><h1>1. 외국관광객 이용<br /><p>시작화면에서 Foreigner를 선택하면 영어로 된 페이지를 볼 수 있습니다.​​​</p></h1><img src="/infoimg/guide_05b_1.png" alt=""/></li>
                                                <li><h1>2. 다른 언어 선택<br /><p>​영어 외에도 중국어와 일본어 선택을 할 수 있습니다.<br />메뉴&gt;설정&gt;Language​</p></h1><img src="/infoimg/guide_05b_2.png" alt=""/></li>
                                                <li><h1>3. 이용권 선택<br /><p>먼저 결제하려는 수단을 선택하시고 이용권 중 필요한 옵션을 선택해 주세요.​</p></h1><img src="/infoimg/guide_05b_3.png" alt=""/></li>
                                                <li><h1>4. 결제(신용카드)<br /><p>신용카드로 구매하는 경우 한국이 아닌 다른 국가에서 발급된 카드로만 결제가 가능합니다.​</p></h1><img src="/infoimg/guide_05b_4.png" alt=""/></li>
                                                <li><h1>5. 결제(Discover Seoul Pass)<br /><p>Discover Seoul Pass를 선택해 구매하는 경우, 한가지 종류의 이용권만 구매 가능합니다.<br />바우처 번호를 입력해 주세요.​</p></h1><img src="/infoimg/guide_05b_5.png" alt=""/></li>
                                            </ul>
                                             <div className={style.nav}>
                                                <div className={style.prevBtn}><img src="/infoimg/prevBtn.jpg" alt=""/></div>
                                                <div className={style.nextBtn}><img src="/infoimg/nextBtn.jpg" alt=""/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                
                            <div className={style.bike_list} id="tab-7">
                            	<ul className={style.tabs}>
                                    <li class="tab-link current" id="tabh" data-tab="tab-j">결제하기​</li>
                                    <li class="tab-link" id="tabi" data-tab="tab-k">제로페이 관련 결제사</li>
                              	</ul>
                            	<div id="tab-j" class="tab-content current">
                              		<div id="gallery10" className={style.gallery}>
	                                    <div className={style.mainHolder}>
	                                        <ul className={style.main}>
	                                            <li><h1>1. 제로페이 선택<br /><p>구매하기 단계에서 결제수단으로 제로페이를 선택하고 결제를 진행합니다.​</p></h1><img src="/infoimg/guide_07a_1.png" alt=""/></li>
	                                            <li><h1>2. 제로페이 결제 프로세스 연결<br /><p>제로페이 이용화면의 동의를 체크하고 다음을 눌러주세요.​</p></h1><img src="/infoimg/guide_07a_2.png" alt=""/></li>
	                                            <li><h1>3. 결제사 선택<br /><p>회원님이 이용하시는 제로페이 결제사(은행 또는 결제사)를 선택하고 다음을 눌러주세요.​</p></h1><img src="/infoimg/guide_07a_3.png" alt=""/></li>
	                                            <li><h1>4. 결제 완료<br /><p>선택한 결제사의 연결 앱을 통해 제로페이 결제를 진행하면 이용권 구매가 완료됩니다.​</p></h1><img src="/infoimg/guide_07a_4.png" alt=""/></li>
	                                        </ul>
	                                         <div className={style.nav}>
	                                            <div className={style.prevBtn}><img src="/infoimg/prevBtn.jpg" alt=""/></div>
	                                            <div className={style.nextBtn}><img src="/infoimg/nextBtn.jpg" alt=""/></div>
	                                        </div>
	                                    </div>
	                                </div>
                              	</div>
                              	<div id="tab-k" class="tab-content">
                              		<div id="gallery12" className={style.gallery}>
	                                    <div className={style.mainHolder}>
	                                    	<p className={style.guide_title}>제로페이 시스템 점검 : 매일 23:50 ~ 00:15 이용에 차질이 없도록 참고하시기 바랍니다.​</p>
	                                        <ul className={style.main}>
	                                            <li><h1><p></p></h1><img src="/infoimg/guide_07b_1.png" alt=""/></li>
	                                            <li><h1><p></p></h1><img src="/infoimg/guide_07b_2.png" alt=""/></li>
	                                            <li><h1><p></p></h1><img src="/infoimg/guide_07b_3.png" alt=""/></li>
	                                            <li><h1><p></p></h1><img src="/infoimg/guide_07b_4.png" alt=""/></li>
	                                            <li><h1><p></p></h1><img src="/infoimg/guide_07b_5.png" alt=""/></li>
	                                        </ul>
	                                         <div className={style.nav}>
	                                            <div className={style.prevBtn}><img src="/infoimg/prevBtn.jpg" alt=""/></div>
	                                            <div className={style.nextBtn}><img src="/infoimg/nextBtn.jpg" alt=""/></div>
	                                        </div>
	                                    </div>
	                                </div>
                              	</div>
                            </div>
                        </div>
                    </div>
                    <p style={{marginTop: "30px"}}><a href="/info/infoCoupon.do" style={{textDecoration: "underline", color: "#fe4f6c"}}>※ 이용권 사용안내/환불 규정 보기</a></p>
                    <p style={{marginTop: "30px"}}><a href="/customer/faq/faqList.do?gbn=faq" style={{textDecoration: "underline", color: "#fe4f6c"}}>※자주찾는 질문 바로가기</a></p>
                </div>
            </div>
        </div>    
           
        </>
    )
}