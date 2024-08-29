import React, { useState } from 'react'
import '../css/login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = ({loginInfo, setLoginInfo}) => {

  const navigate = useNavigate();

  //로그인 성공 실패 여부를 저장하는 변수
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  //입력한 id, pw를 저장할 변수
  const [loginData, setLoginData] = useState({
    memId : '',
    memPw : ''
  });

  //input에 입력할 값 객체에 저장 
  function memberChange(e){
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }
  console.log(loginData)

  //로그인 버튼 클릭시 로그인
  function login(){
    //id, pw 입력 여부 확인
    if(loginData.memId == '' || loginData.memPw == ''){
      alert('비어있는 값이 있습니다.')
      return
    }

    axios
    .post('/member/login', loginData)
    .then((res)=>{
      if(res.data != ''){
        alert('로그인 성공')
        setIsLoginSuccess(true);
        //sesstionStorage에 로그인한 회원의 정보 저장
        const loginInfo = {
          memId : res.data.memId,
          memName : res.data.memName,
          memRole : res.data.memRole
        }

        //로그인 정보를 가진 객체를 문자열 형태로 변환 
        //객체 -> 문자열로 변환한 데이터를 JSON 데이터로 부른다.
        window.sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));

        //로그인 정보를 저장하기 위해 만든 state 변수 loginInfo(App.js생성)에 로그인 정보를 저장
        setLoginInfo(loginInfo)
        navigate('/')
      }else{
        alert('아이디 또는 비밀번호 확인이 필요합니다.');
        setIsLoginSuccess(false);
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }





  return (
    <div className='login-div'>
      <div className='login-head'>
        로그인
      </div>
      <div className='login-main-contain'>
        <div className='login-content-left'>
          <div>
            <div className='main-login'>
              <div className='login-id-pw'>
                <ul>
                  <li>
                    <strong>아이디</strong>
                    <input type='text' name='memId' onChange={(e)=>{memberChange(e)}}/>
                  </li>
                  <li>
                    <strong>
                      비밀번호
                    </strong>
                    <input type='password' name='memPw' onChange={(e)=>{memberChange(e)}}/>
                  </li>
                </ul>
                <button type='button' className='login-btn' onClick={()=>{login()}}>로그인</button>
              </div>
            </div>
            <div className='id-save'>
              <input type='checkbox' /> 아이디 저장
            </div>
          </div>
          <div className='login-text'>
            회원 서비스를 이용하시려면 로그인이 필요합니다.
          </div>
          <ul>
            <li><span>아이디 찾기</span></li>
            <li><span onClick={() => {navigate('/findPw')}}>비밀번호 찾기</span></li>
            <li><span>회원가입</span></li>
          </ul>
        </div>
        <div className='login-content-right'>
          <ul>
            <li style={{listStyle: 'inside', textIndent: '-20px', marginLeft: '20px'}}>서울아산병원 홈페이지 가입 후 다양한 정보와 맞춤 서비스를 이용하실 수 있습니다.</li>
            <li style={{listStyle: 'inside', textIndent: '-20px', marginLeft: '20px'}}>
              <strong style={{color : '#ec360c'}}>의무기록사본은 로그인 없이 신청/결제 및 출력이 가능합니다.</strong> <button type='button'>의무기록복사본발급 바로가기</button>
            </li>
            <li style={{listStyle: 'inside', textIndent: '-20px', marginLeft: '20px'}}>회원님의 개인정보보호를 위하여 약 10분 동안 화면 이동이 없을 경우 자동으로
            로그아웃 처리됩니다.</li>
            <li style={{listStyle: 'inside', textIndent: '-20px', marginLeft: '20px'}}>비밀번호는 주기적으로 변경하고 타인에게 노출되지 않도록 주의하시기 바랍니다.</li>
            <li style={{listStyle: 'inside'}}>로그인 후 모든 정보는 암호화하여 전송됩니다.</li>
          </ul>
        </div>
      </div>
      <div className='login-form-div'>
        <div className='login-form-title'>
          <h3>서울아산병원 홈페이지 회원을 위한 맞춤 서비스</h3>
          <p>
            서울아산병원 홈페이지의 회원의 되시면
            <strong>다양한 정보와 맞춤 서비스</strong>
            를 이용하실 수 있습니다.
          </p>
        </div>
        <div className='mychart'>
          <h4>나의차트</h4>
          <p>
            서울아산병원에서 이루어진 진료와 관련된 모든 정보를 확인할 수 있으며, 그 외 다양한 서비스를 이용할 수 있습니다.<br></br>
            <span>(개인정보보호를 위해 일부는 제한된 정보가 제공됩니다.)</span>
          </p>
        </div>
        <div className='myChartBenefit'>
          <h4>나의 차트에서 제공하는 서비스는 아래와 같습니다.</h4>
          <ul>
            <li className='benefit1'>예약연황조회</li>
            <li className='benefit2'>건강진단결과조회</li>
            <li className='benefit3'>복약상담</li>
            <li className='benefit4'>자원봉사</li>
            <li className='benefit5'>진료내역조회</li>
            <li className='benefit6'>중간진료비결제</li>
            <li className='benefit7'>의료상담</li>
            <li className='benefit8'>칭찬코너</li>
            <li className='benefit9'>투약내역조회</li>
            <li className='benefit10'>증명서출력</li>
            <li className='benefit11'>학술행사신청</li>
            <li className='benefit12'>진단검사결과조회</li>
            <li className='benefit13'>후원</li>
          </ul>
        </div>
        <p className='tip'>회원님께 만족스러운 서비스 제공을 위해 항상 노력하겠습니다.</p>
      </div>
    </div>
  )
}

export default Login