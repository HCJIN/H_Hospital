import React, { useEffect, useState } from 'react';
import '../../css/store.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [itemList, setItemList] = useState([]);
  const [filteredItemList, setFilteredItemList] = useState([]);
  const [itemCnt, setItemCnt] = useState(1);
  const [searchData, setSearchData] = useState({
    searchType: 'ITEM_NAME',
    searchValue: ''
  });
  const memNum = JSON.parse(window.sessionStorage.getItem('loginInfo')).memNum;
  const [cartList, setCartList] = useState([]);
  console.log(cartList)
  const [checkItems, setCheckItems] = useState([]);
  const [allChecked, setAllChecked] = useState(true);

  const filterItemsByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredItemList(itemList);
    } else {
      const filtered = itemList.filter(item => item.itemCategory === category);
      setFilteredItemList(filtered);
    }
  };
  console.log(selectedCategory)

  const onCategory = (category) => {
    axios
      .get(`/item/getCategoryItem/${category}`)
      .then((res) => {
        setItemList(res.data);
        setFilteredItemList(res.data); // 불러온 데이터를 필터링된 리스트로 설정
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCategoryClick = (category) => {
    filterItemsByCategory(category);
    console.log(filteredItemList)
    onCategory(category);
  }

  const changeSearchData = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

  const fatchCartList = () => {
    axios.get(`/cart/getCartList/${memNum}`)
      .then((res) => {
        setCartList(res.data);
      })
      .catch((error) => {
        alert('발주목록 조회 오류🤢🛒');
        console.log(error);
      });
  };

  const search = () => {
    axios
      .post('/cart/searchCartList', { ...searchData, memNum: memNum })
      .then((res) => {
        setCartList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeChkAll = () => {
    setAllChecked(!allChecked);
    const newCheckItems = Array(cartList.length).fill(!allChecked);
    setCheckItems(newCheckItems);
  };

  useEffect(() => {
    setCheckItems(Array(cartList.length).fill(false));
    setAllChecked(false);
  }, [cartList]);

  useEffect(() => {
    const allCheckedState = checkItems.every((item) => item);
    setAllChecked(allCheckedState);
  }, [checkItems]);

  useEffect(() => {
    fatchCartList();
  }, [memNum]);


  function all(){
    axios
      .get('/item/getItemList')
      .then((res) => {
        console.log(res.data)
        setItemList(res.data);
        setFilteredItemList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    axios
      .get('/item/getItemList')
      .then((res) => {
        console.log(res.data)
        setItemList(res.data);
        setFilteredItemList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    const fetchAllItems = () => {
        axios.get('/item/getAllItems')
            .then((res) => {
                console.log('All Items:', res.data);
                setItemList(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };





  // 수량 변경 시 처리
  const handleItemCntChange = (index, newCnt) => {
    const selectedItem = cartList[index];
    const matchedItem = itemList.find(item => item.itemCode === selectedItem.itemVO.itemCode);

    if (newCnt > matchedItem.itemStock) {
      alert('재고 수량이 부족합니다.');
      return;
    }

    setCartList(prevCartList =>
      prevCartList.map((cart, i) =>
        i === index ? { ...cart, cartCnt: newCnt } : cart
      )
    );
  };

  const cntUpdate = (cartCode, cartCnt) => {
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
  };

  const handleAddToCart = (item) => {
    const existingCartItemIndex = cartList.findIndex(cart => cart.itemVO.itemCode === item.itemCode && cart.cartStatus === '주문등록');

    if (existingCartItemIndex !== -1) {
      const updatedCartItem = {
        ...cartList[existingCartItemIndex],
        cartCnt: cartList[existingCartItemIndex].cartCnt + 1,
      };

      setCartList(prevCartList =>
        prevCartList.map((cart, index) =>
          index === existingCartItemIndex ? updatedCartItem : cart
        )
      );

      cntUpdate(updatedCartItem.cartCode, updatedCartItem.cartCnt);
    } else {
      const insertCartData = {
        itemCode: item.itemCode,
        cartCnt: 1,
        memNum: memNum,
        itemName: item.itemName,
        itemPrice: item.itemPrice,
        itemImage: item.imgList[0]?.attachedFileName
      };

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
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const selectUpdate = () => {
    const selectedCartCodes = checkItems
      .map((isChecked, index) => isChecked ? cartList[index].cartCode : null)
      .filter(cartCode => cartCode !== null);

    if (selectedCartCodes.length === 0) {
      alert('발주할 항목을 선택해 주세요.');
      return;
    }

    const updatePromises = selectedCartCodes.map(cartCode => goSupplier(cartCode));

    Promise.all(updatePromises)
      .then(() => {
        alert('선택된 항목이 발주되었습니다.');
        fatchCartList();
      })
      .catch((error) => {
        console.error('발주 중 오류 발생:', error);
      });
  };

  const selectDelete = () => {
    const selectedCartCodes = checkItems
      .map((isChecked, index) => isChecked ? cartList[index].cartCode : null)
      .filter(cartCode => cartCode !== null);

    if (selectedCartCodes.length === 0) {
      alert('삭제할 항목을 선택해 주세요.');
      return;
    }

    const deletePromises = selectedCartCodes.map(cartCode => goDelete(cartCode));

    Promise.all(deletePromises)
      .then(() => {
        alert('선택된 항목이 삭제되었습니다.');
        fatchCartList();
      })
      .catch((error) => {
        console.error('삭제 중 오류 발생:', error);
      });
  };

  const goSupplier = (cartCode) => {
    return axios
      .post(`/cart/statusUpdate/${cartCode}`)
      .then((res) => {
        alert('발주요청이 완료되었습니다.');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goDelete = (cartCode) => {
    return axios
      .delete(`/cart/cartDelete/${cartCode}`)
      .then(() => {
        console.log(`삭제 완료: ${cartCode}`);
      })
      .catch((error) => {
        console.error('삭제 중 오류 발생:', error);
      });
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
        <div className='search-div'>
          <div>
            <button type='button' onClick={() => {}}>발주 내역 리스트</button>
          </div>
          <div>
            <select name='searchType' value={searchData.searchType} onChange={changeSearchData}>
              <option value={'ITEM_NAME'}>제품명</option>
              <option value={'ITEM_BRAND'}>제조사명</option>
              <option value={'CART_STATUS'}>상태</option>
            </select>
            <input type='text' name='searchValue' value={searchData.searchValue} onChange={changeSearchData}></input>
            <button type='button' onClick={search}>검색</button>
          </div>
        </div>
        <table className='store-table'>
          <thead className='store-thead'>
            <tr>
              <td>
                <input
                  type='checkbox'
                  className='checkboxAll'
                  onChange={changeChkAll}
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
            {cartList.map((cart, i) => (
              <tr key={i}>
                <td>
                  <input 
                    type='checkbox' 
                    onChange={() => {
                      const copyChks = [...checkItems];
                      copyChks[i] = !copyChks[i];
                      setCheckItems(copyChks);
                    }}
                    checked={checkItems[i] || false}
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
                  <button type='button' className='supliierBtn' onClick={() => cntUpdate(cart.cartCode, cart.cartCnt)}>확인</button>
                </td>
                <td>
                  <p>{formatDate(cart.cartDate)}</p>
                </td>
                <td>
                  <span>{cart.cartStatus}</span>
                  {cart.cartStatus !== '주문등록' ? (
                    <></>
                  ) : (
                    <>
                      <button 
                        type='button' 
                        className='supliierBtn'
                        onClick={() => goSupplier(cart.cartCode)}
                      >발주</button>
                      <button 
                        type='button' 
                        className='supliierBtn'
                        onClick={() => goDelete(cart.cartCode)}
                      >삭제</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='suplierBtn-div'>
          <button type='button' className='supliierBtn' onClick={selectUpdate}>발주요청</button>
          <button type='button' className='supliierBtn' onClick={selectDelete}>선택삭제</button>
        </div>
      </div>

      <div className='store-icon-div'>
        <div>
          <i className="bi bi-bag-plus"></i>
          <button type='button' onClick={() => {all()}}>전체</button>
        </div>
        <div>
          <i className="bi bi-capsule"></i>
          <button 
          type='button' 
          onClick={() => handleCategoryClick(1)
            
          }>전문의약품</button>
        </div>
        <div>
          <i className="bi bi-scissors"></i>
          <button type='button'
          onClick={() => handleCategoryClick(2)}>수술관련기기</button>
        </div>
        <div>
          <i className="bi bi-virus"></i>
          <button type='button' onClick={() => handleCategoryClick(3)}>멸균기</button>
        </div>
        <div>
          <i className="bi bi-heart-pulse-fill"></i>
          <button type='button' onClick={() => handleCategoryClick(4)}>폐활량계,심전계</button>
        </div>
      </div>

      <div className='item-list-box'>
        {filteredItemList.length > 0 ? (
          filteredItemList.map((item, i) => (
            <div key={i} className='item-list'>
              <img 
                src={item.imgList && item.imgList.length > 0 
                  ? `http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}` 
                  : 'default_image_url'} 
                alt={item.itemName} 
              />
              <h4>{item.itemName}</h4>
              <p>
                {item.itemPrice 
                  ? item.itemPrice.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' }) 
                  : '가격 정보 없음'}
              </p>
              <p>재고수량 : {item.itemStock}</p>
              <button type='button' className='supliierBtn' onClick={() => handleAddToCart(item)}>추가</button>
            </div>
          ))
        ) : (
          <p>상품이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Store;