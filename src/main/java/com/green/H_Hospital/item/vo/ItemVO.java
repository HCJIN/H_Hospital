package com.green.H_Hospital.item.vo;

import lombok.Data;

import java.util.List;

@Data
public class ItemVO {
    private int itemCode;
    private String itemName;
    private int itemPrice;
    private String itemIntro;
    private int itemStock;
    private String itemStatus;
    private String itemBrand;
    private int cateCode;
    private List<ImgVO> imgList;
}
