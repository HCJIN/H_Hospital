import React, { useEffect, useRef, useState } from 'react';
import '../css/setNewPw.css';
import { joinValiate } from '../validate/pwValidate';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SetNewPw = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //이전페이지에서 받아온 데이터
  const { memInfo } = location.state || {};

  //멤버리스트를 저장할 state
  const [memberList, setMemberList] = useState([]);

  //비밀번호를 저장할 state 객체
  const [newPw, setNewPw] = useState({
    memPw: '',
    confirmPw: '',
    email : memInfo.email
  });

  //id 유효성 검사
  const confirmPw_valid_tag = useRef();
  const memPw_valid_tag = useRef();

  //유효성 검사 ref 태그들을 한번에 배열로 가져가기 
  const valid_tag = [
    confirmPw_valid_tag,
    memPw_valid_tag
  ];

  //멤버리스트 데이터 가져오기
  useEffect(()=>{
    axios
    .get('/member/memberList')
    .then((res)=>{
      setMemberList(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  // 유효성 검사 state
  const [validResult, setValidResult] = useState(false);

  function pwChange(e) {
    //입력한 데이터
    const newData = {
      ...newPw,
      [e.target.name] : e.target.value
    }
    //입력한 데이터에 대한 validation 처리
    //모든 데이터가 유효한 데이터면 리던 true
    const result = joinValiate(newData, valid_tag, e.target.name);
    setValidResult(result);

    //유효성 검사 끝난 데이터를 setMember에 저장
    setNewPw(newData)
  }

  //확인 버튼을 누르면 진행
  function pwSubmit() {

    if (!newPw.memPw || !newPw.confirmPw) {
      alert('빈칸을 모두 채워주세요');
      return;
    }

    if (newPw.memPw !== newPw.confirmPw) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }

    if (!memInfo || !memInfo.email) {
      alert('회원 정보가 없습니다. 다시 시도해 주세요.');
      return;
    }

    if (memberList.some(e => e.memPw === newPw.memPw)) {
      alert('기존의 비밀번호와 동일합니다.');
    } else {
      axios.post('/member/setNewPw', newPw)
        .then((res) => {
          alert('비밀번호 변경이 완료되었습니다');
          navigate('/loginForm');
        })
        .catch((error) => {
          console.log(error);
          alert('비밀번호 변경에 실패했습니다');
        });
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
                <td>새 비밀번호</td>
                <td>
                  <input
                    className='inputText'
                    type='password'
                    name='memPw'
                    onChange={(e)=>{
                      pwChange(e)
                    }}
                  />
                  <div className='feedback' ref={memPw_valid_tag}></div>
                </td>
              </tr>
              <tr>
                <td>새 비밀번호 확인</td>
                <td>
                  <input
                    className='inputText'
                    type='password'
                    name='confirmPw'
                    onChange={(e)=>{
                      pwChange(e)
                    }}
                  />
                  <div className='feedback' ref={confirmPw_valid_tag}></div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='setPw-btn'>
            <button 
              type='button' 
              onClick={pwSubmit}>
              변경 완료
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetNewPw;
