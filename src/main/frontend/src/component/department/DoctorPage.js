import React from 'react'
import { useParams } from 'react-router-dom'
import doctors from './doctorsData';
import '../../css/doctorPage.css'

const DoctorPage = () => {
  const {id} = useParams();
  const allDoctors = Object.values(doctors).flat();
  const doctor = allDoctors.find(doc => doc.id === parseInt(id));

  if (!doctor) {
    return <div>의료진 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className='doctor-page'>
      <div className='doctor-page-container'>
        <div className='doctorPage-img'>
          <img src={doctor.image} alt={`${doctor.name}'s image`} />
        </div>
       
          <div className='doctor-profile'>
            <div className='doctor-profile-title'>
              <h1>{doctor.name}</h1>
              <p>{doctor.department}</p>
            </div>

            <br/>

            <div className='doctor-profile-about'>
              <span>진료분야</span>
              <p>{doctor.intro}</p>
            </div>

            <br/>

            <div className='doctor-profile-graduation'>
              <span>학력</span>
              <p>{doctor.graduation1}</p>
              <p>{doctor.graduation2}</p>
              <p>{doctor.graduation3}</p>
            </div>

            <br/>

            <div className='doctor-profile-career'>
              <span>경력</span>
              <p>{doctor.career1}</p>
              <p>{doctor.career2}</p>
              <p>{doctor.career3}</p>
              <p>{doctor.career4}</p>
              <p>{doctor.career5}</p>
            </div>
          </div>      
      </div>
    </div>
  );
};

export default DoctorPage;