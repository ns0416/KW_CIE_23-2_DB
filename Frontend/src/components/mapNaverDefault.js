import { useEffect, useRef, useState } from 'react';
import style from './mapNaverDefault.module.css';
// import "../../public/img/icon_big1.png"

const MapNaverDefault = (props) => {
  const mapElement = useRef(null);
  const { naver } = window;
  const mapOptions = {
    center: new naver.maps.LatLng(props.curLocation[0],props.curLocation[1]),
    zoom: 17,
    zoomControl: false,
  };
  // 다중 marker 진행중
  var markers = [], infoWindows = [];
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
      let radius = 0;
      let y = bounds.getNE().lat() - bounds.getSW().lat();
      let x = bounds.getNE().lng() - bounds.getSW().lng();
      console.log(x + " "+y)
      if(x > y)
        radius = x/2;
      else
        radius = y/2;
        for (var i=0; i<markers.length; i++) {
          hideMarker(map, markers[i]);
        }
      props.setCurrentLocations([coor.x, coor.y, radius]);
    });
    //markers = [];
    //infoWindows = [];
    
    props.locations.forEach(currentLocation => {
      let location = new naver.maps.LatLng(currentLocation.lat,currentLocation.lon);
      var marker = new naver.maps.Marker({
        position: location,
        map,
        title: currentLocation.station_name,
        icon: {
            content: 
            `
            <div class="${style.jb_image}" style="display:contents"><img src="${process.env.PUBLIC_URL}/img/icon_big1.png" alt="">
              <p class="${style.jb_image_text}" style="color:white;font-weight:bold; width:44px;height:44px; line-height:44px; text-align:center; z-index:99">${currentLocation.general_cnt+currentLocation.sprout_cnt}</p></div>
            `,
            size: new naver.maps.Size(22, 35),
            anchor: new naver.maps.Point(11, 35)
        }
      });
      var infoWindow = new naver.maps.InfoWindow({
        content: '<div style="width:150px;text-align:center;padding:10px;">  <b>밍구리 사랑해!</b>.</div>'
    });
      markers.push(marker);
      infoWindows.push(infoWindow);
    });
    console.log("foreach end "+markers.length);
    for (var i=0; i<markers.length; i++) {
      naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
    }
    updateMarkers(map, markers);
    
      // console.log(currentLocation[0], currentLocation[1]);
      // const location = new naver.maps.LatLng(37.619791, 127.060899);
      // const mapOptions = {
      //   center: location,
      //   zoom: 17,
      //   zoomControl: false,
      // };
  
      // const map = new naver.maps.Map(mapElement.current, mapOptions);
      // new naver.maps.Marker({
      //   position: location,
      //   map,
      //   title: 'Unary Spot!!',
      //   icon: {
      //       content: 
      //       `
      //       <div className="${style.jb_image}"><img src="${process.env.PUBLIC_URL}/img/icon_big1.png" alt=""></div>
      //         <p className="${style.jb_image_text}">10</p>
      //       `,
      //       size: new naver.maps.Size(22, 35),
      //       anchor: new naver.maps.Point(11, 35)
      //   }
      // });

  }, [map, props.locations]);

  function updateMarkers(map, markers) {

    var mapBounds = map.getBounds();
    var marker, position;

    for (var i = 0; i < markers.length; i++) {

        marker = markers[i]
        position = marker.getPosition();

        if (mapBounds.hasLatLng(position)) {
            showMarker(map, marker);
        } else {
            hideMarker(map, marker);
        }
    }
}


function showMarker(map, marker) {

  if (marker.setMap()) return;
  marker.setMap(map);
}

function hideMarker(map, marker) {

  if (!marker.setMap()) return;
  marker.setMap(null);
}

// 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
function getClickHandler(seq) {
  

  return function(e) {
    console.log("select : ", seq);
    props.setSelectIndex(seq);
    /*
    var marker = markers[seq],
        infoWindow = infoWindows[seq];

    if (infoWindow.getMap()) {
        infoWindow.close();
    } else {
        infoWindow.open(map, marker);
    }
    */
}

}

  return (
    <>
      <div ref={mapElement} style={{ minHeight: '100%', marginTop:"45px"}} />
    </>
  );
};

export default MapNaverDefault;


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