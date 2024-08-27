// SocialKaKao.js
import React from 'react';

export const handleKakaoLogin = () => {
    const Rest_api_key = 'fcaac90717961c96e110a08056effef4'; // REST API KEY
    const redirect_uri = 'http://localhost:3000/auth'; // Redirect URI
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    window.location.href = kakaoURL;
};

  export default handleKakaoLogin