import React from 'react'

const Supplier = () => {
  return (
    <div className='supplier-div'>
      <div className='store-list'>
        <h2>발주요청 리스트</h2>
        <div className='ordering-table-div'>
          <table className='ordering-table'>
          <thead className='ordering-thead'>
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
          <tbody className='ordering-tbody'>
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
                <p>제품출하</p>
              </td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Supplier