import React, { useEffect } from 'react'
import '../css/MapGps.css'

const { kakao } = window;

const MapGps = () => {

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.5265455, 127.1081223),
      level: 4
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.5265455, 127.1081223); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
      <div className='map-container'>
        <div className='map-head'>오시는길</div>
        <div className='map-hospital-addr'>
          <h4>
            서울아산병원
            <span>
              05505 서울특별시 송파구 올림픽로43길 88 (풍납2동 388-1)
            </span>
          </h4>
        </div>
        <div id="map" style={{width:"100%", height:"500px"}}></div>
        <div className='map-public-transportation'>
          <ul>
            <li>
              순환버스 안내 <br />
              (잠실나루역 ↔ 서울아산병원)
            </li>
            <li>대중교통 이용 시</li>
            <li>병원 진입 혼잡시 우회길 안내</li>
          </ul>
        </div>
        
      </div>
    )
}

export default MapGps