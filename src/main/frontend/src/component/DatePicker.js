import DatePicker from 'react-datepicker'; // datepicker 가져오기
import { useState, useRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { subDays } from 'date-fns'; // 요건 이전 날짜 숨길 때 선택적으로 필요.

const DatePickerInput = ({ selectDate, onSelectedDateChange = () => {} }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const datePickerRef = useRef(null); // 달력 아이콘 클릭 시 클릭해줄 위치(DatePicker)

  const handleImageClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus();
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // 선택된 날짜와 시간 저장

    // 날짜 부분만 추출
    const datePart = date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    // 시간 부분만 추출
    const timePart = date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
    });

    // 날짜와 시간을 부모 컴포넌트로 전달
    onSelectedDateChange(datePart, timePart);
  };

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
        timeIntervals={15} // 시간 선택 간격 (15분 간격)
        timeCaption="Time" // 시간 선택란 캡션
      />
    </div>
  );
};

export default DatePickerInput;
