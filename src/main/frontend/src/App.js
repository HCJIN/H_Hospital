import './App.css';
import './reset.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Join from './component/Join';
import JoinPage from './component/JoinPage';
import Login from './component/Login';
import RegPage from './component/RegPage';
import RegInfo from './component/RegInfo';
import MapGps from './component/MapGps';
import Auth from './component/Auth';
import SnsRegInfo from './component/SnsRegInfo';

function App() {

  const navigate = useNavigate()

  //사이드 메뉴 정보 관리


  return (
    <div className="App">
      <div className='header'>
        <ul className='header-ul'>
          <li onClick={()=>{navigate('/loginForm')}}>로그인</li>
          <li onClick={()=>{navigate('/MainJoin')}}>회원가입</li>
        </ul>
        <div className='logo-header'>
          <div className='logo-div'>
            <div className='logo'>
              <img onClick={()=>{
                navigate('/')
              }} src='http://localhost:8080/images/logo.png'></img>
            </div>
          </div>
        </div>
      </div>


      {/* 사이드 바 */}
      <div className='sideBar-div'>
          <div className='sideBar-div-tel'>
            <p><i className="bi bi-phone-vibrate"></i>대표번호</p>
            <p>052-2024-0906</p>
          </div>
          <div className='sideBar-div-menu'>
            <ul>
              <li className='sideBar-div-menu-first'>
                <i className="bi bi-pc-display-horizontal"></i>
                <span>지금예약</span>
              </li>
              <li>
                <i className="bi bi-card-checklist"></i>
                <span>증명서발급</span>
              </li>
              <li>
                <i className="bi bi-hospital"></i>
                <span>위치</span>
              </li>
              <li>
                <i className="bi bi-heart-pulse-fill"></i>
                <span>심뇌혈관센터</span>
              </li>
              <li>
                <i className="bi bi-menu-button-wide-fill"></i>
                <span>건강검진안내</span>
              </li>
              <li className='sideBar-div-menu-last'>
                <a href="https://www.ussunflower.or.kr/" target='_blank'>
                  <i className="bi bi-telephone"></i>
                  <span>
                    해바라기센터
                  </span>
                </a>
              </li>
            </ul>
          </div>
      </div>


      <Routes>
        {/* 일반 유저용 */}
        <Route path='/' />

        {/* 로그인 페이지 */}
        <Route path='/loginForm' />

        {/* 회원가입 페이지 */}
        <Route path='Mainjoin' element={<Join />}></Route>

        {/* 회원가입동의 페이지 */}
        <Route path='joinPage' element={<JoinPage />}></Route>

        {/* 회원기초정보 등록 페이지 */}
        <Route path='regPage' element={<RegPage />} />

        {/* 회원정보 등록 페이지 */}
        <Route path='regInfo/:memTel' element={<RegInfo />} />

        {/* 로그인 페이지 */}
        <Route path='loginForm' element={<Login />}></Route>

        {/* 사이드 바 */}
        <Route path='side' element={<App/>}>
          <Route path='reservation'></Route>
          <Route path='certificate'></Route>
          <Route path='location'></Route>
          <Route path='checkup'></Route>
          <Route path='sfCenter'></Route>
        </Route>

        {/* 오시는길 페이지  */}
        <Route path='mapGps' element={<MapGps />} />

        {/* 인가코드 및 토큰 발급 페이지 */}
        <Route path='/auth' element={<Auth />} />

        {/* sns연동 후 회원가입 페이지 */}
        <Route path='/snsRegInfo' element={<SnsRegInfo />} />

      </Routes>

      <div className='footerWrap'>
        <div className='footerMenu'>
          <div className='footerLogo'>
            <p>
              <img src='http://localhost:8080/images/footlogo.png'></img>
            </p>
            <p className='address'>
              울산광역시 남구 삼산중로 100번길 26 H_HOSPITAL<br/>
              TEL 052-716-3199 / h4green@greenart.com <br/>
              greenart@2024 by H4 Medical Center.All Rights reserved.
            </p>
          </div>
          <div className='footerMenu-ul'>
            <ul>
              <li>환자권리장전</li>
              <li>개인정보처리방침</li>
              <li>이용약관</li>
              <li>의료정보운영방침</li>
              <li>비급여진료비</li>
              <li>의무기록사본발급안내</li>
              <li>위조문서확인</li>
              <li>이메일 주소수집거부</li>
              <li>원격지원서비스</li>
              <li>홈페이지이용문의</li>
            </ul>
          </div>
          <div className='footerMenu2'>
            <div className='footerMenu2-select'>
              <select>
                <option>진료과</option>
                <option>=====진료과=====</option>
                <option>가정의학과</option>
                <option>감염내과</option>
                <option>=====암병원=====</option>
                <option>CAR T 센터</option>
                <option>간암센터</option>
                <option>=====어린이병원=====</option>
                <option>소아감염과</option>
                <option>소아소화기영양과</option>
                <option>=====심장병원=====</option>
                <option>대동맥질환센터</option>
                <option>말초혈관질환센터</option>
              </select>
              <button type='button' onClick={() => {}}>바로가기</button>
            </div>
            <div className='footerMenu2-select'>
              <select>
                <option>재단 및 재단산하병원</option>
                <option>아산사회복지재단</option>
                <option>강릉아산병원</option>
                <option>영덕아산병원</option>
                <option>정읍아산병원</option>
                <option>홍천아산병원</option>
              </select>
              <button type='button' onClick={() => {}}>바로가기</button>
            </div>
          </div>
          <div className='footerMenu3'>
            <div className='footerMenu3-select'>
              <select>
                <option>센터/클리닉/연구원/기타</option>
                <option>간센터</option>
                <option>건강증진센터</option>
                <option>국제진료센터</option>
                <option>당뇨병진료센터</option>
                <option>로봇수술센터</option>
              </select>
              <button type='button' onClick={() => {}}>바로가기</button>
            </div>
            <div className='footerMenu3-select'>
              <select>
                <option>센터/클리닉/연구원/기타</option>
                <option>간센터</option>
                <option>건강증진센터</option>
                <option>국제진료센터</option>
                <option>당뇨병진료센터</option>
                <option>로봇수술센터</option>
              </select>
              <button type='button' onClick={() => {}}>바로가기</button>
            </div>
          </div>
          <div className='main-icon-div'>
            <img className='main-icon' src='http://localhost:8080/images/ban01.png'></img>
            <img className='main-icon' src='http://localhost:8080/images/ban02.png'></img>
            <img className='main-icon' src='http://localhost:8080/images/ban03.png'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
