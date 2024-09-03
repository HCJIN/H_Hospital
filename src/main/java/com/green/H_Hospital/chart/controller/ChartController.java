package com.green.H_Hospital.chart.controller;

import com.green.H_Hospital.chart.service.ChartService;
import com.green.H_Hospital.chart.vo.ChartVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/chart")
@RestController
public class ChartController {

    @Resource(name = "chartService")
    private ChartService chartService;

    @GetMapping("/getPatientInfo")
    public List<ChartVO> getPatientInfo(){
        return chartService.getPatientInfo();
    }

}
