import { useEffect, useRef } from 'react';
import style from './mapNaverDefault.module.css';
// import "../../public/img/icon_big1.png"

const MapNaverDefault = (props) => {
  const mapElement = useRef(null);
  const { naver } = window;



  // 다중 marker 진행중

  var markers = [], infoWindows = [];

  var map = []
  useEffect(() => {
    if (!mapElement.current || !naver) return;


    props.locations.forEach(currentLocation => {
      // console.log(currentLocation[0],currentLocation[1]);
      const location = new naver.maps.LatLng(currentLocation[0],currentLocation[1]);
      const mapOptions = {
        center: location,
        zoom: 17,
        zoomControl: false,
      };
  
      map = new naver.maps.Map(mapElement.current, mapOptions);
      var marker = new naver.maps.Marker({
        position: location,
        map,
        title: 'Unary Spot!!',
        icon: {
            content: 
            `
            <div class="${style.jb_image}"><img src="${process.env.PUBLIC_URL}/img/icon_big1.png" alt=""></div>
              <p class="${style.jb_image_text}">10</p>
            `,
            size: new naver.maps.Size(22, 35),
            anchor: new naver.maps.Point(11, 35)
        }
      });
      var infoWindow = new naver.maps.InfoWindow({
        content: '<div style="width:150px;text-align:center;padding:10px;">  <b>따릉이 테스트</b>.</div>'
    });
      markers.push(marker);
      infoWindows.push(infoWindow);
    });

    naver.maps.Event.addListener(map, 'idle', function() {
      updateMarkers(map, markers);
    });
  

    for (var i=0, ii=markers.length; i<ii; i++) {
      naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
    }

    

    
    var arrayOfCoords = [];
    props.paths.map(path=>{
        console.log(path);
        arrayOfCoords.push(new naver.maps.LatLng(path[1],path[0]));
    })

  
  
  
  var polyline = new naver.maps.Polyline({  
    path: arrayOfCoords,
    map: map
  });
  
  var path = polyline.getPath();
  
  path.pop();


  }, []);

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
    var marker = markers[seq],
        infoWindow = infoWindows[seq];

    if (infoWindow.getMap()) {
        infoWindow.close();
    } else {
        infoWindow.open(map, marker);
    }
}
}

  return (
    <>
      <div ref={mapElement} style={{ minHeight: '100%', marginTop:"45px" }} />
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