package com.green.H_Hospital.member.vo;

import lombok.Data;

@Data
public class MemberVO {
    private int memNum;
    private String memId;
    private String memPw;
    private String memName;
    private String memTel;
    private String memRole;
    private String hospitalCode;
    private String gender;
    private String birthday;
    private String email;
}
