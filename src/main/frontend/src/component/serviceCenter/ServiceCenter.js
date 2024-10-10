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
          <h2 className='right-title'>공지사항</h2>
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
                    <div className={isDetailShow[i] ? 'title-div bg' : 'title-div'}>
                      <div className='faq-index'>{faqList.length - i}</div>
                      <div className='faq-title' onClick={(e) => {
                        const copyIsDetailShow = [...isDetailShow];
                        copyIsDetailShow[i] = !copyIsDetailShow[i] // [true, false, false]
                        setIsDetailShow(copyIsDetailShow)//스테이트 변경함수는 원래 가지고 있는 값이 변경 될때만 실행
                      }}>
                        {faq.title}
                      </div>
                    </div>
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
        <div className='customerAll'>
          <div className='customerScroll'>
            <div className='customerImg'>
              <img src='http://localhost:8080/images/고객의소리.jpg'/>
            </div>
            <div className='scrollText'>
              울산메디컬센터는 고객 여러분께서 보다 편리하게 진료를 받을 수 있도록 노력하고 있습니다. <br/> 
              병원을 이용하면서 느낀 불편 사항을 말씀해 주시면 최선을 다해 처리해 드리겠습니다.<br/> <br/> 

              불만 및 고충 사항은 방문 또는 전화, 열린소리함 엽서, 인터넷 홈페이지를 통해 접수할 수 있습니다.<br/> <br/> 

              동관 지하1층 고객상담실에서 직원 면담으로 방문 접수가 가능하고 전화는 1599-1044를 이용할 수 있습니다.<br/>방문과 전화 접수의 경우 평일 오전 9시부터 오후 5시분까지 접수가 가능합니다.<br/> <br/> 

              병동 면회실, 검사실, 외래 등 병원 내 비치된 제안, 불편, 건의 엽서에 내용을 작성하여 열린소리함에 접수하여 주십시오.<br/> 또한 병원 홈페이지에서 작성이 가능합니다.<br/> 엽서와 인터넷 접수는 휴일이 포함될 경우 접수와 회신이 지연될 수 있습니다.<br/> <br/> 

              상담 및 접수 과정 중 환자와 호소자의 정보가 제공되지 않는 경우, 운영 취지에 맞지 않거나 모호한 내용, 비방과 욕설이 포함된 내용은 상담과 접수가 제한될 수 있습니다.<br/> <br/> 

              접수된 사안은 고객 여러분과 해당 부서의 의견을 토대로 처리 방향을 검토합니다.<br/> 
              사안에 따라 관련 부서와 협의하여 개선을 의뢰하거나 이관하여 처리합니다.<br/> <br/> 

              상담 중 즉시 회신을 드리지 못한 경우는 2주 이내 회신을 드리기 위해 노력하고 있습니다.<br/> 
              단, 사안에 따라 기간이 초과되는 경우는 고객에게 사전 통지합니다.<br/> <br/> 

              고객의 소리를 경청하고 개선하여 고객과 소통하는 울산메티컬센터가 되겠습니다.
            </div>
          </div>

          <div className='customer-container'>
            {/* <h2>고객의소리</h2> */}
            <div className='customer-suggestion'>
              <div>
                <h2>건의합니다!              <i class="bi bi-chat-dots"></i>
                </h2>
                <p>제안 및 불만 고충 접수</p>
                <button>건의합니다 글쓰기</button>
              </div>
            </div>
            <div className='customer-call'>
              <h2>고객상담실 방문 및 전화상담 시간</h2>
              <div className='customer-callInfo'>
                <div><i class="bi bi-headset"></i></div>
                <div className='callInfo'>
                  <span>평일 : 오전 9시 ~ 오후 5시</span><br/>
                  <span className='callInfo2'>본원/어린이/암병원 : 1599-1044</span>
                </div>
              </div>
            </div>
            <div className='customer-process'>
              <h2>고객상담 처리과정</h2>
              <div className='customer-process2'>
                <div>
                  <span><i class="bi bi-pencil-square"></i></span><br/>
                  <span>접수</span>
                </div>
                <span className='service-icon'>
                <i class="bi bi-chevron-right"></i>
                </span>
                <div>
                  <span><i class="bi bi-check2-circle"></i></span><br/>
                  <span>확인</span>
                </div>
                <span className='service-icon'>
                <i class="bi bi-chevron-right"></i>
                </span>
                <div>
                  <span><i class="bi bi-send"></i></span><br/>
                  <span>회신</span>
                  
                </div>
              </div>
              <div className='processText'>
                <div>
                  고객의 소리<br/>
                  접수
                </div>
                <div>
                  해당부서전달 <br/> 
                  및 확인
                </div>
                <div>
                  결과회신 <br/> 
                  및 개선활동
                </div>
              </div>
            </div>
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