import React from 'react'
import '../css/login.css'

const Login = () => {
  return (
    <div className='login-div'>
      <div className='login-head'>
        로그인
      </div>
      <div className='login-main-contain'>
        <div className='login-content-left'>
          <div>
            <div className='main-login'>
              <div>
                <div>
                  <span className='login-text'>아이디</span>
                  <input type='text' />
                </div>
                <div>
                  <span className='login-text'>비밀번호</span> 
                  <input type='password'/>
                </div>
              </div>
              <button type='button'>로그인</button>
            </div>
            <div>
              <input type='checkbox' /> 아이디 저장
            </div>
          </div>
          <div>
            회원 서비스를 이용하시려면 로그인이 필요합니다.
          </div>
          <ul>
            <li><span>아이디 찾기</span></li>
            <li><span>비밀번호 찾기</span></li>
            <li><span>회원가입</span></li>
          </ul>
        </div>
        <div className='login-content-right'>
          <ul>
            <li>서울아산병원 홈페이지 가입 후 다양한 정보와 맞춤 서비스를 이용하실 수 있습니다.</li>
            <li>
              의무기록사본은 로그인 없이 신청/결제 및 출력이 가능합니다. <button type='button'>의무기록복사본발급 바로가기</button>
            </li>
            <li>회원님의 개인정보보호를 위하여 약 10분 동안 화면 이동이 없을 경우 자동으로
            로그아웃 처리됩니다.</li>
            <li>비밀번호는 주기적으로 변경하고 타인에게 노출되지 않도록 주의하시기 바랍니다.</li>
            <li>로그인 후 모든 정보는 암호화하여 전송됩니다.</li>
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