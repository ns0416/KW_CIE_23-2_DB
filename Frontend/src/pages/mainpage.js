import React, { useState, useEffect } from 'react';
import {Link, useOutletContext} from 'react-router-dom';
import style from './mainpage.module.css';
import MapNaverDefault from '../components/mapNaverDefault';
import { Container as MapDiv } from 'react-naver-maps';
import axios from 'axios';
import Loading from '../components/Loading';

export default function Mainpage(props) {
	const Commons = useOutletContext();
    //const [isLoggedIn, setisLoggedIn] = React.useState(false);
	//const isLoggedIn = useSelector((state) => state.logged.value);
	const [markers, setMarkers] = useState([]);
	const [selectIndex, setSelectIndex] = useState(-1);
	const [currentlocations, setCurrentLocations] = useState([37.619799199999974,127.05843630000007, 0.0001]); //lat lon radius
	const [startPosision, setStartPosition] = useState(null);
	const [destPosision, setDestPosition] = useState(null);
	const [pathFinder, setPathFinder] = useState(null);
	const [loading, setLoading] = useState(false);
	const getStationNearby = ()=>{
		axios.get("/rest/getStationListNearby", {params:{x:currentlocations[0], y:currentlocations[1], radius:currentlocations[2]}})
		.then((res) => {
			if(res.data.result== "success") {
				//console.log(res.data);
				//console.log(res.data.data);
				setMarkers(res.data.data);
			}
			else { //대여소 조회 실패
				//console.log(res.data);
				console.log("get station error!")
			}
		})
		.catch((err) => console.log(err))
	}
	const getPath = ()=>{
		axios.get("/rest/service/findPath", {params:{s_lat:startPosision[0], s_lon:startPosision[1], d_lat:destPosision[0], d_lon:destPosision[1]}})
		.then((res) => {
			if(res.data.result== "success") {
				//console.log(res.data);
				//console.log(res.data.data);
				setPathFinder(res.data.data);
				setLoading(false);
			}
			else { //대여소 조회 실패
				//console.log(res.data);
				console.log("get pathfinder error!")
			}
		})
		.catch((err) => console.log(err))
	}
	/*useEffect(() => {
		setLocations([[37.619791, 127.060899],[37.619761, 127.060899],[37.519790, 127.060899],[37.508860,127.100200]]);
	}, []);
	*/
	useEffect(() => {
		console.log(pathFinder);

	}, [pathFinder]);
	useEffect(() => {
		getStationNearby();
		console.log(currentlocations);
	}, [currentlocations]);
	useEffect(() => {
		//console.log(markers);
	}, [markers]);
	useEffect(() => {
		//console.log(markers);
	}, [selectIndex]);
	useEffect(() => {
		//console.log(markers);
		setSelectIndex(-1);
		if(startPosision != null && destPosision != null){
			if(startPosision[0] == destPosision[0] && startPosision[1] == destPosision[1]){
				alert("출발 대여소와 도착 대여소가 같습니다!");
				return;
			}
			setLoading(true);
			getPath();
		}
		
	}, [startPosision, destPosision]);
    return(
        <>
	{/* <input type="hidden" id="tabId"> */}

	
   {loading ? <Loading/> : ""}
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
		
	
		{selectIndex > -1 && markers.length > selectIndex ? 
		<div className={style.location_info} style={{position:"fixed"}}>
			<div className={style.location_info_wrap}>
				
				<div className={`${style.mask_close} ${style.location_close}`} onClick={(e)=>{setSelectIndex(-1)}}>
					창닫기                    
				</div>
				

				<p className={style.location_name}>
					<span id="location_id">{markers[selectIndex].station_name}</span>
				</p>

				<div className={style.location_box} id="location_02"> 
					<div className={style.name}>일반 따릉이</div>
					<div className={style.num} id="parkingQRBikeCnt">{markers[selectIndex].general_cnt}</div>
				</div>
				
				<div className={style.location_box} id="location_03"> 
					<div className={style.name}>새싹 따릉이</div>
					<div className={style.num} id="parkingELECBikeCnt">{markers[selectIndex].sprout_cnt}</div>
				</div>
				{Commons.isLoggedIn == true && Commons.userInfo != null ? 
				<>
					<div style={{margin:"auto", textAlign:"center"}}>
						<button type="button" onClick={(e)=>{setStartPosition([markers[selectIndex].lat,markers[selectIndex].lon])}} style={{margin:"auto", marginRight:"1rem", display:"inline-block", lineHeight:"30px", marginTop:"1rem", background:"#2D9D5D", borderRadius:"27.5px", width:"100px", border:"3px solid #2D7245", color:"white", fontSize:"15px", fontWeight:"bold"}}>출발</button>
						<button type="button" onClick={(e)=>{setDestPosition([markers[selectIndex].lat,markers[selectIndex].lon])}}style={{margin:"auto", marginLeft:"1rem", display:"inline-block", lineHeight:"30px", marginTop:"1rem", background:"#2D9D5D", borderRadius:"27.5px", width:"100px", border:"3px solid #2D7245", color:"white", fontSize:"15px", fontWeight:"bold"}}>도착</button>
					</div>
				</>
				:
				""
				}
			</div>
			
		</div>
		:
		""
		}
		{Commons.isLoggedIn == true && Commons.userInfo != null ? 
			<div style={{height:"60px", width:"100%", background:"white", position:"fixed", bottom:"0", zIndex:"999"}}>
				<button type="submit" style={{margin:"auto", display:"block", lineHeight:"40px", marginTop:"7px", background:"#2D9D5D", borderRadius:"27.5px", width:"130px", border:"3px solid #2D7245", color:"white", fontSize:"15px", fontWeight:"bold"}}>대여하기</button>
			</div>
			:
			""
		}
		
		
		<div className={style.container} id="main">
			<div className={style.map} id="mapDiv" style={{height: "844px", position: "relative", overflow: "hidden", background: "rgb(248, 249, 250)"}}>
				<div className={style.side_area}>
					<a className={`${style.search_bike} ${style.search_open}`}>검색하기</a>
					<a className={style.refresh}>새로고침</a>
					<a className={style.question}>이용안내</a>
				</div>
				<MapDiv style={{ width: '100%', height: '100%' }}>
        	    	<MapNaverDefault curLocation={currentlocations} locations={markers} setCurrentLocations={setCurrentLocations} setSelectIndex={setSelectIndex} pathFinder={pathFinder}/>
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

