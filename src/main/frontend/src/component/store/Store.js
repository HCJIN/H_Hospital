import React, { useEffect, useState } from 'react';
import '../../css/store.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Store = () => {
  const [category, setCategory] = useState(1); // 카테고리 상태
  const [itemList, setItemList] = useState([]); // 상품 목록 상태
  const [itemCnt, setItemCnt] = useState(1); // 품목 수량 상태
  //검색 조건을 저장할 변수
  const [searchData, setSearchData] = useState({
    searchType : 'ITEM_NAME',
    searchValue : ''
  })
  console.log(searchData)
  const memNum = JSON.parse(window.sessionStorage.getItem('loginInfo')).memNum; // 로그인한 회원 정보

  // 발주 목록을 저장할 변수
  const [cartList, setCartList] = useState([]);

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);
  console.log(checkItems)
  // 제목줄 체크박스의 체크여부를 저장하고 있는 state 변수
  const [allChecked, setAllChecked] = useState(true);

  // 선택삭제에 들어갈 cartCode를 담을 배열
  const selectedCartCodes = [];

  // 선택 삭제
  function selectDelete() {
    const selectedCartCodes = checkItems.map((isChecked, index)=>
      isChecked ? cartList[index].cartCode : null
    ).filter(cartCode => cartCode !== null); //null이 아닌 것만 필터링

    if(selectedCartCodes.length === 0){
      alert('삭제할 항목을 선택해 주세요.');
      return;
    }

    //모든 선택된 cartCode에 대해 goDelete 호출
    const deletePromises = selectedCartCodes.map(cartCode => goDelete(cartCode));

    Promise.all(deletePromises)
        .then(() => {
            alert('선택된 항목이 삭제되었습니다.'); // 삭제 완료 알림
            fatchCartList(); // 목록 새로 고침
        })
        .catch((error) => {
            console.error('삭제 중 오류 발생:', error);
        });
  }

  //삭제버튼 클릭시 delete
  function goDelete(cateCode){
    axios
    .delete(`/cart/cartDelete/${cateCode}`)
    .then(() => {
        console.log(`삭제 완료: ${cateCode}`); // 삭제 완료 메시지 (필요 시)
        fatchCartList();
    })
    .catch((error) => {
        console.error('삭제 중 오류 발생:', error);
    });
  }

  //서치데이터가 변경될때 
  function changeSearchData(e){
    setSearchData({
      ...searchData,
      [e.target.name] : e.target.value
    })
  }

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

  //서치 실행
  function search(){
    axios
    .post('/cart/searchCartList', {...searchData, memNum : memNum})
    .then((res)=>{
      console.log(res.data)
      setCartList(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  // 카테고리별 목록 조회
  // // 카테고리별 목록 조회
  // const filteredItems = itemList.filter(item => {
  //   if (content === 'A') return true;
  //   return item.category === content;
  // });

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

  // 발주목록 조회
  useEffect(() => {
    fatchCartList();
  }, [memNum]);

  // 카테고리별 상품 목록 조회
  useEffect(() => {
    axios.get('/item/getItemList')
      .then((res) => {
        console.log(res.data)
        setItemList(res.data);
        console.log('Item list:', res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    // const fetchItemsByCategory = () => {
    //   axios.get(`/item/getItemsByCategory/${category}`)
    //     .then((res) => {
    //       setItemList(res.data);
    //       console.log('Item list:', res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };

    const fetchItemsByCategory = () => {
      axios.get(`/item/getItemsByCategory/${category}`)
        .then((res) => {
          setItemList(res.data);
          console.log('Item list:', res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    fetchItemsByCategory();
  // }, [category];

  // // 카테고리별 상품 목록 조회
  // useEffect(() => {
  //   const fetchItemsByCategory = () => {
  //     axios.get(`/item/getItemsByCategory/${category}`)
  //       .then((res) => {
  //         setItemList(res.data);
  //         console.log('Item list:', res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  
  //   fetchItemsByCategory();
  // }, [category]);

  // const fetchAllItems =()=>{
  //   axios.get('item/getAllItems') //이 부분 나중에 수정하기
  //   .then((res)=>{
  //     setItemList(res.data);
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  // }
  

  // 카테고리 버튼 클릭 시 호출되는 함수
  const handleCategoryChange = (code) => {
    setCategory(code); 
    if (code === 1){
      fetchAllItems();
    }else{
      // fetchItemsByCategory(code);
    }
  };

//   // 카테고리 버튼 클릭 시 호출되는 함수
//   const handleCategoryChange = (code) => {
//     setCategory(code); 
//     if (code === 1){
//       fetchAllItems();
//     }else{
//       // fetchItemsByCategory(code);
//     }
// };


  // 수량 변경 시 처리
  const handleItemCntChange = (index, newCnt) => {

    const selectedItem = cartList[index];
    console.log(cartList[index])

    //상품 재고를 초과하는지 확인
    const matchedItem = itemList.find(item => item.itemCode === selectedItem.itemVO.itemCode);

    if(newCnt > matchedItem.itemStock){
      alert('재고 수량이 부족합니다.')
      return;
    }

    //수량 업데이트
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
    const existingCartItemIndex = cartList.findIndex(cart => cart.itemVO.itemCode === item.itemCode && cart.cartStatus === '주문등록');
  
    if (existingCartItemIndex !== -1) {
      // 장바구니에 이미 존재하는 경우 수량 업데이트
      const updatedCartItem = {
        ...cartList[existingCartItemIndex],
        cartCnt: cartList[existingCartItemIndex].cartCnt + 1, // 수량 증가
      };
  
      // 장바구니 업데이트
      setCartList(prevCartList => 
        prevCartList.map((cart, index) => 
          index === existingCartItemIndex ? updatedCartItem : cart
        )
      );
  
      // 수량 변경 후 서버에 업데이트 요청
      cntUpdate(updatedCartItem.cartCode, updatedCartItem.cartCnt);
    } else {
      // 장바구니에 존재하지 않는 경우 새로운 항목 추가
      const insertCartData = {
        itemCode: item.itemCode,
        cartCnt: 1, // 기본 수량
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
  }
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월을 2자리로 포맷
    const day = String(date.getDate()).padStart(2, '0'); // 일을 2자리로 포맷
    return `${year}-${month}-${day}`;
  };

  // 선택 발주
  function selectUpdate() {
    const selectedCartCodes = checkItems.map((isChecked, index)=>
      isChecked ? cartList[index].cartCode : null
    ).filter(cartCode => cartCode !== null); //null이 아닌 것만 필터링

    if(selectedCartCodes.length === 0){
      alert('발주할 항목을 선택해 주세요.');
      return;
    }

    //모든 선택된 cartCode에 대해 goSupplier 호출
    const deletePromises = selectedCartCodes.map(cartCode => goSupplier(cartCode));

    Promise.all(deletePromises)
        .then(() => {
            alert('선택된 항목이 발주되었습니다.'); // 발주 완료 알림
            fatchCartList(); // 목록 새로 고침
        })
        .catch((error) => {
            console.error('삭제 중 오류 발생:', error);
        });
  }


  function goSupplier(cartCode){
    axios
    .post(`/cart/statusUpdate/${cartCode}`)
    .then((res)=>{
      console.log('발주요청이 완료되었습니다.')
      fatchCartList();
    })
    .catch((error)=>{
      console.log(error)
    })
  }

    // // 카테고리별 목록 조회
    // const filteredItems = itemList.filter(item => {
    //   if (category === 1) return true;
    //   return item.category === category;
    // });


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
        <div className='search-div'>
          <select name='searchType' value={searchData.searchType} onChange={(e)=>{changeSearchData(e)}}>
            <option value={'ITEM_NAME'}>제품명</option>
            <option value={'ITEM_BRAND'}>제조사명</option>
            <option value={'CART_STATUS'}>상태</option>
          </select>
          <input type='text' name='searchValue' value={searchData.searchValue} onChange={(e)=>{changeSearchData(e)}}></input>
          <button type='button' onClick={(e)=>{
            search()
          }}>검색</button>
        </div>
        <table className='store-table'>
          <thead className='store-thead'>
            <tr>
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
                      <button type='button' className='supliierBtn' onClick={() => {
                        cntUpdate(cart.cartCode, cart.cartCnt);
                      }}>확인</button>
                    </td>
                    <td>
                      <p>{formatDate(cart.cartDate)}</p>
                    </td>
                    <td>
                      <span>{cart.cartStatus}</span>
                      {
                        cart.cartStatus != '주문등록' ?
                        <></>
                        :
                        <>
                          <button 
                            type='button' 
                            className='supliierBtn'
                            onClick={()=>{
                              goSupplier(cart.cartCode)
                            }}
                          >발주</button>
                          <button 
                            type='button' 
                            className='supliierBtn'
                            onClick={()=>{
                              goDelete(cart.cartCode)
                            }}
                          >삭제</button>
                        </>
                      }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <div className='suplierBtn-div'>
          <button type='button' className='supliierBtn' onClick={()=>{
            selectUpdate();
          }}>발주요청</button>
          <button type='button' className='supliierBtn' onClick={()=>{
            selectDelete();
          }}>선택삭제</button>
        </div>
      </div>

      <div className='medicineTab'>
        <ul className='medicineTab'>
          {['전체','전문의약품','수술관련기기','멸균기','폐활량계,심전계'].map(cate=>{
            return(
              <li key={cate}n className={category === cate ? 'medicineLinkOn' : 'medicineLink'}>
                <Link to={`/admin/store/medicine`}>{cate}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className='store-icon-div'>
        <div>
          <i className="bi bi-bag-plus"></i>
          <button type='button' onClick={()=>{handleCategoryChange(1)}}>전체</button>
        </div>
        <div>
          <i className="bi bi-capsule"></i>
          <button type='button'onClick={()=>{handleCategoryChange(2)}}>전문의약품</button>
        </div>
        <div>
          <i className="bi bi-scissors"></i>
          <button type='button' onClick={()=>{handleCategoryChange(3)}}>수술관련기기</button>
        </div>
        <div>
          <i className="bi bi-virus"></i>
          <button type='button' onClick={()=>{handleCategoryChange(4)}}>멸균기</button>
        </div>
        <div>
          <i className="bi bi-heart-pulse-fill"></i>
          <button type='button' onClick={()=>{handleCategoryChange(5)}}>폐활량계,심전계</button>
        </div>
      </div>

      <div className='item-list-box'>
        {itemList.map((item, i) => {
          const price = item.itemPrice.toLocaleString('ko-KR', {
            style: 'currency',
            currency: 'KRW'
          });

          return (
            <div key={i} className='item-list'>
              <img src={`http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}`} alt={item.itemName} />
              <h4>{item.itemName}</h4>
              <p>{price}</p>
              <p>재고수량 : {item.itemStock}</p>
              <button type='button' className='supliierBtn' onClick={() => handleAddToCart(item)}>추가</button>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default Store;
