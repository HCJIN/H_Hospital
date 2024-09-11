import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import doctors from './doctorsData';

const InfectiousDisease = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState('B');
  
  const infectiousDiseaseDoctors = doctors["감염내과"]

  const isActive = (btnContent)=> content === btnContent;

  
  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>감염내과</h2>
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
              감염질환 관리로<br/>
              <strong>인류 보건에 기여</strong>
            </div>
            <div className='infection-intro'>
              <br/>
              <i class="bi bi-capsule"></i>
              <i class="bi bi-capsule"></i>
              <i class="bi bi-capsule"></i>
              <br/>
              covid-19 등 신종 감염병의 등장은 물론, 과거에 유행했던 감염병의 재출현으로 감염질환의 관리는<br/> 현대사회에서 더욱 중요해졌습니다. 울산메디컬센터 감염내과는 인체 여러 부위에 발생하는 감염질환의 진단과<br/> 치료뿐 아니라 다양한 발열질환의 원인을 규명해 예방 및 관리를 전담하고 있습니다.
            </div>
          </div>}

          {content === 'B' && <div id='contentB'>
            <div className='family-doctor-container'>
              {infectiousDiseaseDoctors.map((doctor) => (
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

export default InfectiousDisease