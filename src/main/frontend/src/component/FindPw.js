import React, { useEffect, useState } from 'react'
import '../css/FindPw.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const FindPw = () => {

  const navigate = useNavigate();

  const [memInfo, setMemInfo] = useState({});

  //pw찾기 정보를 입력 받아 저장할 변수
  const [insertFindPwData, setInsertFindPwData] = useState({
    email : '',
    memName : ''
  })

  // pw 찾기를 위한 기본 정보
  function insertFindPw(){
    
    if(!insertFindPwData.email.trim()){
      alert('아이디를 입력해 주세요')
      return
    }
    if(!insertFindPwData.memName){
      alert('이름을 입력해 주세요')
      return;
    }

    axios.post('/member/findPw', insertFindPwData)
    .then((res)=>{
      setMemInfo(res.data)
      navigate('/setNewPw',{state:{memInfo:res.data}})
    })
    .catch((error)=>{
      console.log(error)
      alert('오류가 발생했습니다')
    })
  }

  function changeInsertFindId(e){
    setInsertFindPwData({
      ...insertFindPwData,
      [e.target.name] : e.target.value
    })
    
  }


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
                <td><input type='text' name='email'
                onChange={(e)=>{changeInsertFindId(e)}}/></td>
              </tr>
              <tr>
                <td>이름</td>
                <td><input type='text' name='memName'
                onChange={(e)=>{changeInsertFindId(e)}}/></td>
              </tr>
            </tbody>
          </table>
          <button type='button' onClick={()=>{insertFindPw()}}>확인</button>
        </div>
      </div>
    
  )
}

export default FindPw