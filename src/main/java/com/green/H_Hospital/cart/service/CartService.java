package com.green.H_Hospital.cart.service;

import com.green.H_Hospital.cart.vo.CartVO;
import com.green.H_Hospital.search.vo.SearchVO;

import java.util.List;
import java.util.Map;
import java.util.Objects;

public interface CartService {

    //제품 추가
    void insertCart(CartVO cartVO);

    //발주 목록 조회
    List<CartVO> getCartList(int memNum);

    //발주 목록 조회 검색
    List<CartVO> searchCartList(SearchVO searchVO);

    //전체 발주 목록 조회
    List<CartVO> getCartListAll();

    //수량 업데이트
    void updateCart(CartVO cartVO);

    //목록삭제
    void goDelete(int cartCode);

    //상태 업데이트
    void statusUpdate(int cartCode);

    //제품 출하
    void goShipment(CartVO cartVO);

}
