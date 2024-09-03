import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/MyCalendar.css';

function MyCalendar({ onDateChange }) {
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
    onDateChange(date); // 날짜 변경 시 상위 컴포넌트로 전달
  };

  return (
    <div>
      <h1>예약자명단 조회</h1>
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
