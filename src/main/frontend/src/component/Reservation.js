import React from 'react'
import '../css/reservation.css'

const Reservation = () => {
  return (
    <div className='reservation-div'>
      <div className='reserv-inner'>
        <div className='reservation-box-main'>
          <div>예약 하기</div>
          <div>
            <h3>진료예약</h3>
            <p>1599-1044</p>
            <p>
              평일 08:00~18:00
              <br></br>
              토요일 08:00~13:00
            </p>
          </div>
          <div>
            <p>회원 및 비회권 모두 예약이 가능합니다.</p>
            <p>대리예약은 환자 정보 추가 입력 후 예약을 이용하시면 됩니다.</p>
          </div>
        </div>
        <div className='reservation-box'>
          <div className='member-reservation'>
            <i className="bi bi-person"></i>
            <p>회원예약</p>
          </div>
        </div>
        <div className='reservation-box'>
          <div className='member-reservation'>
            <i className="bi bi-person"></i>
            <p>비회원예약</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation