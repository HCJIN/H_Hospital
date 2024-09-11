import React from 'react'
import '../css/FindDepartment.css';
import { useNavigate } from 'react-router-dom';

const FindDepartment = () => {
  const navigate = useNavigate();
  return (
    <div className='findDepartment-div'>
      <div className='findDepartment-container'>
        <div className='findDepartment-title'>
          <h2>진료과 찾기</h2>
        </div>
        <div className='findDepartment-list'>
          <ul>
            <li onClick={()=>{navigate('/familyMedicine')}}>
              <span>가정의학과</span>
            </li>
            <li onClick={()=>{navigate('/infectiousDisease')}}>
              <span>감염내과</span>
            </li>
            <li onClick={()=>{navigate('/colorectalCancer')}}>
              <span>대장암센터</span>
            </li>
            <li onClick={()=>{navigate('/liverCancer')}}>
              <span>간암센터</span>
            </li>
            <li onClick={()=>{navigate('/pediatrics')}}>
              <span>소아과</span>
            </li>
            <li onClick={()=>{navigate('/heart')}}>
              <span>심장병원</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FindDepartment