package com.green.H_Hospital.cart.service;

import com.green.H_Hospital.cart.vo.CartVO;

import java.util.List;

public interface CartService {
    //제품 추가
    void insertCart(CartVO cartVO);

    //발주 목록 조회
    List<CartVO> getCartList(int memNum);
}
