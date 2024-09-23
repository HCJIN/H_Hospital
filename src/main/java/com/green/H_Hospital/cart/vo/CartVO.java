package com.green.H_Hospital.cart.vo;

import lombok.Data;

@Data
public class CartVO {
    private int cartCode;
    private int itemCode;
    private int cartCnt;
    private int memNum;
    private String cartDate;
}
