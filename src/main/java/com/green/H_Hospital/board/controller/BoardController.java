package com.green.H_Hospital.board.controller;

import com.green.H_Hospital.board.service.BoardService;
import com.green.H_Hospital.board.vo.BoardVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/board")
public class BoardController {

    @Resource(name = "boardService")
    private BoardService boardService;

    //게시글 목록 조회
    @GetMapping("/list")
    public List<BoardVO> getBoardList(BoardVO boardVO){
        return boardService.getBoardList(boardVO);
    }

    //게시글 등록
    @PostMapping("/insert")
    public void insertBoard(@RequestBody BoardVO boardVO){
        boardService.insertBoard(boardVO);
    }

}
