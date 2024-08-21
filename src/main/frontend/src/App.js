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
    </div>
  );
}

export default App;
