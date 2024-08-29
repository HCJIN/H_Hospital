package com.green.H_Hospital.reservation.controller;

import com.green.H_Hospital.member.vo.MemberVO;
import com.green.H_Hospital.reservation.service.ReservationService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Resource(name = "reservationService")
    private ReservationService reservationService;

    @GetMapping("/getMember/{memNum}")
    public MemberVO getMember(@PathVariable("memNum")int memNum){
        return reservationService.getMember(memNum);
    }
}
