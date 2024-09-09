import React, { useState } from 'react';
import '../css/FindDoctor.css';

const FindDoctor = () => {
  const doctors = {
    "가정의학과": [
      { id: 1, name: "최가정", intro: "대사증후군, 건강증진, 노인의학", image: "/docImg/doc1.jpg" },
      { id: 2, name: "박가정", intro: "만성피로, 장기 암생존자", image: "/docImg/doc1_1.jpg" }
    ],
    "감염내과": [
      { id: 3, name: "김감내", intro: "감염질환, 발열질환", image:"/docImg/doc2.jpg" },
      { id: 4, name: "이감내", intro: "감염질환, 에이즈", image: "/docImg/doc2_1.jpg" },
      { id: 5, name: "윤감내", intro: "감염질환, 말라리아, 뎅기열등열대풍토병", image: "/docImg/doc2_2.jpg" }
    ],
    "대장암센터": [
      { id: 6, name: "유대장", intro: "대장암, 직장암, 진단내시경(위/대장)", image: "/docImg/doc3.jpg" },
      { id: 7, name: "황대장", intro: "대장암, 직장암, 탈장", image: "/docImg/doc3_1.jpg" }
    ],
    "간암센터":[
      { id: 8, name: "김간이", intro: "간암, 간문부암, 담도암", image: "/docImg/doc4.jpg" },
      { id: 9, name: "이암이", intro: "간이식, 간암, 간경변", image: "/docImg/doc4_1.jpg" }
    ],
    "소아과":[
      { id: 10, name: "윤소아", intro: "소아신경외과, 소아 뇌종양, 수두", image: "/docImg/doc5.jpg" },
      { id: 11, name: "정소아", intro: "소아 구순구개열 및 선천성 안면 기형", image: "/docImg/doc5_1.jpg" }
    ],
    "심장병원":[
      { id: 12, name: "장심장", intro: "대동맥질환, 말초혈관질환, 폐색", image: "/docImg/doc6.jpg" },
    ]
  };

  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleDepartmentChange = (event) => {
    const department = event.target.value;
    setSelectedDepartment(department);
    setFilteredDoctors(doctors[department] || []);
  };

  return (
    <div className='find-div'>
      <div>
        <div className='find-title-select'>
          <h2>의료진찾기</h2>
          <select onChange={handleDepartmentChange}>
            <option value="">진료과를 선택하세요</option>
            <option value="가정의학과">가정의학과</option>
            <option value="감염내과">감염내과</option>
            <option value="대장암센터">대장암센터</option>
            <option value="간암센터">간암센터</option>
            <option value="소아과">소아과</option>
            <option value="심장병원">심장병원</option>
          </select>
        </div>
        <div className='info-container'>
          {selectedDepartment === '' ? (
            <div className='searchInfo'>
                <i class="bi bi-search-heart"></i>
                <span>
                  <p> 진료과.클리닉.센터에 속한 의료진을 빠르게 찾으실 수 있습니다.</p>
                  <p>의료진 찾기는 <span>진료과 선택</span>으로 가능합니다.</p>
                </span>
            </div>
          ) : (
            <div className='doctor-container'>
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className='doctor-card'>
                  <div className='doctor-image-container'>
                    <img src={doctor.image} className='doctor-image' alt={`${doctor.name}'s image`} />
                  </div>
                  <div className='doctor-details'>
                    <h4 className='doctor-name'>{doctor.name}</h4>
                    <p className='doctor-intro'>{doctor.intro}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindDoctor;
