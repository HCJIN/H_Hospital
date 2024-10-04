import React, { useEffect, useState } from 'react';
import '../../css/store.css';
import axios from 'axios';
import ItemDetail from '../supplier/ItemDetail';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { nanumGothicFont } from '../../external-fonts';

const Store = () => {

  //선택된 제품
  const [selectedItem, setSelectedItem] = useState(null);
  //제품 상세보기
  const [show, setShow] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState();
  //아이템 리스트 useState
  const [itemList, setItemList] = useState([]);
  //필터링된 아이템 목록 useState
  const [filteredItemList, setFilteredItemList] = useState([]);
  //총 금액 계산 state
  const [totalPrice, setTotalPrice] = useState(0);
  //자바에서 가져온 페이지 정보를 담을 변수
  const [pageInfo, setPageInfo] = useState({});
  //검색데이터 useState
  const [searchData, setSearchData] = useState({
    searchType: 'ITEM_NAME',
    searchValue: ''
  });
  //세션 스토리지에서 회원번호 가져오기
  const memNum = JSON.parse(window.sessionStorage.getItem('loginInfo')).memNum;
  //장바구니리스트 useState
  const [cartList, setCartList] = useState([]);
  console.log(cartList)
  //체크된 아이템 useState
  const [checkItems, setCheckItems] = useState([]);
  //전체선택 체크상태 useState
  const [allChecked, setAllChecked] = useState(true);

  //카테고리로 아이템 필터링
  const filterItemsByCategory = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredItemList(Array.isArray(itemList) ? itemList : []);
    } else {
      const filtered = Array.isArray(itemList) 
        ? itemList.filter(item => item.itemCategory === category)
        : [];
      setFilteredItemList(filtered);
    }
  };

  //선택된 카테고리의 아이템을 가져옴
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

  //카테고리 클릭 시 처리
  const handleCategoryClick = (category) => {
    filterItemsByCategory(category);
    console.log(filteredItemList)
    onCategory(category);
  }

  //검색 데이터 변경 처리
  const changeSearchData = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    });
  };

// 장바구니 목록을 가져오는 함수
const fatchCartList = () => {
  axios.get(`/cart/getCartList/${memNum}`)
    .then((res) => {
      setCartList(res.data);
      setCheckItems(Array(res.data.length).fill(false)); // checkItems 초기화
      calculateTotalPrice();
    })
    .catch((error) => {
      alert('발주목록 조회 오류🤢🛒');
      console.log(error);
    });
};

// 체크된 아이템이 변경될 때마다 총 가격을 업데이트
useEffect(() => {
  if (cartList.length > 0) {
    calculateTotalPrice();
  }
}, [checkItems, cartList]); // checkItems와 cartList 모두 의존성 배열에 추가

  //총 가격 계산
  const calculateTotalPrice = () => {
    let total = 0;

    checkItems.forEach((isChecked, index)=>{
      if(isChecked && cartList[index]) {
        const cart = cartList[index];
        total += cart.cartCnt * cart.itemVO.itemPrice
      }
    });
    setTotalPrice(total);
  }
  console.log(checkItems)

  //장바구니 검색 기능
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

  //전체선택 체크/해제 처리
  const changeChkAll = () => {
    setAllChecked(!allChecked);
    const newCheckItems = Array(cartList.length).fill(!allChecked);
    setCheckItems(newCheckItems);
  };

  //장바구니가 변경될 때 체크 상태 초기화
  useEffect(() => {
    setCheckItems(Array(cartList.length).fill(false));
    setAllChecked(false);
  }, [cartList]);

  //체크된 아이템의 모든 체크 상태 업데이트
  useEffect(() => {
    const allCheckedState = checkItems.every((item) => item);
    setAllChecked(allCheckedState);
  }, [checkItems]);


  useEffect(() => {
    fatchCartList();
  }, [memNum]);

  //모든 아이템을 가져오는 함수
  function all(){
    axios
      .post('/item/getItemList')
      .then((res) => {
        console.log(res.data)
        setItemList(res.data);
        setFilteredItemList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //마운트 시 모든 아이템 가져오기
  useEffect(() => {
    axios
      .post('/item/getItemList')
      .then((res) => {
        console.log(res.data)
        setItemList(res.data);
        setFilteredItemList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  //장바구니 수량 업데이트 요청
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

  //장바구니에 아이템 추가하는 함수
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

  //날짜 표시형식 변경
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  //선택발주 기능
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

  //선택 삭제 기능
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

  //발주요청시 처리
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

  //삭제버튼 클릭시 실행
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

  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  pdfMake.vfs['NanumGothic.ttf'] = nanumGothicFont;
  
  // 폰트 설정
  pdfMake.fonts = {
    NanumGothic: {
      normal: 'NanumGothic.ttf',
      bold: 'NanumGothic.ttf',
      italics: 'NanumGothic.ttf',
      bolditalics: 'NanumGothic.ttf'
    }
  };

  // 새창에서 pdf 만드는 함수
  // 새창에서 pdf 만드는 함수
  const generatePDF = () => {
    const tableData = cartList
    .filter((_, i) => checkItems[i])
    .map(e => [
      e.itemVO.itemName,
      e.cartCnt.toString(),
      (e.itemVO.itemPrice * e.cartCnt).toString(),
      formatDate(e.cartDate),
      e.cartStatus
    ]);

    // PDF 문서 정의
    const docDefinition = {
      content: [
        { text: '발주 내역 리스트', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto', 'auto'],
            body: [
              ['제품명', '수량', '가격','주문일시', '상태'],
              ...tableData,
              // 총 가격을 표시할 새로운 행 추가
              // 총 가격 천 단위에 , 표시
              [{ text: `총 가격 : ₩${totalPrice.toLocaleString()}원`, colSpan: 5, alignment: 'right' }, {}, {}, {}, {}]
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 10]
        }
      },
      defaultStyle: {
        font: 'NanumGothic' // NanumGothic 폰트를 기본으로 설정
      }
    };

    // 새로운 창에서 PDF 생성 및 다운로드
    const pdfWindow = window.open('', '_blank'); // 새로운 창 열기
    pdfMake.createPdf(docDefinition).getBlob(blob => {
      const url = URL.createObjectURL(blob);
      pdfWindow.location.href = url; // 새로운 창에서 PDF 다운로드
    });
  };

  // 페이징 그리기 함수 수정
function drawPagination(){
  const arr = [];

  if(pageInfo.prev){
    arr.push(
      <span key="prev" className='page-span' onClick={() => getList(pageInfo.beginPage - 1)}>
        이전
      </span>
    )
  }

  for(let i = pageInfo.beginPage; i <= pageInfo.endPage; i++){
    arr.push(
      <span 
        className={`page-span ${pageInfo.currentPage === i ? 'current-page' : ''}`}
        key={i} 
        onClick={() => getList(i)}
      >
        {i}
      </span>
    )
  }

  if(pageInfo.next){
    arr.push(
      <span key="next" className='page-span' onClick={() => getList(pageInfo.endPage + 1)}>
        다음
      </span>
    )
  }

  return arr;
}

// 페이징 처리한 곳에서 숫자(페이지번호)를 클릭하면 다시 게시글을 조회
function getList(pageNo){
  axios
  .post(`/item/getItemList/${pageNo}`)
  .then((res)=>{
    setItemList(res.data.itemList);
    setPageInfo(res.data.pageInfo);
    // 페이지 상단으로 스크롤
    window.scrollTo(0, 0);
  })
  .catch((error)=>{
    console.log(error)
  })
}

  return (
    <div className='store-div'>
      {
        show ?
        <ItemDetail show={show} setShow={setShow} item={selectedItem}/>
        :
        <></>
      }
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
            <button type='button' onClick={() => {generatePDF()}}>발주 내역 리스트</button>
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
                <p>가격</p>
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
                  <p>
                    {
                      (cart.itemVO.itemPrice * cart.cartCnt).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }
                  </p>
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
        <div className='total-div'>
          <p>
            총 구매금액 {totalPrice.toLocaleString(
              'ko-KR', {
                style: 'currency',
                currency: 'KRW',
              }
            )}
          </p>
        </div>
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
              <p className='itemDetail' onClick={()=>{
                setSelectedItem(item);
                setShow(true)
              }}>상세보기</p>
              <p>재고수량 : {item.itemStock}</p>
              <button type='button' className='supliierBtn' onClick={() => handleAddToCart(item)}>추가</button>
            </div>
          ))
        ) : (
          <p>상품이 없습니다.</p>
        )}
      </div>
      {/* 페이징 정보가 나오는 div */}
      <div>
        {
          drawPagination()
        }
      </div>
    </div>
  );
};

export default Store;