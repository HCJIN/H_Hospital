import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../css/reservationDetail.css';

const ReservationDetail = ({ selectedDate }) => {
  const [reservationInfo, setReservationInfo] = useState([]);

  useEffect(() => {
    axios.get('/reservation/reservationAll')
      .then((res) => {
        setReservationInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 선택된 날짜와 일치하는 예약 정보를 필터링합니다.
  const filteredReservations = reservationInfo.filter(reservation => {
    const resDate = new Date(reservation.resDate);
    return resDate.toDateString() === selectedDate.toDateString();
  });

  return (
    <div className='container3'>
      <h2>진료예약 조회</h2>
      <table>
        <thead>
          <tr>
            <td>NO.</td>
            <td>성명</td>
            <td>휴대전화</td>
            <td>증상</td>
            <td>예약일정</td>
            <td>예약시간</td>
          </tr>
        </thead>
        <tbody>
          {
            filteredReservations.length == 0 ? 
            <tr>
              <td colSpan={6}>
                <p>진료예약이 없습니다.</p>
              </td>
            </tr>
            :
            filteredReservations.map((reservation, i) => (
              <tr key={i}>
                <td>{reservation.memNum}</td>
                <td>{reservation.memberVO?.memName || ''}</td>
                <td>{reservation.memberVO?.memTel || ''}</td>
                <td>{reservation.serviceType}</td>
                <td>{reservation.resDate}</td>
                <td>{reservation.resTime}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ReservationDetail;
