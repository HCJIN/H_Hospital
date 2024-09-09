import React from 'react'
import '../css/FindDepartment.css';

const FindDepartment = () => {
  return (
    <div className='findDepartment-container'>
      <div className='findDepartment-title'>
        <h2>진료과 찾기</h2>
      </div>
      <div className='findDepartment-list'>
        <ul>
          <li>
            <span>가정의학과</span>
          </li>
          <li>
            <span>감염내과</span>
          </li>
          <li>
            <span>대장암센터</span>
          </li>
          <li>
            <span>간암센터</span>
          </li>
          <li>
            <span>소아과</span>
          </li>
          <li>
            <span>심장병원</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FindDepartment