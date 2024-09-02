import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/reservationDetail.css'

const ReservationDetail = () => {

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

  // `index`를 매개변수로 받아 해당 인덱스의 `memberVO`의 이름을 반환합니다.
  function memberVOMemName(index) {
    // reservationInfo의 해당 인덱스가 존재하고 memberVO가 정의되어 있으면 이름을 반환
    return reservationInfo[index].memberVO.memName || '';
  }

  // `index`를 매개변수로 받아 해당 인덱스의 `memberVO`의 전화번호를 반환합니다.
  function memberVOMemTel(index) {
    // reservationInfo의 해당 인덱스가 존재하고 memberVO가 정의되어 있으면 전화번호를 반환
    return reservationInfo[index].memberVO.memTel || '';
  }


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
            reservationInfo.map((reservationInfo, i) => {
              return(
                <tr key={i}>
                  <td>{reservationInfo.memNum}</td>
                  <td>{memberVOMemName(i)}</td>
                  <td>{memberVOMemTel(i)}</td>
                  <td>{reservationInfo.serviceType}</td>
                  <td>{reservationInfo.resDate}</td>
                  <td>{reservationInfo.resTime}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ReservationDetail