package com.green.H_Hospital.naver.controller;

import com.green.H_Hospital.naver.service.OAuthService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class OAuthController {

    @Value("${naver.redirect.uri}")
    private String redirectUri;

    private final OAuthService oAuthService;

    public OAuthController(OAuthService oAuthService) {
        this.oAuthService = oAuthService;
    }

    @GetMapping("/oauth")
    public ModelAndView handleOAuthCallback(@RequestParam("code") String code) {
        try {
            String accessToken = oAuthService.getAccessToken(code);
            String userInfo = oAuthService.getUserInfo(accessToken);

            System.out.println(userInfo);
            System.out.println(accessToken);

            // 사용자 정보를 ModelAndView에 추가하여 반환
            ModelAndView mav = new ModelAndView("snsRegInfo");
            mav.addObject("userInfo", userInfo);
            return mav;
        } catch (Exception e) {
            return new ModelAndView("error").addObject("message", "Failed to fetch access token or user info");
        }
    }
}