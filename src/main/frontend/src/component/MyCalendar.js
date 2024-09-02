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
    <div className="calendar-container">
      <Calendar
        onChange={onChange}
        value={value}
        tileContent={({ date, view }) => 
          view === 'month' && date.getDate() === 5 ? <p>Special</p> : null
        }
      />
      <p>선택한 날짜: {value.toDateString()}</p>
    </div>
  );
}

export default MyCalendar;
