package com.green.H_Hospital.serviceCenter.vo;

import com.green.H_Hospital.member.vo.MemberVO;
import lombok.Data;

@Data
public class ServiceCenterVO {

    private int boardNum;
    private String boardTitle;
    private String boardContent;
    private String createDate;
    private MemberVO memberVO;
}
