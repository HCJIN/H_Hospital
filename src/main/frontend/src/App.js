import logo from './logo.svg';
import './App.css';
import './reset.css';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <ul className='header-ul'>
                              <li>로그인</li>
                              <li>회원가입</li>
                              <li>나의차트</li>
                              <li>오시는길</li>
                            </ul>
                            <div className='logo-header'>
                              <div className='logo-div'>
                                <div className='logo'>
              <img src='http://localhost:8080/images/logo.png'></img>
            </div>
          </div>
        </div>
      </div>


      <Routes>
        <Route></Route>
      </Routes>

      <div>
        <div>
          <p>H_HOSPITAL</p>
          <sapn>H Medical Center</sapn>
        </div>
        <div>
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
      </div>

      <div>
        <div>
          <p>
            울산광역시 남구 삼산중로 100번길 26 H_HOSPITAL<br/>
            TEL 052-716-3199 / h4green@greenart.com <br/>
            greenart@2024 by H4 Medical Center.All Rights reserved.
          </p>
        </div>
        <div>
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
          <select>
            <option>재단 및 재단산하병원</option>
            <option>아산사회복지재단</option>
            <option>강릉아산병원</option>
            <option>영덕아산병원</option>
            <option>정읍아산병원</option>
            <option>홍천아산병원</option>
          </select>
          <button type='button' onClick={() => {}}>바로가기</button>
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

    </div>

  );
}

export default App;
