package com.green.H_Hospital.member.service;

import com.green.H_Hospital.member.vo.MemberVO;

import java.util.List;

public interface MemberService {

    // 회원 가입을 위한 기본적인 정보 입력
    void insertMember(MemberVO memberVO);

    /* 이메일 중복 체크 */
    boolean idChk(String memId);

    //기초정보 조회
    MemberVO getMemberList(MemberVO memberVO);

    //기초정보 업데이트
    void updateMember(MemberVO memberVO);

    //sns 회원가입
    void insertSnsMember(MemberVO memberVO);

    //id 찾기
    MemberVO findId(String memTel);



}
