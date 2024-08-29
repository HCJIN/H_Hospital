import React, { useEffect, useState } from 'react'
import '../css/FindPw.css';
import axios from 'axios';



const FindPw = () => {

  const[findPw, setFindPw] = useState([]);

  const[email, setEmail] = useState('');

  function changeMemId(e){
    setEmail(e.target.value);
  }

  const findPwInfo = () => {
    axios.get(`/member/findPw/${email}`)
    .then((res) => {
      setFindPw(res.data)
    })
    .catch((error) => {console.log(error)});
  };

  console.log(email)

  return (
      <div className='findPw-container'>
        <div className='findPw-header'>
          <h1>비밀번호 찾기</h1> <br/>
          <span>본인 확인을 위해 회원가입 시 등록한 정보로 사용자를 확인해 주세요.</span>
        </div>
        <div className='findPw-body'>
          <p>등록 정보로 찾기</p> <br/>
          <div>회원가입 시 등록한 정보를 아래에 입력해 주세요.</div> 
          <table className='table-container'>
            <tbody>
              <tr>
                <td>아이디</td>
                <td><input type='text' name='email' onChange={(e) => {changeMemId(e)}}/></td>
              </tr>
              <tr>
                <td>이름</td>
                <td><input type='text' name='memName' /></td>
              </tr>
            </tbody>
          </table>
          <button type='button' onClick={() => {findPwInfo()}}>확인</button>
        </div>
      </div>
    
  )
}

export default FindPw