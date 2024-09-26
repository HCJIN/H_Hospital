package com.green.H_Hospital.item.service;

import com.green.H_Hospital.item.vo.CategoryVO;
import com.green.H_Hospital.item.vo.ItemVO;

import java.util.List;

public interface ItemService {

    //카테고리 목록 조회
    List<CategoryVO> getCateList();

    //상품등록
    void insertItem(ItemVO itemVO);

    //상품이미지등록
    void insertImgs(ItemVO itemVO);

    //다음에 들어갈 item_code 조회
    int getNextItemCode();

    //아이템 리스트 조회
    List<ItemVO> getItemList();

    //아이템 상세정보 조회
    ItemVO getItem(int itemCode);

    //재고수량 업데이트
    void updateStock(ItemVO itemVO);

    //아이템 삭제
    void deleteItem(int itemCode);
}
