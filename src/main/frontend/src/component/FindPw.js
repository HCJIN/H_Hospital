import React from 'react'
import '../css/FindPw.css';



const FindPw = () => {
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
                <td><input type='text' name='' onChange={() => {}}/></td>
              </tr>
              <tr>
                <td>이름</td>
                <td><input type='text' name='' onChange={() => {}}/></td>
              </tr>
              <tr>
                <td>성별</td>
                <td>
                  <input type='radio' name='gender'/>남성
                  <input type='radio' name='gender'/>여성
                </td>
              </tr>
              <tr>
                <td>생년월일</td>
                <td>
                  <select>
                    <option disabled selected>년</option>
                  </select>
                  <select>
                    <option disabled selected>월</option>
                  </select>
                  <select>
                    <option disabled selected>일</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <button type='button' onClick={() => {}}>확인</button>
        </div>
      </div>
    
  )
}

export default FindPw