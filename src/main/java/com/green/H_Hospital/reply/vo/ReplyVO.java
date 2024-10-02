package com.green.H_Hospital.reply.vo;

import com.green.H_Hospital.member.vo.MemberVO;
import lombok.Data;


@Data
public class ReplyVO {
    private int replyNum;
    private String replyContent;
    private String replyDate;
    private String memId;
    private int boardNum;
    private int memNum;
    private MemberVO memberVO;
}
