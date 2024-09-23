package com.green.H_Hospital.reply.service;

import com.green.H_Hospital.reply.vo.ReplyVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("replyService")
public class ReplyServiceImpl implements ReplyService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //댓글 목록 조회
    @Override
    public List<ReplyVO> getReplyList(int boardNum) {
        return sqlSession.selectList("replyMapper.getReplyList", boardNum);
    }

    //댓글 등록
    @Override
    public void insertReply(ReplyVO replyVO) {
        sqlSession.insert("replyMapper.insertReply", replyVO);
    }

    //댓글 삭제
    @Override
    public void deleteReply(int replyNum) {
        sqlSession.delete("replyMapper.deleteReply", replyNum);
    }
}
