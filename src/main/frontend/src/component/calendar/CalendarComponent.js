import React from 'react'
import Calendar from 'react-calendar'

const CalendarComponent = ({onChange, value}) => {
  // const handleDateChange = (date)=>{
  //   onDateChange(date);
  // }
  return (
      <Calendar onChange={onChange} value={value}/>
  )
}

export default CalendarComponent