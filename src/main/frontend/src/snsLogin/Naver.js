// 로그인 버튼 컴포넌트
import React from "react";

const Naver = () => {
  const NAVER_CLIENT_ID = 'qI2_h1WbGfM_bhsFxjTv'; // 발급받은 클라이언트 아이디
  const REDIRECT_URI = "http://localhost:3000/oauth"; // Callback URL
  const STATE = "false"; // 적절한 state 값을 사용하세요
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const handleLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <img 
      src='http://localhost:8080/images/Naver.png' 
      onClick={handleLogin}  
      alt="Naver Login" 
    />
  );
};
export default Naver;