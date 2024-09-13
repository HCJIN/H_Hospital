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
      <div className='doctor-container'>
        <div className='doctorPage-img'>
          <img src={doctor.image} alt={`${doctor.name}'s image`} />
        </div>
       
          <div className='doctor-title'>
            <h1>{doctor.name}</h1>
            <p>{doctor.department}</p>
            <p>{doctor.intro}</p>
          </div>      
      </div>
    </div>
  );
};

export default DoctorPage;