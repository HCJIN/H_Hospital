package com.green.H_Hospital.member.service;

import com.green.H_Hospital.member.vo.MemberVO;

public interface MemberService {

    // 회원 가입을 위한 기본적인 정보 입력
    void insertMember(MemberVO memberVO);

    /* id 중복 체크 */
    boolean idChk(String memId);


}
