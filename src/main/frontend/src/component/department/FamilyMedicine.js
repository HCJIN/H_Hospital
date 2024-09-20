import React, { useState } from 'react'
import doctors from './doctorsData'
import { useNavigate } from 'react-router-dom'
import '../../css/FamilyMedicine.css'

const FamilyMedicine = () => {
  const navigate = useNavigate();
  
  const [content, setContent] = useState('B');  

  const familyMedicineDoctors = doctors["가정의학과"]

  //버튼 상태 변경
  const isActive = (btnContent)=> content === btnContent;

  //의료진 소개버튼 클릭시 이동
  const handleDoctorClick = (doctorId) =>{
    navigate(`/doctor/${doctorId}`)
  }

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
          <button type='button' onClick={()=>setContent('A')} className={`button ${isActive('A') ? 'active' : ''}`}>소개</button>
          <button type='button' onClick={()=>setContent('B')} className={`button ${isActive('B') ? 'active' : ''}`}>의료진</button>

          {content === 'A' && 
          <div id='contentA' className='contentA'>
              <div className='contentA-div'>
                <div className='contentA-slogan'>
                  건강 증진을 위한<br/>
                  지속적인<br/>
                  <strong>의료제공</strong>
                </div>
                <div className='family-intro-div'>
                  <div className='family-intro'>
                    <br/>
                    <i className="bi bi-house-heart"></i>
                    <i className="bi bi-house-heart"></i>
                    <i className="bi bi-house-heart"></i>
                    <br/>
                    가정의학과에서는 환자의 건강 증진과 유지를 목표로 <br/> 건강 상담, 질병의 치료와 예방법 등을 제공하며 환자의 전 생애를 책임지고<br/> 환자에게 지속적이고 포괄적인 의료를 제공합니다. <br/>
                  </div>
              </div>
                <div className='family-disease'>
                  <h2>
                  <i class="bi bi-bookmarks"></i>
                    주요진료질환
                    </h2>
                  <table className='family-disease-table'>
                    <colgroup>
                      <col width={"20%"}/>
                      <col width={"20%"}/>
                      <col width={"20%"}/>
                      <col width={"20%"}/>
                      <col width={"20%"}/>
                    </colgroup>
                    
                    <tbody>
                      <tr>
                        <td>비만</td>
                        <td>대사증후군</td>
                        <td>이상지질혈증</td>
                        <td>만성질환</td>
                        <td>성인병</td>
                      </tr>
                      <tr>
                        <td>금연</td>
                        <td>피로</td>
                        <td>영양</td>
                        <td>신체검사</td>
                        <td>예방접종</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </div>}

          {content === 'B' && <div id='contentB'>
            <div className='family-doctor-container'>
              {familyMedicineDoctors.map((doctor) => (
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
          </div>}
        </div>
        </div>
      </div>
    </div>
  )
}

export default FamilyMedicine