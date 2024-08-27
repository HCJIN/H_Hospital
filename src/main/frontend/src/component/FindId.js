import React from 'react'
import '../css/FindId.css'

const FindId = () => {
  return (
    <div className='findId-div'>
      <div className='findId-div-div'>
        <div className='find-header'>
          <h3>아이디 찾기</h3>
          <span>회원가입 시 등록한 정보로 사용자를 확인해 주세요</span>
        </div>
        <div className='find-content'>
          <p>등록 정보로 찾기</p>
          <span>회원가입 시 등록한 정보를 아래에 입력해 주세요</span>
          <table>
            <tbody>
            <tr>
              <td>이름</td>
              <td><input></input></td>
            </tr>
            <tr>
              <td>성별</td>
              <td>
                <input type='radio' name='gender'/> 남성
                <input type='radio' name='gender'/> 여성
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
            <tr>
              <td>전화번호</td>
              <td>
                <select>
                  <option selected value='010'>010</option>
                </select>
                -<input type='text'></input>
                -<input type='text'></input>
              </td>
            </tr>
            </tbody>
          </table>
          <button className='findId-btn' type='button'>확인</button>
        </div>
      </div>
    </div>
  )
}

export default FindId