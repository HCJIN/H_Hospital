package com.green.H_Hospital.reservation.service;

import com.green.H_Hospital.member.vo.MemberVO;
import com.green.H_Hospital.reservation.vo.ReservationVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    //진료예약조회
    @Override
    public List<ReservationVO> getReservation() {
        return sqlSession.selectList("reservationMapper.getReservation");
    }

    // 진료예약 조회에서 클릭했을 때 클릭한 사람의 모든 정보를 불러 오는 메서드
    @Override
    public ReservationVO getPatientInfoAll(String memNum, String resDate) {
        // 파라미터를 Map 객체로 묶기
        Map<String, Object> params = new HashMap<>();

        // params 변수에 memNum, resDate 데이터 넣기
        params.put("memNum", memNum);
        params.put("resDate", resDate);

        // selectOne 호출 시 파라미터로 Map 객체 전달
        return sqlSession.selectOne("reservationMapper.getPatientInfoAll", params);
    }

}
