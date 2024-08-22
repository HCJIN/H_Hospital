
import axios from 'axios';
import React, { useState } from 'react'
import '../css/joinPage.css'
import { useNavigate } from 'react-router-dom'

const JoinPage = () => {
  const navigate = useNavigate();

  //동의
  const [agreeData, setAgreeData] = useState(false);
  console.log(agreeData)
  const [infoAgreeData, setInfoAgreeData] = useState(false);
  console.log(infoAgreeData)

  function joinchk(){
    if(agreeData == true && infoAgreeData == true){
      navigate('/')
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
    <div className=''>
      <div>
        <h3>이용약관</h3>
          <textarea></textarea>
          <input type='radio' name='agree1' onClick={()=>{
            setAgreeData(true)
          }}/>동의함
          <input type='radio' name='agree1' onClick={()=>{
            setAgreeData(false)
          }}/>동의하지 않음
        <h3>개인정보 수집 및 이용동의 (필수)</h3>
          <textarea></textarea>
          <input type='radio' name='agree2' onClick={()=>{
            setInfoAgreeData(true)
          }}/>동의함

          <input type='radio' name='agree2'onClick={()=>{
            setInfoAgreeData(true)
          }}/>동의하지 않음

      </div>
      <div>
        <button className='btn-agree' type='button' onClick={()=>{
           joinchk()
        }}>동의합니다</button>
        <button className='btn-agree' type='button' onClick={()=>{navigate('/')}}>동의하지 않습니다</button>
      </div>
    </div>
  )
}

export default JoinPage