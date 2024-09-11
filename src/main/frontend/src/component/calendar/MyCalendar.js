import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import '../../css/MyCalendar.css';
import '../../css/MyCalendar2.css';
import moment from 'moment';

function MyCalendar({ onDateChange }) {
  const [value, setValue] = useState(new Date());

  const onChange = (date) => {
    setValue(date);
    onDateChange(date); // 날짜 변경 시 상위 컴포넌트로 전달
  };

  return (
    <div>
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={value}
          formatDay={(locale, date) => moment(date).format("DD")}
        />
      </div>
    </div>
  );
}

export default MyCalendar;
