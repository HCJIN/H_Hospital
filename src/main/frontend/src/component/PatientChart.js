import React, { useEffect, useState } from 'react'
import '../css/patientChart.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import humanBodyImage from '../images/humanBody.jpg'

const PatientChart = () => {

  const navigate = useNavigate();

  // url 파라미터로 가져온 memNum, resDate
  const {memNum, resDate} = useParams();

  // 환자 데이터를 저장 할 변수
  const [patientData, setPatientData] = useState([]);

  // memNum과 resDate를 조건으로 클릭한 사람의 모든 정보를 받아온다.
  useEffect(() => {
    // 데이터 fetching을 위한 GET 요청
    axios.get('/reservation/getPatientInfoAll', {
      params: { memNum, resDate } // 쿼리 파라미터로 memNum과 resDate를 보냅니다.
    })
    .then((res) => {
      setPatientData(res.data); // 데이터 상태를 업데이트합니다.
    })
    .catch((error) => {console.log(error)})
  }, [memNum, resDate]); // memNum과 resDate가 변경될 때마다 useEffect가 실행됩니다.

  console.log(patientData)

  //진료예약수정 쿼리 실행 시 빈 값을 채워줄 데이터
  const[updateData, setUpdateData] = useState({
    memNum : memNum,
    serviceType : '',
    resDate : '',
    resTime : ''
  });

  function changeUpdateData(e){
    setUpdateData({
      ...updateData,
      [e.target.name] : e.target.value
    });
  }

  //진료예약삭제 함수
  function deleteReservation(memNum){
    axios.delete(`/reservation/delete/${memNum}`)
    .then((res) => {
      alert('진료예약이 삭제되었습니다.');
      navigate('/admin/reservationCheck');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className='chart-div'>
      <div className='chart-content'>
        <h2>진료차트</h2>
        <table>
          <thead>
            <tr className='first-tr'>
              <td colSpan={4}>
                <strong>환자 정보</strong>
              </td>
            </tr>
            <tr className='second-tr'>
              <td>NO.</td>
              <td>{patientData.memberVO?.memNum || '정보 없음'}</td>
              <td>AGE</td>
              <td>{patientData.memberVO?.birthday || '정보 없음'}</td>
            </tr>
            <tr className='third-tr'>
              <td>NAME</td>
              <td>{patientData.memberVO?.memName || '정보 없음'}</td>
              <td>GENDER</td>
              <td>{patientData.memberVO?.gender || '정보 없음'}</td>
            </tr>
          </thead>
          <tbody>
            <tr className='fourth-tr'>
              <td colSpan={4}>
                <strong>증상</strong></td>
            </tr>
            <tr className='textarea-size'>
              <td colSpan={4}>
                <textarea
                type='text'
                name='serviceType'
                value={patientData.serviceType || ''}
                onChange={(e) => setPatientData({...patientData, serviceType: e.target.value})}
                />
                <img src={humanBodyImage}/>
              </td>
            </tr>
            <tr className='fifth-tr'>
              <td colSpan={4}>진료일정</td>
            </tr>
            <tr className='sixth-tr'>
              <td>진료날짜</td>
              <td>
                <input type='text' name='resDate'
                value={patientData.resDate || ''}
                onChange={(e) => setPatientData({...patientData, resDate: e.target.value})}/>
              </td>
              <td >진료시간</td>
              <td>
                <input type='text' name='resTime'
                value={patientData.resTime || ''}
                onChange={(e) => setPatientData ({...patientData, resTime: e.target.value})}/>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='button3'>
        <button type='button' 
        onClick={() => {navigate('/admin/reservationCheck')}}
        >확인</  button>
          <button type='button'
          onClick={() => {}}
          >수정</button>
          <button type='button'
          onClick={(e) => {
            deleteReservation(patientData.memNum)
            }}
          >삭제</button>
        </div>
      </div>
    </div>
  )
}

export default PatientChart