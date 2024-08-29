package com.green.H_Hospital.reservation.service;

import com.green.H_Hospital.member.vo.MemberVO;
import com.green.H_Hospital.reservation.vo.ReservationVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("reservationService")
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    //로그인 회원 정보 조회
    @Override
    public MemberVO getMember(int memNum) {
        return sqlSession.selectOne("reservationMapper.getMember", memNum);
    }

    //예약 정보 삽입
    @Override
    public void insertReservation(ReservationVO reservationVO) {
        sqlSession.insert("reservationMapper.insertReservation", reservationVO);
    }
}
