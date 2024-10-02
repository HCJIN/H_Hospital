package com.green.H_Hospital.item.vo;

import lombok.Data;

@Data
public class PageVO {

    // 전체 데이터 수
    private int totalDataCnt;
    // 한 페이지에 보여지는 데이터 수
    private int displayDataCnt; // 한 페이지당 아이템 수
    // 현재 페이지
    private int nowPage;
    // 한 화면에 보여지는 페이지 수
    private int displayPageCnt; // 페이지 버튼 수
    // 화면에 보이는 시작페이지
    private int beginPage;
    // 화면에 보이는 마지막페이지
    private int endPage;
    // 이전 버튼 유무
    private boolean prev;
    // 다음 버튼 유무
    private boolean next;
    // 조회 쿼리 수식용
    private int offset;

    // 생성자
    public PageVO(int totalDataCnt) {
        this.totalDataCnt = totalDataCnt;
        this.nowPage = 1; // 기본값: 첫 페이지
        this.displayPageCnt = 5; // 페이지 버튼 수
        this.displayDataCnt = 3; // 한 페이지당 아이템 수
        setPageInfo(); // 페이지 정보 설정
    }

    // 모든 페이지 정보를 세팅하는 메소드
    public void setPageInfo() {
        // 전체 페이지 수 계산
        int totalPageCnt = (int)Math.ceil(totalDataCnt / (double)displayDataCnt);

        // 화면에 보이는 마지막 페이지 번호
        endPage = (int)Math.ceil(nowPage / (double)displayPageCnt) * displayPageCnt;

        // 화면에 보이는 시작페이지 번호
        beginPage = endPage - displayPageCnt + 1;

        // 마지막 페이지가 전체 페이지 수를 초과할 경우 조정
        if (endPage > totalPageCnt) {
            endPage = totalPageCnt;
        }

        // 이전 버튼 유무
        prev = beginPage > 1;

        // 다음 버튼 유무
        next = endPage < totalPageCnt;

        // 수식 계산
        offset = displayDataCnt * (nowPage - 1);
    }
}
