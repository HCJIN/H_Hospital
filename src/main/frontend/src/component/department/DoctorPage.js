import React from 'react'
import { useParams } from 'react-router-dom'
import doctors from './doctorsData';

const DoctorPage = () => {
  const {id} = useParams();
  const allDoctors = Object.values(doctors).flat();
  const doctor = allDoctors.find(doc => doc.id === parseInt(id));

  if (!doctor) {
    return <div>의료진 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className='doctor-page'>
      <h2>{doctor.name}</h2>
      <img src={doctor.image} alt={`${doctor.name}'s image`} />
      <p>{doctor.intro}</p>
    </div>
  );
};

export default DoctorPage;