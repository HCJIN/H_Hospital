import DatePicker from 'react-datepicker'; // datepicker 가져오기
import { useState, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { format, isWeekend, setHours, setMinutes, startOfDay } from 'date-fns'; // date-fns를 사용하여 날짜 포맷

const DatePickerInput = ({ selectDate, onSelectedDateChange = () => {} }) => {

  const [reservation, setReservation] = useState([]);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const datePickerRef = useRef(null); // DatePicker에 대한 ref

  // 현재 선택된 날짜의 minTime과 maxTime을 반환
  // 평일 및 주말의 최소 및 최대 시간 설정
  const getMinTime = (date) => {
    return setHours(setMinutes(startOfDay(date), 0), 9); // 오전 9시로 설정
  };

  const getMaxTime = (date) => {
    if (isWeekend(date)) {
      return setHours(setMinutes(startOfDay(date), 0), 13); // 주말에는 오후 1시까지
    }
    return setHours(setMinutes(startOfDay(date), 0), 18); // 평일에는 오후 6시까지
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // 선택된 날짜와 시간 저장

    // 날짜와 시간 포맷
    const formattedDate = format(date, 'yyyy-MM-dd'); // YYYY-MM-DD
    const formattedTime = format(date, 'HH:mm'); // HH:mm

    // 날짜와 시간을 부모 컴포넌트로 전달
    onSelectedDateChange(formattedDate, formattedTime);
  };

  // 현재 선택된 날짜의 minTime과 maxTime 설정
  const minTime = getMinTime(selectedDate);
  const maxTime = getMaxTime(selectedDate);

  return (
    <div className="relative w-[379px] h-[56px]">
      <DatePicker
        ref={datePickerRef} // 달력 아이콘 클릭 시 클릭 해 줄 위치
        className="text-black200 border border-black100 rounded px-[16px] py-[8px] bg-white w-[379px] h-[56px] text-[16px]"
        dateFormat="yyyy/MM/dd h:mm aa" // 날짜 및 시간 형식
        selected={selectDate || selectedDate}
        onChange={handleDateChange}
        minDate={new Date()} // 현재 날짜 이전은 모두 선택 불가
        showTimeSelect // 시간 선택 옵션 추가
        timeFormat="HH:mm" // 시간 형식 설정
        timeIntervals={30} // 시간 선택 간격 (30분 간격)
        timeCaption="Time" // 시간 선택란 캡션
        minTime={minTime} // 동적으로 설정된 최소 시간
        maxTime={maxTime} // 동적으로 설정된 최대 시간
      />
    </div>
  );
};

export default DatePickerInput;
