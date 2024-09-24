import React, { useEffect, useState } from 'react'
import '../../css/JoinUpdateForm.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const JoinUpdateForm = ({updateWriting, setUpdateWriting}) => {

  const navigate = useNavigate();

  //url로 넘어오는 boardNum 값 받기
  const {boardNum} = useParams();

  //게시글 상세 정보를 저장할 state 변수
  const [contentDetail, setContentDetail] = useState({});

  //수정 쿼리 실행 시 빈 값을 채워 줄 데이터
  const [updateData, setUpdateData] = useState({
    boardNum : boardNum,
    boardTitle : '',
    boardContent : ''
  });

  function changeUpdateData(e){
    setUpdateData({
      ...updateData,
      [e.target.name] : e.target.value
    });
  }

//게시글 상세 정보 조회
useEffect(() => {
  axios.get(`/service/detail/${boardNum}`)
  .then((res) => {
    setContentDetail(res.data);
    setUpdateData({
      boardNum: res.data.boardNum,
      boardTitle : res.data.boardTitle,
      boardContent : res.data.boardContent
    });
  })
  .catch((error) => {console.log(error);});
}, [boardNum]);

//게시글 수정 함수
function updateBoard(){
  axios.put('/service/update', updateData)
  .then((res) => {
    alert('수정 완료');
    setUpdateWriting(false);
  })
  .catch((error) => {console.log(error)});
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
                    setUpdateWriting(false)
                  }}></i>
                </div>
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td>
                <input type='text' name='boardTitle'
                value={updateData.boardTitle}
                onChange={(e)=>{
                  changeUpdateData(e)
                }}></input>
              </td>
            </tr>
            <tr>
              <td>
                내용
              </td>
              <td>
                <textarea name='boardContent'
                value={updateData.boardContent}
                onChange={(e)=>{
                  changeUpdateData(e)
                }}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='writingFromBtn-div'>
          <button type='button' className='joinBtn-writing' onClick={()=>{updateBoard()}}>확인</button>
        </div>
      </div>
    </div>
  )
}

export default JoinUpdateForm