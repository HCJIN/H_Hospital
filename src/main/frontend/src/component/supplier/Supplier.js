import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/supplier.css';
import QuantityInput from './QuantityInput';
import ItemDetail from './ItemDetail';

const Supplier = () => {
  const navigate = useNavigate();

  //총액
  const [totalPrice, setTotalPrice] = useState(0);

  //발주요청 리스트
  const [cartList, setCartList] = useState([]);

  //선택된 아이템
  const [selectedItem, setSelectedItem] = useState(null);

  //상세보기 페이지
  const [show, setShow] = useState(false);

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
    itemStock: '',
    itemBrand: ''
  });

  // State 추가: 페이지 번호와 페이지당 표시할 아이템 개수 설정
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);  // 한 페이지에 표시할 발주 요청 수
  const [totalPages, setTotalPages] = useState(0);

  const fetchCartList = () => {
    Promise.all([
      axios.get(`/cart/getCartListAll?page=${currentPage}&limit=${itemsPerPage}`),
      axios.get('/item/getItemAllList')
    ])
      .then(([cartResponse, itemResponse]) => {
        console.log(cartResponse.data);
        console.log(itemResponse.data);
        setCartList(cartResponse.data.cartList);
        setTotalPages(cartResponse.data.totalPages);
        setItemList(itemResponse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if(currentPage > 0){
      fetchCartList();
    }
  }, [currentPage, itemsPerPage]);

  // 페이지 변경 핸들러
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);  // 클릭한 페이지로 변경
  }

  // 페이지네이션 컴포넌트
  const Pagination = () => {
    const pageNumbers = [];
    for(let i = 1; i <= totalPages; i++){
      pageNumbers.push(i);
    }
    return(
      <div className='pagination-div'>
        <ul className="pagination" style={{display:"flex"}}>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <button onClick={() => handlePageChange(number)} className="btn btn-Subprimary">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  //자바에서 카테고리 목록 데이터 가져오기
  useEffect(() => {
    axios
      .get('/item/getAllItems')
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //수량 수정
  function cntChange(e, index){
    const updateCartList = [...cartList]; //cartList 배열을 복사
    const updateItemList = [...itemList]; //itemList 배열을 복사

    //변경할 수량 값
    const newCartCnt = parseInt(e.target.value, 10);

    //cartList의 itemCode와 일치하는 itemList의 항목을 찾아 재고 확인
    const matchedItem = updateItemList.find(item => {
      console.log('Checking item codes:', item.itemCode, cartList[index].itemVO.itemCode);
      return item.itemCode === cartList[index].itemVO.itemCode;
    });

    //재고 수량 확인
    if(matchedItem && newCartCnt > matchedItem.itemStock){
      alert('재고수량이 부족합니다.');
      return
    }

    updateCartList[index] = {
      ...updateCartList[index], //해당 인덱스의 항목을 복사
      cartCnt : newCartCnt  //새로운 수량으로 업데이트
    };
    setCartList(updateCartList);
  }

  //수량 업데이트
  function cntUpdate(cartCode, cartCnt) {
    console.log(cartCode, cartCnt)

    const updateData = {
      cartCode: cartCode,
      cartCnt: cartCnt
    };
    axios.post(`/cart/updateCart`, updateData)
    .then((res)=>{
      alert('수량이 수정되었습니다.');
      fetchCartList();
    })
    .catch((error)=>{
      console.log(error)
    })
  }

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
    itemForm.append('itemBrand', insertItemData.itemBrand || '');  // 기본값 설정
    itemForm.append('mainImg', mainImg);
    itemForm.append('subImg', subImg);

    // 데이터를 가진 form 객체를 axios 통신으로 자바로 전달
    axios
    .post(`/item/insertItem`, itemForm, fileConfig)
    .then((res) => {
      alert('등록이 완료되었습니다.');
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  //날짜 년월일만 출력
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 2자리로 포맷
    const day = String(date.getDate()).padStart(2, '0'); // 일을 2자리로 포맷
    return `${year}-${month}-${day}`;
  };

  //제품 출하버튼 클릭시
  function goShipment(cart){

    const shipmentData = {
      cartCode : cart.cartCode,
      cartCnt : cart.cartCnt
    }

    axios
    .post('/cart/goShipment', shipmentData)
    .then((res)=>{
      alert('제품 출하가 완료되었습니다.');

      // itemList에서 해당 제품의 재고 수량 업데이트
      setItemList((prevItemList) => 
        prevItemList.map((item) => 
          item.itemCode === cart.itemVO.itemCode 
            ? { ...item, itemStock: item.itemStock - cart.cartCnt } 
            : item
        )
      );

      fetchCartList();
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // 취소 버튼 클릭 시
  function cancelItem(cart){
    const shipmentData = {
      cartCode : cart.cartCode,
      cartCnt : cart.cartCnt
    }

    axios.put('/cart/cancelItem', shipmentData)
    .then((res) => {
      alert('발주요청이 취소되었습니다.')

      fetchCartList();

    })
    .catch((error) => {console.log(error)})
  }

  // 체크 박스
  const [checkItems, setCheckItems] = useState([]);
  const [allChecked, setAllChecked] = useState(false);

  // 전체 선택 체크박스 핸들러
  function checkAll(e) {
    const checked = e.target.checked;
    setAllChecked(checked);
    
    if (checked) {
      // 전체 항목의 cartCode를 checkItems에 추가
      const allCartCodes = cartList.map(item => item.cartCode);
      setCheckItems(allCartCodes);
    } else {
      // checkItems 비우기
      setCheckItems([]);
    }
  }

  // 개별 체크박스 핸들러
  function handleSingleCheck(checked, cartCode) {
    if (checked) {
      // 체크된 항목 추가
      setCheckItems(prev => [...prev, cartCode]);
    } else {
      // 체크 해제된 항목 제거
      setCheckItems(prev => prev.filter(item => item !== cartCode));
    }
  }

  //선택된 제품이 변경될 때 마다 총액 업데이트
  useEffect(()=>{
    updateTotalPrice();
  },[checkItems, cartList]);

  //선택된 제품의 총액
  const updateTotalPrice = ()=>{
    const total = cartList.reduce((acc, cart) => {
      if (checkItems.includes(cart.cartCode)) { 
        return acc + (cart.cartCnt * cart.itemVO.itemPrice);
      }
      return acc; 
    }, 0);
    
    setTotalPrice(total);
  }


  console.log(cartList)

  return (
    <div className='supplier-div'>
      {
        show ? 
        <ItemDetail show={show} setShow={setShow} item={selectedItem}/>
        :
        <></>
      }
      <div className='supplier-box'>
        <div className='main-box'>
          <div className='store-list'>
            <h2>발주요청 리스트</h2>
            <div className='ordering-table-div'>
              <table className='ordering-table'>
                <thead className='ordering-thead'>
                  <tr>
                    <td><input type='checkbox' checked={allChecked} onChange={(e) => {checkAll(e)}} /></td>
                    <td><p>제품</p></td>
                    <td><p>수량</p></td>
                    <td><p>주문일시</p></td>
                    <td><p>가격</p></td>
                    <td><p>상태</p></td>
                  </tr>
                </thead>
                <tbody className='ordering-tbody'>
                  {cartList.map((cart, i) => (
                    <tr key={i}>
                      <td>
                        <input type='checkbox' checked={checkItems.includes(cart.cartCode)} onClick={(e) => { handleSingleCheck(e.target.checked, cart.cartCode) }} />
                      </td>
                      <td>{(cart.itemVO.itemName).toString()}</td>
                      <td>
                        <input type='number' id='cntBtn' min='1' value={cart.cartCnt} onChange={(e) => { cntChange(e, i) }} />
                        <button type='button' className='btn btn-Subprimary' onClick={() => { cntUpdate(cart.cartCode, cart.cartCnt) }}>확인</button>
                      </td>
                      <td>{formatDate(cart.cartDate)}</td>
                      <td>{
                      (cart.itemVO.itemPrice*cart.cartCnt).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</td>
                      <td>
                        {cart.cartStatus}
                        {
                          cart.cartStatus !== '발주요청' ? 
                          <></> : 
                          <>
                            <button type='button' className='btn btn-Subprimary' onClick={() => { goShipment(cart) }}>출하</button>
                            <button type='button' className='btn btn-Subprimary' onClick={() => { cancelItem(cart) }}>취소</button>
                          </>
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
              총액 : {totalPrice.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}
              </p>
              <Pagination />
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
                  <tr><td className='title'>제조사명</td></tr>
                  <tr>
                    <td>
                      <input 
                        type='text' 
                        name='itemBrand'
                        className='form-control' 
                        value={insertItemData.itemBrand}
                        onChange={changeInsertItemData}></input>
                    </td>
                  </tr>
                  <tr><td className='title'>상품명</td></tr>
                  <tr>
                    <td>
                      <input
                        type='text'
                        name='itemName'
                        className='form-control'
                        value={insertItemData.itemName} // 상태와 연동
                        onChange={changeInsertItemData}
                      />
                    </td>
                  </tr>
                  <tr><td className='title'>상품 가격</td></tr>
                  <tr>
                    <td>
                      <input
                        type='text'
                        name='itemPrice'
                        className='form-control'
                        value={insertItemData.itemPrice} // 상태와 연동
                        onChange={changeInsertItemData}
                      />
                    </td>
                  </tr>
                  <tr><td className='title'>상품 소개</td></tr>
                  <tr>
                    <td>
                      <textarea
                        name='itemIntro'
                        className='form-control'
                        rows={7}
                        value={insertItemData.itemIntro} // 상태와 연동
                        onChange={changeInsertItemData}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='file-div'>
                <p>메인 이미지</p>
                <input type='file' onChange={(e) => setMainImg(e.target.files[0])} />
              </div>
              <div className='file-div'>
                <p>상세 이미지</p>
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
                    <h4 className='product-name'>{item.itemName}</h4>
                    <p>{price}</p>
                    <p className='itemDetail' onClick={()=>{
                      setSelectedItem(item);
                      setShow(true);
                    }}
                    >상세보기</p>
                    <div style={{textAlign: 'center'}}> {/* <p> 태그 대신 <div>로 변경 */}
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
