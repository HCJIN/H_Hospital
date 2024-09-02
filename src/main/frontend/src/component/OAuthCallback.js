import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OAuthCallback = () => {
  const navigate = useNavigate();
  const [userInfo1, setUserInfo1] = useState(null);
  const [error, setError] = useState(null);

  const getToken1 = async () => {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("code"); // authorization code
    const state = url.searchParams.get("state"); // state 값
  
    console.log("인가코드 : " + token);
    console.log("State: " + state);
  
    try {
      const response = await axios.post('/oauth2.0/token', null, {  // 여기 변경
        params: {
          grant_type: 'authorization_code',
          client_id: 'qI2_h1WbGfM_bhsFxjTv',
          client_secret: 'OpaVAHFBxC',
          code: token,
          state: state
        }
      });
  
      // 사용자 정보 요청
      const userResponse = await axios.get('/v1/nid/me', {  // 여기 변경
        headers: {
          Authorization: `Bearer ${response.data.access_token}`
        }
      });
  
      console.log(userResponse.data);
      setUserInfo1(userResponse.data);
      navigate('/snsRegInfo', { state: { userInfo1: userResponse.data } });
    } catch (error) {
      console.error('Error fetching access token:', error);
      setError('Failed to fetch access token');
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    getToken1();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Loading...</div>;
};

export default OAuthCallback;