package com.green.H_Hospital.item.service;

import com.green.H_Hospital.item.vo.CategoryVO;
import com.green.H_Hospital.item.vo.ItemVO;
import jakarta.annotation.Resource;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("itemService")
public class ItemServiceImpl implements ItemService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    //카테고리 조회
    @Override
    public List<CategoryVO> getCateList() {
        return sqlSession.selectList("itemMapper.getCategoryList");
    }

    //카테고리별 제품 상세조회
    @Override
    public List<ItemVO> getItemsByCategory(int cateCode) {
        return sqlSession.selectList("itemMapper.getItemsByCategory",cateCode);
    }


    //아이템 등록
    @Override
    public void insertItem(ItemVO itemVO) {
        sqlSession.insert("itemMapper.insertItem", itemVO);
    }

    //상품 이미지 등록
    @Override
    public void insertImgs(ItemVO itemVO) {
        sqlSession.insert("itemMapper.insertImgs", itemVO);
    }

    //다음에 들어갈 item_code 조회
    @Override
    public int getNextItemCode() {
        return sqlSession.selectOne("itemMapper.getNextItemCode");
    }

    //아이템 리스트 조회
    @Override
    public List<ItemVO> getItemList() {
        return sqlSession.selectList("itemMapper.getItemList");
    }

    //아이템 상세정보 조회
    @Override
    public ItemVO getItem(int itemCode) {
        return sqlSession.selectOne("itemMapper.getItem", itemCode);
    }

    //재고수량 업데이트
    @Override
    public void updateStock(ItemVO itemVO) {
        sqlSession.update("itemMapper.updateStock", itemVO);
    }

}
