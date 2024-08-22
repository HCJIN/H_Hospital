import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
        로그인
      </div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>아이디   <input type='text' /></div>
                <div>비밀번호 <input type='password'/></div>
              </div>
              <button type='button'>로그인</button>
            </div>
            <div>
              <input type='checkbox' /> 아이디 저장
            </div>
          </div>
          <ul>
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
            <li>회원가입</li>
          </ul>
          <div>
            회원 서비스를 이용하시려면 로그인이 필요합니다.
          </div>
        </div>
        <div>
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
    </div>
  )
}

export default Login