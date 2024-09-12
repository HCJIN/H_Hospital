import React, { useState } from 'react'
import doctors from './doctorsData'
import { useNavigate } from 'react-router-dom'

const Heart = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState('B');

  const heartDoctors = doctors['심장병원']

  const isActive = (btnContent)=> content ===btnContent;

  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>심장병원</h2>
            <div className='family-header-main-btn'>
              <button type='button' onClick={()=>{navigate('/reservation')}}>
              <i class="bi bi-clipboard-pulse"></i>
                진료예약</button>
              <button type='button' onClick={()=>{navigate('/findDepartment')}}>
                <i class="bi bi-calendar2-heart"></i>
                전체진료과</button>
            </div>
          </div>
        </div>

        <div className='family-body'>
        <div className='family-tab'>
          <button type='button' onClick={()=>setContent('A')} className={`button ${isActive('A') ? 'active' : ''}`}>소개</button>
          <button type='button' onClick={()=>setContent('B')} className={`button ${isActive('B') ? 'active' : ''}`}>의료진</button>

          {content === 'A' && <div id='contentA' className='contentA'>
            <div className='contentA-div'>
              <div className='contentA-slogan'>
                국내 심혈관질환<br/>
                <strong>치료 선도</strong>
              </div>
              <div className='heart-intro'>
                <br/>
                <i className="bi bi-heart-pulse"></i>
                <i className="bi bi-heart-pulse"></i>
                <i className="bi bi-heart-pulse"></i>
                <br/>
                우리나라는 1980년대 이후 산업화를 겪으면서 질병의 양상이 크게 변화하고 있고 심장질환을 앓는 환자 수도 급격히 증가하고 있습니다.<br/> 울산메디컬센터 심장병원은 관상동맥조영술을 시행하고 심초음파를 처음 도입해 심장질환을 진단하는 등 국내심혈관질환의 진단과 치료를 선도하고 있습니다.<br/> 또한 심혈관연구소를 개소해 동맥경화증, 관상동맥질환, 고지혈증, 부정맥 등 여러 심혈관질환의 기초연구를 수행하는 한편 스텐트 개발, 줄기세포이식 등을 연구하며 <br/> 궁극적으로 환자에게 도움이 되기 위해 노력하고 있습니다.
              </div>
              <div className='family-disease'>
                  <h2>
                  <i class="bi bi-bookmarks"></i>
                    주요진료질환
                    </h2>
                  <table className='family-disease-table'>
                    <colgroup>
                      <col width={"20%"}/>
                      <col width={"20%"}/>
                      <col width={"20%"}/>
                      <col width={"20%"}/>
                      <col width={"20%"}/>
                    </colgroup>                   
                    <tbody>
                      <tr>
                        <td>고지혈증</td>
                        <td>관상동맥질환</td>
                        <td>난원공개존증</td>
                        <td>난치성 고혈압</td>
                        <td>심근경색</td>
                      </tr>
                      <tr>
                        <td>심부정맥혈전증</td>
                        <td>인공심박동기</td>
                        <td>버거병</td>
                        <td>부정맥</td>
                        <td>상심실성빈맥</td>
                      </tr>
                      <tr>
                        <td>심장종양</td>
                        <td>흉통</td>
                        <td>협심증</td>
                        <td>폐색전증</td>
                        <td>심장판막질환</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
          </div>}

          {content === 'B' && <div id='contentB'>
            <div className='family-doctor-container'>
              {heartDoctors.map((doctor) => (
                    <div key={doctor.id} className='doctor-card'>
                      <div className='doctor-image-container'>
                        <img src={doctor.image} className='doctor-image' alt={`${doctor.name}'s image`} />
                      </div>
                      <div className='doctor-details'>
                        <h4 className='doctor-name'>{doctor.name}</h4>
                        <p className='doctor-intro'>{doctor.intro}</p>
                      </div>
                    </div>
              ))} 
            </div>          
          </div>}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Heart