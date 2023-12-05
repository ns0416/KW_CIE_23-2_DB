import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import style from './mainpage.module.css';
import MapNaverDefault from '../components/mapNaverDefault';
import { Container as MapDiv } from 'react-naver-maps';
import axios from "axios";

export default function Mainpage() {
    const [isLoggedIn, setisLoggedIn] = React.useState(false);
	const [locations, setLocations] = useState();

	const [paths, setPaths] = useState();
	var testPath = [[127.0601522092853,37.61903646741709],[127.0600839353192,37.61898434356526],[127.0600261615648,37.61894682836975],[127.0599395173503,37.61891139969568],[127.0599027730492,37.61891141787929],[127.0598397811788,37.61890727748626],[127.059734758453,37.61886351466417],[127.0597556852057,37.61876963119342],[127.0597136479277,37.61872166571415],[127.0596795152894,37.61870081583437],[127.0594640761784,37.61858024449445],[127.0593145315612,37.61849654466523],[127.059183233349,37.61841106980955],[127.0591519834651,37.61838262310212],[127.0592183720015,37.61835630005307],[127.0595052700741,37.61824259084933],[127.0596175976444,37.6181991263654],[127.0595797830789,37.61816242101084],[127.0594291939467,37.61801622081721],[127.0592420684181,37.61784451352518],[127.0591470381293,37.61775730901165],[127.0590160431459,37.61763711001969],[127.0589677118316,37.61759235482223],[127.0589520925859,37.61757790168618],[127.0589520923167,37.61757790143694],[127.0589755913998,37.61755799659692],[127.0595016740499,37.61711237557496],[127.0594611502943,37.6170721306524],[127.0593396331195,37.61699166059914],[127.059359787514,37.6168950295559],[127.0593597469749,37.61684269160788],[127.0592814318006,37.61675034340404],[127.059425679889,37.61666886009854],[127.0597106326957,37.61652397738602],[127.0597544396936,37.61648996177458],[127.0597914548781,37.61646122023775],[127.0598156860626,37.61642261025565],[127.0603318230916,37.61612162481181],[127.0606533541486,37.61591674328358],[127.0607504769023,37.61585820290388],[127.0608176216356,37.61581778722488],[127.0608369154972,37.61580985790748],[127.0609241794197,37.61577400903632],[127.0612157579368,37.61569344936775],[127.0613023514877,37.61566950251269],[127.0617643470393,37.61564706741207],[127.0619940043375,37.61561009983735],[127.0624456344064,37.61553054519332],[127.0624885324125,37.61552298182971],[127.0624939343021,37.61552203300904],[127.0627537679782,37.61547584934583],[127.0627709475202,37.61547279511544],[127.0629921204912,37.61544974114562],[127.0635967808079,37.61538671637362],[127.0636466819412,37.61538355470162],[127.0636939449092,37.61538143953621],[127.0637477780072,37.61538036602562],[127.0638318253578,37.61538763764413],[127.0642691076559,37.61543650040144],[127.0643281970773,37.61543646896899],[127.0643938365195,37.61542702777716],[127.0644581628635,37.61540506361483],[127.0645175407501,37.61537107396401],[127.0647250566937,37.61523153621467],[127.064792516291,37.61496438624939],[127.06488380361999,37.614602676924406],[127.0654717029521,37.61474329164904],[127.0655237462808,37.61475574202142],[127.06552377489389,37.614755748864866],[127.0660678685622,37.61488588067771],[127.0660678825461,37.614885884020836],[127.0664032289716,37.61496605526344],[127.0664235766782,37.61497267529408],[127.0666332737789,37.61504084512326],[127.06670776000936,37.61506506532172],[127.0667078217675,37.61506508540321],[127.0667655908239,37.61508386595968],[127.0668928071285,37.61512224041169],[127.06689287138745,37.61512225965945],[127.0669055072169,37.61512604452504],[127.0672627162214,37.61522990936277],[127.0678909279751,37.61541975478328],[127.0681666659446,37.6154816769651],[127.0697600663146,37.61580457885436],[127.0698278672811,37.61581832463551],[127.0700820309135,37.61585488320544],[127.0700821677245,37.61585490002954],[127.0700831976633,37.61585502668456],[127.0701670476012,37.61586808721002],[127.0705710310156,37.61598376269713],[127.07072187628899,37.616031532451494],[127.0712810104478,37.6162085993282],[127.07131438510879,37.61621883384841],[127.07187292754502,37.61639011390569],[127.0719938198747,37.61642718619208],[127.0724654901718,37.61657221373814],[127.0725820911679,37.61661425541752],[127.0728893017439,37.61671095247324],[127.0728992151032,37.61671373050761],[127.07289930134188,37.616713754644316],[127.0733175367412,37.61683081144903],[127.0737085938014,37.61695663808658],[127.07370859726024,37.616956639199245],[127.0737406579307,37.6169669527154],[127.0741757178938,37.61711372569114],[127.07417576244598,37.617113740721194],[127.0742586783733,37.61714171310025],[127.0749132928743,37.61737820260495],[127.07491332377967,37.617378213769626],[127.0754715664919,37.61757988093506]];
	
	function serviceFindPath() {
		
        axios.get("http://seoulbike-kw.namisnt.com:8082/rest/service/findPath?s_lon=127.060899&s_lat=37.619791&d_lon=127.060200&d_lat=37.608860")
        .then((res) => {
            if(res.data.result== "success") {
                console.log("success");
				console.log(res.data);
				return res.data.path;
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
		// serviceFindPath();
		setPaths(testPath);
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
        	    	<MapNaverDefault locations={locations} paths={paths}/>
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

