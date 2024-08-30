import React from 'react'

const SetNewPw = () => {
  return (
    <div className='findPw-div'>
      <div className='findPw-title'>
        <h3>비밀번호 재설정</h3>
        <span>다른 아이디나 사이트에서 사용한 적 없는 안전한 비밀번호로 변경해 주세요</span>
      </div>
      <div>
        <table className='findPw-table'>
          <tbody className='findPw-table-body'>
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
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SetNewPw