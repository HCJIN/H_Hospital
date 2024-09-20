package com.green.H_Hospital.serviceCenter.service;

import com.green.H_Hospital.serviceCenter.vo.ServiceCenterVO;

import java.util.List;

public interface ServiceCenterService {

    //게시글 조회
    List<ServiceCenterVO> getContentList();

    //게시글 등록
    void insertContent(ServiceCenterVO serviceCenterVO);
}
