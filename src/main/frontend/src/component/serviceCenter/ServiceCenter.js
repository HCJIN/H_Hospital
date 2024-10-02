import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import '../../css/serviceCenter.css';
import JoinwritingForm from './JoinwritingForm';
import axios from 'axios';
import { faqList } from './faqList';


const ServiceCenter = () => {

  const navigate = useNavigate();

  //글쓰기창 생성 여부
  const [writing, setWriting] = useState(false);

  //state값에 따라 메인화면 바뀜
  const [sideMenu, setSideMenu] =useState('공지사항');

  //상세보기 여부 state 변수
  const [isDetailShow, setIsDetailShow] = useState(new Array(faqList.length).fill(false)) 


  function changeSideMenu(){
    if(sideMenu == '공지사항'){
      return(
        <>
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
                  contentList.map((content, i)=>{
                    return(
                      <li className='standard' key={content.boardNum}>
                        <span>{contentList.length - i}</span>
                        {/* <span>{content.boardNum}</span> */}
                        <span onClick={(e) => {navigate(`/writingDetail/${content.boardNum}`)}}>{content.boardTitle}</span>
                        <span>{content.createDate}</span>
                      </li>
                    );
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
        </>
      )
    }
    else if(sideMenu == '자주묻는 질문'){
      return(
        <div className='faq-container'>
          <h2>자주묻는 질문</h2>
          <div className='faq-list'>
            
            {
              faqList.map((faq, i) => {
                return (
                  <div className='faq' key={i}>
                    <div className='faq-title' onClick={(e) => {
                      //isDetailShow = [false, false, false]
                      const copyIsDetailShow = [...isDetailShow];
                      copyIsDetailShow[i] = !copyIsDetailShow[i] // [true, false, false]
                      //스테이트 변경함수는 원래 가지고 있는 값이 변경 될때만 실행
                      setIsDetailShow(copyIsDetailShow)
                    }}>{faq.title}</div>
                    <div className={isDetailShow[i] ? 'faq-detail show' : 'faq-detail'}>{faq.content}</div>
                  </div>
                );
              })
            }

          </div>
        </div>
      )
    }
    else if(sideMenu == '고객의소리'){
      return(
        <div>
          <h3>고객의소리</h3>
          <div>
            <h4>건의합니다!</h4>
            <p>제안 및 불만 고충 접수</p>
            <button>건의합니다 글쓰기</button>
          </div>
          <div>
            <h2>고객상담실 방문 및 전화상담 시간</h2>
            <div>
              <div></div>
              <div>
                <span>평일 : 오전 9시 ~ 오후 5시</span>
                <span>본원/어린이/암병원 : </span>
              </div>
            </div>
          </div>
          <div>
            <h2>고객상담 처리과정</h2>
            <div>접수</div>
            <div>확인</div>
            <div>회신</div>
          </div>
        </div>
      )
    }
  }

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
      //boardNum을 기준으로 내림차순 정렬
      const sortedData = res.data.sort((a, b) => {
        return b.boardNum - a.boardNum;// 내림차순
      });
      setContentList(sortedData);
      console.log(sortedData);
    })
    .catch((error) => {
      console.log(error);
    });
  },[writing]);

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
                <li onClick={() => {setSideMenu('공지사항')}}>
                  <h3>공지사항</h3>
                </li>
                <li onClick={() => {setSideMenu('자주묻는 질문')}}>
                  <h3>자주묻는 질문</h3>
                </li>
                <li onClick={() => {setSideMenu('고객의소리')}}>
                  <h3>고객의소리</h3>
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
              {
                changeSideMenu()
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCenter