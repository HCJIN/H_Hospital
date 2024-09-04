import React, { useEffect, useState } from 'react';
import '../css/join.css';
import { useNavigate } from 'react-router-dom';
import { handleKakaoLogin } from '../snsLogin/SocialKaKao';
import axios from 'axios';

const Join = ({ loginInfo, setLoginInfo }) => {

  const navigate = useNavigate();

  // 상태 변수: 전체 회원 목록을 저장합니다.
  const [memberList, setMemberList] = useState([]);

  // 상태 변수: 카카오로부터 받아온 사용자 정보를 저장합니다.
  const [userInfo, setUserInfo] = useState({});

  // 상태 변수: 로그인 성공 여부를 저장합니다.
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  // 회원 목록을 서버에서 받아오는 useEffect
  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        // 서버에서 회원 목록을 가져옵니다.
        const res = await axios.get('/member/memberList');
        setMemberList(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMemberList(); // 컴포넌트가 마운트될 때 회원 목록을 가져옵니다.
  }, []);

  // 카카오에서 토큰을 받아오는 함수
  const getToken = async () => {
    
    // URL에서 인가 코드를 추출합니다.
    const token = new URL(window.location.href).searchParams.get('code');
    console.log('인가코드 : ' + token);

    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code'); // 인가 코드로 토큰을 요청합니다.
    params.append('client_id', 'fcaac90717961c96e110a08056effef4'); // 카카오 애플리케이션의 클라이언트 ID
    params.append('redirect_uri', 'http://localhost:3000/Mainjoin'); // 리다이렉트 URI
    params.append('code', token); // 인가 코드 추가

    try {
      // 카카오의 토큰 발급 API를 호출합니다.
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        params.toString(),  // URLSearchParams를 문자열로 변환
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', // 헤더 설정
          },
        }
      );
      return res; // 토큰 응답 반환
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const processTokenAndCheckMember = async () => {
      
      // 회원 목록이 아직 로드되지 않았다면 함수 종료
      if (memberList.length === 0) return;

      try {
        // 토큰을 받아옵니다.
        const tokenResponse = await getToken();
        if (tokenResponse) {
          const accessToken = tokenResponse.data.access_token;
          sessionStorage.setItem('token', JSON.stringify(accessToken)); // 토큰을 세션 스토리지에 저장합니다.
          console.log('토큰 : ' + accessToken);

          // 카카오 서버에서 사용자 정보를 가져옵니다.
          const kakaoResponse = await axios.get('http://localhost:3000/member/kaKaoCode', {
            params: { accessToken },
          });

          // 현재 사용자의 이메일이 기존 회원 목록에 있는지 확인합니다.
          const isExistingMember = memberList.some(
            (e) => e.email.trim().toLowerCase() === kakaoResponse.data.email.trim().toLowerCase()
          );
          console.log('Member List:', memberList);
          console.log('Incoming Email:', kakaoResponse.data.email);
          console.log('Is Existing Member:', isExistingMember);

          // 사용자 정보를 서버에서 가져와 로그인 여부를 확인합니다.
          axios
            .get(`/member/getMember/${kakaoResponse.data.email}`)
            .then((res) => {
              if (res.data != '') {
                setIsLoginSuccess(true);

                // 로그인한 회원의 정보를 세션 스토리지에 저장합니다.
                const loginInfo = {
                  memName: res.data.memName,
                  memRole: res.data.memRole,
                  email: res.data.email,
                  memNum: res.data.memNum
                };

                // 로그인 정보를 문자열로 변환하여 저장합니다.
                window.sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));

                // 상위 컴포넌트에 로그인 정보를 전달합니다.
                setLoginInfo(loginInfo);
                navigate('/'); // 홈 페이지로 이동합니다.
              } else {
                setIsLoginSuccess(false);
                setUserInfo(kakaoResponse.data);
                navigate('/snsRegInfo', { state: { userInfo: kakaoResponse.data } }); // 신규 사용자 등록 페이지로 이동합니다.
              }
            })
            .catch((error) => {
              console.log(error); // 오류가 발생하면 콘솔에 로그를 남깁니다.
            });
        }
      } catch (error) {
        console.log(error); // 오류가 발생하면 콘솔에 로그를 남깁니다.
      }
    };

    processTokenAndCheckMember(); // 컴포넌트가 마운트될 때 토큰 처리 및 회원 체크를 수행합니다.
  }, [memberList]);

  // localStorage의 모든 항목을 제거하는 함수
  function clearAllLocalStorage() {
    localStorage.clear();
    console.log('All items have been removed from localStorage.');
  }

  return (
    <div className='join-div'>
      <div className='join-title'>
        <p>회원가입</p>
        <p>
          <span className='join-green'>울산메디칼센터병원 홈페이지 회원가입을 환영합니다.</span> 울산메디칼센터병원 홈페이지의 회원이 되시면 <span className='join-green'>다양한 정보와 맞춤 서비스</span>를 이용하실 수 있습니다.
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
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='service-div'>
        <div className='service-title'>
          <h3>울산메디칼센터병원 홈페이지 회원을 위한 맞춤 서비스</h3>
          <p>
            울산메디칼센터병원 홈페이지의 회원이 되시면
            <strong>다양한 정보와 맞춤 서비스</strong>
            를 이용하실 수 있습니다.
          </p>
        </div>
        <div className='mychart'>
          <h4>나의차트</h4>
          <p>
            울산메디칼센터병원에서 이루어진 진료와 관련된 모든 정보를 확인할 수 있으며, 그 외 다양한 서비스를 이용할 수 있습니다.<br />
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
