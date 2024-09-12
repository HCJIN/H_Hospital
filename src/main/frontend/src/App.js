import './App.css';
import './reset.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Join from './component/join/Join';
import JoinPage from './component/join/JoinPage';
import Login from './component/loginpage/Login';
import RegPage from './component/join/RegPage';
import RegInfo from './component/join/RegInfo';
import MapGps from './component/MapGps';
import Auth from './component/Auth';
import SnsRegInfo from './component/SnsRegInfo';
import FindId from './component/loginpage/FindId';
import MainPage from './component/MainPage';
import { useEffect, useState } from 'react';
import SuccessFindId from './component/SuccessFindId';
import FindPw from './component/loginpage/FindPw';
import Reservation from './component/Reservation';
import AdminLogin from './admin/AdminJoin';
import AdminJoin from './admin/AdminJoin';
import AdminRegInfo from './admin/AdminRegInfo';
import AdminRegPage from './admin/AdminRegPage';
import AdminJoinPage from './admin/AdminJoinPage';
import SetNewPw from './component/SetNewPw';
import ReservationCheck from './component/calendar/ReservationCheck';
import ServiceCenter from './component/ServiceCenter';
import PatientChart from './component/PatientChart';
import HospitalSheet from './component/HospitalSheet';
import FindDoctor from './component/FindDoctor';
import FindDepartment from './component/FindDepartment';
import FamilyMedicine from './component/department/FamilyMedicine';
import InfectiousDisease from './component/department/InfectiousDisease';
import ColorectalCancer from './component/department/ColorectalCancer';
import LiverCancer from './component/department/LiverCancer';
import Pediatrics from './component/department/Pediatrics';
import Heart from './component/department/Heart';

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  //로그인 정보를 저장 할 수 있는 state 변수
  const [loginInfo, setLoginInfo] = useState({});

  //사이드바 메뉴 상태 저장 state
  const [show, setShow] = useState(true);
  const [menuLabel, setMenuLabel] = useState("메뉴")

  //하단 메뉴 진료과 옵션 클릭
  const [selectedDepartment, setSelectedDepartment] = useState('');
  
  //top버튼
  const [showBtn, setShowBtn] = useState(false);

  const handleDepartmentChange = (e)=>{
    setSelectedDepartment(e.target.value);
  }
  const handleNavigate = (path) =>{navigate(path);}
  
  //페이지 상단 이동
  const scrollToTop = () => {
    window.scrollTo({
      top : 0,
      behavior: 'smooth'
    })
  }

  //옵션 선택 후 페이지 이동 시 상단 화면 나오게 하기
  useEffect(()=>{
    window.scrollTo(0,0);
  },[location])

  
  useEffect(()=>{
    const handleShowBtn=()=>{
    if(window.scrollY > 250) {
      setShowBtn(true)
    }
     else{
      setShowBtn(false)
    }
  }

    window.addEventListener("scroll", handleShowBtn)
    return()=>{
      window.removeEventListener("scroll", handleShowBtn)
    }
  },[])
  


  //로그인 성공 시 loginInfo에 로그인 정보를 저장하지만 
  //새로고침하면 App.js 다시 시작하면서 loginInfo 변수의 값이 초기화된다.
  //새로고침을 하더라도 sessionStorage에 로그인 정보는 존재하니,
  //새로고침 할때 만약 로그인 정보가 sessionStorage에 남아있다면
  //loginInfo state변수에 로그인 정보를 저장시켜야 함.
  useEffect(()=>{
    //세션에 저장된 로그인 정보 가져 옴
    const sessionLoginInfo = window.sessionStorage.getItem('loginInfo');

    //세션에 로그인 정보가 있으면...
    if(sessionLoginInfo != null){
      //로그인 정보를 저장할 loginInfo에 저장
      //1. 세션에서 가져온 데이터를 객체로 변환
      const obj_loginInfo = JSON.parse(sessionLoginInfo);

      //2. 로그인 정보를 loginInfo에 저장
      setLoginInfo(obj_loginInfo);
    }
  },[])

  //사이드바 토글 및 메뉴 이름 변경
  function handleMenuClick(){
    setShow(!show);
    setMenuLabel(!show ? "메뉴닫기" : "메뉴");
  }

  // 화면 크기가 변경될 때 사이드바 상태를 업데이트
  useEffect(() => {
    
    function handleResize() {
      // 767px 이상으로 화면이 커지면 사이드바를 보이도록 설정
      if (window.innerWidth > 767) {
        setShow(true);
        setMenuLabel("메뉴");
      }else{
        setShow(false)
      }
    }

    // 윈도우 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  
  //직원 로그인 시 사이드바 숨기기
  const showSideBar = !(loginInfo.memRole === 'admin')

  //직원으로 로그인 했을때 상단에 '진료예약조회'메뉴 띄우는 함수 
  function upperMenu(){
    if(loginInfo.memRole == 'admin'){
      return(
        <div>
          <span onClick={() => {navigate('/admin/patientChart')}}>진료차트</span>
          <span onClick={() => {navigate('/admin/reservationCheck')}}>진료예약조회</span>
        </div>
      )
    }
  }

  return (
    <div className="App">
      <div className='header'>
        {
          Object.keys(loginInfo).length == 0
          ?
          <ul className='header-ul'>
            <li className='top-menu' onClick={handleMenuClick}>{menuLabel}</li>
            <li onClick={()=>{navigate('/loginForm')}}>로그인</li>
            <li onClick={()=>{navigate('/MainJoin')}}>회원가입</li>
            <li onClick={() => {navigate('/admin/adminJoin')}}>직원 회원가입</li>
          </ul>
          :
          <div className='login'>
            <span className='top-menu' onClick={handleMenuClick}>
              {menuLabel}
            </span>
            {loginInfo.memName}님 반갑습니다
            <span onClick={()=>{
              //세션에 저장된 로그인 정보 삭제
              window.sessionStorage.removeItem('loginInfo');
              //loginInfo state 값을 바꿔줌
              setLoginInfo({});
              //메인 페이지로 이동
              navigate('/')
            }}>Logout</span>
          </div>
        }
        <div className='logo-header'>
          <div className='logo-div'>
            <div className='logo'>
              <img onClick={()=>{
                navigate('/')
              }} src='http://localhost:8080/images/ulsan_logo.png'></img>
              {
                upperMenu()
              }
            </div>
          </div>
        </div>
      </div>


      {/* 사이드 바 */}

      {
        showSideBar && ( 
          <div className={`sideBar-div ${show ? "show" : ""}`}>
            <div className='sideBar-div-tel'>
              <p><i className="bi bi-phone-vibrate"></i>대표번호</p>
              <p>052-2024-0906</p>
            </div>
            <div className='sideBar-div-menu'>
              <ul>
                <li className='sideBar-div-menu-first' onClick={()=>{
                  navigate('/reservation')
                }}>
                  <div onClick={()=>{}}>
                  <p><i className="bi bi-pc-display-horizontal"></i></p>               
                  <span>지금예약</span>
                </div>
                </li>
                <li>
                  <div onClick={()=>{
                    navigate('/hospitalSheet')
                  }}>
                    <p><i className="bi bi-card-checklist"></i></p>
                    <span>증명서발급</span>
                  </div>
                </li>
                <li>
                  <div onClick={()=>{
                    navigate('/mapGps')
                  }}>
                    <p><i className="bi bi-hospital"></i></p>
                    <span>오시는길</span>
                  </div>
                </li>
                <li>
                  <div onClick={()=>{navigate('/serviceCenter')}}>
                    <p><i className="bi bi-heart-pulse-fill"></i></p>
                    <span>고객센터</span>
                  </div>
                </li>
                <li>
                  <div onClick={()=>{navigate('/reservationCheck')}}>
                    <p><i className="bi bi-menu-button-wide-fill"></i></p>
                    <span>진료예약조회</span>
                  </div>
                </li>
                <li className='sideBar-div-menu-last'>
                  <div>
                    <a href="https://www.ussunflower.or.kr/" target='_blank'>
                      <p><i className="bi bi-brightness-low-fill"></i></p>
                      <span>
                        해바라기센터
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      )}

      {/* top 버튼 */}
      <div className='scroll-container'>
        {showBtn &&(
          <button id='top' onClick={scrollToTop} type='button'>
            <i className="bi bi-caret-up-fill"></i>
            <p>Top</p>
            </button>
        )}
      </div>      


      <Routes>
        {/* 일반 유저용 */}
        <Route path='/' >
          {/* 메인페이지 */}
          <Route path='' element={<MainPage/>}/>
        </Route>

        {/* 로그인 페이지 */}
        <Route path='/loginForm' element={<Login setLoginInfo={setLoginInfo} loginInfo={loginInfo}/>}/>

        {/* 회원가입 페이지 */}
        <Route path='Mainjoin' element={<Join setLoginInfo={setLoginInfo} loginInfo={loginInfo}/>}></Route>

        {/* 회원가입동의 페이지 */}
        <Route path='joinPage' element={<JoinPage />}></Route>

        {/* 회원기초정보 등록 페이지 */}
        <Route path='regPage' element={<RegPage />} />

        {/* 회원정보 등록 페이지 */}
        <Route path='regInfo/:memTel' element={<RegInfo />} />

        {/* 로그인 페이지 */}
        <Route path='loginForm' element={<Login />}></Route>

        {/* 아이디 찾기 */}
        <Route path='findId' element={<FindId/>}/>

        <Route path='successFindId' element={<SuccessFindId/>}/>

        {/* 비밀번호 찾기 */}
        <Route path='findPw' element={<FindPw/>} />

        <Route path='setNewPw' element={<SetNewPw/>}/>

        {/* 오시는길 페이지  */}
        <Route path='mapGps' element={<MapGps/>} />

        {/* 인가코드 및 토큰 발급 페이지 */}
        <Route path='/auth' element={<Auth />} />

        {/* sns연동 후 회원가입 페이지 */}
        <Route path='/snsRegInfo' element={<SnsRegInfo />} />

        {/* 예약 페이지 */}
        <Route path='/reservation' element={<Reservation />} />

        {/* 고객센터 페이지 */}
        <Route path='/serviceCenter' element={<ServiceCenter/>}/>

        {/* 증명서 발급 페이지 */}
        <Route path='/hospitalSheet' element={<HospitalSheet />} />

        {/* 의료진 찾기 페이지 */}
        <Route path='/findDoctor' element={<FindDoctor/>}/>

        {/* 진료과 찾기 페이지 */}
        <Route path='/findDepartment' element={<FindDepartment/>}/>

        {/* 가정의학과 */}
        <Route path='/familyMedicine' element={<FamilyMedicine/>}/>
        {/* 감염내과 */}
        <Route path='/infectiousDisease' element={<InfectiousDisease/>}/>
        {/* 대장암센터 */}
        <Route path='/colorectalCancer' element={<ColorectalCancer/>}/>
        {/* 간암센터 */}
        <Route path='/liverCancer' element={<LiverCancer/>}/>
        {/* 소아과 */}
        <Route path='/pediatrics' element={<Pediatrics/>}/>
        {/* 심장병원 */}
        <Route path='/heart' element={<Heart/>}/>

        {/* 관리자용  */}
        <Route path='/admin'>
          {/* 관리자 로그인 페이지 */}
          <Route path='login' element={<AdminLogin/>}/>

          {/* 직원 회원가입 페이지 */}
          <Route path='adminJoin' element={<AdminJoin/>} />

          {/* 직원 가입동의 페이지 */}
          <Route path='adminJoinPage' element={<AdminJoinPage/>} />

          {/* 직원 기초정보 등록 페이지 */}
          <Route path='adminRegPage' element={<AdminRegPage />} />

          {/* 직원 등록 페이지 */}
          <Route path='adminRegInfo/:memTel' element={< AdminRegInfo/>} />

          {/* 진료예약조회 페이지 */}
          <Route path='reservationCheck' element={<ReservationCheck/>} />

          {/* 환자 차트 페이지 */}
          <Route path='patientChart/:memNum/:resDate' element={<PatientChart/>}/>

        </Route> 

      </Routes>

      <div className='footerWrap'>
        <div className='footerMenu'>
          <div className='footerLogo'>
            <p>
              <img src='http://localhost:8080/images/ulsan_footer_logo.png'></img>
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
          <div className='footerMenuWrap'>
            <div className='footerMenu2'>
              <div className='footerMenu2-select'>
                <select onChange={handleDepartmentChange}>
                  <option value="">진료과</option>
                  <option value="">=====진료과=====</option>
                  <option value="/familyMedicine">가정의학과</option>
                  <option value="/infectiousDisease">감염내과</option>
                  <option value="">=====암병원=====</option>
                  <option value="/colorectalCancer">대장암센터</option>
                  <option value="/liverCancer">간암센터</option>
                  <option value="">=====어린이병원=====</option>
                  <option value="/pediatrics">소아감염과</option>
                  <option value="">=====심장병원=====</option>
                  <option value="/heart">심장병원</option>
                </select>
                <button type='button' onClick={() =>handleNavigate(selectedDepartment)}>바로가기</button>
              </div>
              <div className='footerMenu2-select'>
                <select>
                  <option>재단 및 재단산하병원</option>
                  <option>울산사회복지재단</option>
                  <option>강릉메디컬병원</option>
                  <option>영덕메디컬병원</option>
                  <option>정읍메디컬병원</option>
                  <option>홍천메디컬병원</option>
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
                  <option>관련기관</option>
                  <option>울산생명과학연구원</option>
                  <option>의학도서관</option>
                  <option>스마트아카데미</option>
                  <option>울산의료원 연보</option>
                </select>
                <button type='button' onClick={() => {}}>바로가기</button>
              </div>
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
