import React from 'react';
import axios from "axios";
// import './test.css';
import style from './test.module.css';
import Header from '../header';

import { useSelector, useDispatch } from 'react-redux';
import { Login, Logout } from '../_redux_slice/loginslice';

export default function Test(props) {
    //const isloggedin = useSelector((state) => state.logged.value)
    const dispatch = useDispatch()

    // const [isloggedin, setisloggedin] = React.useState(false);

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
        axios.post("http://seoulbike-kw.namisnt.com:8082/rest/login", values)
            .then((res) => {
                if(res.data.result == "success") {
                    dispatch(Login());
                }
                else {
                    alert("Login Failed");
                }
            })
            .catch((err) => console.log(err))
        
    }

    function logouthandler(e) {
        console.log("log out");
        dispatch(Logout());
    }

    function loginhandler(e) {
        console.log("log in");
        dispatch(Login());
    }

    return(
        <>
        {props.userInfo == null ? (
            <>
            <h1>로그인 상태</h1>
            <button onClick={logouthandler}>로그아웃 하기</button>
            </>
        ):(
            <>
            <div className={style.input_wrap}>
                         <form name='loginForm' onSubmit={SubmitHandler}>
                            <div className={style.id}>
                                <input type="text" value={values.Id} name="Id" placeholder="아이디" onChange={ChangeHandler}/>
                                {/* 아이디 에러출력 */}
                                {/* {errors.Id && <span className={style.error}>{errors.Id}</span>} */}
                            </div>
                            
                            
                            <div className={style.pw}>
                                <input type="password" value={values.Pw} name="Pw" placeholder="비밀번호" onChange={ChangeHandler}/>
                                {/* 비밀번호 에러출력 */}
                                {/* {errors.Pw && <span>{errors.Pw}</span>} */}
                            </div>
                            <div className={style.login_auto}>
                                <input type="checkbox" name="loginchk" id="loginCheck" />
                                <label htmlhtmlFor="loginCheck" id="logchktext"><span></span>로그인 상태 유지</label>
                                
                            </div>
                            <div className={style.login_btns} id="loginBtn"><button type='submit'>로그인하기</button></div>
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

                </div>
            </>
        )}
        </>
    );
}

