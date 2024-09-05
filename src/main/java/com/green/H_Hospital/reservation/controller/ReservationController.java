package com.green.H_Hospital.reservation.controller;

import com.green.H_Hospital.member.vo.MemberVO;
import com.green.H_Hospital.reservation.service.ReservationService;
import com.green.H_Hospital.reservation.vo.ReservationVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Resource(name = "reservationService")
    private ReservationService reservationService;

    //memNum 으로 받은 멤버 조회
    @GetMapping("/getMember/{memNum}")
    public MemberVO getMember(@PathVariable("memNum")int memNum){
        return reservationService.getMember(memNum);
    }

    @PostMapping("/insertReservation")
    public void insertReservation(@RequestBody ReservationVO reservationVO){
        reservationService.insertReservation(reservationVO);
    }

    //진료예약조회
    @GetMapping("/reservationAll")
    public List<ReservationVO> getReservation(){
        return reservationService.getReservation();
    }

    // 진료예약 조회에서 클릭했을 때 클릭한 사람의 모든 정보를 불러 오는 메서드
    @GetMapping("/getPatientInfoAll")
    public ReservationVO getPatientInfoAll(
            @RequestParam("memNum") String memNum,
            @RequestParam("resDate") String resDate
    ){
        return reservationService.getPatientInfoAll(memNum, resDate);
    }

}
