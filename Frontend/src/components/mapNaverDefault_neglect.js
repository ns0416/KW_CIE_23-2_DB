import { useEffect, useRef, useState } from 'react';
import style from './mapNaverDefault.module.css';
// import "../../public/img/icon_big1.png"

const MapNaverDefaultNeglect = (props) => {
  const mapElement = useRef(null);
  const { naver } = window;
  const mapOptions = {
    center: new naver.maps.LatLng(props.curLocation[0],props.curLocation[1]),
    zoom: 17,
    zoomControl: false,
  };
  const [map,setMap] = useState(null);
    
  useEffect(() => {
    if (!mapElement.current || !naver) return;
    if(map == null){
      setMap(new naver.maps.Map(mapElement.current, mapOptions));
    }
  }, []);
  useEffect(() => {
    if (!mapElement.current || !naver || map == null) return;
    naver.maps.Event.addListener(map, 'bounds_changed', function(bounds){
      let coor = map.center;
      props.setCurLocation([coor.y, coor.x]);
    });

  }, [map]);

  return (
    <>
      <div ref={mapElement} style={{ minHeight: '100%', marginTop:"45px"}} />
    </>
  );
};

export default MapNaverDefaultNeglect;


//npm install react-naver-maps
//https://colinch4.github.io/2021-06-07/navermap/
//https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html

// import { useEffect, useRef } from 'react';

// import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps'

// const MapNaverDefault = () => {
//   const mapElement = useRef(null);
//   const { naver } = window;

//   useEffect(() => {
//     if (!mapElement.current || !naver) return;

//     // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
//     const location = new naver.maps.LatLng(37.5656, 126.9769);
//     const mapOptions = {
//       center: location,
//       zoom: 17,
//       zoomControl: true,
//     };

//     const map = new naver.maps.Map(mapElement.current, mapOptions);
//     new naver.maps.Marker({
//       position: location,
//       map,
//     });
//   }, []);

//   return (
//     <>
//     <MapDiv
//       style={{
//         height: 400,
//       }}
//     >
//       <NaverMap>
//         <Marker defaultPosition={{ lat: 37.5666103, lng: 126.9783882 }} />
//       </NaverMap>
//     </MapDiv>
//       <h1>Naver Map - Default</h1>
//       <div ref={mapElement} style={{ minHeight: '400px' }} />
//     </>
//   );
// };

// export default MapNaverDefault;