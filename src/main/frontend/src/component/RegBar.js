import React from 'react'
import '../css/RegBar.css';

const RegBar = () => {
  return (
    <div>
      <div className='bar-body'>
        <ul>
          <li>
              <div>
                <div className='icon1'>
                  <i class="bi bi-card-checklist"></i>
                </div>
                <div className='font'>
                  <div>STEP 01</div>
                  <div><strong>약관동의</strong></div>
                </div>
              </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <div className='icon'>
                <i class="bi bi-person-fill"></i>
              </div>
              <div className='font'>
                <div>STEP 02</div>
                <div><strong>가입인증</strong></div>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <div className='icon'>
                <i class="bi bi-pencil-square"></i>
              </div>
              <div className='font'> 
                <div>STEP 03</div>
                <div><strong>정보입력</strong></div>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div>
              <div className='icon'>
                <i class="bi bi-lock-fill"></i>
              </div>
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