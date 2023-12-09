import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import style from './mainpage.module.css';
import MapNaverDefault from '../components/mapNaverDefault';
import { Container as MapDiv } from 'react-naver-maps';

export default function Mainpage(props) {
    //const [isLoggedIn, setisLoggedIn] = React.useState(false);
	//const isLoggedIn = useSelector((state) => state.logged.value);
	const [locations, setLocations] = useState();

	useEffect(() => {
		setLocations([[37.619791, 127.060899],[37.619761, 127.060899],[37.519790, 127.060899],[37.508860,127.100200]]);
	}, []);

	

    return(
        <>
	{/* <input type="hidden" id="tabId"> */}

   
	<div className={style.wrap}>
    <div className={style.header_wrap}>
        <div className={style.header}>
        	<div className={style.top}>
				<div className={style.m_sub_header_wrap}>
					<div className={style.m_sub_header}>
						<Link to="/myLeftPage" className={style.m_menu}></Link>
						<button className={style.m_global} onClick={(e)=>{alert("준비중입니다");}}></button>
						<span id="title"></span>
					</div>
				</div>
			
			
				
				
			</div>
			<div className={style.logo}><a href="/"><img src="/img/logo.png" alt="서울자전거 따릉이" /></a></div>

            
        </div>
    </div>
<div className={style.mask}>
			<div className={style.maskwrap}>
				<div className={style.mask_close}>닫기</div>
				<div className={style.change_lang} id="changeLang">
					<ul>
						<li className={style.en}><a href="https://www.bikeseoul.com:457/main.do?lang=en">ENGLISH</a></li>
						<li className={style.ch}><a href="https://www.bikeseoul.com:457/main.do?lang=zh">中國語</a></li>
						<li className={style.ja}><a href="https://www.bikeseoul.com:457/main.do?lang=ja">日本語</a></li>
						<li className={style.ko}><a href="https://www.bikeseoul.com">한국어</a></li>
				
					</ul>
				</div>
				<div className={style.search_content}>
					<form id="frm"></form>
				 
					<form className={style.search} id="search" role="search">
						<fieldset className={style.fld_sch}>
							<legend className={style.screen_out}>검색어 입력폼</legend>
							<div className={style.box_search}>                    
								<input type="text" id="searchValue" defaultValue="" name="searchValue" title="검색어 입력" placeholder="원하시는 지역이 어디신가요?" />
								<div id="search_data"></div>
							</div>
						</fieldset>
						<input type="hidden" name="searchType" id="searchType" />
					</form>
					
				</div>
				
			</div>
			
		</div> 
		
	
		
		<div className={style.location_info} style={{display: "none"}}>
			<div className={style.location_info_wrap}>
				
				<div className={`${style.mask_close} ${style.location_close}`}>
					창닫기                    
				</div>
				

				<p className={style.location_name}>
					<span id="location_id"></span>
				</p>

				<div className={style.location_box} id="location_02"> 
					<div className={style.name}>일반 따릉이</div>
					<div className={style.num} id="parkingQRBikeCnt"></div>
				</div>
				
				<div className={style.location_box} id="location_03"> 
					<div className={style.name}>새싹 따릉이</div>
					<div className={style.num} id="parkingELECBikeCnt"></div>
				</div>
			</div>
			
		</div>
	 
		
		<div className={style.container} id="main">
			<div className={style.map} id="mapDiv" style={{height: "844px", position: "relative", overflow: "hidden", background: "rgb(248, 249, 250)"}}>
				<div className={style.side_area}>
					<a className={`${style.search_bike} ${style.search_open}`}>검색하기</a>
					<a className={style.refresh}>새로고침</a>
					<a className={style.question}>이용안내</a>
				</div>
				<MapDiv style={{ width: '100%', height: '100%' }}>
        	    	<MapNaverDefault locations={locations}/>
        		</MapDiv>
			
			<div className={style.main_image}>
				<div className={style.content}>
				</div>    
			</div>
			</div>	 
		</div>
	</div>
        </>

    );
}

