import '../css/SuccessFindId.css';
import { useLocation, useNavigate } from 'react-router-dom';

const SuccessFindId = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 위치에서 memInfo를 추출합니다. 안전하게 접근하기 위해 옵셔널 체이닝을 사용합니다.
  const memInfo = location.state?.memInfo;

  // 콘솔 로그로 데이터를 확인합니다.
  console.log('Location State:', location.state);
  console.log('MemInfo:', memInfo);

  return (
    <div className='successId-div'>
      <div className='successId-div-div'>
        <div className='successId-title'>아이디 찾기 완료</div>
        <div className='successId-message'>
          {memInfo ? (
            <>
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
            </>
          ) : (
            <p>입력한 정보와 일치하는 아이디가 없습니다</p>
          )}
        </div>
      </div>
      <div className='successId-btn'>
        <button type='button' onClick={() => navigate('/loginForm')}>로그인 하기</button>
        <button type='button' onClick={() => navigate('/findPw')}>비밀번호 찾기</button>
      </div>
    </div>
  );
};

export default SuccessFindId;
