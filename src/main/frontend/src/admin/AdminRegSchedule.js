import React, { useState, useEffect } from 'react';
import CalendarComponent from '../component/calendar/CalendarComponent';
import '../css/AdminRegSchedule.css'

const AdminRegSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [schedules, setSchedules] = useState({});
  const [doctorInfo, setDoctorInfo] = useState({});

  // 로그인 정보 가져오기
  useEffect(() => {
    const loginInfo = JSON.parse(window.sessionStorage.getItem("loginInfo"));
    console.log("불러온 로그인 정보:", loginInfo); 
    if (loginInfo && loginInfo.email) {
      setDoctorInfo({
        name: loginInfo.memName, 
        specialty: loginInfo.hospitalCode || '전문 분야 미등록', 
      });
    }
  }, []);

  const insertSchedule = (time) => {
    const dateKey = selectedDate.toISOString().split('T')[0];
    setSchedules((prev) => {
      const currentTimes = prev[dateKey] || [];
      return {
        ...prev,
        [dateKey]: currentTimes.includes(time)
          ? currentTimes.filter(t => t !== time)
          : [...currentTimes, time],
      };
    });
  };

  const handleSubmit = () => {
    console.log("등록된 일정:", schedules);
  };

  return (
    <div>
      <div className='check-schedule-div'>
        <div className='check-doctor-div'>
          <h3>의사 정보</h3>
          <div className='check-doctor-schedule'>
            <div>
              <p><strong>이름:</strong> {doctorInfo.name || '로그인 정보 없음'}</p>
              <p><strong>전문 분야:</strong> {doctorInfo.specialty}</p>
            </div>
            <h4>등록된 일정</h4>
        </div>
        <div className='reg-calendar'>
          {Object.entries(schedules).map(([date, times]) => (
            <div key={date} style={{ marginBottom: '10px' }}>
              <strong>{date}</strong>: {times.join(', ') || '등록된 일정 없음'}
            </div>
          ))}
        </div>
      </div>

      </div>
      
      <div className='reg-check'>
        <h3>진료 일정 등록</h3>
        <CalendarComponent onChange={setSelectedDate} value={selectedDate} />
        <div style={{ margin: '20px 0' }}>
          <button type='button' onClick={() => insertSchedule("오전 외래")}>오전 외래</button>
          <button type='button' onClick={() => insertSchedule("오후 외래")}>오후 외래</button>
          <button type='button' onClick={() => insertSchedule("기타")}>기타</button>
        </div>
        <button type='button' onClick={handleSubmit}>일정 등록</button>
      </div>

    </div>
  );
};

export default AdminRegSchedule;
