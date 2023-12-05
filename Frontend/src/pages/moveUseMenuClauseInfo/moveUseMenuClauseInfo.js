import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './moveUseMenuClauseInfo.module.css';
import Header from '../../header.js';

export default function NoticeBoard() {
    return (
    <>
<div className={`${style.wrap} ${style.board}`} id="sub">   
    <div className={style.header_wrap}>
        <div className={style.header}>
        	<div className={style.top}>
				<div className={style.m_sub_header_wrap}>
					<div className={style.m_sub_header}>
						<button className={style.back}></button>
						<button className={style.close}></button>
						<span id="title">이용약관 및 방침</span>
					</div>
				</div>
		
				
			</div>
			<div className={style.logo}><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이"/></a></div> 
        </div>
    </div>
	<div className={style.container}>
		<div className={style.content}>
			<div className={style.business}>
				<div className={style.top}>
                	<h3>이용약관 및 방침</h3>
                	
            	</div>
				<ul className={style.tabs}>
					<li className={`tab-link ${style.current}`} data-tab="tab-1" id="agreement_tab">이용약관</li>
					<li className={`tab-link`} data-tab="tab-2" id="perInfo_tab">개인정보처리방침</li>
					<li className={`tab-link`} data-tab="tab-3" id="duty_tab">의무와 책임</li>
					<li className={`tab-link`} data-tab="tab-4" id="location_tab">위치정보 및 위치기반서비스이용약관</li>
				</ul>
            
				<div id="tab-1" className={`tab-content ${style.current}`}>
					<div className={style.agreement}>
	<p className={style.stitle3}>제 1장 총칙 </p>
	<p className={`${style.usagr2} ${style.mb10}`}>
		제1조 (목적) <br/>
		본 약관은 서울특별시에서 도입‧운영하는 서울공공자전거 이용에 관한 조건 및 기타 필요한 사항을 규정하는 것을 목적으로 합니다.
	</p>
	<br/>
	<p className={`${style.usagr2} ${style.mb10}`}>
		제2조 (이용약관의 공지) <br/>
		➀ 서울공공자전거 이용을 위한 회원가입 시(또는 약관시행일 이후 이용권 신규 구매 시), 이용자는 본약관의 내용을 이해하고 동의한 것으로 간주합니다.<br/>
		➁ 서울공공자전거는 관련 법령에 위반되지 않는 범위내에서 본 약관을 개정할 수 있으며, 약관 변경 시 시행일로 최소 7일 이상의 고객 고지기간을 둡니다. 변경된 약관은 고지기간 중 공지한 시행일로부터 효력을 발생합니다.<br/>
		➂ 이용자가 상기 고지기간 중 변경된 약관에 대한 명시적인 거절의 의사표시를 하지 않았을 때에는 본 약관 변경에 동의한 것으로 간주됩니다. 개정약관에 동의하지 않을 경우, 이용자는 약관제12조에 따라 회원가입을 해지(탈퇴)할 수있습니다.<br/>
	</p>
	<br/>
	<p className={`${style.usagr2} ${style.mb10}`}>
		제3조 (약관 외 준칙) 
		본 약관에 정의되지 않은 사항은 관계법령이 있는 경우 그 규정을 따르며, 그렇지 않은 경우 일반적인 관례에 따릅니다. 
	</p>
	<br/>
	<p className={`${style.usagr2} ${style.mb10}`}>
		제4조 (용어의 정의) 본 약관에서 사용하는 용어는 아래와 같습니다. 
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		1. 이용자 : 서울공공자전거 이용약관(이하 '본 약관')에 동의하며, 서울공공자전거의 회원, 정회원, 비(일일)회원으로 가입한 자
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		2. 회원 : 본 약관에 동의하여 서울공공자전거 회원으로 가입한자
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		3. 정회원 : 본 약관에 동의하여 서울공공자전거의 이용을 위한 회원에 가입하고 유료결제 수행 후, 서울공공자전거 이용권한을 획득한자
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		4. 비회원 : 비회원 이용권을 이용하는 이용자
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		5. 비밀번호 : 서울공공자전거의 시스템 상에 등록된 개인정보를 보호하기 위해 설정된 개인이 정의한 영문, 숫자 및 특수기호 조합
	</p>
	
	<p className={`${style.usagr} ${style.mb10}`}>
		6. 삭제(2022.07.1.)
	</p>
	
	<p className={`${style.usagr} ${style.mb10}`}>
		7. 따릉이 : 서울공공자전거 대여소에 거치되어 회원 및 비회원이 대여할 수 있는 자전거
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		8. 대여소: 무인으로 자전거를 대여 및 반납할 수 있도록 하는 시설
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		9. 거치대: 대여소 내의 반자동 잠금식 자전거 주차시설 
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		10. 대여 : 서울공공자전거 대여소에서 자전거를 선택 후, 이용권을 구매‧등록하고 지정한 방법에 따라 잠금장치를 해제한 후, 자전거 단말기에서
“잠금이 해제되었습니다.”라는 음성안내가 된 경우
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		11. 반납 : 서울공공자전거 대여소에 자전거를 거치 후, 서울공공자전거에서 지정한 방법에 따라 잠금장치를 잠금한 후, 자전거 단말기에서 “반납되었습니다.” 라는 음성안내 및 안내메시지(SMS등)가 수신된 경우
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		12. 스마트폰 : 이용자가 앱 프로그램을 이용하여 정보를 수용하고, 제공받고자 하는 서비스를 이용할 수 있도록 하는 개인용 휴대전화기 
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		13. 서울공공자전거 앱 : 서울공공자전거 회원가입 및 기본요금 결제, 서비스 이용 등이 가능한 앱 
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		14. 서비스 이용 : 이용자가 서울공공자전거 대여소에서 자전거를 대여하여 이용하고, 이를 반납하는 일련의 행위
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		15. 기본요금 : 정기권 또는 1일권 구매 시 지정된 요금  
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		16. 기본이용시간 : 기본요금 이외의 별도 이용료를 납부하지 않고, 이용권별 지정된 이용시간
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		17. 최대 초과 대여시간 : 1시간권의 경우 총 4시간, 2시간권의 경우 총 6시간으로 초과될시 분실 및 도난으로 간주할 수 있는 제한 시간
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		18. 추가요금 : 기본이용시간이 초과된 경우 지불하게 되는 서울공공자전거에서 지정한 요금 
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		19. 환승 마일리지 : 정기권 구매를 한 이용자에 한하여 &lt;버스‧지하철&gt; ⇒ &lt;따릉이&gt;, &lt;따릉이&gt; ⇒ &lt;버스‧지하철&gt;로 30분 이내에 환승할 경우에 적립되는 마일리지 (단, 환승마일리지는 서울공공자전거에서 공지하는 이용권에 한해 제공됩니다.)
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		20. 종일 이용권 : 외국인 이용자가 서울공공자전거 대여소에서 자전거를 대여하여 중간 반납없이 최대 24시간동안 이용할수 있는 이용권
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		21. 법인용 단체권 : 법인에서 구매하여 회원 또는 비회원에게 선물하기 등을 통해 지급할 수 있는 이용권
	</p>
	<br/>
	<p className={style.stitle3}>제 2장 회원 규정</p>
	<p className={`${style.usagr2} ${style.mb10}`}>
		제5조 (회원신청) 
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		① 자전거 운전이 가능한 <span style={{textDecoration: "underline"}}>만13세 이상</span>의 국민은 누구나 서울공공자전거의 회원이 될 수 있습니다.
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		② 서울공공자전거의 회원이 되기를 원하는 경우, 서울공공자전거 홈페이지‧앱에서 회원에 가입하여야 합니다.
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		③ 회원가입 시 회원은 다음 각 호의 필수 기재사항을 기입하여야 합니다. <br/>(단, 간편로그인은 간편로그인 절차에 따릅니다.)
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		1. 이름 
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		2. 생년월일,성별 
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		3. 휴대전화번호 
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		4. 아이디 ‧ 비밀번호
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		5. 전자 메일 주소
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		상기 사항은 반드시 본인의 정보를 기입하여야 하며, 변경사항 발생 시 갱신하여야 합니다. 허위 사항 기재, 미갱신 시 불이익을 받으실 수 있습니다.
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		※ 만 13세 미만의 경우 서비스를 이용할 수 없습니다.
	</p>
	<p className={`${style.usagr} ${style.mb10}`}>
		(만 13세 미만의 미성년자가 서비스를 이용하는 경우, 사고 발생 시 보험 적용을 받을 수 없는 등의 불이익을 받으실 수 있습니다.)
	</p>

	<span className={style.file}>
		<a href="#" className={style.last} id="7828,https://bikeseoul.com/upload/daum/notice/notice_file_202311221518027.pdf">이전 약관 보기 (2022. 7. 1. ~ 2023. 11. 20.)</a>
	</span>
	
</div></div>				
				
				
				<form id="frm">
				<input type="hidden" name="imgSeq" value="" />
				<input type="hidden" name="currentPageName" value="notice" />
				</form>
			</div>
		</div>
	</div>
</div>
    </>
    );
}

// export default myLeftPage;