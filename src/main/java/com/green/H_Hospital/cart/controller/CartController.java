package com.green.H_Hospital.cart.controller;

import com.green.H_Hospital.cart.service.CartService;
import com.green.H_Hospital.cart.vo.CartVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
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

    //전체 발주목록 조회
    @GetMapping("/getCartListAll")
    public List<CartVO> getCartListAll(){
        return cartService.getCartListAll();
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

}
