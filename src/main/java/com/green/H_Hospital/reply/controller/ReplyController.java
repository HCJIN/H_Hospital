package com.green.H_Hospital.reply.controller;

import com.green.H_Hospital.reply.service.ReplyService;
import com.green.H_Hospital.reply.vo.ReplyVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reply")
public class ReplyController {
    @Resource(name = "replyService")
    private ReplyService replyService;

    //댓글 목록
    @GetMapping("/list/{boardNum}")
    public List<ReplyVO> getReplyList(@PathVariable("boardNum") int boardNum){
        return replyService.getReplyList(boardNum);
    }

    //댓글 등록
    @PostMapping("/insert")
    public void insertReply(@RequestBody ReplyVO replyVO){
        replyService.insertReply(replyVO);
    }

    //댓글 삭제
    @DeleteMapping("delete/{replyNum}")
    public void deleteReply(@PathVariable("replyNum") int replyNum){
        replyService.deleteReply(replyNum);
    }

}
