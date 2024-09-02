import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/reservationDetail.css'

const ReservationDetail = ({selectedDate}) => {

  const [reservationInfo, setReservationInfo] = useState([]);

  useEffect(() => {
    axios.get('/reservation/reservationAll')
    .then((res) => {
      setReservationInfo(res.data)
    })
    .catch((error) => {
      console.log(error)
    });
  }, []);

    // 선택된 날짜와 일치하는 예약 정보를 필터링합니다.
    const filteredReservations = reservationInfo.filter(reservation =>{}
      //<여기부터 수정해>
      // new Date(reservation.resDate).toDateString() === selectedDate.toDateString()
    );

  // // `index`를 매개변수로 받아 해당 인덱스의 `memberVO`의 이름을 반환합니다.
  // function memberVOMemName(index) {
  //   // reservationInfo의 해당 인덱스가 존재하고 memberVO가 정의되어 있으면 이름을 반환
  //   return reservationInfo[index].memberVO.memName || '';
  // }

  // // `index`를 매개변수로 받아 해당 인덱스의 `memberVO`의 전화번호를 반환합니다.
  // function memberVOMemTel(index) {
  //   // reservationInfo의 해당 인덱스가 존재하고 memberVO가 정의되어 있으면 전화번호를 반환
  //   return reservationInfo[index].memberVO.memTel || '';
  // }


  console.log(reservationInfo);

  return (
    <div className='container3'>
      <h2>진료예약 조회</h2>
      <table>
        <thead>
          <tr>
            <td>NO.</td>
            <td>성명</td>
            <td>휴대전화</td>
            <td>진료항목 내역</td>
            <td>예약일정</td>
            <td>예약시간</td>
          </tr>
        </thead>
        <tbody>
          {
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
}

export default ReservationDetail