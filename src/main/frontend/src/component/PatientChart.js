import React, { useEffect, useState } from 'react'
import '../css/patientChart.css'
import axios from 'axios';

const PatientChart = () => {

  // 환자 한명의 정보를 조회한 데이터를 저장 할 변수
  const [patienData, setPatienData] = useState();

  // 환자 한명의 정보를 조회하는 함수
  useEffect(() => {
    axios.get('/admin/getPatientInfo')
    .then((res) => {
      setPatienData(res.data)
    })
    .catch((error) => {console.log(error)})
  }, [])

  // 조회된 환자 정보를 검색 했을 때 나타나게 할 함수

  return (
    <div className='chart-div'>
      <div className='chart-content'>
        {/* 이름을 검색했을 때 그에 상응하는 환자 검색 */}
        {/* 환자를 검색하지 않으면 조회된 데이터가 없다고 조건문으로 넣기 */}
        <div>
          <input type='text' />
          {/* 부트스트랩으로 검색 버튼 찾기 */}
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
      </div>
    </div>
  )
}

export default PatientChart