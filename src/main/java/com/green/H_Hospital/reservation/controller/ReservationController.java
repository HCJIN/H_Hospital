package com.green.H_Hospital.reservation.controller;

import com.green.H_Hospital.member.vo.MemberVO;
import com.green.H_Hospital.reservation.service.ReservationService;
import com.green.H_Hospital.reservation.vo.ReservationVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

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
}
