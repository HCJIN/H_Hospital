import React, { useState } from 'react'
import doctors from './doctorsData'
import { useNavigate } from 'react-router-dom'

const Urology = () => {
  const navigate = useNavigate();

  const [content, setContent]= useState('B');

  const urologyDoctors = doctors['비뇨의학과']

  const isActive = (btnContent)=> content === btnContent;

  return (
    <div className='family-div'>
      <div className='family-container'>
        <div className='family-header'>
          <div className='family-header-main'>
            <h2>비뇨의학과</h2>
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
                최첨단 수술로<br/>
                제공하는<br/>
                <strong>최고의 치료</strong>
              </div>
              <div className='urology-intro'>
                <br/>
                <i className="bi bi-droplet-half"></i>
                <i className="bi bi-droplet-half"></i>
                <i className="bi bi-droplet-half"></i>
                <br/>
                현대사회에서 노령화가 진행됨에 따라 전립선질환 및 비뇨기종양, 배뇨장애, 여성비뇨기질환의 관리에 대한 문제가 대두되고 있습니다.이러한 질환들은 질환 자체의 치료뿐 아니라<br/>  환자의 삶의 질을 유지하기 위해 수술 부위의 기능 보존과 회복 역시 매우 중요한 문제입니다.<br/> 울산메디컬 비뇨의학과에서는 나날이 발전하는 의료기술의 최첨단에 서서 질병의 정확한 진단과<br/>  치료, 치료 후 삶의 질 향상을 위해 노력하고 있습니다.<br/> 울산메디컬센터 비뇨의학과는 앞으로도 각종 최신 수술기법 개발과 로봇을 이용한 첨단 수술로 <br/>  최선을 다해 환자를 위한 최고의 치료를 하고자 노력할 것입니다.
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
                        <td>고환암</td>
                        <td>골반탈출증</td>
                        <td>남성난임</td>
                        <td>방광염</td>
                        <td>배뇨장애</td>
                      </tr>
                      <tr>
                        <td>비뇨기종양</td>
                        <td>신경인성 방광</td>
                        <td>신장결석</td>
                        <td>요로결석</td>
                        <td>요로상피암</td>
                      </tr>
                      <tr>
                        <td>요실금</td>
                        <td>전립성비대증</td>
                        <td>신우암</td>
                        <td>전립선염</td>
                        <td>혈뇨</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
          </div>}

          {content === 'B' && <div id='contentB'>
            <div className='family-doctor-container'>
              {urologyDoctors.map((doctor) => (
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

export default Urology