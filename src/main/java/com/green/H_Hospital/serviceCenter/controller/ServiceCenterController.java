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
}
