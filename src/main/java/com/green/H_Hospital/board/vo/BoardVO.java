package com.green.H_Hospital.board.vo;

import lombok.Data;

@Data
public class BoardVO {
    private int boardNum;
    private String boardTitle;
    private String boardContent;
    private String boardWriter;
    private String memId;
    private String createDate;
}
