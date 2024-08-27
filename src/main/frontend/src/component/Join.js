import React from 'react'
import '../css/join.css'
import { useNavigate } from 'react-router-dom'
import {handleKakaoLogin} from '../snsLogin/SocialKaKao'

const Join = () => {

  //자바스크립트API key
  // 3611ba047b8bf83c3c5bc4749dff80f6

  const navigate = useNavigate()

  return (
    <div className='join-div'>
      <div className='join-title'>
        <p>회원가입</p>
        <p>
          <span className='green'>서울아산병원 홈페이지 회원가입을 환영합니다.</span>서울아산병원 홈페이지의 회원이 되시면 <span className='green'>다양한 정보와 맞춤 서비스</span>를 이용하실 수 있습니다.
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
                <button className='btn btn-primary' type='button' onClick={()=>{navigate('/joinPage')}}>만 14세 이상 회원가입하기</button>
              </td>
              <td>
                <p>
                  <strong>SNS 간편로그인 연동</strong>
                </p>
                <div className='icon-div'>
                  <img src='http://localhost:8080/images/kakaoBlack.png' onClick={handleKakaoLogin}></img>
                  <img src='http://localhost:8080/images/Google.png'></img>
                  <img src='http://localhost:8080/images/Naver.png'></img>
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
            서울아산병원 홈페이지의 회원의 되시면
            <strong>다양한 정보와 맞춤 서비스</strong>
            를 이용하실 수 있습니다.
          </p>
        </div>
        <div className='mychart'>
          <h4>나의차트</h4>
          <p>
            서울아산병원에서 이루어진 진료와 관련된 모든 정보를 확인할 수 있으며, 그 외 다양한 서비스를 이용할 수 있습니다.<br></br>
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
  )
}

export default Join