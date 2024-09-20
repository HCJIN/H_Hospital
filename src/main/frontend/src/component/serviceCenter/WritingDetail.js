import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/writingDetail.css';

const WritingDetail = ({loginInfo}) => {

  const navigate = useNavigate();

  const {boardNum} = useParams();

  //게시글 상세 정보를 저장할 변수
  const [contentDetail, setContentDetail] = useState({});

  //게시글 상세 정보 조회
  useEffect(() => {
    axios.get(`/service/detail/${boardNum}`)
    .then((res) => {
      setContentDetail(res.data);
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

  //게시글 삭제 함수
  function deleteContent(boardNum){
    axios.delete(`/service/delete/${boardNum}`)
    .then((res) => {
      alert('게시글이 삭제되었습니다.')
      navigate('/serviceCenter')
    })
    .catch((error) => {
      console.log(error)
    });
  }

  return (
    <div className='contentContainer'>
      <div className='contentShow'>
        <h2>공지사항</h2>
        <div className='contentHeader'>
          <div>
            NO.{contentDetail.boardNum}
            {contentDetail.boardTitle}
          </div>
          <div>
            작성일: {contentDetail.createDate}
          </div>
        </div>
        <div className='contentBody'>
          {contentDetail.boardContent}
        </div>
      </div>
      <div className='contentButton'>
        <button type='button' onClick={() => {navigate('/serviceCenter')}}>목록가기</button>

        {
          loginInfo.memRole == 'Admin' || loginInfo.memId == contentDetail.memId
          ?
        <>
          <button type='button' onClick={() => {}}>수정</button>
          <button type='button' onClick={(e) => {deleteContent(contentDetail.boardNum)}}>삭제</button>
        </>
          :
          null
        }
      </div>
    </div>
  )
}

export default WritingDetail