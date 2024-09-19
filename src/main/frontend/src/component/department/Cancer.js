import React, { useState } from 'react'
import doctors from './doctorsData'
import { useNavigate } from 'react-router-dom'

const Cancer = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState('B');

  const cancerDoctors = doctors['암센터']

  const isActive = (btnContent)=> content === btnContent;

  const handleDoctorClick =(doctorId) =>{
    navigate(`/doctor/${doctorId}`)
  }

  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>암센터</h2>
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
            <div className='contentA-div'>
              <div className='contentA-slogan'>
                악성종양의<br/>
                항암약물치료와<br/>
                <strong>신약임상연구</strong>
              </div>
              <div className='family-intro-div'>
                <div className='cancer-intro'>
                  <br/>
                  <i className="bi bi-eyedropper"></i>
                  <i className="bi bi-eyedropper"></i>
                  <i className="bi bi-eyedropper"></i>
                  <br/>
                  울산메디컬 암센터는 과학적인 근거 하에 최선의 치료 방법을 선택하고 환자의 상태에 맞게 항암제를 투약 및 관리하여 암환자의 생존과 삶의 질 향상을 최우선의 목표로 하고 있습니다. 종양치료 전문의료진들이 곳곳에 위치하여 항암치료의 부작용과 대처법을 숙지하고 환자들을 돌보며 환자와 보호자 교육에 힘쓰고 있으며 다학제 진료를 통해 최선의 치료 방법을 찾고 있습니다.
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
                        <td>간암</td>
                        <td>난소암</td>
                        <td>담도암</td>
                        <td>대장암</td>
                        <td>두경부암</td>
                      </tr>
                      <tr>
                        <td>복막암</td>
                        <td>부인암</td>
                        <td>방광암</td>
                        <td>식도암</td>
                        <td>신장암</td>
                      </tr>
                      <tr>
                        <td>위암</td>
                        <td>유방암</td>
                        <td>전립선암</td>
                        <td>직장암</td>
                        <td>자궁경부암</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
          </div>}

          {content === 'B' && <div id='contentB'>
            <div className='family-doctor-container'>
              {cancerDoctors.map((doctor) => (
                    <div key={doctor.id} className='doctor-card'>
                      <div className='doctor-image-container'>
                        <img src={doctor.image} className='doctor-image' alt={`${doctor.name}'s image`} />
                      </div>
                      <div className='doctor-details'>
                        <h4 className='doctor-name'>{doctor.name}</h4>
                        <p className='doctor-intro'>{doctor.intro}</p>
                      </div>
                      <div className='doctor-overlay'>
                        <button type='button' className='doctor-intro-btn' onClick={()=>{handleDoctorClick(doctor.id)}}>의료진소개</button>
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

export default Cancer