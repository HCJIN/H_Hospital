import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import doctors from './doctorsData'
import '../../css/doctorPage.css'
import Modal from './CalendarModal'

const DoctorPage = () => {
  const {id} = useParams();
  const allDoctors = Object.values(doctors).flat();
  const doctor = allDoctors.find(doc => doc.id === parseInt(id));

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
              <h3>진료과목</h3>
              <p>{doctor.intro}</p>
            </div>

            <br/>

            <div className='doctor-profile-graduation'>
              <h3>학력</h3>
              <p>{doctor.graduation1}</p>
              <p>{doctor.graduation2}</p>
              <p>{doctor.graduation3}</p>
            </div>

            <br/>

            <div className='doctor-profile-career'>
              <h3>경력</h3>
              <p>{doctor.career1}</p>
              <p>{doctor.career2}</p>
              <p>{doctor.career3}</p>
              <p>{doctor.career4}</p>
              <p>{doctor.career5}</p>
            </div>

            <div className='doctor-schedule'>
              <table className='doctor-schedule-table'>
                <tbody>
                  <tr>
                    <td></td>
                    <td>월</td>
                    <td>화</td>
                    <td>수</td>
                    <td>목</td>
                    <td>금</td>
                    <td>토</td>
                    <td>일</td>
                  </tr>
                  <tr>
                    <td>오전</td>
                    <td></td>
                    <td>O</td>
                    <td></td>
                    <td></td>
                    <td>O</td>
                    <td>O</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>오후</td>
                    <td>O</td>
                    <td></td>
                    <td>O</td>
                    <td></td>
                    <td>O</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <button type='button' className='doctor-schedule-btn' onClick={openModal}>
                진료 일정 확인
              </button>
            </div>
          </div>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>진료일정</h2>
            <p>여기 달력 내용...?</p>
          </Modal>      
      </div>
    </div>
  );
};

export default DoctorPage;