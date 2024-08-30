
import axios from 'axios';
import React, { useState } from 'react'
import '../css/joinPage.css'
import { useNavigate } from 'react-router-dom'
import RegBar from './RegBar';

const AdminJoinPage = () => {
  const navigate = useNavigate();

  //동의
  const [agreeData, setAgreeData] = useState(false);
  console.log(agreeData)
  const [infoAgreeData, setInfoAgreeData] = useState(false);
  console.log(infoAgreeData)

  function joinChk(){
    if(agreeData == true && infoAgreeData == true){
      navigate('/admin/adminRegPage')
    }
    else if(agreeData == true || infoAgreeData == false){
      alert('개인정보 수집 및 이용동의 후 회원가입 가능합니다')
    }
    else if(agreeData == false || infoAgreeData == true){
      alert('이용약관 동의 후 회원가입 가능합니다')
    }
    else if(agreeData == false || infoAgreeData == false){
      alert('이용약관 및 개인정보 수집 동의 후 회원가입 가능합니다')
    }
  }
  
  return (
    <div className='agreePage'>
      <RegBar step={1}/>
      <div className='agreeText'>
        <h3 className='agree-h3'>이용약관</h3>
        <div className='agreeTextBox'>
          <div className='innerCase'>
            <div className='footerterms_wrap'>
              <h3>제1장 총칙</h3>
              <h4>01. 제 1조 (목적)</h4>
              <ul>
                <li>
                서울아산병원 홈페이지 이용약관(이하 "본 약관"이라 합니다)은 이용자가 서울아산병원(이하 "병원"이라 합니다)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 합니다)를 이용함에 있어 이용자와 "병원"의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
                </li>
              </ul>
              <h4>02. 제 2조 (정의)</h4>
              <ul>
                <li>
                ① 이용자(회원) : "병원 홈페이지"에 접속하여 본 약관에 따라 "병원" 회원으로 가입하여 "병원"이 제공하는 서비스를 받는 자를 말합니다.
                </li>
                <li>
                ② 운영자 : 서비스의 전반적인 관리와 원활한 운영을 위하여 병원에서 선정한 자를 말합니다.
                </li>
                <li>
                ③ 연결 사이트 : 홈페이지와 하이퍼링크 방식(하이퍼링크의 대상에는 문자, 정지 및 동화상 등이 포함됨) 등으로 연결된 웹 사이트를 말합니다.
                </li>
                <li>
                ④ 가입 : 홈페이지에서 제공하는 신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위를 말합니다.
                </li>
                <li>
                ⑤ 계정(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 선정하고 병원이 규정하는 문자, 숫자의 조합을 의미합니다.
                </li>
                <li>
                ⑥ 비밀번호 : 회원이 부여받은 계정과 일치되는 회원임을 확인하고 회원의 정보 및 권익보호를 위해 회원 자신이 선정하여 비밀로 관리하는 문자, 숫자 또는 특수문자의 조합을 의미합니다.
                </li>
                <li>
                ⑦ 개인정보 : 당해 정보에 포함되어 있는 성명, 주민등록번호 등의 사항에 의하여 특정 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 인식할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함한다)를 말합니다.
                </li>
                <li>
                ⑧ 탈퇴 : 이용자가 서비스 개통 후 이용계약을 종료시키는 행위를 말합니다.
                </li>
                
              </ul>
              <h4>03. 제 3조 (약관의 게시 미 변경)</h4>
              <ul>
                <li>
                ① 병원은 본 약관의 내용과 상호, 병원 소재지, 전자우편 주소 등을 이용자가 알 수 있도록 홈페이지에 게시합니다.
                </li>
                <li>
                ② 병원은 불가피한 사정이 있는 경우 관계법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                </li>
                <li>
                ③ 병원은 약관을 개정할 경우 적용일자 및 개정사유를 명시하여 현행 약관과 함께 서비스화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.
                </li>
                <li>
                ④ 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는 관계법령 또는 상관례에 따릅니다.
                </li>
                
              </ul>
            </div>
          </div>
          </div>
          <div className='agreeCheck'>
            <input type='radio' name='agree1' onClick={()=>{
              setAgreeData(true)
            }}/><label for="agreeCheck1">동의함</label>
            <input type='radio' name='agree1' onClick={()=>{
              setAgreeData(false)
            }}/><label for="agreeCheck1">동의하지 않음</label>
          </div>
        <div className='agreeText'>
          <h3 className='agree-h3'>개인정보 수집 및 이용동의 (필수)</h3>
          <div className='agreeTextBox'>
            <div className='innerCase'>
              <p>서울아산병원에서 개인정보를 수집하고 이용하는 목적은 홈페이지 회원의 가입 및 관리를 위함입니다. 수집한 개인정보를 다음의 목적을 위해 활용합니다.</p>
              <div className='box'>
                <ul>
                  <li>
                  ① 진료/건강검진 예약, 예약조회 및 검사/건진 결과조회, 웹문진, 처방받은 약 조회, 재증명, 의무기록사본 등 회원제 서비스 이용에 따른 본인 확인 절차에 사용
                  </li>
                  <li>
                  ② 고지사항 전달 및 불만처리 등을 위한 의사소통 경로로 이용
                  </li>
                  <li>
                  ③ 온라인 상담 답변 처리를 위한 자료
                  </li>
                  <li>
                  ④ 진료의뢰 환자의 예약을 위한 자료
                  </li>
                  <li>
                  ⑤ 서울아산병원 모바일앱 서비스 제공을 위한 회원정보 연동
                  </li>
                </ul>
              </div>
              <p>
              위 항의 원활한 업무처리를 위하여 개인정보 처리(취급) 업무(DM등)를 외부 전문업체에 위탁할 수 있으며 해당 내용은 홈페이지에 공개합니다.
              </p>
              <p>
              서울아산병원에서 수집하는 개인정보 항목은 다음과 같습니다.
              </p>
              <div className='box'>
                <dl>
                  <dt>[필수항목]</dt>
                  <dd>14세 이상 : 성명, 성별, 생년월일, 휴대전화, 아이디, 비밀번호, e-mail</dd>
                </dl>
                <h4>개인정보의 보유 및 이용기간</h4>
                <p>개인정보는 서울아산병원이 고객에게 서비스를 제공하는 기간에 한하여 보유 및 이용되며 회원 탈퇴시에는 즉시 파기합니다.</p>
                <ul className='box-ul'>
                  <li>① 이용기간 : 회원 가입기간 (탈퇴 후 즉시 파기 / 1년 이상 미이용 시 개인정보 분리 보관)</li>
                  <li>② 진료서비스의 제공을 위하여 수집된 경우 : 의료법 기준에 준함</li>
                </ul>
                <p>다만, 수집목적 또는 제공받은 목적이 달성된 경우에도 상법 등 법령의 규정에 의하여 보존할 필요성이 있는 경우에는 귀하의 개인정보를 보유할 수 있습니다.</p>
                <p className='box-caution'>
                  <strong>[거부 시 불이익]</strong>
                  <br/>
                  귀하는 위 항목에 대하여 동의를 거부할 수 있으며, 동의 후에도 언제든지 철회 가능합니다.
                  <br/>
                  다만, 수집하는 개인정보는 원활한 서비스 제공을 위해 필요한 최소한의 기본정보로서, 동의를 거부하실 경우에는 회원에게 제공되는 서비스 이용에 제한될 수 있음을 알려드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
          <div className='agreeCheck'>
            <input type='radio' name='agree2' onClick={()=>{
              setInfoAgreeData(true)
            }}/>동의함
            <input type='radio' name='agree2' onClick={()=>{
              setInfoAgreeData(false)
            }}/>동의하지 않음
          </div>
      </div>
      <div className='btn-agree-main'>
        <button className='btn-agree1' type='button' onClick={()=>{
          joinChk()
        }}>동의합니다</button>
        <button className='btn-agree2' type='button' onClick={()=>{navigate('/')}}>동의하지 않습니다</button>
      </div>
    </div>
  )
}

export default AdminJoinPage