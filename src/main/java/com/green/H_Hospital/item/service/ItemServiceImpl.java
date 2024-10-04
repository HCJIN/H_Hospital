package com.green.H_Hospital.item.service;

import com.green.H_Hospital.item.vo.CategoryVO;
import com.green.H_Hospital.item.vo.ItemVO;
import com.green.H_Hospital.item.vo.PageVO;
import jakarta.annotation.Resource;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("itemService")
public class ItemServiceImpl implements ItemService{

    @Autowired
    private SqlSessionTemplate sqlSession;

    //카테고리 조회
    @Override
    public List<CategoryVO> getAllItems() {
        return sqlSession.selectList("itemMapper.getAllItems");
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

    @Override
    public List<ItemVO> getItemListAll() {
        return sqlSession.selectList("itemMapper.getItemListAll");
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

    //아이템 삭제
    @Override
    public void deleteItem(int itemCode) {
        sqlSession.delete("itemMapper.deleteItem", itemCode);
    }

    //전체 아이템 갯수 조회
    @Override
    public int getItemCnt() {
        return sqlSession.selectOne("itemMapper.getItemCnt");
    }

    //아이템 리스트 조회 (페이징 처리)
    @Override
    public List<ItemVO> getItemList(PageVO pageVO) {
        //전체 아아템 수를 설정
        pageVO.setTotalDataCnt(getItemCnt());

        // 페이지 정보를 설정
        pageVO.setPageInfo();

        // 페이징 처리를 위한 매개변수를 전달하여 조회
        return sqlSession.selectList("itemMapper.getItemListWithPaging", pageVO);
    }

}
