import './App.css';
import './reset.css';
<<<<<<< HEAD
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Join from './component/Join';
import JoinPage from './component/JoinPage';
import Login from './component/Login';

function App() {

  const navigate = useNavigate()


=======
import { Route, Routes, useNavigate } from 'react-router-dom';
import Join from './component/Join';
import JoinPage from './component/JoinPage';
import Login from './Login';

function App() {
  const navigate = useNavigate()
>>>>>>> main

  return (
    <div className="App">
      <div className='header'>
        <ul className='header-ul'>
          <li onClick={()=>{navigate('/loginForm')}}>로그인</li>
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
        <Route path='/'></Route>
        {/* 로그인 페이지 */}
        <Route path=''></Route>
        {/* 회원가입 페이지 */}
        <Route path='Mainjoin' element={<Join />}></Route>
        <Route path='joinPage' element={<JoinPage />}></Route>
<<<<<<< HEAD
        <Route path='loginForm' element={<Login />}></Route>
=======
        <Route path='/loginForm' element={<Login />}></Route>
>>>>>>> main
      </Routes>


    </div>
  );
}

export default App;
