package com.green.H_Hospital.serviceCenter.controller;

import com.green.H_Hospital.serviceCenter.service.ServiceCenterService;
import com.green.H_Hospital.serviceCenter.vo.ServiceCenterVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/service")
public class ServiceCenterController {

    @Resource(name = "serviceCenterService")
    private ServiceCenterService serviceCenterService;

    //게시글 조회
    @GetMapping("/getContentList")
    private List<ServiceCenterVO> getContentList(){
        return serviceCenterService.getContentList();
    }

    // 게시글 등록
    @PostMapping("/insertContent")
    private void insertContent(@RequestBody ServiceCenterVO serviceCenterVO){
        serviceCenterService.insertContent(serviceCenterVO);
    }

    //게시글 상세보기
    @GetMapping("/detail/{boardNum}")
    public ServiceCenterVO getContentDetail(@PathVariable("boardNum") int boardNum){
        return serviceCenterService.getContentDetail(boardNum);
    }

    //게시글 삭제
    @DeleteMapping("/delete/{boardNum}")
    public void deleteContent(@PathVariable("boardNum") int boardNum){
        serviceCenterService.deleteContent(boardNum);
    }

    //게시글 수정
    @PutMapping("/update")
    public void updateContent(@RequestBody ServiceCenterVO serviceCenterVO){
        serviceCenterService.updateContent(serviceCenterVO);
    }

}
