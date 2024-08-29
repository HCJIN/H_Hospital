package com.green.H_Hospital.reservation.service;

import com.green.H_Hospital.member.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("reservationService")
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    private SqlSessionTemplate sqlSession;


    @Override
    public MemberVO getMember(int memNum) {
        return sqlSession.selectOne("reservationMapper.getMember", memNum);
    }
}
