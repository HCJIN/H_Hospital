import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/MyCalendar.css';

function MyCalendar() {
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
  };

  return (
    <div>
      <h1>예약자명단 조회</h1>
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={value}
        />
        <p>선택한 날짜: {value.toDateString()}</p>
      </div>
    </div>
  );
}

export default MyCalendar;
