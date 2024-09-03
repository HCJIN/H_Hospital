import React from 'react'
import '../css/patientChart.css'

const PatientChart = () => {




  return (
    <div className='chart-div'>
      <div className='chart-content'>
        {/* 이름을 검색했을 때 그에 상응하는 환자 검색 */}
        <div>
          <input type='text' />
          {/* 부트스트랩으로 검색 버튼 찾기 */}
        </div>
        {/* 환자 정보 이름, 휴대전화, 주소 */}
        <ul>
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
                <td>환자 번호</td>
                <td>상병 명칭</td>
                <td>수술 여부</td>
                <td>증상</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td><textarea></textarea></td>
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