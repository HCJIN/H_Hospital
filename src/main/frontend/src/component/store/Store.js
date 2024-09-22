import React, { useState } from 'react'
import '../../css/store.css';

const Store = () => {
  const [content, setContent] = useState('A')

  //카테고리 버튼 상태변경
  const isActive = (btnContent)=> content === btnContent;

  return (
    <div className='store-div'>
      <div className='store-bg'>
        <img src='http://localhost:8080/images/sub_visual_product.jpg'></img>
        <div className='text-div'>
          <p>울산메티컬몰</p>
          <span>끊임없는 변화 혁신으로 도약</span>
        </div>
      </div>
      <div className='store-table-div'>
        <table className='store-table'>
          <thead className='store-thead'>
            <tr>
              <td>
                <p>번호</p>
              </td>
              <td>
                <p>제품</p>
              </td>
              <td>
                <p>수량</p>
              </td>
              <td>
                <p>주문일시</p>
              </td>
              <td>
                <p>상태</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>인공눈물</td>
              <td>
                <input type='number'></input>
                <button type='button'>확인</button>
              </td>
              <td>
                <p>2024-09-20</p>
              </td>
              <td>
                <p>발주등록</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='store-icon-div'>
        <div>
          <i className="bi bi-bag-plus"></i>
          <button type='button' onClick={()=>{setContent('A')}} className={`button ${isActive('A')? 'active':''}`}>전체</button>
        </div>
        <div>
          <i class="bi bi-capsule"></i>
          <button type='button' onClick={()=>{setContent('B')}} className={`button ${isActive('B') ? 'active' : ''}`}>전문의약품</button>
        </div>
        <div>
          <i className="bi bi-scissors"></i>
          <button type='button' onClick={()=>{setContent('C')}}className={`button ${isActive('C') ? 'active' : ''}`}>수술관련기기</button>
        </div>
        <div>
          <i className="bi bi-virus"></i>
          <button type='button' onClick={()=>{setContent('D')}}className={`button ${isActive('D') ? 'active' : ''}`}>멸균기</button>
        </div>
        <div>
          <i className="bi bi-heart-pulse-fill"></i>
          <button type='button' onClick={()=>{setContent('E')}} className={`button ${isActive('E') ? 'active' : ''}`}>폐활량계,심전계</button>
        </div>
      </div>

        {content === 'A' && 
          <div id='contentA'>
             <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/유한_리알트리스 나잘스프레이액.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/유한_알모그란.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/유한_에이론플러스.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_5%포도당가엔에이.케이주2.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_뉴글리아.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_라베그론.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_아세타펜주.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_플라주오피주jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/한미_구구탐스.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/한미_낙소졸.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/한미_레브로콜.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/한미_아모잘탄.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_C-Flex™_Head_Positioning_System.jpg'></img>
              </li>
            </ul>            
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_Honeylux_LED_RK.jpg'></img>
              </li>
            </ul>            
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_TS3000.jpg'></img>
              </li>
            </ul>            
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_Ultrafins Stirrups.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_JW-SS270_JW-SS360.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_EO_가스멸균기.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_고압증기멸균기.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_멸균기_CHS-ST045__ST065.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_CHESTMATE.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_HI-801.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_멸균기_CHS-ST045__ST065.jpg'></img>
              </li>
            </ul>        
          </div>
        }
        {content ==='B' &&
          <div id='contentB'>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/유한_리알트리스 나잘스프레이액.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/유한_알모그란.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/유한_에이론플러스.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_5%포도당가엔에이.케이주2.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_뉴글리아.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_라베그론.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_아세타펜주.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_플라주오피주jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/한미_구구탐스.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/한미_낙소졸.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/한미_레브로콜.jpg'></img>
              </li>
              <li>
                <img src='http://localhost:8080/images/3rd/한미_아모잘탄.jpg'></img>
              </li>
            </ul>
          </div>
        }
        {content ==='C' &&
          <div id='contentC'>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_C-Flex™_Head_Positioning_System.jpg'></img>
              </li>
            </ul>            
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_Honeylux_LED_RK.jpg'></img>
              </li>
            </ul>            
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_TS3000.jpg'></img>
              </li>
            </ul>            
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_Ultrafins Stirrups.jpg'></img>
              </li>
            </ul>            
          </div>
        }
        {content ==='D' &&
          <div id='contentD'>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_JW-SS270_JW-SS360.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_EO_가스멸균기.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_고압증기멸균기.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_멸균기_CHS-ST045__ST065.jpg'></img>
              </li>
            </ul>
          </div>
        }
        {content ==='E' &&
          <div id='contentE'>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_CHESTMATE.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_HI-801.jpg'></img>
              </li>
            </ul>
            <ul>
              <li>
                <img src='http://localhost:8080/images/3rd/중외_멸균기_CHS-ST045__ST065.jpg'></img>
              </li>
            </ul>
          </div>
        }

    </div>
  )
}

export default Store