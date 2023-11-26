import React from 'react';
import style from './infopage.module.css';
import Header from '../header.js';

export default function Infopage()
{
    return(
        <>
        <div className={[style.wrap, style.guide].join(' ')} id='sub'>
            <Header title="이용안내"/>
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
                            <div className={[style.r_tabs_accordion_title, style.r_tabs_state_defaul].join(' ')}>
                                <a href='#tab-1' className={style.r_tabs_anchor}>대중교통 환승 마일리지 서비스</a>    
                            </div>
                            <div className={[style.r_tabs_accordion_title, style.r_tabs_state_defaul].join(' ')}>
                                <a href='#tab-1' className={style.r_tabs_anchor}>이용권·추가요금 결제 안내​</a>    
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