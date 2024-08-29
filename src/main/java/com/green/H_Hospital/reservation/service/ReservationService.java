package com.green.H_Hospital.reservation.service;


import com.green.H_Hospital.member.vo.MemberVO;
import com.green.H_Hospital.reservation.vo.ReservationVO;

public interface ReservationService {

    //로그인 회원 정보 조회
    MemberVO getMember(int memNum);

    //예약정보 삽입
    void insertReservation(ReservationVO reservationVO);
}
