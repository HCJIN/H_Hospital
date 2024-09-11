import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import doctors from './doctorsData';

const Pediatrics = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState('B');

  const heartDoctors = doctors['소아과']

  const isActive = (btnContent) => content === btnContent;

  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>소아과</h2>
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
            <div>
              환아에게 제공하는<br/>
              <strong>최상의 진료서비스</strong>
            </div>
            <div className='pediatric-intro'>
              <br/>
              <i class="bi bi-thermometer"></i>
              <i class="bi bi-thermometer-half"></i>
              <i class="bi bi-thermometer-high"></i>
              <br/>
              울산메디컬센터 소아과는 환아들에게 최상의 진료를 제공하고자 국내 최고의 전문 의료진이 첨단장비를 이용해<br/> 집중치료실 내에서 신속한 검사와 치료를 시행하고 있습니다. 소아관련 모든 진료과 의료진과 협의진료를 시행하며<br/> 세계적 수준의 진단과 치료, 상담을 시행하고 있습니다.
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

export default Pediatrics