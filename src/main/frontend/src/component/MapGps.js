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
                <div>
                  <p style={{marginBottom: 30}}>
                    [병원에서 탑승 시] - 감염관리센터(CIC) 앞
                    <img src='https://www.amc.seoul.kr/asan/images/infor/location_img07.jpg' alt='' style={{marginTop: 30}} />
                  </p>
                  <p>
                    [잠실나루역에서 탑승 시] - 1번 출구 서울책보고 앞
                    <img src='https://www.amc.seoul.kr/asan/images/infor/location_img02.jpg' alt='' style={{marginTop: 30}} />
                  </p>
                </div>
              </li>
              <li>
                <div>도보</div>
                <div>
                  <img src='	https://www.amc.seoul.kr/asan/images/infor/location_img06.jpg' alt='' />
                </div>
              </li>
            </ul>
          </div>
        )}
        {selectedOption === 'publicTransport' && (
          <div className='map-publicTransport-container'>
            <ul>
              <li>
                <h4>지하철 이용시</h4>
                <div className='subway'>
                  <div className='green'>잠실나루역</div>
                  <div>
                    1번 출구 <strong>→</strong> 순환버스 또는 도보(10분)로 이동 <br/>
                    3번 출구 <strong>→</strong> <span style={{color: '#058b40', fontWeight: 'bold'}}>4318</span> 버스 승차 <strong>→</strong> 하차(서울아산병원 동관) <br/>
                  </div>
                </div>
                <div className='subway'>
                  <div className='green'>
                    잠실역
                  </div>
                  <div>
                    7번 출구 <strong>→</strong> <span style={{color: '#058b40', fontWeight: 'bold'}}>4318</span> 버스 승차 <strong>→</strong> 하차(서울아산병원 동관)
                  </div>
                </div>
                <div className='subway'>
                  <div className='purple'>천호역</div>
                  <div>
                    9번 출구 <strong>→</strong> <span style={{color: '#058b40', fontWeight: 'bold'}}>4318</span> 버스 또는 <span style={{color: '#058b40', fontWeight: 'bold'}}>112-5</span> 버스 승차 <strong>→</strong> 하차(서울아산병원 동관)
                  </div>
                </div>
                <div className='subway'>
                  <div className='purple'>강동역</div>
                  <div>
                  1번 출구 <strong>→</strong> <span style={{color: '#058b40', fontWeight: 'bold'}}>112-5</span> 버스 승차 <strong>→</strong> 하차(서울아산병원 동관)
                  </div>
                </div>
                <div className='subway'>
                  <div className='pink'>
                    강동구청역
                  </div>
                  <div>
                    5번 출구 <strong>→</strong> <span style={{color: '#058b40', fontWeight: 'bold'}}>112-5</span> 버스 승차 <strong>→</strong> 하차(서울아산병원 동관)
                  </div>
                </div>
                <div className='subway'>
                  <div className='pink'>
                    몽촌토성역
                  </div>
                  <div>
                    1번 출구 <strong>→</strong> <span style={{color: '#058b40', fontWeight: 'bold'}}>4318</span> 버스 승차 <strong>→</strong> 하차(서울아산병원 동관)
                  </div>
                </div>
                <div className='subway'>
                  <div className='yellow'>
                    한성백제역
                  </div>
                  <div>
                    2번 출구 <strong>→</strong> <span style={{color: '#058b40', fontWeight: 'bold'}}>30</span> 버스 또는 <span style={{color: '#058b40', fontWeight: 'bold'}}>340</span> 버스 승차 <strong>→</strong> 올림픽회관 하차 <strong>→</strong> <span style={{color: '#058b40', fontWeight: 'bold'}}>4318</span> 버스 승차 <strong>→</strong> 하차(서울아산병원 동관)
                  </div>
                </div>
              </li>
              <li>
                <h4>버스 이용 시</h4>
                <div>
                  <div className='bus-info'>
                    <div>4318</div>
                    <div><span style={{color: '#0e787c', fontWeight: 'bold' }}>서울아산병원 동관</span> (사당역 ↔ 서울아산병원)</div>
                  </div>
                  <div className='bus-info'>
                    <div>112-5</div>
                    <div><span style={{color: '#0e787c', fontWeight: 'bold' }}>서울아산병원 동관</span> (한솔아파트 ↔ 서울아산병원)</div>
                  </div>
                  <div className='bus-info'>
                    <div>97</div>
                    <div><span style={{color: '#0e787c', fontWeight: 'bold' }}>서울아산병원 동관</span> (남양주 호평동 ↔ 강변역 ↔ 서울아산병원)</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
        {selectedOption === 'detour' && (
          <div>
            <ul>
              <li className='detuor-li'>
                <div className='detour-load'>
                  <div>최단거리 진입 방법</div>
                  <div>올림픽대로 → 병원(진입 시 2개 차선 이용)</div>
                </div>
                <img src='https://www.amc.seoul.kr/asan/images/infor/location_img03.jpg' alt='' />
              </li>
              <li className='detuor-li'>
                <div className='detour-load'>
                  <div>병원 진입로 혼잡 시 우회 방법</div>
                  <div>송파세무서 전 우회전 → 풍성중학교 앞 우회전</div>
                </div>
                <img src='https://www.amc.seoul.kr/asan/images/infor/location_img04.jpg' alt='' />
              </li>
              <li className='detuor-li'>
                <div className='detour-load' style={{width: '900px', fontSize: '15.4px'}}>
                  <div>올림픽대로 출입구 혼잡 시 우회 방법</div>
                  <div>잠실철교 부근 정체 시 → 천호대교 분기점 우측 → 한가람로 방향으로 유턴 → 병원</div>
                </div>
                <img src='https://www.amc.seoul.kr/asan/images/infor/location_img05.jpg' alt='' />
              </li>
            </ul>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default MapGps