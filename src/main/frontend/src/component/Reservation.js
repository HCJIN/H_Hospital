import React, { useState } from 'react'
import '../css/reservation.css'
import { useNavigate } from 'react-router-dom';
import Modal from '../common/Modal';

const Reservation = () => {

  const navigate = useNavigate();

  //모달창 불린 유무
  const [show, setShow] = useState(false);

  //모달창을 닫으면 실행되는 함수
  function onClickModalBtn(){
    navigate('/')
  }

  //회원예약 클릭
  function reservation(){
    setShow(true);
  }

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
          <div className='member-reservation' onClick={()=>{
            reservation()
          }}>
            <i className="bi bi-person"></i>
            <p>회원예약</p>
          </div>
        </div>

        {/* 회원예약 클릭시 열리는 모달 */}
        {
          show ? <Modal setShow={setShow} clickCloseBtn={onClickModalBtn}/> : null
        }

        {/* <div className='reservation-box'>
          <div className='member-reservation'>
            <i className="bi bi-person"></i>
            <p>비회원예약</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Reservation