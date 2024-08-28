import React from 'react'
import '../css/RegBar.css';

const RegBar = ({step}) => {
  return (
    <div>
      <div className='bar-body'>
        <ul>
          <li>
            <div className={step == 1 ? 'step active' : 'step'}>
              <span>
                <i class="bi bi-card-checklist"></i>
              </span>
              <div className='font'>
                <div>STEP 01</div>
                <div><strong>약관동의</strong></div>
              </div>
            </div>
          </li>
          <li>
            <div className={step == 2 ? 'step active' : 'step'}>
              <span>
                <i class="bi bi-person-fill"></i>
              </span>
              <div className='font'>
                <div>STEP 02</div>
                <div><strong>가입인증</strong></div>
              </div>
            </div>
          </li>
          <li>
            <div className={step == 3 ? 'step active' : 'step'}>
              <span>
                <i class="bi bi-pencil-square"></i>
              </span>
              <div className='font'> 
                <div>STEP 03</div>
                <div><strong>정보입력</strong></div>
              </div>
            </div>
          </li>
          <li>
            <div className={step == 4 ? 'step active' : 'step'}>
              <span>
                <i class="bi bi-lock-fill"></i>
              </span>
              <div className='font'>
                <div>STEP 04</div>
                <div><strong>가입완료</strong></div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RegBar