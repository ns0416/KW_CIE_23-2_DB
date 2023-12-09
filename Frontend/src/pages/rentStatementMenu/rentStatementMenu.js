import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation, useOutletContext } from 'react-router-dom';
import style from './rentStatementMenu.module.css';
import Header from '../../header.js';

export default function RentStatementMenu() {
    const Commons = useOutletContext();
    const [values, setvalues] = React.useState({
        Id: "",
        Pw: "",
    })

    const [errors, seterrors] = React.useState({
        Id: "",
        Pw: "",
    })

    function ChangeHandler(e) {
        setvalues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    function validate() {
        const errors ={
            Id: "",
            Pw: ""
        }

        if(!values.Id) {
            errors.Id ="아이디를 입력하세요"
            alert(errors.Id)
        }

        if(!values.Pw) {
            errors.Pw ="비밀번호를 입력하세요"
            alert(errors.Pw)
        }
        return errors
    }

    function SubmitHandler(e) {
        e.preventDefault();
        const errors = validate();  //필드검사
        seterrors(errors); //에러 설정
        if(Object.values(errors).some(v=>v)) {
            return
        }
        alert(JSON.stringify(values,null,2));
    }
    //const [isLoggedIn, setisLoggedIn] = React.useState(true);
    const navigate = useNavigate();

    const gohome =() => {
        navigate('/');
    }
    
    //let {state} = useLocation();
    // const location = useLocation();
    // const {isLoggedIn} = location.state.isLoggedIn;
    //function logout() {
        
        // location.setisLoggedIn(false);
        // setisLoggedIn(false);
    //}

    //const [user_id, getuser_id] = React.useState('user_id123');
    const [valid_date, getvalid_date] = React.useState('2024-11-13 00:00');
    const [mileage, getmileage] = React.useState('1000');

    return (
        <>
        {Commons.isLoggedIn && Commons.userInfo != null ?(
        <div className={style.my_menu}>
            <Header title={""}/>
            <dl className={style.profile}>
                <dd className={style.top_img}>
                    <img src='img/mypage_top_pic.png' />
                </dd>
                <dd className={style.user_title}>USER</dd>
                <dd className={style.name}>
                    <span>{Commons.userInfo["id"]}</span>
                </dd>
            </dl>
            
            <div className={style.main_div}>
                <div className={style.my_list}>
                    <p className={style.sub_m_title}>이용정보 관리</p>
                </div>
                <ul className={style.tabs}>
						<a href="/app/mybike/moveMemberCardRegiView.do" className={style.yesresult}>
							<li>
                                <div className={style.mcon}>
                                    <div className={style.sub_menu_icon}> 
										<img src="img/use_icon_01.png" alt="" />
									</div>
									대여반납이력
								</div>
							</li>
						</a>
						<a href="/app/mybike/memberOpinion/memberOpinionList.do" className={style.yesresult}>
							<li>
								<div className={style.mcon}>
									<div className={style.sub_menu_icon}> 
										<img src="img/use_icon_02.png" alt="" />
									</div>     
									이용권 내역
								</div>
							</li>
						</a>
						<a href="/customer/opinionBoard/opinionBoardList.do" className={style.yesresult}>
							<li>
								<div className={style.mcon}>
									<div className={style.sub_menu_icon}> 
										<img src="img/use_icon_03.png" alt="" />
									</div>     
									환승마일리지(적립내역)
								</div>
							</li>
						</a>
					</ul>
            </div>
            <div className={style.tail}>
                <Link to={'/infopage'}>
                    <div className={style.bike_guide}>따릉이 이용안내</div>
                </Link>
                <Link to={'/'}>
                    <div className={style.help_desk}>따릉이 공지사항 및 게시판</div>
                </Link>
                    <div className={style.logout_n}>
						<span className={style.pic}>
							<Link to={"/"} onClick={Commons.logout}>
								로그아웃</Link>
							<span className={style.tel}>
								☎1599-0120</span>
						</span>
				    </div>
            </div>
        </div>) : 
        (
        <div className={style.wrap} id="sub">
            <Header title="로그인하기"/>   
        <div className={style.container}>
            <div className={style.content}>
                <div className={style.login}>
                    <div className={style.sub_logo}>
                        <h3><img src="/img/logo.png" style={{width:"250px"}} alt="서울자전거 따릉이" /></h3>
                    </div>
                    <div className={style.input_wrap}>
                         {/* <form name='loginForm' action="/j_spring_security_check" method="POST"> */}
                         <form name='loginForm' onSubmit={SubmitHandler}>
                            <div className={style.id}>
                                {/* <input type="text" id="memid" name="j_username" placeholder="아이디" /> */}
                                <input type="text" value={values.Id} name="Id" placeholder="아이디" onChange={ChangeHandler}/>
                            </div>
                            <div className={style.pw}>
                                {/* <input type="password" id="mempw" name="j_password" placeholder="비밀번호" 
                                data-tk-kbdType="qwerty" data-tk-useinput="true" data-tk-dataType="aA@" autoComplete="off" /> */}
                                <input type="password" value={values.Pw} name="Pw" placeholder="비밀번호" onChange={ChangeHandler}/>
                            </div>
                            <div className={style.login_auto}>
                                <input type="checkbox" name="loginchk" id="loginCheck" />
                                <label htmlFor="loginCheck" id="logchktext"><span></span>로그인 상태 유지</label>
                            </div>
                            {/* <div className={style.login_btns} id="loginBtn"><a href="#">로그인하기</a></div> */}
                            <div className={style.login_btns} id="loginBtn"><button type='submit'>로그인하기</button></div>
                        
                            <input type="hidden" id="ostype" name="appOsType"  value="web"/> 
                            <input type="hidden" id="usrDeviceId" name="usrDeviceId" />
                            
                            <input type="hidden" id="hyLink" name="hyLink" />
                            <input type="hidden" id="orgType" name="orgType" />
                            
                        </form>
                
                        <ul className={style.idpw}>
                            <li className={style.srch_id}>
                                <Link id='memberReg' to={'/joinpage'}>회원가입</Link>
                            </li>
                            <li className={style.srch_id}>
                                <Link id='findIdId' to={'/findid'}>아이디 찾기</Link>
                                {/* <a href="/memberIdFind.do" id="findIdId">
                                    아이디 찾기</a> */}
                            </li>
                            <li className={style.srch_pw}>
                                <Link id='findIdPw' to={'/findpw'}>비밀번호 찾기</Link>
                                {/* <a href="/memberPwFind.do" id="findIdPw">
                                    비밀번호 찾기</a> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )}
        </>
    );
}

// export default myLeftPage;