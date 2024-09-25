import axios from 'axios';
import React, { Children, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/writingDetail.css';
import JoinUpdateForm from './JoinUpdateForm';

const WritingDetail = ({loginInfo}) => {

  //글쓰기창 생성 여부
  const [updateWriting, setUpdateWriting] = useState(false);

  //댓글 삭제 후 재랜더링을 위한 변수
  const[deleteState, setDeleteState] = useState({});

  const navigate = useNavigate();

  const {boardNum} = useParams();

  //게시글 상세 정보를 저장할 변수
  const [contentDetail, setContentDetail] = useState({});
  console.log(contentDetail)

  //댓글 목록을 저장할 변수
  const [replyList, setReplyList] = useState([]);

  

  //댓글 등록 시 가져가야 하는 데이터를 저장할 변수
  const[replyData, setReplyData] = useState({
    replyContent : '',
    boardNum : boardNum,
    memNum : 0
  });

  //게시글 상세 정보 조회
  // useEffect(() => {
  //   axios.get(`/service/detail/${boardNum}`)
  //   .then((res) => {
  //     setContentDetail(res.data);
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   });
  // }, [updateWriting]);

  // //댓글 상세 정보 조회
  // useEffect(() => {
  //   axios.get(`/reply/list/${boardNum}`)
  //   .then((res) => {
  //     setReplyList(res.data);
  //     console.log(res.data)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }, []);

  //db에서 데이터 조회 여러개 동시에 실행하기
  useEffect(() => {
    axios.all([
      axios.get(`/service/detail/${boardNum}`),
      axios.get(`/reply/list/${boardNum}`)
    ])
    .then(axios.spread((contentResponse, replyResponse) => {
      setContentDetail(contentResponse.data);
      //댓글을 내림차순으로 정렬
      const sortedReplies = replyResponse.data.sort((a,b) => b.replyNum - a.replyNum);
      setReplyList(sortedReplies);
    }))
    .catch((error) => {
      console.log(error);
    });
  }, [replyData, deleteState]);

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

  //댓글 등록 함수
  function regReply(){
    axios
    .post('/reply/insert', replyData)
    .then((res) => {
      alert('댓글 등록 완료');

      //추가된 댓글이 화면에 바로 보이게 코드 작성
      setReplyData({
        ...replyData,
        replyContent : ''
      });

    })
    .catch((error) => {
      console.log(error);
    });
  }

  //댓글 삭제 함수
  function deleteReply(replyNum){
    axios.delete(`/reply/delete/${replyNum}`)
    .then((res) => {
      alert('댓글 삭제 완료')
      setReplyData({});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  console.log(loginInfo);

  return (
    <div className='contentContainer'>
      {
        updateWriting ?
        <JoinUpdateForm updateWriting={updateWriting} setUpdateWriting={setUpdateWriting}/>
        :
        <></>
      }
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
          loginInfo && (loginInfo.memRole === 'admin' || loginInfo.memNum === contentDetail.memNum) && (
        <>
          <button type='button' onClick={() => {
            setUpdateWriting(true)
          }}>수정</button>
          <button type='button' onClick={(e) => {deleteContent(contentDetail.boardNum)}}>삭제</button>
        </>
        )}
      </div>

      {
        loginInfo.memNum != null
        ?
        <div className='replyReg'>
          <input type='text' onChange={(e) => {
            setReplyData({
              ...replyData,
              replyContent : e.target.value,
              memNum : JSON.parse(sessionStorage.getItem('loginInfo')).memNum
            });
          }}/>
          <button type='button' onClick={(e) => {
            regReply()
          }}>댓글등록</button>
        </div>
        :
        <div></div>
      }

      <div>
        {
          replyList.map((reply, i) => {
            return(
              <div className='replyDetail'>
                <div className='replyInfo'>
                  <div className='replyIcon'>
                    <span><i class="bi bi-person-circle"></i>
                    </span>
                  </div>
                  <div className='replyUpper'>
                    <div>
                      <div>{loginInfo.email}</div>
                      <div>{reply.replyDate}</div>
                    </div>

                    {
                      loginInfo.memNum != null
                      ?
                    <div>
                      <span onClick={(e) => {deleteReply(reply.replyNum)}}><i class="bi bi-trash3-fill"></i></span>
                    </div>
                    :
                    <div></div>
                    }

                  </div>
                </div>
                <div className='replyFont'>{reply.replyContent}</div>
              </div>
            );
          })
        }
      </div>

    </div>
  )
}

export default WritingDetail