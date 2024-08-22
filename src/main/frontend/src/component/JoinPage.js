import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const JoinPage = () => {
  const navigate = useNavigate();

  //동의
  const [agreeData, setAgreeData] = useState();
  
  axios.post('')
  .then((res)=>{
    
  })
  .catch((error)=>{
    console.log(error)
  })


  return (
    <div>
      <div>
        <h3>이용악관</h3>
          <textarea></textarea>
          <input type='radio' name='agree1'/>동의함
          <input type='radio' name='agree1'/>동의하지 않음
        <h3>개인정보 수집 및 이용동의 (필수)</h3>
          <textarea></textarea>
          <input type='radio' name='agree2'/>동의함
          <input type='radio' name='agree2'/>동의하지 않음
      </div>
      <div>
        <button type='button'>동의합니다</button>
        <button type='button' onClick={()=>{navigate('/')}}>동의하지 않습니다</button>
      </div>
    </div>
  )
}

export default JoinPage