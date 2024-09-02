import React from 'react'
import '../css/serviceCenter.css';

const ServiceCenter = () => {
  return (
    <div className='serviceCenter-div'>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceCenter