package com.green.H_Hospital.member.service;

import com.green.H_Hospital.member.vo.MemberVO;

public interface MemberService {

    /* 회원 기초정보 등록 */
    void insertMember(MemberVO memberVO);

    /* id 중복 체크 */
    boolean idChk(String memId);


}
