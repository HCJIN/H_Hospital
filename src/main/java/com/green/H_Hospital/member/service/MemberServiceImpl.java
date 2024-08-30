package com.green.H_Hospital.member.service;

import com.green.H_Hospital.member.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("memberService")
public class MemberServiceImpl implements MemberService {

    @Autowired
    private SqlSessionTemplate sqlSession;

    //멤버리스트 조회
    @Override
    public List<MemberVO> memberList() {
        return sqlSession.selectList("memberMapper.memberList");
    }

    // 회원 기초정보 등록
    // 회원 가입을 위한 기본적인 정보 입력
    @Override
    public void insertMember(MemberVO memberVO) {
        sqlSession.insert("memberMapper.insertMember", memberVO);
    }

    // id 중복 체크
    @Override
    public boolean idChk(String email) {
        //id가 null 이면 회원가입 가능 true
        //id가 조회되면 null 이 아니기 때문에 회원가입 불가능 false
        String selectedId = sqlSession.selectOne("memberMapper.idChk", email);
        return selectedId == null;
    }

    //회원 기초정보 조회
    @Override
    public MemberVO getMemberList(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.getMemberList", memberVO);
    }

    //회원가입 업데이트
    @Override
    public void updateMember(MemberVO memberVO) {
        sqlSession.update("memberMapper.updateMember", memberVO);
    }

    //직원가입 기초정보 업데이트
    @Override
    public void updateAdmin(MemberVO memberVO) {
        sqlSession.update("memberMapper.updateAdmin", memberVO);
    }

    //sns 회원가입
    @Override
    public void insertSnsMember(MemberVO memberVO) {
        sqlSession.insert("memberMapper.insertSnsMember", memberVO);

    }

    //로그인
    @Override
    public MemberVO login(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.login", memberVO);
    }

    //id 찾기
    public MemberVO findId(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.findId", memberVO);
    }

    //pw 찾기
    @Override
    public MemberVO findPw(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.findPw", memberVO);
    }


}