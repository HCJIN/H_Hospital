package com.green.H_Hospital.chart.service;

import com.green.H_Hospital.chart.vo.ChartVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("chartService")
public class ChartServiceImpl implements ChartService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public List<ChartVO> getPatientInfo() {
        return sqlSession.selectList("chartMapper.getPatientInfo");
    }
}
