import React, { useState } from 'react'
import doctors from './doctorsData'
import { useNavigate } from 'react-router-dom';

const ColorectalCancer = () => {
  const navigate = useNavigate();  
  
  const [content, setContent] = useState('B');  

  const colorectalCancerDoctors = doctors["대장암센터"]

  //버튼 상태 변경
  const isActive = (btnContent)=> content === btnContent;

  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>대장암센터</h2>
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
              풍부한 경험을<br/>
              바탕으로 한<br/>
              <strong>치료 기술</strong>
            </div>
            <div>
              울산메디컬센터는 국내외 의사들이 기술과 경험을 배우기 위해<br/> 대장암센터를 찾고 있을 정도로 높은 성과를 내왔습니다.<br/>앞으로도 울산메디컬센터 대장암센터는 모든 암환자들이 질병으로부터 자유로워지고<br/> 행복한 삶을 영위할 수 있도록 노력할 것입니다.
            </div>
          </div>}

          {content === 'B' && <div id='contentB'>
            <div className='family-doctor-container'>
              {colorectalCancerDoctors.map((doctor) => (
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

export default ColorectalCancer