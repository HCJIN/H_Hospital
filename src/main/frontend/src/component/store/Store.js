import React, { useEffect, useState } from 'react';
import '../../css/store.css';
import axios from 'axios';

const Store = () => {
  const [content, setContent] = useState('A'); // 카테고리 상태
  const [itemList, setItemList] = useState([]); // 상품 목록 상태
  const [itemCnt, setItemCnt] = useState(1); // 품목 수량 상태
  const memNum = JSON.parse(window.sessionStorage.getItem('loginInfo')).memNum; // 로그인한 회원 정보

  // 발주 목록을 저장할 변수
  const [cartList, setCartList] = useState([]);

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  // 제목줄 체크박스의 체크여부를 저장하고 있는 state 변수
  const [allChecked, setAllChecked] = useState(true);

  // 선택삭제에 들어갈 cartCode를 담을 배열
  const selectedCartCodes = [];

  // 선택 삭제
  function selectDelete() {
    checkItems.forEach((isChecked, index) => {
      if (isChecked && cartList[index]) {
        const cartCode = cartList[index].cartCode;
        selectedCartCodes.push(cartCode);
      }
    });
    console.log(selectedCartCodes);
  }

  // 카테고리별 목록 조회
  const filteredItems = itemList.filter(item => {
    if (content === 'A') return true;
    return item.category === content;
  });

  // 제목줄의 체크박스 변경 시 실행되는 함수
  function changeChkAll() {
    setAllChecked(!allChecked);
    const newCheckItems = Array(cartList.length).fill(!allChecked);
    setCheckItems(newCheckItems);
  }

  useEffect(() => {
    // cartList가 업데이트되면 checkItems를 초기화
    setCheckItems(Array(cartList.length).fill(false));
    setAllChecked(false);
  }, [cartList]);

  useEffect(() => {
    const allCheckedState = checkItems.every((item) => item);
    setAllChecked(allCheckedState);
  }, [checkItems]);

  const fatchCartList = () => {
    axios.get(`/cart/getCartList/${memNum}`)
      .then((res) => {
        console.log(res.data);
        setCartList(res.data);
      })
      .catch((error) => {
        alert('발주목록 조회 오류🤢🛒');
        console.log(error);
      });
  };

  // 발주목록 조회
  useEffect(() => {
    fatchCartList();
  }, [memNum]);

  // 상품 목록 조회
  useEffect(() => {
    axios.get('/item/getItemList')
      .then((res) => {
        setItemList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // 수량 변경 시 처리
  const handleItemCntChange = (index, newCnt) => {
    setCartList(prevCartList =>
      prevCartList.map((cart, i) =>
        i === index ? { ...cart, cartCnt: newCnt } : cart
      )
    );
  };

  console.log(cartList);

  function cntUpdate(cartCode, cartCnt) {
    const updateData = {
      cartCode: cartCode,
      cartCnt: cartCnt
    };
    axios
      .post(`/cart/updateCart`, updateData)
      .then((res) => {
        alert('수량이 수정되었습니다.');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // 추가 버튼 클릭 시, 선택된 상품 데이터를 서버로 전송
  function handleAddToCart(item) {
    const insertCartData = {
      itemCode: item.itemCode,
      cartCnt: 1, // 선택한 수량
      memNum: memNum, // 로그인된 회원번호
      itemName: item.itemName,
      itemPrice: item.itemPrice,
      itemImage: item.imgList[0]?.attachedFileName // 첫 번째 이미지
    };

    // 서버로 POST 요청 보내기
    axios.post('/cart/insert', insertCartData)
      .then((res) => {
        alert('상품이 장바구니에 추가되었습니다.');
        fatchCartList();
      })
      .catch((error) => {
        console.log(error);
        alert('장바구니 추가 중 오류 발생');
      });
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 2자리로 포맷
    const day = String(date.getDate()).padStart(2, '0'); // 일을 2자리로 포맷
    return `${year}-${month}-${day}`;
  };

  return (
    <div className='store-div'>
      <div className='store-bg'>
        <img src='http://localhost:8080/images/sub_visual_product.jpg' alt="store background" />
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
                <input
                  type='checkbox'
                  className='checkboxAll'
                  onChange={() => {changeChkAll()}}
                  checked={allChecked}
                ></input>
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
            {
              cartList.map((cart, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <p>{cart.cartCode}</p>
                    </td>
                    <td>
                      <input 
                        type='checkbox' 
                        onChange={()=>{
                          const copyChks = [...checkItems]
                          copyChks[i] = !copyChks[i];
                          setCheckItems(copyChks)
                        }}
                        checked={checkItems[i] || false} // 개별 선택 상태를 반영
                      ></input>
                    </td>
                    <td>
                      <p>{cart.itemVO.itemName}</p>
                    </td>
                    <td>
                      <input type='number'
                        value={cart.cartCnt || 1}
                        onChange={(e) => handleItemCntChange(i, Number(e.target.value))}
                        min='1'
                      ></input>
                      <button type='button' onClick={() => {
                        cntUpdate(cart.cartCode, cart.cartCnt);
                      }}>확인</button>
                    </td>
                    <td>
                      <p>{formatDate(cart.cartDate)}</p>
                    </td>
                    <td>
                      <span>{cart.cartStatus}</span>
                      <button type='button' className='supliierBtn'>삭제</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className='suplierBtn-div'>
          <button type='button' className='supliierBtn'>발주요청</button>
          <button type='button' className='supliierBtn' onClick={selectDelete}>선택삭제</button>
        </div>
      </div>
      <div className='store-icon-div'>
        <div>
          <i className="bi bi-bag-plus"></i>
          <button type='button' onClick={() => setContent('A')} className={`button ${content === 'A' ? 'active' : ''}`}>전체</button>
        </div>
        <div>
          <i className="bi bi-capsule"></i>
          <button type='button' onClick={() => setContent('B')} className={`button ${content === 'B' ? 'active' : ''}`}>전문의약품</button>
        </div>
        <div>
          <i className="bi bi-scissors"></i>
          <button type='button' onClick={() => setContent('C')} className={`button ${content === 'C' ? 'active' : ''}`}>수술관련기기</button>
        </div>
        <div>
          <i className="bi bi-virus"></i>
          <button type='button' onClick={() => setContent('D')} className={`button ${content === 'D' ? 'active' : ''}`}>멸균기</button>
        </div>
        <div>
          <i className="bi bi-heart-pulse-fill"></i>
          <button type='button' onClick={() => setContent('E')} className={`button ${content === 'E' ? 'active' : ''}`}>폐활량계,심전계</button>
        </div>
      </div>

      <div className='item-list-box'>
        {filteredItems.map((item, i) => {
          const price = item.itemPrice.toLocaleString('ko-KR', {
            style: 'currency',
            currency: 'KRW'
          });

          return (
            <div key={i} className='item-list'>
              <img src={`http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}`} alt={item.itemName} />
              <h4>{item.itemName}</h4>
              <p>{item.itemIntro}</p>
              <p>{price}</p>
              <button type='button' onClick={() => handleAddToCart(item)}>장바구니 추가</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
