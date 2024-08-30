import React, { useRef, useState } from 'react'
import '../css/setNewPw.css';
import { joinValiate } from '../validate/joinValidate';
import { useNavigate } from 'react-router-dom';

const SetNewPw = () => {

  const navigate = useNavigate();

  const [newPw, setNewPw] = useState({
    memPw : ''
  })

  //pw 유효성 검사
  const memPw_valid_tag = useRef();
  const confirmMemPw_valid_tag = useRef();

  //유효성 검사 ref 태그s 한 번에 배열로 가져가기
  const valid_tag = [
    memPw_valid_tag,
    confirmMemPw_valid_tag
  ]

  //유효성 검사 state
  const [validResult, setValidResult]= useState(false)

  function pwChange(e){
    //입력한 데이터
    const newData={
      ...newPw,
      [e.target.value] : e.target.name
    }
  }

  return (
    <div className='setPw-div'>
     <div>
        <div className='setPw-title'>
          <h3>비밀번호 재설정</h3>
          <span>다른 아이디나 사이트에서 사용한 적 없는 안전한 비밀번호로 변경해 주세요</span>
        </div>
        <div className='setPw-table-content'>
          <table className='setPw-table'>
            <tbody className='setPw-table-body'>
              <tr>
                <td>새비밀번호</td>
                <td>
                  <input type='password' name='memPw'></input>
                </td>
              </tr>
              <tr>
                <td>새비밀번호 확인</td>
                <td>
                  <input type='password' name='memPw'></input>
                </td>
              </tr>
              <div className='setPw-btn'>
                <button type='button'>변경 완료</button>
              </div>
            </tbody>    
          </table>       
        </div>
     </div>
    </div>
  )
}

export default SetNewPw