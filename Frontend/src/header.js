import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './header.module.css';

export default function Header(props)
{
    const navigate = useNavigate();
    const gohome =() => {
        navigate('/');
    }
    const goback = () => {
        navigate(-1);
    }
    return(
        <>
        
            <div className={style.header_wrap}>
                <div className={style.header}>
                    <div className={style.top}>
	        			<div className={style.m_sub_header_wrap}>
	        				<div className={style.m_sub_header}>
	        					<button className={style.back} onClick={goback}></button>
	        					<button className={style.close} onClick={gohome}></button>
	        					<span id="title">{props.title}</span>
	        				</div>
	        			</div>
                    </div>
                </div>
            </div>
        </>
    )
}