![header](https://capsule-render.vercel.app/api?type=waving&color=auto)
# 팀 도와조_울산메디컬센터

## 📄프로젝트 소개

- 일반 고객과 직원의 데이터를 분류해 웹 페이지 사용을 편리하게 하도록 하고, 카카오api를 활용해 회원가입을 쉽게 할 수 있도록 함
- 병원 발주 프로그램과 공급사의 수주 프로그램을 구현해 의료 용품 재고관리를 용이하게 하고자 함

# 프로젝트 목차

## SNS를 활용한 병원 로그인 및 회원가입
#### 회원가입
- 일반 회원가입
- SNS를 통한 회원가입

#### 로그인
- 일반 로그인
- SNS를 통한 로그인

## 의료용품 수주/발주 프로그램
#### 병원 관점 의료용품 발주 프로그램
- 의료용품 발주

#### 공급사 관점 의료용품 수주 프로그램
- 의료용품 등록
- 발주 요청 확인 후 출고 처리

## 의료용품 수주/발주 프로그램
#### 네이버 뉴스 
#### 
####

## 😎팀원 소개😆
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/b314c478-7457-42e4-a6a2-eacbb54da5fb" width="200" height="200">
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/f7ef8378-c84a-41b8-ac81-748cb564c726" width="200" height="200">
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/fbfe7d7d-8ab7-4bb6-8b90-468ddb1cc590" width="200" height="200">
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/2a667016-cfcf-4e92-bc75-23525af3b9b5" width="200" height="200">
    </td>
  </tr>
      <tr>
      <td align="center">
        황찬진</br>
        <a href="https://github.com/HCJIN">@HCJIN</a>
      </td>
      <td align="center">
        이동희</br>
        <a href="https://github.com/dlfjs4585">@dlfjs4585</a>
      </td>
      <td align="center">
        정보현</br>
        <a href="https://github.com/bohyeonjeong50">@bohyeonjeong50</a>
      </td>
      <td align="center">
        전하빈</br>
        <a href="https://github.com/kong2bine">@kong2bine</a>
      </td>
</table>



## 🖥 기술 스택

### 백엔드
![Spring](https://img.shields.io/badge/Spring-6DB33F?style=flat-square&logo=Spring&logoColor=white)
![MARIADB](https://img.shields.io/badge/MARIADB-003545?style=flat-square&logo=MARIADB&logoColor=white)
![MyBatis](https://img.shields.io/badge/MyBatis-621773?style=flat-square&logo=MyBatis&logoColor=white)
![JAVA](https://img.shields.io/badge/Java-DE3723?style=flat-square&logo=JAVA&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white)

### 프론트엔드
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)
![html5](https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white)
![css3](https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white)

### API
![kakaoTalk](https://img.shields.io/badge/kakaoAPI-FFCD00?style=flat-square&logo=kakaoTalk&logoColor=white)
![naver](https://img.shields.io/badge/naverAPI-03C75A?style=flat-square&logo=naver&logoColor=white)

### 도구
![github](https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white)
![VisualStudioCode](https://img.shields.io/badge/VisualStudioCode-326CAC?style=flat-square&logo=VisualStudioCode&logoColor=white)

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=HCJIN&layout=compact)](https://github.com/HCJIN/H_Hospital/github-readme-stats)

### 데이터베이스 관계도
![DB](./src/main/frontend/src/images/데이터베이스_ERD.png)

# 🏥 SNS를 활용한 병원 로그인 및 회원가입

![MAIN](./src/main/frontend/src/images/메인화면.PNG)

## 목차

* 회원가입
* **SNS**를 통한 회원가입
* 로그인

## 회원가입

일반 회원가입과 **SNS**를 통한 회원가입 2가지의 기능을 만들었습니다.
먼저 일반회원가입입니다.

회원에 대한 기초정보를 입력합니다. 

![SubJoin](./src/main/frontend/src/images/기초정보등록.PNG)

입력한 기초정보를 가지고 회원가입 페이지를 구현합니다. 
나머지 정보를 입력한 후에 회원가입이 진행됩니다.

![Join](./src/main/frontend/src/images/회원가입.PNG)

## SNS를 통한 회원가입

SNS(KAKAO) 회원가입 버튼을 누르게 되면 KAKAO 로그인 화면으로 넘어가게 됩니다.

![SnsLogin](./src/main/frontend/src/images/카카오_로그인.png)

KAKAO 로그인을 하며 로그인 성공 시 이름, email을 받아오게 되고, 나머지 정보를 입력한 후 회원가입이 진행됩니다.

![SnsJoin](./src/main/frontend/src/images/카카오_정보입력.png)

## 로그인

일반 회원은 입력한 정보를 통해 데이터베이스에서 조회하여 로그인하고, SNS 회원은 KAKAO 로그인 아이콘을 클릭하면 KAKAO 로그인 화면으로 이동해, 로그인에 성공 시 해당 정보로 로그인 절차가 완료됩니다.

![Login](./src/main/frontend/src/images/로그인.PNG)

로그인이 완료되게되면 회원가입시 작성한 이름으로 표시가 됩니다. 

![LoginSuccess](./src/main/frontend/src/images/로그인완료.PNG)

# 🚑의료용품 수주/발주 프로그램

병원 측 관리자로 로그인 후 입고요청 페이지로 이동하게 되면 첫 화면입니다.

![store](./src/main/frontend/src/images/입고요청%20전체화면.png)

상품 추가 버튼을 클릭하면 주문 내역에 해당 상품이 추가되고, 수량을 조절할 수 있습니다. 이때 상태는 '주문 등록'으로 표시되며, 발주 버튼을 누르면 '발주 요청'으로 변경됩니다. 이후, 공급사 페이지에 해당 상품과 함께 '발주 요청' 상태로 나타나게 됩니다.

<img src="https://github.com/user-attachments/assets/858fee66-9235-4042-87be-279cbe77ee73" height="600" /><br/>

공급사 페이지의 첫 화면입니다.
발주요청을 받은 상품들을 확인 및 새로운 상품을 등록할 수 있도록 만들었습니다

![supplierMain](./src/main/frontend/src/images/공급사페이지_발주요청리스트.png)
![supplierMain](./src/main/frontend/src/images/공급사페이지_상품리스트.png)

발주요청을 받은 상품 출하를 누르게 되면 제품이 출하되었다는 말과 함께 상태가 제품 출하로 바뀌게 됩니다.

<img src="https://github.com/user-attachments/assets/4a887158-b545-415d-b4c1-c9ba4f8bf8df" height="600"/><br/>


# 🖊그 외 구현 기능

## 네이버 뉴스
![뉴스](https://github.com/user-attachments/assets/22c41b15-0bfb-4790-ad3c-83ae2d788d74)

홈페이지 메인의 하단에 출력되는 뉴스입니다.

새로고침 혹은 지정된 시간이 지난 후 새로운 뉴스로 갱신되도록 구현되었습니다.

## 진료과 찾기
![진료과-찾기](https://github.com/user-attachments/assets/1e6ebb5a-cad7-4a63-a83d-274767e65e0c)

진료과 찾기 페이지로 이동하면 병원에 소속된 진료과가 나옵니다.

원하는 진료과를 선택하면 해당 진료과로 이동하게 됩니다.

의료진을 클릭하면 해당 진료과의 의료진이 나오고 의료진 클릭 시 의료진 소개로 이동하며, 소개 클릭 시 해당 진료과의 소개를 볼 수 있습니다.

진료과 상단의 진료 예약 버튼을 누르면 진료 예약 페이지로 이동하게 됩니다.

## 진료 예약
![진료-예약](https://github.com/user-attachments/assets/ad33392d-3acc-49c0-a167-efbf1fd3fcfe)

일반 회원으로 로그인을 한 후 진료 예약을 클릭하면 간편 예약 서비스 창이 뜹니다.

증상 입력 후 날짜를 선택하면 달력의 날짜와 시간을 선택할 수 있는데 병원 운영 시간에만 선택할 수 있도록 설정해두었습니다.

![footer](https://capsule-render.vercel.app/api?type=waving&color=auto&section=footer)
