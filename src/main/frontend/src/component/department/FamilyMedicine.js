import React, { useState } from 'react'
import doctors from './doctorsData'
import { useNavigate } from 'react-router-dom'
import '../../css/FamilyMedicine.css'
import context from 'react-bootstrap/esm/AccordionContext'

const FamilyMedicine = () => {
  const navigate = useNavigate();
  
  const [content, setContent] = useState('B');  

  const familyMedicineDoctors = doctors["가정의학과"]

  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>가정의학과</h2>
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
          <button type='button' onClick={()=>setContent('A')}>소개</button>
          <button type='button' onClick={()=>setContent('B')}>의료진</button>

          {content === 'A' && <div id='contentA'>
            <p>소개를 눌렀을 때 나오는 거라구~!</p>
          </div>}

          {content === 'B' && <div id='contentB'>
            <div className='doctor-container'>
              {familyMedicineDoctors.map((doctor) => (
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

export default FamilyMedicine