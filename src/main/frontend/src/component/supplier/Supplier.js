import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/supplier.css';
import QuantityInput from './QuantityInput';

const Supplier = () => {
  const navigate = useNavigate();

  // 이미지 첨부파일을 저장할 state 변수
  const [mainImg, setMainImg] = useState(null);
  const [subImg, setSubImg] = useState(null);

  // 상품목록을 저장할 state 변수
  const [itemList, setItemList] = useState([]);

  // 카테고리 목록을 저장할 state 변수
  const [categoryList, setCategoryList] = useState([]);

  // 상품 등록 시 가져갈 데이터를 저장할 state 변수
  const [insertItemData, setInsertItemData] = useState({
    cateCode: 1, // 기본값 설정
    itemName: '',
    itemPrice: '',
    itemIntro: '',
    itemStock: ''
  });

  // 자바에서 카테고리 목록 데이터 가져오기
  useEffect(() => {
    axios
      .get('/item/getCateList')
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 자바에서 상품목록리스트 가져오기
  useEffect(() => {
    axios
      .get('/item/getItemList')
      .then((res) => {
        console.log(res.data);
        setItemList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // input 태그에 새로 입력하는 값 객체에 저장
  function changeInsertItemData(e) {
    const { name, value } = e.target;

    // 숫자 필드인 경우 숫자로 변환해서 저장
    if (name === 'itemPrice' || name === 'cateCode') {
      const parsedValue = parseInt(value);  // 숫자로 변환 시도
      setInsertItemData({
        ...insertItemData,
        [name]: isNaN(parsedValue) ? '' : parsedValue,  // 숫자가 아니면 빈 문자열로 설정
      });
    } else {
      setInsertItemData({
        ...insertItemData,
        [name]: value,  // 문자열 필드 처리
      });
    }
  }

  console.log(insertItemData);

  // 상품등록 버튼 클릭!!
  function insertItem() {
    // 첨부파일이 있을 때 설정해야 하는 코드
    const fileConfig = { headers: { 'Content-Type': 'multipart/form-data' } };

    // form 객체 생성
    const itemForm = new FormData();

    // form 객체에 데이터 추가
    itemForm.append('itemName', insertItemData.itemName || '');  // 기본값 설정
    itemForm.append('itemPrice', insertItemData.itemPrice || 0);  // 기본값 설정
    itemForm.append('itemIntro', insertItemData.itemIntro || '');
    itemForm.append('cateCode', insertItemData.cateCode || 1);  // 기본값 설정
    itemForm.append('mainImg', mainImg);
    itemForm.append('subImg', subImg);

    // 데이터를 가진 form 객체를 axios 통신으로 자바로 전달
    axios
      .post(`/item/insertItem`, itemForm, fileConfig)
      .then((res) => {
        alert('등록이 완료되었습니다.');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='supplier-div'>
      <div className='supplier-box'>
        <div className='main-box'>
          <div className='store-list'>
            <h2>발주요청 리스트</h2>
            <div className='ordering-table-div'>
              <table className='ordering-table'>
                <thead className='ordering-thead'>
                  <tr>
                    <td><p>번호</p></td>
                    <td><p>제품</p></td>
                    <td><p>수량</p></td>
                    <td><p>주문일시</p></td>
                    <td><p>상태</p></td>
                  </tr>
                </thead>
                <tbody className='ordering-tbody'>
                  <tr>
                    <td>1</td>
                    <td>인공눈물</td>
                    <td>
                      <input type='text' className='upDownBtn'></input>
                      <button type='button' className='btn btn-Subprimary'>확인</button>
                    </td>
                    <td><p>2024-09-20</p></td>
                    <td>
                      <span>제품출하</span>
                      <button type='button' className='btn btn-Subprimary'>출하</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='list-div'>
            <div className='regItem-div'>
              <table className='regItem-table'>
                <tbody>
                  <tr><td className='title'>상품 카테고리</td></tr>
                  <tr>
                    <td>
                      <select name='cateCode' onChange={changeInsertItemData}>
                        {categoryList.map((category, i) => (
                          <option key={i} value={category.cateCode}>
                            {category.cateName}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                  <tr><td className='title'>상품명</td></tr>
                  <tr>
                    <td>
                      <input type='text' name='itemName' className='form-control' onChange={changeInsertItemData}></input>
                    </td>
                  </tr>
                  <tr><td className='title'>상품 가격</td></tr>
                  <tr>
                    <td>
                      <input type='text' name='itemPrice' className='form-control' onChange={changeInsertItemData}></input>
                    </td>
                  </tr>
                  <tr><td className='title'>상품 소개</td></tr>
                  <tr>
                    <td>
                      <textarea name='itemIntro' className='form-control' rows={7} onChange={changeInsertItemData}></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='file-div'>
                <input type='file' onChange={(e) => setMainImg(e.target.files[0])} />
              </div>
              <div className='file-div'>
                <input type='file' onChange={(e) => setSubImg(e.target.files[0])} />
              </div>
              <div className='btn-div'>
                <button type='button' className='btn btn-primary' onClick={insertItem}>
                  제품등록
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='storeMenu'>
          <div className='title-bg'>
            <h2>상품리스트</h2>
          </div>

          <div className='item-div-box'>
            {itemList.map((item, i) => {
              const money = item.itemPrice;
              const price = money.toLocaleString('ko-KR', {
                style: 'currency',
                currency: 'KRW' // 한국 원화
              });
              return (
                <div className='item-div' key={i}>
                  <img src={`http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}`} />
                  <div>
                    <h4>{item.itemName}</h4>
                    <p>{price}</p>
                    <div> {/* <p> 태그 대신 <div>로 변경 */}
                      재고수량
                      <QuantityInput 
                        stock={item.itemStock}
                        setItemList={setItemList}
                        itemIndex={i}
                        itemList={itemList}
                        itemCode={item.itemCode}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supplier;
