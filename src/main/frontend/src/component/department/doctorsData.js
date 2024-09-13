const doctors = {
  "가정의학과": [
    { id: 1, name: "최가정", department:"가정의학과", intro: "대사증후군, 건강증진, 노인의학", department:"가정의학과", image: "/docImg/doc1.jpg" 
      ,graduation1:"연세대학교 의과대학 의학과 대학원 박사 수료"
      ,graduation2:"연세대학교 의과대학 의학과 대학원 석사"
      ,graduation3:"연세대학교 원주의과대학 학사"
      ,career1:"현 연세대학교 세브란스헬스체크업 건강의학과 임상조교수"
      ,career2:"현 연세대학교 신촌세브란스 가정의학과 겸무교원"
      ,career3:"연세대학교 의과대학 가정의학교실 강사"
      ,career4:"연세대학교 강남세브란스병원 전공의"
      ,career5:"(주)포스코 POSCO 자문의"
    },

    { id: 2, name: "박가정", intro: "만성피로, 비만, 이상지질혈증", image: "/docImg/doc1_1.jpg"
      ,graduation1:"연세대학교 의과대학 졸업"
      ,graduation2:"연세대학교 의과대학 의학과 대학원 가정의학과 석사"
      ,graduation3:"연세대학교 의과대학 의학과 대학원 가정의학과 박사"
      ,career1:"연세대학교 의과대학 가정의학교실 전임의"
      ,career2:"연세대학교 의과대학 세브란스병원 임상시험센터 임상전임강사"
      ,career3:"연세대학교 의과대학 세브란스병원 가정의학교실 전임강사"
      ,career4:"연세대학교 의과대학 가정의학교실 조교수"
      ,career5:"University of California Irvine 교환교수"
      ,career6:"현) 대한비만학회 교육위원"
     }
  ],


  "감염내과": [
    { id: 3, name: "김감내", department:"감염내과", intro: "감염질환, 발열질환", image: "/docImg/doc2.jpg"
      ,graduation1:"연세대학교 의학과 학사 (1983)"
      ,graduation2:"계명대학교 대학원 석사 (1992)"
      ,graduation3:"고려대학교 대학원 박사 (2000)"
      ,career1:"1983. 3- 1986. 2 세브란스병원 가정의학과 전공의"
      ,career2:"1991-1996 전주예수병원 북완주지역 지역사회 및 장애자재활사업 책임자"
      ,career3:"2000 - 2001 International Fellow in Substance Abuse (약물남용) Case Western Reserve University"
      ,career4:"2002. 3 - 2011. 2 연세대학교 건강센터 소장"
      ,career5:"2013.3 - 현재 가정의학교실 교수"
     },

    { id: 4, name: "이감내", intro: "감염질환, 에이즈", image: "/docImg/doc2_1.jpg"
      ,graduation1:"연세대학교 의학과 학사 (1993)"
      ,graduation2:"연세대학교 의학과 석사 (1998)"
      ,graduation3:"연세대학교 의학과 박사 (2009)"
      ,graduation4:"London School of Hygiene and Tropical Medicine, Professional Diploma in Tropical Medicine and Hygiene(DTM&H) 2016"
      ,career1:"2001.-2002 연세대학교 의과대학 내과학교실 전임강사"
      ,career2:"2002-2004 성균관의대 강북삼성병원 감염내과 과장"
      ,career3:"2004.-2008 성균관대학교 의과대학 내과학교실 조교수"
      ,career4:"2008.-2015 성균관대학교 의과대학 내과학교실 부교수"
      ,career5:"2015-2018 성균관대학교 의과대학 내과학교실 교수"
     },

    { id: 5, name: "윤감내", department:"감염내과", intro: "감염질환, 말라리아, 뎅기열등열대풍토병", image: "/docImg/doc2_2.jpg"
      ,graduation1:"2003년 연세대학교 의과대학 학사"
      ,graduation2:"2008년 연세대학교 의과대학 석사"
      ,graduation3:"2013년 연세대학교 의과대학 박사"
      ,career1:"2003년 3월 - 2004년 2월 연세의료원 신촌 세브란스병원 인턴"
      ,career2:"2004년 3월 - 2008년 2월 연세의료원 신촌 세브란스병원 내과 레지던트"
      ,career3:"2010년 3월 - 2014년 2월 연세대학교 의과대학 내과학교실 감염내과 강사"
      ,career4:"2014년 3월 - 2019년 2월 연세대학교 의과대학 내과학교실 감염내과 임상조교수"
      ,career5:"2019년 3월 - 2022년 2월 연세대학교 의과대학 내과학교실 감염내과 조교수"
      ,career5:"2022년 3월 - 현재 울산대학교 의과대학 내과학교실 감염내과 부교수"
     }
  ],

  "암센터": [
    { id: 6, name: "유암이", department:"암센터", intro: "대장암, 직장암, 항암약물치료(유방암,부인암)", image: "/docImg/doc3.jpg"
      ,graduation1:"연세대학교 의과대학 의학과 학사 (2002)"
      ,graduation2:"연세대학교 의과대학 의학과 석사 (2011)"
      ,graduation3:"연세대학교 의과대학 의학과 박사과정 중 (2014-)"
      ,career1:"2005.03-2011.02 세브란스병원 인턴, 레지던트 수료"
      ,career2:"2011.03-2012.11 세브란스병원 종양내과 임상강사"
      ,career3:"2012.12-2014.01 삼성 바이오에피스 의학부 부장"
      ,career4:"2014.03-2018.02 연세암병원 종양내과 임상조교수"
      ,career5:"2018.03-현 재 울산의대 내과학교실 종양내과 진료교수"
     },

    { id: 7, name: "황암이", department:"암센터", intro: "위암, 육종, 항암약물치료(폐암,두경부암,식도암)", image: "/docImg/doc3_1.jpg"
      ,graduation1:"2003-2009 울산대학교 의과대학 학사"
      ,graduation2:"2012-2014 울산대학교 대학원 의학과 석사"
      ,graduation3:"2014-2017 카이스트 의과학대학원 박사"
      ,career1:"2009-2010 세브란스병원 인턴"
      ,career2:"2010-2014 세브란스병원 내과학교실 전공의"
      ,career3:"2017-2018 카이스트 자연과학연구소 연수연구원"
      ,career4:"2018-2019 울산의대 내과학교실 종양내과 강사"
      ,career5:"2020 - 현재 울산의대 내과학교실 종양내과 임상조교수"
     }
  ],


  "비뇨의학과": [
    { id: 8, name: "김비뇨", department:"비뇨의학과", intro: "신경인성방광,방광암,요실금,전립선암", image: "/docImg/doc4.jpg"
      ,graduation1: "1999.03-2003.02 울산대학교 의과대학 학사"
      ,graduation2: "2009.03-2011.02 울산대학교 대학원 의학과 석사"
      ,graduation3: "2011.03-2013.08 울산대학교 대학원 의학과 박사"
      ,career1: "2003.03-2004.02 인턴, 울산대학교 아산병원"
      ,career2: "2004.03-2008.02 레지던트, 울산대학교 영동 세브란스병원"
      ,career3: "2008.03-2010.02 강사, 울산대학교 의과대학 비뇨기과학 교실(강남세브란스)"
      ,career4: "2014.03-2018.02 조교수, 울산대학교 의과대학 비뇨기과학교실(세브란스병원)"
      ,career5: "2023.03-현재 교수, 울산대학교 의과대학 비뇨의학교실(세브란스병원)"
     },

    { id: 9, name: "이뇨기", department:"비뇨의학과", intro: "비뇨기종양,신장암,신우요관암", image: "/docImg/doc4_1.jpg"
      ,graduation1:"이화여자대학교 약학대학 약학사"
      ,graduation2:"경희대학교 의학전문대학원 의무석사"
      ,graduation3:"경희대학교 의과대학 의학박사"
      ,career1:"울산대학교 의과대학 약리학교실 조교 (신경약리)"
      ,career2:"독일 뮌헨 공대 부속 심장센터 연수 (Brain Korea 21)"
      ,career3:"울산대학교 의과대학 비뇨의학교실 강사 (소아 배뇨장애)"
      ,career4:"울산대학교 의과대학 비뇨의학교실 임상연구조교수 (성인 배뇨장애)"
      ,career5:"(현) 울산대학교 의과대학 비뇨의학교실 진료교수 (성인 배뇨장애)"
     }
  ],


  "소아과": [
    { id: 10, name: "윤소아", department:"소아과", intro: "소아신경외과, 소아 뇌종양, 수두", image: "/docImg/doc5.jpg"
      ,graduation1:""
      ,graduation2:""
      ,graduation3:""
      ,career1:""
      ,career2:""
      ,career3:""
      ,career4:""
      ,career5:""
     },

    { id: 11, name: "정소아", department:"소아과", intro: "소아 구순구개열 및 선천성 안면 기형", image: "/docImg/doc5_1.jpg"
      ,graduation1:"울산대학교 언더우드국제대학 생명공학과학부 학사 (2012)"
      ,graduation2:"울산대학교 의학전문대학원 의무석사 (2016)"
      ,graduation3:"울산대학교 의학과 박사과정중"
      ,career1:"2018 아산병원 인턴 수료"
      ,career2:"2022 아산병원 소아청소년과 전공의 수료"
      ,career3:"2022-2023 울산대학교 의과대학 소아과학교실 소아감염면역과 강사"
      ,career4:"2024- 아산병원 어린이병원 소아감염면역과 진료교수"
     }
  ],


  "심장병원": [
    { id: 12, name: "장심장", department:"심장병원", intro: "대동맥질환, 말초혈관질환, 협심증,부정맥,판막질환", image: "/docImg/doc6.jpg"
      ,graduation1:"독일 본대학 의과대학 의학사 (1992)"
      ,graduation2:"독일 본대학 의과대학 의학박사 (1994)"
      ,career1:"1996-1997 연세의대 내과학교실 Intern수료"
      ,career2:"1997-2001 연세의대 내과학교실 Resident수료"
      ,career3:"2001-2003 연세의대 내과학교실 심장내과 Fellow수료"
      ,career4:"2003-2005 연세의대 내과학교실 심장내과 전임강사"
      ,career5:"2006-2008 미국 Duke 대학 방문연구"
      ,career6:"2009-2013 연세의대 내과학교실 심장내과 부교수"
      ,career7:"2014-현재 연세의대 내과학교실 심장내과 교수"
     }
  ]
};

export default doctors;
