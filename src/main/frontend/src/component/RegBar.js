import React from 'react'
import '../css/RegBar.css';

const RegBar = () => {
  return (
    <div className='bar-container'>
      <div className='bar-body'>
        <ul>
          <li>
            <span><i class="bi bi-card-checklist"></i></span>
            <span>STEP 01</span>
            <strong>약관동의</strong>
          </li>
          <li>
            <span><i class="bi bi-person-fill"></i></span>
            <span>STEP 02</span>
            <strong>가입인증</strong>
          </li>
          <li>
            <span><i class="bi bi-pencil-square"></i></span>
            <span>STEP 03</span>
            <strong>정보입력</strong>
          </li>
          <li>
            <span><i class="bi bi-lock-fill"></i></span>
            <span>STEP 04</span>
            <strong>가입완료</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RegBar