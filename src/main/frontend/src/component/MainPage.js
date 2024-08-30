import React, { useEffect, useState } from 'react'
import '../css/mainPage.css';
import axios from 'axios';
import NaverNewsComponent from './NaverNewsComponent';

const MainPage = () => {

  const [news, setNews] = useState([]);

  const handleNewsData = (data) => {
    setNews(data);
  };

  return (
    <div className='mainPage-div'>
      <div className='mainPage-container'>
        <div className='item'>
          <img src='http://localhost:8080/images/img-visual.jpg'></img>
          <div className='content'>
            <span>
              <strong>공감</strong>,
              또 하나의 치료
            </span>
            <br></br>
            <span>
              질병 치료를 넘어 환자의 마음까지 치유하겠습니다.
            </span>
          </div>
        </div>
        <div className='main-section'>
          <div className='main-icon-div'>
            <div className='main-icon-box'>
              <i className="bi bi-person-vcard"></i>
              <div>
                <strong>의료진찾기</strong>
                <p>
                  전문의료진을 빠르게<br></br>
                  찾을수있습니다.
                </p>
              </div>
            </div>
            <div className='main-icon-box'>
              <i className="bi bi-search-heart"></i>
              <div>
                <strong>진료과찾기</strong>
                <p>
                  진료 전 진료과를<br></br>
                  안내해 드립니다.
                </p>
              </div>
            </div>
            <div className='main-icon-box'>
              <i className="bi bi-calendar-week"></i>
              <div>
                <strong>진료예약</strong>
                <p>
                  회원/비회원 편리하게<br></br>
                  예약할 수 있습니다.
                </p>
              </div>
            </div>
            <div className='main-icon-box last-box'>
              <i className="bi bi-calendar-check"></i>
              <div>
                <strong>건강검진 안내</strong>
                <p>
                  헬스체크업에서<br></br>
                  건강검진을 안내해드립니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='main-section-middle'>
        <div>
          <div className='main-section-left-div'>
            <h3>NEWS</h3>
            <p>
              고객여러분께 가장 빠른 소식을<br></br>
              제공해 드리겠습니다.
            </p>
          </div>
          <div className='main-section-right-div'>
            {news.length === 0 ? (
                <p>뉴스 데이터가 없습니다.</p>
              ) : (
                news.map((item, index) => (
                  <div className='news-div' key={index}>
                    <div className='news-box'>언론 보도</div>
                    <p>{item.title}</p>
                    <div><span>{item.date}</span></div>
                  </div>
                ))
              )}
            {/* <div className='news-div'>
              <div className='news-box'>언론 보도</div>
              <p>[한국일보] 다음 팬데믹 향방가를 진단검사....신속 대응체계 속도 낸다</p>
              <div><span>2024-08-27</span></div>
            </div>
            <div className='news-div'>
              <div className='news-box'>언론 보도</div>
              <p>[한국일보] 다음 팬데믹 향방가를 진단검사....신속 대응체계 속도 낸다</p>
              <div><span>2024-08-27</span></div>
            </div>
            <div className='news-div'>
              <div className='news-box'>언론 보도</div>
              <p>[한국일보] 다음 팬데믹 향방가를 진단검사....신속 대응체계 속도 낸다</p>
              <div><span>2024-08-27</span></div>
            </div>
            <div className='news-div'>
              <div className='news-box'>언론 보도</div>
              <p>[한국일보] 다음 팬데믹 향방가를 진단검사....신속 대응체계 속도 낸다</p>
              <div><span>2024-08-27</span></div>
            </div> */}
          </div>
        </div>
      </div>
      <div>
          <NaverNewsComponent onNewsData={handleNewsData}/>
      </div>
    </div>
  )
}

export default MainPage