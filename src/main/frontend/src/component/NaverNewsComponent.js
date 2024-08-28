import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NaverNewsComponent = ({ onNewsData }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/naver-api/v1/search/news.json', {
          params: {
            query: '건강', // 원하는 검색어를 입력
            display: 4, // 가져올 뉴스 기사 개수
          },
          headers: {
            'X-Naver-Client-Id': 'gwzlif6A6eM3KzG163uJ',
            'X-Naver-Client-Secret': '8LD7pqZWae',
          },
        });

        // 뉴스 제목과 날짜만 추출
        const newsData = response.data.items.map(article => {
          // HTML 엔티티를 일반 텍스트로 변환
          const decodeHtml = html => {
            const txt = document.createElement('textarea');
            txt.innerHTML = html;
            return txt.value;
          };

          // 날짜를 YYYY-MM-DD 형식으로 변환
          const formattedDate = new Date(article.pubDate).toISOString().split('T')[0];

          return {
            title: decodeHtml(article.title),
            date: formattedDate,
          };
        });

        setArticles(newsData); // API 응답 데이터를 상태로 저장
        if (onNewsData) onNewsData(newsData); // 부모 컴포넌트에 뉴스 데이터 전달
      } catch (error) {
        console.error('Error fetching news', error);
      }
    };

    fetchNews(); // 초기 데이터 fetch

    // 1시간마다 데이터 갱신
    const intervalId = setInterval(fetchNews, 3600000);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정리
  }, []); // 빈 배열로 설정하여 컴포넌트가 처음 마운트될 때만 실행되도록 함

  return null; // 데이터는 부모 컴포넌트로 전달되므로 렌더링하지 않음
};

export default NaverNewsComponent;
