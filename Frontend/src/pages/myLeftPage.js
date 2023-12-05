import React from 'react';
import {Link} from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './myLeftPage.module.css';
import Header from '../header.js';

import { useSelector,useDispatch } from "react-redux";
import { Login, Logout } from '../_redux_slice/loginslice';
import axios from "axios";

export default function MyLeftPage() {
    // const [isLoggedIn, setisLoggedIn] = React.useState(true);
    const [user_id, getuser_id] = React.useState('user_id123');
    const [valid_date, getvalid_date] = React.useState('');
    const [mileage, getmileage] = React.useState('0');

    const isLoggedIn = useSelector((state) => state.logged.value)
    const dispatch = useDispatch();
    
    const navigate = useNavigate();

    const gohome =() => {
        navigate('/');
    }

    const [values, setvalues] = React.useState({
        id: "",
        pw: "",
    })

    const [errors, seterrors] = React.useState({
        id: "",
        pw: "",
    })

    function ChangeHandler(e) {
        setvalues({
            ...values,
            [e.target.name]: e.target.value,
        });
    }

    function validate() {
        const errors ={
            id: "",
            pw: ""
        }

        if(!values.id) {
            errors.id ="아이디를 입력하세요"
            alert(errors.id)
        }

        if(!values.pw) {
            errors.pw ="비밀번호를 입력하세요"
            alert(errors.pw)
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
        // alert(JSON.stringify(values,null,2));
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/login", values)
            .then((res) => {
                if(res.data.result == "success") {
                    dispatch(Login());
                    navigate('/');
                }
                else {
                    alert("Login Failed");
                }
            })
            .catch((err) => console.log(err))
    }
    
    

    function logout() {
        // 로그아웃 처리
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/logout")
        .then((res) => {
            if(res.data.result== "success") {
                dispatch(Logout());
            }
            else { //로그아웃 실패 출력
                console.log(res.data);
                console.log("logout result error!")
            }
        })
        .catch((err) => console.log(err))
    }

 

    // 로그인 상태 반영
    // React.useEffect(() =>{
    //     dispatch(checkLogin())
    //     .then((res) => {
    //         console.log(res);
    //         if(res.payload.rcvd_data.logged == "true") {
    //             setisLoggedIn(true)
    //         }
    //         else {
    //             setisLoggedIn(false)
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // })

    // 로그인 상태에서 페이지 최초 로딩 시 사용자 정보 받아오기
    React.useEffect(() =>{
                
        // id정보 받아오기
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/service/getUserInfo")
        .then((res) => {
            if(res.data.logged== true) {
                getuser_id(res.data.id);
                dispatch(Login());
            }
            else { //로그인 상태가 아니면 로그아웃처리
                //console.log("current state is log out state, execute logout")
                dispatch(Logout());
            }
        })
        .catch((err) => console.log(err))

        // 마일리지 정보 받아오기
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/service/getMileage")
        .then((res) => {
            if(res.data.result == "success") {
                getmileage(res.data.mileage);
            }
            else {
                //console.log("getmileage error!")
            }
        })
        .catch((err) => console.log(err))

        // 사용중인 대여권 정보 받아오기
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/service/getActivationTicket")
        .then((res) => {
            if(res.data.result == "success") {
                getvalid_date(res.data.data[0].expired_date);
            }
            else {
                //console.log("get active ticket error!")
            }
        })
        .catch((err) => console.log(err))
        

    },[]);

    return (
        <>
        {isLoggedIn ?(
        <div className={style.my_menu}>
            <div className={style.head}>
                <button className={style.close} onClick={gohome}></button>
            </div>
            <dl className={style.profile}>
                <dd className={style.top_img}>
                    <img src='img/mypage_top_pic.png' />
                </dd>
                <dd className={style.user_title}>USER</dd>
                <dd className={style.name}>
                    <span>{user_id}</span>
                </dd>
            </dl>
            
            <div className={style.main_div}>
                <div className={style.my_list}>
			    	<dl className={style.my_info}>
			    		<dd className={style.pic}><img src="img/mypage_icon_01.png" /></dd>  
			    		<dd className={style.title}>이용권 유효기간</dd>
			    		<dd className={style.result}><span>{valid_date}</span></dd>
			    	</dl>
			    	<dl className={style.my_info}>
			    		<dd className={style.pic}><img src="img/mypage_icon_02.png" /></dd>  
			    		<dd className={style.title}>마일리지</dd>
			    		<dd className={style.result}><span>{mileage}</span></dd>
			    	</dl>
			    	<dl className={style.my_info}>
			    		<dd className={style.pic}><img src="img/mypage_icon_03.png" /></dd>
			    		<dd className={style.result}>
                            <Link to='/'>환승카드 관리 &gt;</Link>
			    			{/* <a href="/app/mybike/moveMemberCardRegiView.do?card=Trans" className={style.yesresult}>
			    				환승카드 관리&nbsp;&gt;
			    			</a> */}
			    		</dd>
			    	</dl>
			    </div>
                <ul className={style.tabs}>
                    <li>
                    <Link className={style.link} to={'/favoriteStation'}>
                        <div className={style.mcon}>
                            <div className={style.sub_menu_icon}>
                                <img src="img/main_icon_01.png"></img>
                            </div>
                            즐겨찾는 대여소
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.link} to={'/buyTicketMenu'}>
                            <div className={style.mcon}>
                                <div className={style.sub_menu_icon}>
                                    <img src="img/main_icon_02.png"></img>
                                </div>
                                이용권 구매
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.link} to={'/memberInfoMenu'}>
                            <div className={style.mcon}>
                                <div className={style.sub_menu_icon}>
                                    <img src="img/main_icon_03.png"></img>
                                </div>
                                회원정보 관리
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.link} to={'/PaymentMenu'}>
                            <div className={style.mcon}>
                                <div className={style.sub_menu_icon}>
                                    <img src="img/main_icon_04.png"></img>
                                </div>
                                결제 관리
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.link} to={'/rentStatementMenu'}>
                        <div className={style.mcon}>
                            <div className={style.sub_menu_icon}>
                                <img src="img/main_icon_05.png"></img>
                            </div>
                            이용정보 관리
                        </div>
                        </Link>
                    </li>
                    <li>
                        <Link className={style.link} to={'/neglectReport'}>
                        <div className={style.mcon}>
                            <div className={style.sub_menu_icon}>
                                <img src="img/main_icon_06.png"></img>
                            </div>
                            방치 신고
                        </div>
                        </Link>
                    </li>
                    <li>
                    <Link className={style.link} to='/moveErrReportPage'>
                        <div className={style.mcon}>
                            <div className={style.sub_menu_icon}>
                                <img src="img/main_icon_07.png"></img>
                            </div>
                        고장(장애)신고      
                        </div>
                    </Link>
                    </li>
                    <li>
                        <Link className={style.link} to={'/memberBikeRank'}>
                        <div className={style.mcon}>
                            <div className={style.sub_menu_icon}>
                                <img src="img/main_icon_08.png"></img>
                            </div>
                            따릉이 이용 랭킹
                        </div>
                        </Link>
                    </li>
                   
                </ul>
            </div>
            <div className={style.tail}>
                <Link to={'/infopage'}>
                    <div className={style.bike_guide}>따릉이 이용안내</div>
                </Link>
                <Link to={'/NoticeBoardMenu'}>
                    <div className={style.help_desk}>따릉이 공지사항 및 게시판</div>
                </Link>
                    <div className={style.logout_n}>
						<span className={style.pic}>
							<Link to={"/myLeftPage"} onClick={logout}>
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
                                <input type="text" value={values.id} name="id" placeholder="아이디" onChange={ChangeHandler}/>
                            </div>
                            <div className={style.pw}>
                                {/* <input type="password" id="mempw" name="j_password" placeholder="비밀번호" 
                                data-tk-kbdType="qwerty" data-tk-useinput="true" data-tk-dataType="aA@" autoComplete="off" /> */}
                                <input type="password" value={values.pw} name="pw" placeholder="비밀번호" onChange={ChangeHandler}/>
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
                                <Link id='memberReg' to={'/joinpage1'}>회원가입</Link>
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