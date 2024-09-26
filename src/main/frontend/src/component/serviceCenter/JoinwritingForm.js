import React, { useState } from 'react'
import '../../css/JoinwritingForm.css';
import axios from 'axios';

const JoinwritingForm = ({writing, setWriting, loginInfo}) => {

  const [post, setPost] = useState({
    boardTitle : '',
    boardContent : '',
    memNum : JSON.parse(sessionStorage.getItem('loginInfo')).memNum
  })

  function onChange(e){
    setPost({
      ...post,
      [e.target.name] : e.target.value
    })
  }
  console.log(post)

  function goContent(){
    axios
    .post('/service/insertContent', post)
    .then((res)=>{
      setWriting(false)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div className='joinwritingForm-div'>
      <div className='content-box'>
        <table className='content-table'>
          <colgroup>
            <col width='30%'></col>
            <col width='*'></col>
          </colgroup>
          <tbody>
            <tr className='writer-tr'>
              <td colSpan={2}>
                <div>
                  <p>
                    <span>작성자 : </span>
                    <span>이름</span>
                  </p>
                  <i className="bi bi-x-circle-fill" onClick={()=>{
                    setWriting(false)
                  }}></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td>
                <input type='text' name='boardTitle' onChange={(e)=>{
                  onChange(e)
                }}></input>
              </td>
            </tr>
            <tr>
              <td>
                내용
              </td>
              <td>
                <textarea name='boardContent' onChange={(e)=>{
                  onChange(e)
                }}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='writingFromBtn-div'>
          <button type='button' className='joinBtn-writing' onClick={()=>{goContent()}}>확인</button>
        </div>
      </div>
    </div>
  )
}

export default JoinwritingForm