package com.green.H_Hospital.serviceCenter.service;

import com.green.H_Hospital.serviceCenter.vo.ServiceCenterVO;

import java.util.List;

public interface ServiceCenterService {

    //게시글 조회
    List<ServiceCenterVO> getContentList();

    //게시글 등록
    void insertContent(ServiceCenterVO serviceCenterVO);

    //게시글 상세보기
    ServiceCenterVO getContentDetail(int boardNum);

    //게시글 삭제
    void deleteContent(int boardNum);

    //게시글 수정
    void updateContent(ServiceCenterVO serviceCenterVO);
}
