import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OAuthCallback = () => {

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});

  const getToken = async () => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("code");
    const state = url.searchParams.get("state");
  
    try {
      const response = await axios.post('https://nid.naver.com/oauth2.0/token', new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: 'qI2_h1WbGfM_bhsFxjTv',
        client_secret: 'OpaVAHFBxC',
        code: token,
        state: state
      }), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
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
      setUserInfo(userResponse.data); 
      navigate('/snsRegInfo', { state: { userInfo: userResponse.data } });
    } catch (error) {
      console.error('Error fetching access token:', error);
    } finally {
      // setLoading(false); // 로딩 상태 종료
    }
  };

  useEffect(() => {
    getToken();
    console.log(getToken())
  }, []);
};

export default OAuthCallback;