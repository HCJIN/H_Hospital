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
            <div>
              국내 심혈관질환<br/>
              <strong>치료 선도</strong>
            </div>
            <div className='heart-intro'>
              <br/>
              <i class="bi bi-heart-pulse"></i>
              <i class="bi bi-heart-pulse"></i>
              <i class="bi bi-heart-pulse"></i>
              <br/>
              울산메디컬 대장암센터는 과학적인 근거 하에 최선의 치료 방법을 선택하고 <br/> 환자의 상태에 맞게 항암제를 투약 및 관리하여 암환자의 생존과 삶의 질 향상을 최우선의 목표로 하고 있습니다.<br/> 종양치료 전문의료진들이 곳곳에 위치하여 항암치료의 부작용과 대처법을 숙지하고 환자들을 돌보며 <br/> 환자와 보호자 교육에 힘쓰고 있으며 다학제 진료를 통해 최선의 치료 방법을 찾고 있습니다.
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