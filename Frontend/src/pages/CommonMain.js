import React, { useEffect, useState } from "react";
import axios from "axios";
import {Outlet, useNavigate} from "react-router-dom"
function CommonMain(){
    const navigate = useNavigate();
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState({"id":""});
    const getUserInfo = ()=>{
        // id정보 받아오기
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/service/getUserInfo")
        .then((res) => {
            if(res.data.logged== true) {
                //getuser_id(res.data.id);
                setUserInfo(res.data);
                //dispatch(Login());
            }
            else { //로그인 상태가 아니면 로그아웃처리
                //console.log("current state is log out state, execute logout")
                //dispatch(Logout());
                setUserInfo(null);
                navigate("/main");
            }
        })
        .catch((err) => console.log(err))
    }
    function logout() {
        // 로그아웃 처리
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/logout")
        .then((res) => {
            if(res.data.result== "success") {
                //dispatch(Logout());
                getUserInfo();
            }
            else { //로그아웃 실패 출력
                console.log(res.data);
                console.log("logout result error!")
            }
        })
        .catch((err) => console.log(err))
    }

    useEffect(()=>{
        getUserInfo();
        if(userInfo != null)
            setisLoggedIn(true);
        else
            setisLoggedIn(false);
    }, [isLoggedIn])
    return(
        <Outlet context={{isLoggedIn:isLoggedIn, userInfo:userInfo, setUserInfo:setUserInfo, getUserInfo:getUserInfo, logout:logout}}/>
    )
}
export default CommonMain;