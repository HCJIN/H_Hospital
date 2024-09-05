import React from 'react'
import '../css/FindDoctor.css'

const FindDoctor = () => {
  return (
    <div className='findD-div'>
      <div>
        <h2>의료진찾기</h2>
        <select>
          <option value="">진료과를 선택하세요</option>
          <option value="가정의학과">가정의학과</option>
          <option value="감염내과">감염내과</option>
          <option value="대장암센터">대장암센터</option>
          <option value="간암센터">간암센터</option>
          <option value="소아감염과">소아감염과</option>
          <option value="소아호흡기알레르기과">소아호흡기알레르기과</option>
          <option value="심장병원">심장병원</option>
        </select>
      </div>
    </div>
  )
}

export default FindDoctor