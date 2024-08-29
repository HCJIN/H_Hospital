package com.green.H_Hospital.reservation.vo;

import com.green.H_Hospital.member.vo.MemberVO;
import lombok.Data;

@Data
public class ReservationVO {
    private int resId;
    private String date;
    private String time;
    private String doctorId;
    private String serviceType;
    private String status;
    private MemberVO memNum;
}
