package com.green.H_Hospital.kakao;

import org.springframework.stereotype.Component;
import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Slf4j
@Component("kakaoApi")  // Spring의 컴포넌트 스캔에 의해 빈으로 등록됨
public class KakaoApi {

    private String kakaoApiKey;
    private String kakaoRedirectUri;

    /**
     * 주어진 액세스 토큰을 사용하여 Kakao API로부터 사용자 정보를 가져오는 메소드.
     *
     * @param accessToken Kakao API 접근을 위한 액세스 토큰
     * @return 사용자 정보를 담고 있는 HashMap
     */
    public HashMap<String, Object> getUserInfo(String accessToken) {
        HashMap<String, Object> userInfo = new HashMap<>();
        String reqUrl = "https://kapi.kakao.com/v2/user/me";
        // Kakao 사용자 정보 API URL

        try {
            // URL 객체를 생성하여 연결을 설정
            URL url = new URL(reqUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // HTTP 메소드와 헤더 설정
            conn.setRequestMethod("POST");
            // 액세스 토큰을 Authorization 헤더에 추가
            conn.setRequestProperty("Authorization", "Bearer " + accessToken);
            conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

            // 응답 코드 확인 및 로그 기록
            int responseCode = conn.getResponseCode();
            log.info("[KakaoApi.getUserInfo] responseCode : {}", responseCode);

            // 응답 스트림을 읽기 위한 BufferedReader 설정
            BufferedReader br;
            if (responseCode >= 200 && responseCode <= 300) {
                br = new BufferedReader(new InputStreamReader(conn.getInputStream()));  // 성공적인 응답일 경우
            } else {
                br = new BufferedReader(new InputStreamReader(conn.getErrorStream()));  // 실패 응답일 경우
            }

            // 응답 데이터 읽기
            StringBuilder responseSb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                responseSb.append(line);
            }
            String result = responseSb.toString();
            log.info("responseBody = {}", result);

            // JSON 파싱을 위한 Gson 라이브러리 사용
            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);
            JsonObject jsonObject = element.getAsJsonObject();

            // JSON 객체에서 사용자 정보를 추출
            JsonObject properties = jsonObject.has("properties") ? jsonObject.getAsJsonObject("properties") : new JsonObject();
            JsonObject kakaoAccount = jsonObject.has("kakao_account") ? jsonObject.getAsJsonObject("kakao_account") : new JsonObject();

            String nickname = properties.has("nickname") ? properties.get("nickname").getAsString() : "Unknown";  // 닉네임 추출
            String email = kakaoAccount.has("email") ? kakaoAccount.get("email").getAsString() : "Unknown";  // 이메일 추출

            // 추출한 정보를 HashMap에 저장
            userInfo.put("nickname", nickname);
            userInfo.put("email", email);

            // BufferedReader 자원 해제
            br.close();

        } catch (Exception e) {
            // 예외 발생 시 로그 기록
            log.error("An error occurred while getting user info: ", e);
        }
        return userInfo;  // 사용자 정보 반환
    }
}
