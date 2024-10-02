package com.green.H_Hospital.serviceCenter.service;

import com.green.H_Hospital.serviceCenter.vo.ServiceCenterVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("serviceCenterService")
public class ServiceCenterServiceImpl implements ServiceCenterService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    //게시글 조회
    @Override
    public List<ServiceCenterVO> getContentList() {
        return sqlSession.selectList("serviceMapper.getContentList");
    }

    //게시글 등록
    @Override
    public void insertContent(ServiceCenterVO serviceCenterVO) {
        sqlSession.insert("serviceMapper.insertContent",serviceCenterVO);
    }

    //게시글 상세보기
    @Override
    public ServiceCenterVO getContentDetail(int boardNum) {
        return sqlSession.selectOne("serviceMapper.getContentDetail", boardNum);
    }

    //게시글 삭제
    @Override
    public void deleteContent(int boardNum) {
        sqlSession.delete("serviceMapper.deleteContent", boardNum);
    }

    //게시글 수정
    @Override
    public void updateContent(ServiceCenterVO serviceCenterVO) {
        sqlSession.update("serviceMapper.updateContent", serviceCenterVO);
    }
}
