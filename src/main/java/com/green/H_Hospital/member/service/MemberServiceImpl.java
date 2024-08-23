package com.green.H_Hospital.member.service;

import com.green.H_Hospital.member.vo.MemberVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("memberService")
public class MemberServiceImpl implements MemberService{

    @Autowired
    private SqlSessionTemplate sqlSession;


    // 회원 기초정보 등록
    // 회원 가입을 위한 기본적인 정보 입력
    @Override
    public void insertMember(MemberVO memberVO) {
        sqlSession.insert("memberMapper.insertMember",memberVO);
    }

    // id 중복 체크
    @Override
    public boolean idChk(String memId) {
        //id가 null 이면 회원가입 가능 true
        //id가 조회되면 null 이 아니기 때문에 회원가입 불가능 false
        String selectedId = sqlSession.selectOne("memberMapper.idChk",memId);
        return selectedId == null;
    }

    //회원 기초정보 조회
    @Override
    public MemberVO getMemberList(MemberVO memberVO) {
        return sqlSession.selectOne("memberMapper.getMemberList",memberVO);
    }


}
