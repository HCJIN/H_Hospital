// SocialGoogle.js
import React from 'react'

export const handleGoogleLogin = () => {
    // 환경 변수에서 클라이언트 ID와 리디렉션 URI 가져오기
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_GOOGLE_REDIRECT_URL;
    const responseType = 'code';
    const scope = 'email profile';

    // Google OAuth 2.0 인증 요청 URL 구성
    const baseUrl = 'http://accounts.google.com/o/oauth2/v2/auth';
    const url = `${baseUrl}?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${encodeURIComponent(scope)}`;

    // 페이지를 Google 로그인 페이지로 리디렉션
    window.location.href = url;
};

export default handleGoogleLogin