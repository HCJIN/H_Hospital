import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import '../../css/serviceCenter.css';
import JoinwritingForm from './JoinwritingForm';
import axios from 'axios';


const ServiceCenter = () => {

  const navigate = useNavigate();

  //글쓰기창 생성 여부
  const [writing, setWriting] = useState(false);

  //게시글리스트가 저장될 useState
  const [contentList, setContentList] = useState([]);

  const memberNumJSON = window.sessionStorage.getItem("loginInfo")
  const memberNum = JSON.parse(memberNumJSON)
  console.log(memberNum)


  //게시글 데이터 조회
  useEffect(()=>{
    axios
    .get('/service/getContentList')
    .then((res)=>{
      setContentList(res.data);
      console.log(res.data)
    })
    .catch()
  },[writing])

  return (
    <div className='serviceCenter-div'>
      {
        writing ? 
        <JoinwritingForm writing={writing} setWriting={setWriting}/>
        :
        <></>
      }
      <div className='title'>
        <p>고객센터</p>
      </div>
      <div className='section-div'>
        <div className='section-container'>
          <div className='section-container-left'>
            <div className='left-side'>
              <ul className='side-menu-ul'>
                <li>
                  <h3>공지사항</h3>
                </li>
                <li>
                  <h3>자주하는 질문</h3>
                </li>
                <li>
                  <h3>1:1 문의</h3>
                </li>
              </ul>
            </div>
            <div className='cscenter-box'>
              <div className='cscenter-top'>
                <i className="bi bi-telephone"></i>
                <h4>전화문의</h4>
              </div>
              <div className='cscenter-bottom'>
                <h4>1599-1044</h4>
              </div>
            </div>
          </div>
          <div className='section-container-right'>
            <div className='mycont'>
              <div className='right-top-div'>
                <h3 className='right-title'>공지사항</h3>
              </div>
              <div className='right-bottom-div'>
                <div className='tab-content'>
                  <div className='content-wrap'>
                    <ul className='list-ul'>
                      <li className='list-title'>
                        <span>번호</span>
                        <span>내용</span>
                        <span>공지일</span>
                      </li>
                      <li className='bold'>
                        <span>중요</span>
                        <span>[공지] 안드로이드 앱 팅김 오류 현상 관련 안내</span>
                        <span>2024-08-28</span>
                      </li>
                      {
                        contentList.map((content, i )=>{
                          return(
                            <li className='standard' key={i}>
                              <span>{contentList.length - i}</span>
                              {/* <span>{content.boardNum}</span> */}
                              <span onClick={(e) => {navigate(`/writingDetail/${content.boardNum}`)}}>{content.boardTitle}</span>
                              <span>{content.createDate}</span>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              </div>
              <div className='writing'>
                <button type='button' 
                className='joinBtn-writing'
                onClick={() => setWriting(true)}
                >글쓰기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCenter