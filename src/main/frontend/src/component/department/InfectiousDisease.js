import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import doctors from './doctorsData';

const InfectiousDisease = () => {
  const navigate = useNavigate();

  const [content, setContent] = useState('B');
  
  const infectiousDiseaseDoctors = doctors["감염내과"]

  const isActive = (btnContent)=> content === btnContent;

  const handleDoctorClick = (doctorId) =>{
    navigate(`/doctor/${doctorId}`)
  }

  
  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>감염내과</h2>
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
                감염질환 관리로<br/>
                <strong>인류 보건에 기여</strong>
              </div>
            <div className='family-intro-div'>
              <div className='infection-intro'>
                <br/>
                <i className="bi bi-capsule"></i>
                <i className="bi bi-capsule"></i>
                <i className="bi bi-capsule"></i>
                <br/>
                covid-19 등 신종 감염병의 등장은 물론, 과거에 유행했던 감염병의 재출현으로<br/> 감염질환의 관리는 현대사회에서 더욱 중요해졌습니다.<br/> 울산메디컬센터 감염내과는 인체 여러 부위에 발생하는 감염질환의 진단과<br/> 치료뿐 아니라 다양한 발열질환의 원인을 규명해 예방 및 관리를 전담하고 있습니다.
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
                        <td>감염질환</td>
                        <td>결핵</td>
                        <td>뎅기열</td>
                        <td>림프절염</td>
                        <td>말라리아</td>
                      </tr>
                      <tr>
                        <td>발열질환</td>
                        <td>병원내 감염</td>
                        <td>세균 감염</td>
                        <td>에이즈</td>
                        <td>여행자 감염</td>
                      </tr>
                      <tr>
                        <td>예방접종</td>
                        <td>코로나바이러스감염증</td>
                        <td>패혈증</td>
                        <td>해외예방접종</td>
                        <td>후천성면역결핍증후군</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
          </div>}

          {content === 'B' && <div id='contentB'>
            <div className='family-doctor-container'>
              {infectiousDiseaseDoctors.map((doctor) => (
                    <div key={doctor.id} className='doctor-card'>
                      <div className='doctor-image-container'>
                        <img src={doctor.image} className='doctor-image' alt={`${doctor.name}'s image`} />
                      </div>
                      <div className='doctor-details'>
                        <h4 className='doctor-name'>{doctor.name}</h4>
                        <p className='doctor-intro'>{doctor.intro}</p>
                      </div>
                      <div className='doctor-overlay'>
                        <button type='button' className='doctor-intro-btn' onClick={()=>{handleDoctorClick(doctor.id)}}>
                          의료진소개
                        </button>

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

export default InfectiousDisease