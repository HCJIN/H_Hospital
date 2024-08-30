import '../css/SuccessFindId.css'
import { useLocation, useNavigate } from 'react-router-dom'

const SuccessFindId = () => {

  //전달된 데이터 받아서 표시
  const location = useLocation();
  
  const navigate = useNavigate();
  
  const { memInfo } = location.state;

  return (
    <div className='successId-div'>
      <div className='successId-div-div'>
        <div className='successId-title'>아이디 찾기 완료</div>
        <div className='successId-message'>
          <p>
            <span>{memInfo.memName}</span>
            회원님의 정보와 일치하는 아이디입니다
          </p>
          <table className='successId-table'>
            <tbody>
              <tr>
                <td>"{memInfo.email}"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='successId-btn'>
          <button type='button' onClick={()=>{navigate('/loginForm')}}>로그인 하기</button>
          <button type='button' onClick={()=>{navigate('/findPw')}}>비밀번호 찾기</button>
        </div>
    </div>
  )
}

export default SuccessFindId