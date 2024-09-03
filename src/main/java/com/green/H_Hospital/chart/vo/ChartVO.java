package com.green.H_Hospital.chart.vo;

import com.green.H_Hospital.member.vo.MemberVO;
import com.green.H_Hospital.reservation.vo.ReservationVO;
import lombok.Data;

@Data
public class ChartVO {
    private int chartNum;
    private String disease;
    private String surgery;
    private String symptoms;
    private int memNum;
    private int resId;
    private MemberVO memberVO;
    private ReservationVO reservationVO;
}
