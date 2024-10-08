package com.green.H_Hospital.cart.controller;

import com.green.H_Hospital.cart.service.CartService;
import com.green.H_Hospital.cart.vo.CartVO;
import com.green.H_Hospital.search.vo.SearchVO;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@RestController
@RequestMapping("/cart")
@Slf4j
public class CartController {
    @Resource(name = "cartService")
    private CartService cartService;

    //발주목록에 제품 등록
    @PostMapping("/insert")
    public void insertCart(@RequestBody CartVO cartVO){
        cartService.insertCart(cartVO);
    }

    //발주목록 조회
    @GetMapping("/getCartList/{memNum}")
    public List<CartVO> getCartList(@PathVariable("memNum")int memNum){
        return cartService.getCartList(memNum);
    }

    // 발주목록 조회 (검색 기능 추가)
    @PostMapping("/searchCartList")
    public List<CartVO> searchCartList(@RequestBody SearchVO searchVO) {
        return cartService.searchCartList(searchVO);
    }

    //전체 발주목록 조회
    @GetMapping("/getCartListAll")
    public ResponseEntity<Map<String, Object>> getCartListAll(
            @RequestParam(name = "page", defaultValue = "1") int page,
            @RequestParam(name = "limit", defaultValue = "5") int limit) {

        // page가 1보다 작으면 기본값으로 1로 설정
        if (page < 1) {
            page = 1;
        }

        log.info("page : {}, limit : {}", page, limit);

        // 페이징에 필요한 offset 계산
        int offset = (page - 1) * limit;
        List<CartVO> cartList = cartService.getCartListAll(offset, limit);
        int totalItems = cartService.getTotalCartItems();
        int totalPages = (int) Math.ceil((double) totalItems / limit);

        Map<String, Object> response = new HashMap<>();
        response.put("cartList", cartList);
        response.put("totalPages", totalPages);
        response.put("currentPage", page);

        return ResponseEntity.ok(response);
    }

    //수량 업데이트
    @PostMapping("/updateCart")
    public void updateCart(@RequestBody CartVO cartVO){
        cartService.updateCart(cartVO);
    }

    //목록삭제
    @DeleteMapping("/cartDelete/{cartCode}")
    public void goDelete(@PathVariable("cartCode") int cartCode){
        cartService.goDelete(cartCode);
    }

    //상태 업데이트
    @PostMapping("/statusUpdate/{cartCode}")
    public void statusUpdate(@PathVariable("cartCode") int cartCode){
        cartService.statusUpdate(cartCode);
    }

    //제품 출하
    @PostMapping("/goShipment")
    public void goShipment(@RequestBody CartVO cartVO){
        cartService.goShipment(cartVO);
    }

    //출하 취소
    @PutMapping("/cancelItem")
    public void cancelItem(@RequestBody CartVO cartVO){
        cartService.cancelItem(cartVO);
    }

}
