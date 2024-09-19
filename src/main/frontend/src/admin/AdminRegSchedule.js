import React, { useState } from 'react'
import CalendarComponent from '../component/calendar/CalendarComponent';

const AdminRegSchedule = () => {
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimes, setSelectedTimes] = useState([]);

  const toggleTime = (time) =>{
    setSelectedTimes((prev)=>
      prev.includes(time)? prev.filter(t=>t !== time) : [...prev, time]
    )
  }

  const handleSubmit =()=>{
    console.log("등록된 일정:", selectedDate, selectedTimes)
  }

  return (
    <div>
      <CalendarComponent onChange={setSelectedDate} value={selectedDate}/>
      {/* <CalendarComponent onDateChange={setSelectedDate}/> */}
      <div>
        <button type='button' onClick={()=>toggleTime("오전 외래")}>오전 외래</button>
        <button type='button' onClick={()=>toggleTime("오후 외래")}>오후 외래</button>
        <button type='button' onClick={()=>toggleTime("기타")}>기타</button>
      </div>
      <button type='button' onClick={handleSubmit}>일정 등록</button>

    </div>
  )
}

export default AdminRegSchedule