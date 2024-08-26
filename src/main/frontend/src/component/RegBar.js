import React from 'react'
import '../css/RegBar.css';

const RegBar = () => {
  return (
    <div>
      <div className='bar-body'>
        <ul>
          <li>
            <span className='icon'><i class="bi bi-card-checklist"></i></span>
            <div>STEP 01</div>
            <strong>약관동의</strong>
          </li>
          <li>
            <span className='icon'><i class="bi bi-person-fill"></i></span>
            <div>STEP 02</div>
            <strong>가입인증</strong>
          </li>
          <li>
            <span className='icon'><i class="bi bi-pencil-square"></i></span>
            <div>STEP 03</div>
            <strong>정보입력</strong>
          </li>
          <li>
            <span className='icon'><i class="bi bi-lock-fill"></i></span>
            <div>STEP 04</div>
            <strong>가입완료</strong>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RegBar