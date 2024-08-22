import './App.css';
import './reset.css';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Join from './component/Join';
import JoinPage from './component/JoinPage';
import Login from './Login';
import RegPage from './component/RegPage';

function App() {

  const navigate = useNavigate()

  return (
    <div className="App">
      <div className='header'>
        <ul className='header-ul'>
          <li onClick={() => {navigate('/loginForm')}}>로그인</li>
          <li onClick={()=>{navigate('/MainJoin')}}>회원가입</li>
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
        {/* 일반 유저용 */}
        <Route path='/' />
        {/* 로그인 페이지 */}
        <Route path='' />
        {/* 회원가입 페이지 */}
        <Route path='Mainjoin' element={<Join />}></Route>
        <Route path='joinPage' element={<JoinPage />}></Route>
        <Route path='loginForm' element={<Login />}></Route>
        <Route path='regPage' element={<RegPage />} />
      </Routes>
    </div>
  );
}

export default App;
