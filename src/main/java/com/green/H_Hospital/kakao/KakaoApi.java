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
@Component("kakaoApi")  // Bean으로 등록
public class KakaoApi {

    private String kakaoApiKey;
    private String kakaoRedirectUri;

    public HashMap<String, Object> getUserInfo(String accessToken) {
        HashMap<String, Object> userInfo = new HashMap<>();
        String reqUrl = "https://kapi.kakao.com/v2/user/me";
        try {
            URL url = new URL(reqUrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Authorization", "Bearer " + accessToken);
            conn.setRequestProperty("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

            int responseCode = conn.getResponseCode();
            log.info("[KakaoApi.getUserInfo] responseCode : {}", responseCode);

            BufferedReader br;
            if (responseCode >= 200 && responseCode <= 300) {
                br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            } else {
                br = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
            }

            StringBuilder responseSb = new StringBuilder();
            String line;
            while ((line = br.readLine()) != null) {
                responseSb.append(line);
            }
            String result = responseSb.toString();
            log.info("responseBody = {}", result);

            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);

            JsonObject jsonObject = element.getAsJsonObject();

            JsonObject properties = jsonObject.has("properties") ? jsonObject.getAsJsonObject("properties") : new JsonObject();
            JsonObject kakaoAccount = jsonObject.has("kakao_account") ? jsonObject.getAsJsonObject("kakao_account") : new JsonObject();

            String nickname = properties.has("nickname") ? properties.get("nickname").getAsString() : "Unknown";
            String email = kakaoAccount.has("email") ? kakaoAccount.get("email").getAsString() : "Unknown";

            userInfo.put("nickname", nickname);
            userInfo.put("email", email);

            br.close();

        } catch (Exception e) {
            log.error("An error occurred while getting user info: ", e);
        }
        return userInfo;
    }
}
