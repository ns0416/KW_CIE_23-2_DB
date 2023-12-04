import { useEffect, useRef } from 'react';
import style from './mapNaverDefault.module.css';
// import "../../public/img/icon_big1.png"

const MapNaverDefault = (props) => {
  const mapElement = useRef(null);
  const { naver } = window;


  // 다중 marker 진행중

  useEffect(() => {
    if (!mapElement.current || !naver) return;

    props.locations.forEach(currentLocation => {
      console.log(currentLocation[0],currentLocation[1]);
      const location = new naver.maps.LatLng(currentLocation[0],currentLocation[1]);
      const mapOptions = {
        center: location,
        zoom: 17,
        zoomControl: false,
      };
  
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      new naver.maps.Marker({
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
    });

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
      //       <div class="${style.jb_image}"><img src="${process.env.PUBLIC_URL}/img/icon_big1.png" alt=""></div>
      //         <p class="${style.jb_image_text}">10</p>
      //       `,
      //       size: new naver.maps.Size(22, 35),
      //       anchor: new naver.maps.Point(11, 35)
      //   }
      // });

  }, []);

  return (
    <>
      <h1>Naver Map - Default</h1>
      <div ref={mapElement} style={{ minHeight: '100%', marginTop:"45px" }} />
    </>
  );
};

export default MapNaverDefault;