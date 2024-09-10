import React from 'react'
import doctors from './doctorsData'
import { useNavigate } from 'react-router-dom'

const FamilyMedicine = () => {
  const navigate = useNavigate();

  const familyMedicineDoctors = doctors["가정의학과"]
  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>가정의학과</h2>
            <div className='family-header-main-btn'>
              <button type='button' onClick={()=>{navigate('/reservation')}}>진료예약</button>
              <button type='button' onClick={()=>{navigate('/findDepartment')}}>전체진료과</button>
            </div>
          </div>
          <div>소개/의료진-클릭하면 소개뜨고, 의료진 뜨고</div>
        </div>

        <div className='family-body'>
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
      </div>
    </div>
  )
}

export default FamilyMedicine