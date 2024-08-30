import React, { useEffect, useState } from 'react';
import '../css/join.css';
import { useNavigate } from 'react-router-dom';
import { handleKakaoLogin } from '../snsLogin/SocialKaKao';
import Naver from '../snsLogin/Naver';
import axios from 'axios';

const Join = ({loginInfo, setLoginInfo}) => {
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  //로그인 성공 실패 여부를 저장하는 변수
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  
  // 데이터 정보를 받아오는 함수
  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const res = await axios.get('/member/memberList');
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

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', 'fcaac90717961c96e110a08056effef4');
    params.append('redirect_uri', 'http://localhost:3000/Mainjoin');
    params.append('code', token);

    try {
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        params.toString(),  // URLSearchParams를 문자열로 변환
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        }
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const processTokenAndCheckMember = async () => {
      // memberList가 비어 있으면 데이터가 아직 로드되지 않은 상태임
      if (memberList.length === 0) return;

      try {
        const tokenResponse = await getToken();
        if (tokenResponse) {
          const accessToken = tokenResponse.data.access_token;
          sessionStorage.setItem('token', JSON.stringify(accessToken));
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

          axios
          .get(`/member/getMember/${kakaoResponse.data.email}`)
          .then((res)=>{
            if(res.data != ''){
              setIsLoginSuccess(true);
  
              //sesstionStorage에 로그인한 회원의 정보 저장
              const loginInfo = {
                memName : res.data.memName,
                memRole : res.data.memRole,
                email : res.data.email,
                memNum : res.data.memNum
              }
  
              //로그인 정보를 가진 객체를 문자열 형태로 변환
              //객체 -> 문자열로 변환한 데이터를 JSON 데이터로 부른다. 
              window.sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
  
              //로그인 정보를 저장하기 위해 만든 state 변수 loginInfo(App.js생성)에 로그인 정보를 저장
              setLoginInfo(loginInfo)
              navigate('/')
            }else{
              setIsLoginSuccess(false);
              setUserInfo(kakaoResponse.data);
              navigate('/snsRegInfo', { state: { userInfo: kakaoResponse.data } });
            }
          })
          .catch((error)=>{
            console.log(error)
          })
        }
      } catch (error) {
        console.log(error);
      }
    };

    processTokenAndCheckMember();
  }, [memberList]);

  return (
    <div className='join-div'>
      <div className='join-title'>
        <p>회원가입</p>
        <p>
          <span className='join-green'>서울아산병원 홈페이지 회원가입을 환영합니다.</span> 서울아산병원 홈페이지의 회원이 되시면 <span className='join-green'>다양한 정보와 맞춤 서비스</span>를 이용하실 수 있습니다.
        </p>
        <p>
          회원가입절차가 연령에 따라 다르오니, 해당되는 회원가입 유형을 선택하여 진행하여 주세요.
        </p>
      </div>
      <div className='join-table-div'>
        <table className='join-table-first'>
          <tbody>
            <tr className='join-tr'>
              <td className='join-td'>
                <p>
                  <strong>만 14세 이상 국내 거주인 회원가입</strong>
                </p>
                <button className='btn btn-primary' type='button' onClick={() => navigate('/joinPage')}>만 14세 이상 회원가입하기</button>
              </td>
              <td>
                <p>
                  <strong>SNS 간편로그인 연동</strong>
                </p>
                <div className='icon-div'>
                  <img src='http://localhost:8080/images/kakaoBlack.png' onClick={handleKakaoLogin} alt="Kakao Login" />
                  <Naver />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='service-div'>
        <div className='service-title'>
          <h3>서울아산병원 홈페이지 회원을 위한 맞춤 서비스</h3>
          <p>
            서울아산병원 홈페이지의 회원이 되시면
            <strong>다양한 정보와 맞춤 서비스</strong>
            를 이용하실 수 있습니다.
          </p>
        </div>
        <div className='mychart'>
          <h4>나의차트</h4>
          <p>
            서울아산병원에서 이루어진 진료와 관련된 모든 정보를 확인할 수 있으며, 그 외 다양한 서비스를 이용할 수 있습니다.<br />
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
  );
};

export default Join;
