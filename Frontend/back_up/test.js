import React from 'react';
// import './test.css';
import style from './test.module.css';
import {Link} from 'react-router-dom';

export default function Test() {
    return(
        <div className={style.wrap} id="sub">   
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.top}>
                    <div className={style.m_sub_header_wrap}>
                        {/* <!-- //.m_sub_header --> */}
                        <div className={style.m_sub_header}>
                            <button className={style.back}></button>
                            <button className={style.close}></button>
                            <span id="title">로그인하기</span>
                        </div>
                    </div>
                    {/* <!-- //.m_sub_header_wrap --> */}
                </div>
                <div className={style.login}>
                    <div className={style.sub_logo}>
                        <h3><img src="/img/logo.png" style={{width:"250px"}} alt="서울자전거 따릉이" /></h3>
                    </div>
                    <div className={style.input_wrap}>
                         <form name='loginForm' action="/j_spring_security_check" method="POST">
                            <div className={style.id}>
                                <input type="text" id="memid" name="j_username" placeholder="아이디" />
                            </div>
                            <div className={style.pw}>
                                <input type="password" id="mempw" name="j_password" placeholder="비밀번호" 
                                data-tk-kbdType="qwerty" data-tk-useinput="true" data-tk-dataType="aA@" autoComplete="off" />
                            </div>
                            <div className={style.login_auto}>
                                <input type="checkbox" name="loginchk" id="loginCheck" />
                                <label htmlFor="loginCheck" id="logchktext"><span></span>로그인 상태 유지</label>
                            </div>
                            <div className={style.login_btns} id="loginBtn"><a href="#">로그인하기</a></div>
                        
                            <input type="hidden" id="ostype" name="appOsType"  value="web"/> 
                            <input type="hidden" id="usrDeviceId" name="usrDeviceId" />
                            
                            <input type="hidden" id="hyLink" name="hyLink" />
                            <input type="hidden" id="orgType" name="orgType" />
                            
                        </form>
                
                        <ul className={style.idpw}>
                            <li className={style.srch_id}>
                                <a href="/memberRegSelect.do" id="memberReg">회원가입</a>
                            </li>
                            <li className={style.srch_id}>
                                <a href="/memberIdFind.do" id="findIdId">
                                    아이디 찾기</a>
                            </li>
                            <li className={style.srch_pw}>
                                <a href="/memberPwFind.do" id="findIdPw">
                                    비밀번호 찾기</a>
                            </li>
                        </ul>
                        {/* <div className={style.sns_wrap}>
                            <img src="img/join_line.jpg" alt="">
                            <ul>
                                <li> <a href="javascript:goSnsLogin(0);" className={style.kakao}></a> </li>
                                <li> <a href="javascript:goSnsLogin(2);" className={style.naver}></a> </li>
                            </ul>
                        </div>
                        <div className="login_btns no_member" id="no_member">
                            <a href="https://www.bikeseoul.com:457/main.do?lang=ko">비회원 로그인</a>
                        </div> */}
                    </div>
                    <div className={style.login_notice_wrap}>
                        <p className={style.title}>
                            SNS 로그인 회원가입시 SNS 제공 업체 정책상 자동로그인이 지원되고 있지 않습니다.<br/>
                            이점 양해 부탁드립니다.</p>
                        <p className={style.desc}>
                            - 자동로그인을 원하시는 경우 따릉이 회원으로 전환.<br/>
                        </p>
                        <p className={style.title}>※ 따릉이 회원 전환 방법</p>
                        <p className={style.desc}>
                            1. SNS로그인-나의 공간-회원정보관리-개인정보수정-비밀번호 변경 메뉴에서 비밀번호 입력
                            <br/>2. 생성된 비밀번호와  따릉이 아이디(개인정보수정에서 확인가능)를 통해 로그인
                        </p>
                    </div>
                    {/* <!-- //.login_notice_wrap --> */}
                </div>
            </div>
        </div>
    </div>

    );
}

