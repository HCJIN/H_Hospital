import React, { useRef, useState } from 'react';
import '../css/setNewPw.css';
import { joinValiate } from '../validate/joinValidate';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SetNewPw = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { memInfo } = location.state || {};

  const [newPw, setNewPw] = useState({
    memPw: '',
    confirmMemPw: ''
  });

  // Ref 객체 초기화
  const memPw_valid_tag = useRef(null);
  const confirmPw_valid_tag = useRef(null);

  // 유효성 검사 ref 태그를 배열로 관리
  const valid_tags = [
    memPw_valid_tag,
    confirmPw_valid_tag
  ];

  // 유효성 검사 state
  const [validResult, setValidResult] = useState(false);

  function pwChange(e) {
    const { name, value } = e.target;
    setNewPw(prevData => {
      const updatedData = { ...prevData, [name]: value };

      // 유효성 검사 수행
      const result = joinValiate(updatedData, valid_tags, name);
      setValidResult(result);

      return updatedData;
    });
  }

  function pwSubmit() {
    if (!newPw.memPw || !newPw.confirmMemPw) {
      alert('빈칸을 모두 채워주세요');
      return;
    }

    if (newPw.memPw !== newPw.confirmMemPw) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    if (!memInfo || !memInfo.email) {
      alert('회원 정보가 없습니다. 다시 시도해 주세요.');
      return;
    }

    axios.post('/member/setNewPw', { email: memInfo.email, newPw: newPw.memPw })
      .then((res) => {
        alert('비밀번호 변경이 완료되었습니다');
        navigate('/loginForm');
      })
      .catch((error) => {
        console.log(error);
        alert('비밀번호 변경에 실패했습니다');
      });
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
                <td>새 비밀번호</td>
                <td>
                  <input
                    type='password'
                    name='memPw'
                    value={newPw.memPw}
                    onChange={pwChange}
                  />
                  <div ref={memPw_valid_tag}></div>
                </td>
              </tr>
              <tr>
                <td>새 비밀번호 확인</td>
                <td>
                  <input
                    type='password'
                    name='confirmMemPw'
                    value={newPw.confirmMemPw}
                    onChange={pwChange}
                  />
                  <div ref={confirmPw_valid_tag}></div>
                </td>
              </tr>
              <tr>
                <td colSpan='2' className='setPw-btn'>
                  <button type='button' onClick={pwSubmit}>변경 완료</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SetNewPw;
