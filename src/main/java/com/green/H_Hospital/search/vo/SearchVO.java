package com.green.H_Hospital.search.vo;

import lombok.Data;

@Data
public class SearchVO {
    private String searchType;
    private String searchValue;
    private int pageNo;
    private int memNum;
}
