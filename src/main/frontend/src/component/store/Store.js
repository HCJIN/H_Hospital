import React from 'react'
import '../../css/store.css';

const Store = () => {
  return (
    <div className='store-div'>
      <div className='store-bg'>
        <img src='http://localhost:8080/images/sub_visual_product.jpg'></img>
        <div className='text-div'>
          <p>울산메티컬몰</p>
          <span>끊임없는 변화 혁신으로 도약</span>
        </div>
      </div>
      <div className='store-table-div'>
        <table className='store-table'>
          <thead className='store-thead'>
            <tr>
              <td>
                <p>번호</p>
              </td>
              <td>
                <p>제품</p>
              </td>
              <td>
                <p>수량</p>
              </td>
              <td>
                <p>주문일시</p>
              </td>
              <td>
                <p>상태</p>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>인공눈물</td>
              <td>
                <input type='number'></input>
                <button type='button'>확인</button>
              </td>
              <td>
                <p>2024-09-20</p>
              </td>
              <td>
                <p>발주등록</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='store-icon-div'>
        <div>
          <i className="bi bi-bag-plus"></i>
          <span>전체</span>
        </div>
        <div>
          <i class="bi bi-capsule"></i>
          <span>전문의약품</span>
        </div>
        <div>
          <i className="bi bi-scissors"></i>
          <span>수술관련기기</span>
        </div>
        <div>
          <i className="bi bi-virus"></i>
          <span>멸균기</span>
        </div>
        <div>
          <i className="bi bi-heart-pulse-fill"></i>
          <span>폐활량계,심전계</span>
        </div>
      </div>
    </div>
  )
}

export default Store