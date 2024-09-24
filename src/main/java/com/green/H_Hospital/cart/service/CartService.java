package com.green.H_Hospital.cart.service;

import com.green.H_Hospital.cart.vo.CartVO;

import java.util.List;

public interface CartService {

    //제품 추가
    void insertCart(CartVO cartVO);

    //발주 목록 조회
    List<CartVO> getCartList(int memNum);

    //전체 발주 목록 조회
    List<CartVO> getCartListAll();

    //수량 업데이트
    void updateCart(CartVO cartVO);

    //목록삭제
    void goDelete(int cartCode);

    //상태 업데이트
    void statusUpdate(int cartCode);
}
