import React, { useEffect, useState } from 'react'
import '../css/patientChart.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const PatientChart = () => {

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

  return (
    <div className='chart-div'>
      <div className='chart-content'>
        <table>
          <colgroup>
            <col width='20%' />
            <col width='30%' />
            <col width='20%' />
            <col width='*' />
          </colgroup>
          <thead>
            <tr>
              <td colSpan={4}>
                <strong>환자 정보</strong>
              </td>
            </tr>
            <tr>
              <td>환자 식별 번호 : {patientData.memberVO?.memNum || '정보 없음'}</td>
              <td>{patientData.memberVO?.birthday || '정보 없음'}</td>
              <td>{patientData.memberVO?.memName || '정보 없음'}</td>
              <td>{patientData.memberVO?.gender || '정보 없음'}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>증상</strong></td>
            </tr>
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
        <div>여기에 환자의 병원 이력을 출력</div>
      </div>
    </div>
  )
}

export default PatientChart