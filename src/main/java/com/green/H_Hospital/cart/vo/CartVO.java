package com.green.H_Hospital.cart.vo;

import com.green.H_Hospital.item.vo.ItemVO;
import lombok.Data;

import java.util.List;

@Data
public class CartVO {
    private int cartCode;
    private int itemCode;
    private int cartCnt;
    private int memNum;
    private String cartDate;
    private ItemVO itemVO;
}
