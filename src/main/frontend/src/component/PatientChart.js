import React, { useEffect, useState } from 'react'
import '../css/patientChart.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import humanBodyImage from '../images/humanBody.jpg'
import ReservationCheck from './calendar/ReservationCheck';

const PatientChart = () => {

  const navigate = useNavigate();

  // url 파라미터로 가져온 memNum, resDate
  const {memNum, resDate} = useParams();

  // 환자 데이터를 저장 할 변수
  const [patientData, setPatientData] = useState({});

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
    setPatientData({
      ...patientData,
      [e.target.name] : e.target.value
    });
  }

  //진료예약수정 함수
  function updateReservation(){
    axios.put('/reservation/update', patientData)
    .then((res) => {
      alert('진료예약이 수정되었습니다.');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  //진료예약삭제 함수
  function deleteReservation(){
    axios.delete(`/reservation/delete/${patientData.resNum}`)
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
                name='serviceType'
                value={patientData.serviceType || ''}
                onChange={(e) => (changeUpdateData(e))}
                ></textarea>
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
                onChange={(e) => (changeUpdateData(e))}/>
              </td>
              <td >진료시간</td>
              <td>
                <input type='text' name='resTime'
                value={patientData.resTime || ''}
                onChange={(e) => (changeUpdateData(e))}/>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='button3'>
          <button type='button' 
          onClick={() => {navigate('/admin/reservationCheck')}}
          >확인</button>
          <button type='button'
          onClick={() => {
            updateReservation()
          }}
          >수정</button>
          <button type='button'
          onClick={(e) => {
            deleteReservation(patientData.memNum)
            }}
          >삭제</button>
        </div>
        {/* 환자 정보 이름, 휴대전화, 성별, 나이(나이는 년도를 기준으로 mapper에서 바꿀것) */}
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div>
          {/* 환자 번호, 환자 병명, 수술여부 , 증상*/}
          <table>
            <colgroup>
              <col width='20%' />
              <col width='30' />
              <col width='10' />
              <col width='*' />
            </colgroup>
            <thead>
              <tr>
                <td><h2>증상</h2></td>
              </tr>
              <tr>
                <td>환자 번호</td>
                <td>상병 명칭</td>
                <td>수술 여부</td>
                <td>진료 항목</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={4}>
                  <textarea></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button type='button'>수정</button>
          </div>
        </div>
        {/* 여기에 이름으로 검색한 환자의 모든 기록이 나오면 좋을 것 같음 */}
      <ReservationCheck/>
      </div>
    </div>
  )
}

export default PatientChart