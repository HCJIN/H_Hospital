import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/reservationCheck.css'
import MyCalendar from './MyCalendar';

const ReservationCheck = () => {

  const navigate = useNavigate();

  return (
    <div className='reCheck-container'>
      <MyCalendar/>
    </div>
  )
}

export default ReservationCheck