// SocialKaKao.js
import axios from 'axios'; 
import React from 'react';

export const handleKakaoLogin = () => {

    const Rest_api_key = 'fcaac90717961c96e110a08056effef4'; 
    // Kakao Developers에서 발급받은 REST API KEY를 변수에 저장합니다.

    const redirect_uri = 'http://localhost:3000/Mainjoin'; 
    // Kakao 로그인 후 인증 코드가 리다이렉트될 URI를 지정합니다. 여기서는 로컬 환경의 특정 페이지로 설정되어 있습니다.

    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    // Kakao OAuth 인증 요청 URL을 생성합니다. 이 URL에는 REST API KEY, 리다이렉트 URI, 응답 유형이 포함됩니다.

    window.location.href = kakaoURL;
    // 사용자를 생성된 Kakao OAuth 인증 URL로 리다이렉트합니다. 이 과정을 통해 사용자는 Kakao 로그인 화면으로 이동하게 됩니다.
    
};

export default handleKakaoLogin;