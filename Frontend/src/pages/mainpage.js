import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import style from './mainpage.module.css';
import MapNaverDefault from '../components/mapNaverDefault';
import { Container as MapDiv } from 'react-naver-maps';
import axios from "axios";

export default function Mainpage() {
    const [isLoggedIn, setisLoggedIn] = React.useState(false);
	const [locations, setLocations] = useState();

	function serviceFindPath() {
		
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/service/findPath?s_lon=127.060899&s_lat=37.619791&d_lon=127.060200&d_lat=37.608860")
        .then((res) => {
            if(res.data.result== "success") {
                console.log("success");
				console.log(res.data);
            }
            else { 
				console.log("error");
                console.log(res.data);
                console.log("logout result error!")
            }
        })
        .catch((err) => console.log(err))
    }

	useEffect(() => {
		serviceFindPath();
		setLocations([[37.619791, 127.060899],[37.619761, 127.060899],[37.519790, 127.060899],[37.508860,127.100200]]);
	}, []);

	

    return(
        <>
	{/* <input type="hidden" id="tabId"> */}

   
	<div class={style.wrap}>
    <div class={style.header_wrap}>
        <div class={style.header}>
        	<div class={style.top}>
				<div class={style.m_sub_header_wrap}>
					<div class={style.m_sub_header}>
						<button class={style.back}></button>
						<button class={style.close}></button>
						<span id="title"></span>
					</div>
				</div>
			
			
				
				
			</div>
			<div class={style.logo}><a href="/main.do"><img src="/images/logo.png" alt="서울자전거 따릉이" /></a></div>

            
        </div>
    </div>
<div class={style.mask}>
			<div class={style.maskwrap}>
				<div class={style.mask_close}>닫기</div>
				<div class={style.change_lang} id="changeLang">
					<ul>
						<li class={style.en}><a href="https://www.bikeseoul.com:457/main.do?lang=en">ENGLISH</a></li>
						<li class={style.ch}><a href="https://www.bikeseoul.com:457/main.do?lang=zh">中國語</a></li>
						<li class={style.ja}><a href="https://www.bikeseoul.com:457/main.do?lang=ja">日本語</a></li>
						<li class={style.ko}><a href="https://www.bikeseoul.com">한국어</a></li>
				
					</ul>
				</div>
				<div class={style.search_content}>
					<form id="frm"></form>
				 
					<form class={style.search} id="search" role="search">
						<fieldset class={style.fld_sch}>
							<legend class={style.screen_out}>검색어 입력폼</legend>
							<div class={style.box_search}>                    
								<input type="text" id="searchValue" value="" name="searchValue" title="검색어 입력" placeholder="원하시는 지역이 어디신가요?" />
								<div id="search_data"></div>
							</div>
						</fieldset>
						<input type="hidden" name="searchType" id="searchType" />
					</form>
					
				</div>
				
			</div>
			
		</div> 
		
	
		
		<div class={style.location_info} style={{display: "none"}}>
			<div class={style.location_info_wrap}>
				
				<div class={`${style.mask_close} ${style.location_close}`}>
					창닫기                    
				</div>
				

				<p class={style.location_name}>
					<span id="location_id"></span>
				</p>

				<div class={style.location_box} id="location_02"> 
					<div class={style.name}>일반 따릉이</div>
					<div class={style.num} id="parkingQRBikeCnt"></div>
				</div>
				
				<div class={style.location_box} id="location_03"> 
					<div class={style.name}>새싹 따릉이</div>
					<div class={style.num} id="parkingELECBikeCnt"></div>
				</div>
			</div>
			
		</div>
	 
		
		<div class={style.container} id="main">
			<div class={style.map} id="mapDiv" style={{height: "844px", position: "relative", overflow: "hidden", background: "rgb(248, 249, 250)"}}>
				<div class={style.side_area}>
					<a class={`${style.search_bike} ${style.search_open}`}>검색하기</a>
					<a class={style.refresh}>새로고침</a>
					<a class={style.question}>이용안내</a>
				</div>
				<MapDiv style={{ width: '100%', height: '100%' }}>
        	    	<MapNaverDefault locations={locations}/>
        		</MapDiv>
			
			<div class={style.main_image}>
				<div class={style.content}>
				</div>    
			</div>
			</div>	 
		</div>
	</div>


            <h3>this is main page</h3>
            <Link to='/myLeftPage' state={{isLoggedIn: isLoggedIn}}>마이페이지</Link>
        </>

    );
}

