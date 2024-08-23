package com.green.H_Hospital.member.controller;

import com.green.H_Hospital.member.service.MemberService;
import com.green.H_Hospital.member.vo.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Resource(name = "memberService")
    private MemberService memberService;

    //회원 기초정보 등록
    // 회원 가입을 위한 기본적인 정보 입력
    @PostMapping("/insertMember")
    public void insertMember(@RequestBody MemberVO memberVO){
        memberService.insertMember(memberVO);
    }

    //id 중복 체크
    @GetMapping("/idChk/{memId}")
    public boolean idChk(@PathVariable("memId")String memId){
        System.out.println(memberService.idChk(memId));
        return memberService.idChk(memId);
    }

    //회원 기초정보 조회
    @GetMapping("/getMemberList/{memTel}")
    public MemberVO getMemberList(MemberVO memberVO){
        return memberService.getMemberList(memberVO);
    }

    //회원 기초정보 업데이트
    @PostMapping("/updateMember")
    public void updateMember(@RequestBody MemberVO memberVO){
        memberService.updateMember(memberVO);
    }

}
