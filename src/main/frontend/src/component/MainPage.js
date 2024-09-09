import React, { useEffect, useState } from 'react'
import '../css/mainPage.css';
import axios from 'axios';
import NaverNewsComponent from './NaverNewsComponent';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {

  const navigate = useNavigate();

  const [news, setNews] = useState([]);

  //배경이미지 
  const bg_1 = 'http://localhost:8080/images/img-visual.jpg';
  const bg_2 = 'http://localhost:8080/images/img-visual-02.png';
  const bg_3 = 'http://localhost:8080/images/img-visual-03.jpg';

  const [bgIndex, setBgIndex] = useState(0);

  //배경이미지를 담을 배열
  const bgList = [bg_1, bg_2, bg_3]; 

  useEffect(() => {
    const bgTimer = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % bgList.length);
    }, 5000);
    return () => clearInterval(bgTimer);
  }, [bgList.length]);

  const handleNewsData = (data) => {
    setNews(data);
  };

  return (
    <div className='mainPage-div'>
      <div className='mainPage-container'>
        <div className='item'>
          {bgList.map((bg, index) => (
            <div key={index} className={`bg-image-wrapper ${
              index === bgIndex ? 'active1' : ''
            }`}>
              <img
                src={bg}
                className={`bg-image BG_Image__${index} ${
                  index === bgIndex ? 'active1' : ''
                }`}
                alt={`BG_${index}`}
              />
              <div className={`BG_Text ${
                index === bgIndex ? 'fade-in' : 'fade-out'
              }`}>
                {index === 0 && (
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
                )}
                {index === 1 && (
                  <div className='content'>
                    <span>
                      회전형 중입자 치료기
                    </span>
                    <br></br>
                    <span>
                      췌장 · 폐 · 간암 치료시작 
                    </span>
                  </div>
                )}
                {index === 2 && (
                  <div className='content'>
                    <span>
                      For your 
                      <strong> Heart</strong>,
                    </span>
                    <br></br>
                    <span>
                    정확한 판단과 빠른 치료지원으로 당신의 심장을 지키겠습니다.
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className='main-section'>
          <div className='main-icon-div'>
            <div className='main-icon-box'>
              <i className="bi bi-person-vcard"></i>
              <div onClick={()=>{navigate('/findDoctor')}}>
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
              <div onClick={()=>{
                navigate('/reservation')
              }}>
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