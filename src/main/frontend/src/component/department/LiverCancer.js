import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import doctors from './doctorsData';

const LiverCancer = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState('B');

  const liverCancerDoctors = doctors['간암센터']

  const isActive = (btnContent)=> content === btnContent;

  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>간암센터</h2>
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
              최고의 수술<br/>
              <strong>최고의 의료진</strong>
            </div>
            <div className='cancer-intro'>
              <br/>
              <i className="bi bi-eyedropper"></i>
              <i className="bi bi-eyedropper"></i>
              <i className="bi bi-eyedropper"></i>
              <br/>
              울산메디컬센터의 간암센터는 최첨단 로봇수술과 복강경수술을 시행하며<br/>
              최소한의 오차로 수술 성골률을 높입니다. 가족을 치료하는 마음으로<br/>
              최선을 다해 환자의 건강을 지키겠습니다.
            </div>
          </div>}

          {content === 'B' && <div id='contentB'>
            <div className='family-doctor-container'>
              {liverCancerDoctors.map((doctor) => (
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

export default LiverCancer