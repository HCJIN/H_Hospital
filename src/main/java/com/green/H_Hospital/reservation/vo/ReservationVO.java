package com.green.H_Hospital.reservation.vo;

import com.green.H_Hospital.member.vo.MemberVO;
import lombok.Data;

import java.util.List;

@Data
public class ReservationVO {
    private int resNum;
    private String resDate;
    private String resTime;
    private String serviceType;
    private String status;
    private String disease;
    private String surgery;
    private int memNum;
    private MemberVO memberVO;
    private List<MemberVO> memberVOList;
}
