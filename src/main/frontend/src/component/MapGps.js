import React, { useEffect } from 'react'

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
      <div>
        <div>오시는길</div>
        <div>
          <span>서울아산병원</span>
          <span>05505 서울특별시 송파구 올림픽로43길 88 (풍납2동 388-1)</span>
        </div>
        <div id="map" style={{width:"500px", height:"400px"}}></div>
        <div>
          <div>
            순환버스 안내 <br />
            (잠실나루역 ↔ 서울아산병원)
          </div>
          <div>대중교통 이용 시</div>
          <div>병원 진입 혼잡시 우회길 안내</div>
        </div>
        
      </div>
    )
}

export default MapGps