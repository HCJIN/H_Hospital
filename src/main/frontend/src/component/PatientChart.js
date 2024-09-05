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
  
  return (
    <div className='chart-div'>
      <div className='chart-content'>
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
                <td>
                  <h2>증상</h2>
                </td>
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
          {/* 여기에 환자의 병원 이력을 출력하면 좋을 것 같음 */}
        </div>
      </div>
    </div>
  )
}

export default PatientChart