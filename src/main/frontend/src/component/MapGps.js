import React, { useEffect, useState } from 'react'
import '../css/MapGps.css'
import { useNavigate } from 'react-router-dom';

const { kakao } = window;

const MapGps = () => {

  const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState('busInfo');

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

  const handleClick = (option) => {
    setSelectedOption(option);
    // navigate() can be used to redirect if needed
  };



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
        <li onClick={() => handleClick('busInfo')}>
          순환버스 안내 <br />
          (잠실나루역 ↔ 서울아산병원)
        </li>
        <li onClick={() => handleClick('publicTransport')}>
          대중교통 이용 시
        </li>
        <li onClick={() => handleClick('detour')}>
          병원 진입 혼잡시 우회길 안내
        </li>
      </ul>
      <div className='map-public-transportation-content'>
        {selectedOption === 'busInfo' && (
          <div className='map-busInfo-container'>
            <p>
              당일 외래/입원 환자 및 그 보호자를 위한 순환버스입니다. <br />
              장례식장 이용, 일반용무 등으로 오신 분은 이용이 불가하니 양해 부탁드립니다.
            </p>
            <ul>
              <li>
                <div>운행코스</div>
                <div>감염관리센터(CIC) 앞 ↔ 잠실나루역 1번 출구 서울책보고 앞 왕복운행</div>
              </li>
              <li>
                <div>운행시간</div>
                <div>
                  평일 8:30~ 17:00 (약 10분 간격)
                  <ul>
                    <li>* 중식시간 운행 11:10, 11:30, 11:45, 12:00, 12:15, 12:30, 12:50</li>
                    <li>* 토요일, 일요일, 공휴일은 운행하지 않습니다.</li>
                  </ul>
                </div>
              </li>
              <li>
                <div>탑승장소</div>
                <div>asd</div>
              </li>
              <li>
                <div>도보</div>
                <div>asd</div>
              </li>
            </ul>
          </div>
        )}
        {selectedOption === 'publicTransport' && (
          <div>대중교통 이용 시 내용이 여기에 표시됩니다.</div>
        )}
        {selectedOption === 'detour' && (
          <div>병원 진입 혼잡시 우회길 안내 내용이 여기에 표시됩니다.</div>
        )}
      </div>
      </div>
    </div>
  )
}

export default MapGps