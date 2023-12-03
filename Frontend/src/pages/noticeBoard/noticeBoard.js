import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './noticeBoard.module.css';
import Header from '../../header.js';

export default function NoticeBoard() {
    return (
    <>
<div className={style.wrap} id="sub">   

    <div className={style.header_wrap}>
        <div className={style.header}>
        	<div className={style.top}>
				<div className={style.m_sub_header_wrap}>
					<div className={style.m_sub_header}>
						<button className={style.back}></button>
						<button className={style.close}></button>
						<span id="title">공지사항</span>
					</div>
				</div>
			</div>
			<div className={style.logo}><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이" /></a></div>
            
        </div>
        
		
    </div>
    <div className={style.container}>
		<div className={style.content}>
			<div className={style.board}>
				<div className={style.top}>
					<h3>공지사항</h3>
				</div>
				<div className={style.board_srch_help}>
					<form id="frm" name="frm" action="/customer/notice/noticeList.do" accept-charset="utf-8">
						<div className={`${style.input} ${style.w70}`}><input type="text" className={style.w100} id="searchValue" name="searchValue" placeholder="검색어을 입력해주세요" value=""/></div>
						<div className={style.btn_search}><a href="#" id="searchButton" name="searchButton">검색</a></div>
					</form>
				</div>
				
				<div className={style.board_box}>
					<table>
						<colgroup>
							<col width="75%"/>
							<col width="25%"/>
						</colgroup>
						<tbody><tr>
							<th style={{textAlign:"center"}}>제목</th>
							<th style={{textAlign:"center"}}>날짜</th>
						</tr>
						<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=4351&amp;currentPageNo=
												1">
											<span style={{fontSize: "15px",color: "blue"}}>출퇴근길 지켜야 할 자전거 에티켓</span>
											</a>
									</td>
									<td>2023.11.10</td>
								</tr>
								<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=4353&amp;currentPageNo=
												1">
											<span style={{fontSize: "15px",color: "blue"}}>[안내] 시민참여 따릉이 재배치 이벤트 안내</span>
											</a>
									</td>
									<td>2023.11.10</td>
								</tr>
								<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=4010&amp;currentPageNo=1">
											<span style={{fontSize: "15px",color: "blue"}}>「교통사망사고 줄이기」따릉이 안전수칙 안내</span>
											</a>
									</td>
									<td>2023.05.09</td>
								</tr>
								<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=4352&amp;currentPageNo=
												1">
											<span style={{fontSize: "15px",color: "blue"}}>한강에서 지켜야 할 자전거 에티켓</span>
											</a>
									</td>
									<td>2023.11.10</td>
								</tr>
								<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=4342&amp;currentPageNo=
												1">
											<span style={{fontSize: "15px",color: "blue"}}>[안내] 티머니고 앱 결제건 관련 안내</span>
											</a>
									</td>
									<td>2023.11.06</td>
								</tr>
								<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=4333&amp;currentPageNo=
												1">
											[안내] 따릉이 안전매너 가이드</a>
									</td>
									<td>2023.10.30</td>
								</tr>
								<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=4067&amp;currentPageNo=
												1">
											[안내] 대여, 임시잠금 해제가 안 되시는 경우</a>
									</td>
									<td>2023.06.15</td>
								</tr>
								<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=3463&amp;currentPageNo=
												1">
											자전거 보험 안내</a>
									</td>
									<td>2022.10.12</td>
								</tr>
								<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=3728&amp;currentPageNo=
												1">
											[안내] 따릉이 반납 시 ‘점자블럭’ 주의 안내</a>
									</td>
									<td>2022.09.16</td>
								</tr>
								<tr>
									<td className={style.left}>
										<a href="/customer/notice/noticeView.do?noticeSeq=3935&amp;currentPageNo=
												1">
											[긴급] 따릉이 대여 다수 실패발생할 경우</a>
									</td>
									<td>2023.03.15</td>
								</tr>
								</tbody></table>
				</div>
				<div className={style.paging}>
					<div id="pagingWeb" className={style.num} style={{display: "none"}}>
						<a href="#" onclick="linkPage(1); return false;"><img src="/images/first.gif" alt="맨 처음 페이지"/></a>
<a href="#" onclick="linkPage(1); return false;"><img src="/images/p_prev.gif" alt="이전 페이지"/></a>
<span className={style.on}><a href="#"><strong>1</strong></a></span>
<span><a href="#" onclick="linkPage(2); return false;">2</a></span>
<span><a href="#" onclick="linkPage(3); return false;">3</a></span>
<span><a href="#" onclick="linkPage(4); return false;">4</a></span>
<span><a href="#" onclick="linkPage(5); return false;">5</a></span>
<span><a href="#" onclick="linkPage(6); return false;">6</a></span>
<span><a href="#" onclick="linkPage(7); return false;">7</a></span>
<span><a href="#" onclick="linkPage(8); return false;">8</a></span>
<span><a href="#" onclick="linkPage(9); return false;">9</a></span>
<span><a href="#" onclick="linkPage(10); return false;">10</a></span>
<a href="#" onclick="linkPage(11); return false;"><img src="/images/p_next.gif" alt="다음 페이지"/></a>
<a href="#" onclick="linkPage(11); return false;"><img src="/images/last.gif" alt="마지막 페이지"/></a>

</div>
					<div id="pagingMobile" className={style.num} style={{display: "inline"}}>
						<a href="#" onclick="linkPage(1); return false;"><img src="/images/first.gif" alt="맨 처음 페이지"/></a>
<a href="#" onclick="linkPage(1); return false;"><img src="/images/p_prev.gif" alt="이전 페이지"/></a>
<span className={style.on}><a href="#"><strong>1</strong></a></span>
<span><a href="#" onclick="linkPage(2); return false;">2</a></span>
<span><a href="#" onclick="linkPage(3); return false;">3</a></span>
<span><a href="#" onclick="linkPage(4); return false;">4</a></span>
<span><a href="#" onclick="linkPage(5); return false;">5</a></span>
<span><a href="#" onclick="linkPage(6); return false;">6</a></span>
<span><a href="#" onclick="linkPage(7); return false;">7</a></span>
<span><a href="#" onclick="linkPage(8); return false;">8</a></span>
<span><a href="#" onclick="linkPage(9); return false;">9</a></span>
<span><a href="#" onclick="linkPage(10); return false;">10</a></span>
<a href="#" onclick="linkPage(11); return false;"><img src="/images/p_next.gif" alt="다음 페이지"/></a>
<a href="#" onclick="linkPage(11); return false;"><img src="/images/last.gif" alt="마지막 페이지"/></a>

</div>
				</div>
			</div>
		</div>
	</div>
</div>

    

		


        </>
    );
}

// export default myLeftPage;