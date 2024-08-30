package com.green.H_Hospital.naver.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
public class OAuthController {

    @Value("${naver.client.id}")
    private String clientId;

    @Value("${naver.client.secret}")
    private String clientSecret;

    @Value("${naver.redirect.uri}")
    private String redirectUri;

    private final RestTemplate restTemplate;

    public OAuthController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/oauth")
    public ResponseEntity<?> handleOAuthCallback(@RequestParam("code") String code, @RequestParam("state") String state) {
        try {
            // Access token을 가져오기 위한 요청 URL 설정
            String tokenUrl = "https://nid.naver.com/oauth2.0/token";
            String url = UriComponentsBuilder.fromHttpUrl(tokenUrl)
                    .queryParam("grant_type", "authorization_code")
                    .queryParam("client_id", clientId)
                    .queryParam("client_secret", clientSecret)
                    .queryParam("code", code)
                    .queryParam("redirect_uri", redirectUri)
                    .toUriString();

            // Access token 요청
            ResponseEntity<String> tokenResponse = restTemplate.postForEntity(url, null, String.class);
            String accessToken = tokenResponse.getBody();

            // 사용자 정보 요청
            String userInfoUrl = "https://openapi.naver.com/v1/nid/me";
            // 헤더에 Authorization을 추가하여 사용자 정보 요청
            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", "Bearer " + accessToken);
            HttpEntity<String> requestEntity = new HttpEntity<>(headers);

            ResponseEntity<String> userResponse = restTemplate.exchange(userInfoUrl, HttpMethod.GET, requestEntity, String.class);

            // 사용자 정보를 JSON으로 반환
            return ResponseEntity.ok(userResponse.getBody());

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Failed to fetch access token or user info");
        }
    }

}