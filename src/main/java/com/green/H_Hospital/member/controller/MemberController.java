package com.green.H_Hospital.member.controller;

import com.green.H_Hospital.kakao.KakaoApi;
import com.green.H_Hospital.member.service.MemberService;
import com.green.H_Hospital.member.vo.MemberVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Resource(name = "memberService")
    private MemberService memberService;

    @Resource(name = "kakaoApi")
    private KakaoApi kakaoApi;

    //회원 기초정보 등록
    // 회원 가입을 위한 기본적인 정보 입력
    @PostMapping("/insertMember")
    public void insertMember(@RequestBody MemberVO memberVO){
        memberService.insertMember(memberVO);
    }

    //id 중복 체크
    @GetMapping("/idChk/{email}")
    public boolean idChk(@PathVariable("email")String email){
        System.out.println(memberService.idChk(email));
        return memberService.idChk(email);
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

    //token 받아서 정보 전달
    @GetMapping("/kaKaoCode")
    public Map<String, Object> accessToken(@RequestParam("accessToken") String accessToken){
        // 사용자 정보 받기
        Map<String, Object> userInfo = kakaoApi.getUserInfo(accessToken);

        return userInfo;
    }

    //sns 회원가입
    @PostMapping("/insertSnsMember")
    public void insertSnsMember(@RequestBody MemberVO memberVO){
        memberService.insertSnsMember(memberVO);
    }


    //로그인
    @PostMapping("/login")
    public MemberVO memberLogin(@RequestBody MemberVO memberVO) {
        return memberService.login(memberVO);
    }

    //id 찾기
    @PostMapping("/findId")
    public MemberVO findId(@RequestBody MemberVO memberVO){
        return memberService.findId(memberVO);
    }



}
