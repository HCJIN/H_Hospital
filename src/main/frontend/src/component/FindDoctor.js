import React, { useState } from 'react';
import doctors from './department/doctorsData';
import '../css/FindDoctor.css';
import { useNavigate } from 'react-router-dom';

const FindDoctor = () => {
  const navigate = useNavigate();
  
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleDepartmentChange = (event) => {
    const department = event.target.value;
    setSelectedDepartment(department);
    setFilteredDoctors(doctors[department] || []);
  };

  const handleDoctorClick = (doctorId) =>{
    navigate(`/doctor/${doctorId}`)
  }

  return (
    <div className='find-div'>
      <div>
        <div className='find-title-select'>
          <h2>의료진찾기</h2>
          <select onChange={handleDepartmentChange}>
            <option value="">진료과를 선택하세요</option>
            <option value="가정의학과">가정의학과</option>
            <option value="감염내과">감염내과</option>
            <option value="암센터">암센터</option>
            <option value="비뇨의학과">비뇨의학과</option>
            <option value="소아과">소아과</option>
            <option value="심장병원">심장병원</option>
          </select>
        </div>
        <div className='info-container'>
          {selectedDepartment === '' ? (
            <div className='searchInfo'>
                <i class="bi bi-search-heart"></i>
                <span>
                  <p> 진료과.클리닉.센터에 속한 의료진을 빠르게 찾으실 수 있습니다.</p>
                  <p>의료진 찾기는 <span>진료과 선택</span>으로 가능합니다.</p>
                </span>
            </div>
          ) : (
            <div className='doctor-container'>
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className='doctor-card'>
                  <div className='doctor-image-container'>
                    <img src={doctor.image} className='doctor-image' alt={`${doctor.name}'s image`} />
                  </div>
                  <div className='doctor-details'>
                    <h4 className='doctor-name'>{doctor.name}</h4>
                    <p className='doctor-intro'>{doctor.intro}</p>
                  </div>
                  <div className='doctor-overlay'>
                        <button type='button' className='doctor-intro-btn' onClick={()=>handleDoctorClick(doctor.id)}>의료진소개</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
