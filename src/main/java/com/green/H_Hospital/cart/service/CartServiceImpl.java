package com.green.H_Hospital.cart.service;

import com.green.H_Hospital.cart.vo.CartVO;
<<<<<<< HEAD
import com.green.H_Hospital.search.vo.SearchVO;
=======
import com.green.H_Hospital.item.vo.ItemVO;
>>>>>>> jhb
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service("cartService")

public class CartServiceImpl implements CartService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    //제품 추가
    @Override
    public void insertCart(CartVO cartVO) {

        //발주목록에 제품 존재 여부 확인
        CartVO vo = sqlSession.selectOne("cartMapper.checkCart", cartVO);

        //없으면 insert
        if(vo == null){
            sqlSession.insert("cartMapper.insertCart", cartVO);
        } else if (!"주문등록".equals(vo.getCartStatus())) {
            //새로운 항목으로 추가
            sqlSession.insert("cartMapper.insertCart", cartVO);
        }
        //있으면 update
        else {
            sqlSession.update("cartMapper.updateItemCnt", cartVO);
        }

    }

    //발주 목록 조회
    @Override
    public List<CartVO> getCartList(int memNum) {
        return sqlSession.selectList("cartMapper.getCartList", memNum);
    }

    //발주 목록 조회 검색
    @Override
    public List<CartVO> searchCartList(SearchVO searchVO) {
        return sqlSession.selectList("cartMapper.getCartList", searchVO);
    }

    //전체 발주 목록 조회
    @Override
    public List<CartVO> getCartListAll() {
        return sqlSession.selectList("cartMapper.getCartListAll");
    }

    //수량 업데이트
    @Override
    public void updateCart(CartVO cartVO) {
        sqlSession.update("cartMapper.updateCart", cartVO);
    }

    //목록 삭제
    @Override
    public void goDelete(int cartCode) {
        sqlSession.delete("cartMapper.goDelete", cartCode);
    }

    //상태 업데이트
    @Override
    public void statusUpdate(int cartCode) {
        sqlSession.update("cartMapper.statusUpdate", cartCode);
    }

    //제품 출하
    @Override
    public void goShipment(CartVO cartVO) {
        // 제품 재고 업데이트
        sqlSession.update("cartMapper.updateStockQuantity", cartVO);

        // 장바구니 상태 업데이트
        sqlSession.update("cartMapper.goShipment", cartVO);
    }

}
