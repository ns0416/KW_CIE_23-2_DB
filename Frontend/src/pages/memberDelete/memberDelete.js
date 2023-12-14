import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './memberDelete.module.css';
import Header from '../../header.js';

export default function MemberDelete() {
    return (
        <>
<div className={`${style.wrap} ${style.my}`} id="sub">
    <div className={style.header_wrap}>
        <div className={style.header}>
        	<div className={style.top}>
				<div className={style.m_sub_header_wrap}>
					<div className={style.m_sub_header}>
						<button className={style.back}></button>
						<button className={style.close}></button>
						<span id="title">회원탈퇴</span>
					</div>
				</div>
			</div>
			<div className={style.logo}><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이"/></a></div>
        </div>
    </div>
    <div className={style.container}>			
<div className={style.content}>
<div className={style.my}>
            <dl className={style.out_txt}>
                <dt><span>회원탈퇴</span>를 신청합니다.</dt>
                <dd>서울자전거를 이용해 주셔서 감사합니다.</dd>
                <dd>회원탈퇴를 하실 경우 아래와 같이 회원정보가 처리됩니다.</dd>
            </dl>

            <div className={style.out_info}>
                <ul>
                    <li>탈퇴 신청 즉시 회원탈퇴 처리되며, 해당 아이디의 회원정보 및 마일리지는 삭제처리되며, 복원할 수 없습니다.</li>
                    <li>회원탈퇴 이후 같은 아이디로는 재가입이 불가능 합니다.</li>
                    <li>이용권 기간이 남아있는 경우 즉시 탈퇴가 불가능 하오니 고객센터에 문의 바랍니다.</li>
                </ul> 
            </div>
            
            <div className={style.out_box}>
            	<p className={style.remains}>회원님께서는<em>2024.05.23</em><span className={style.pwblock}>일까지 이용권 사용기간이 남아 있습니다.</span><br/><br/></p>
				<select id="leaveReasonCd" name="leaveReasonCd" style={{display:"block"}}>
					<option value="">선택</option><option id="comm_OUT_002" value="OUT_002">서비스 불만족</option><option id="comm_OUT_003" value="OUT_003">요금정책 불만</option><option id="comm_OUT_004" value="OUT_004">기타</option><option id="comm_OUT_005" value="OUT_005">개인정보</option>
				</select>
                <div className={style.btn}><a href="#" id="confirm">회원탈퇴</a></div>
            </div>
			    <form id="frm">
				</form>
        </div>

        
        </div>
    </div>
    
    
</div>
    



        </>
    );
}
