package com.green.H_Hospital.board.service;

import com.green.H_Hospital.board.vo.BoardVO;

import java.util.List;

public interface BoardService {

    //게시글 목록 페이지
    List<BoardVO> getBoardList(BoardVO boardVO);

    //게시글 등록
    void insertBoard(BoardVO boardVO);

}
