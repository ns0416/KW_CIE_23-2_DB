import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './adnheader.module.css';
import axios from 'axios';

export default function Adnheader()
{ //{prpos.user}
    const [user_id, getuser_id] = React.useState('null');
    const navigate = useNavigate();
    const gomenu =() => {
        navigate('/myLeftPage');
    }

    useEffect(() => {
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/service/getUserInfo")
        .then((res) => {
            if(res.data.logged== true) {
                getuser_id(res.data.id);
            }
            else { //로그인 상태가 아니면 로그아웃처리
                console.log("current state is log out state, kick back to menupage")
                navigate('/myLeftPage');
            }
        })
        .catch((err) => console.log(err))
    },[])
    return (
        <>
        <div className={style.head}>
            <button className={style.close} onClick={gomenu}></button>
        </div>
        <dl className={style.profile}>
            <dd className={style.top_img}>
                <img src="img/mypage_top_pic.png" />
            </dd>
            <dd className={style.user_title}>USER</dd>
            <dd className={style.name}>
                <span>{user_id}</span>
            </dd>
        </dl>
        </>
    )
}