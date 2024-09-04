import { useState, useRef, useEffect } from "react";
import '../css/modal.css';
import DatePickerInput from "../component/DatePicker";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Modal = ({ setShow, clickCloseBtn, memNum }) => {

  const navigate = useNavigate();

  //member 정보가 들어갈 useState
  const [member, setMember] = useState({});

  //예약정보가 들어갈 state
  const [newReservation, setNewReservation] = useState({
    resDate : '',
    resTime : '',
    serviceType : '',
    memNum : memNum
  });
  console.log(newReservation)

  const modalContainer = useRef(null);

  useEffect(()=>{
    axios
    .get(`/reservation/getMember/${memNum}`)
    .then((res)=>{
      setMember(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  // 날짜 및 시간 입력시 데이터가 들어갈 함수
  const handleDateChange = (datePart, timePart) => {
    setNewReservation({
      ...newReservation,
      resDate: datePart,
      resTime: timePart
    });
    console.log("Selected Date: ", datePart);
    console.log("Selected Time: ", timePart);
  };

  //입력값이 들어가면 state에 저장
  function inputReservation(e){
    setNewReservation({
      ...newReservation,
      [e.target.name] : e.target.value
    })
  }

  //예약하기를 눌렸을때
  function reservation(){
    if(newReservation.serviceType == ''){
      alert('빈값을 채워주세요.')
      return
    }else{
      axios
      .post(`/reservation/insertReservation`, newReservation)
      .then((res)=>{
        alert('예약이 완료되었습니다.')
        navigate('/')
      })
      .catch((error)=>{
        console.log(error)
      })
    }
  }

  return (
    <div className="modal-container show" ref={modalContainer}>
      <div className="modal">
        <div className="modal-content">
          <div className="poptit-wrap">
            <p className="ptit">고객 간편 진료예약 서비스</p>
            <div className="close">
              전화문의
              <span>1599-1044</span>
            </div>
          </div>
          <p className="pcont-tit01">
            아래 사항을 입력해주시면, 상담 간호사가 확인 후 상담 시간내에 전화를 드려 예약을 도와드리겠습니다.
          </p>
          <p className="timetext-wrap">
            상담시간 : 평일 08:30 ~ 17:30 / 토요일 08:30 ~ 12:30(공휴일 제외)
            <br />
            <span>※ 상담 전화 연결 3회 이상 실패 시 간편예약접수가 자동으로 취소 되오니, 이점 양해하여 주시기 바랍니다.</span>
          </p>
          <p className="required-input">
            <span>필수 입력사항입니다.</span>
          </p>
          <div className="ptbl-view02-wrap">
            <table className="ptbl-view02">
              <colgroup>
                <col width='25%' />
                <col width='75%' />
              </colgroup>
              <tbody>
                <tr>
                  <th>성명</th>
                  <td>{member.memName}</td>
                </tr>
                <tr>
                  <th>
                    <span className="star">휴대전화</span>
                  </th>
                  <td>{member.memTel}</td>
                </tr>
                <tr>
                  <th>
                    <span className="star">증상</span>
                  </th>
                  <td>
                    <textarea name="serviceType" onChange={(e)=>{
                      inputReservation(e)
                    }}></textarea>
                    <p className="textbite-wrap">
                      *
                      <span className="count">0</span>
                      byte / 최대
                      <span className="maxcount">200</span>
                      byte(한글 100자, 영문 200자)
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>예약하기</th>
                  <td>
                    <DatePickerInput onSelectedDateChange={handleDateChange} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="btn-agree-main">
          <button
            type="button"
            className="btn-agree1"
            onClick={() => {
                reservation();
            }}
          >
            예약하기
          </button>
          <button type="button" className="btn-agree2" onClick={()=>{
            setShow(false)
          }}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
