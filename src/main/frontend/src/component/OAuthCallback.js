import React, { useEffect } from 'react';
import axios from 'axios';

const OAuthCallback = () => {
  useEffect(() => {
    const fetchToken = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get('code');
      const state = query.get('state');

      if (code) {
        try {
          const response = await axios.post('https://nid.naver.com/oauth2.0/token', null, {
            params: {
              grant_type: 'authorization_code',
              client_id: 'qI2_h1WbGfM_bhsFxjTv', // 발급받은 클라이언트 아이디
              client_secret: 'OpaVAHFBxC', // 발급받은 클라이언트 시크릿
              code: code,
              state: state
            }
          });

          // 토큰을 로컬 스토리지에 저장
          localStorage.setItem('naver_access_token', response.data.access_token);

          // 사용자 정보 요청
          const userResponse = await axios.get('https://openapi.naver.com/v1/nid/me', {
            headers: {
              Authorization: `Bearer ${response.data.access_token}`
            }
          });

          console.log(userResponse.data);
          // 사용자 정보 처리
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      }
    };

    fetchToken();
  }, []);
};

export default OAuthCallback;