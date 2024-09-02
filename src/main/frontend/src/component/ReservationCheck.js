import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyCalendar from './MyCalendar';
import ReservationDetail from './ReservationDetail';

const ReservationCheck = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='reCheck-container'>
        <MyCalendar />
      </div>
  
      <div>
        <ReservationDetail />
      </div>
    </div>
  )
}

export default ReservationCheck