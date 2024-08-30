import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  // 데이터 정보를 받아오는 함수
  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const res = await axios.get(`/member/memberList`);
        setMemberList(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMemberList();
  }, []);

  // 토큰을 받아오는 함수
  const getToken = async () => {
    const token = new URL(window.location.href).searchParams.get('code');
    console.log('인가코드 : ' + token);

    const res = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: 'fcaac90717961c96e110a08056effef4',
        redirect_uri: 'http://localhost:3000/auth',
        code: token,
      },
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }
    );

    return res;
  };

  useEffect(() => {
    const processTokenAndCheckMember = async () => {
      // memberList가 비어 있으면 데이터가 아직 로드되지 않은 상태임
      if (memberList.length === 0) return;

      try {
        const tokenResponse = await getToken();
        if (tokenResponse) {
          const accessToken = tokenResponse.data.access_token;
          localStorage.setItem('token', JSON.stringify(accessToken));
          console.log('토큰 : ' + accessToken);

          const kakaoResponse = await axios.get('http://localhost:3000/member/kaKaoCode', {
            params: { accessToken },
          });

          const isExistingMember = memberList.some(
            (e) => e.email.trim().toLowerCase() === kakaoResponse.data.email.trim().toLowerCase()
          );
          console.log('Member List:', memberList);
          console.log('Incoming Email:', kakaoResponse.data.email);
          console.log('Is Existing Member:', isExistingMember);

          if (isExistingMember) {
            alert('이미 회원가입된 회원입니다.');
            navigate('/loginForm')
          } else {
            setUserInfo(kakaoResponse.data);
            navigate('/snsRegInfo', { state: { userInfo: kakaoResponse.data } });
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    processTokenAndCheckMember();
  }, [memberList]);

  return <div></div>;
};

export default Auth;
