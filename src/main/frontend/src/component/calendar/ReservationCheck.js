import React, { useState } from 'react';
import MyCalendar from './MyCalendar';
import ReservationDetail from './ReservationDetail';
import '../../css/reservationCheck.css';

const ReservationCheck = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // 캘린더에서 날짜가 변경될 때 호출되는 함수
  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <div className='check-container'>
    
      <div className='reCheck-container'>
        <MyCalendar onDateChange={handleDateChange} />
      </div>
      <div>
        <ReservationDetail selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default ReservationCheck;
