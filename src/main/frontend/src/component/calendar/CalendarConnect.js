import React, { useState } from 'react'
import MyCalendar from './MyCalendar';

function CalendarConnect(){
  const[selectedDate, setSelectedDate] = useState(new Date());

  // 날짜가 변경되면 상태를 업데이트 합니다.
const handleDateChange = (date) => {
  setSelectedDate(date);
};

  return (  
      <div>
        <MyCalendar onDateChange={handleDateChange} />
        <ReservationDetail selectedDate={selectedDate} />
      </div>
  );
}

export default CalendarConnect