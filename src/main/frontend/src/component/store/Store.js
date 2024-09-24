import React, { useEffect, useState } from 'react'
import '../../css/store.css';
import axios from 'axios';
import { el } from 'date-fns/locale';

const Store = () => {
  const [content, setContent] = useState('A')

  //카테고리 버튼 상태변경
  const isActive = (btnContent)=> content === btnContent;

  //상품 목록을 저장할 변수
  const [itemList, setItemList] = useState([]);

  //품목 수량 저장 변수
  const [itemCnt, setItemCnt] = useState(1);

  const [itemCode, setItemCode] = useState('');
  const [cartCnt, setCartCnt] = useState(1);

  //추가 버튼 클릭시 자바로 가져가는 데이터
  const[insertCartData, setInsertCartData] = useState({
    'itemCode' : itemCode,
    'cartCnt' : cartCnt,
    'memNum' : JSON.parse(window.sessionStorage.getItem('loginInfo')).memNum
  })

  //조회된 발주 목록을 저장할 변수
  const [cartList, setCartList] = useState([]);

  //발주목록 조회
  useEffect(()=>{
    const loginInfo = JSON.parse(window.sessionStorage.getItem('loginInfo'));
    
    axios.get(`/cart/getCartList/${loginInfo.memNum}`)
    .then((res)=>{
      console.log(res.data)
      setCartList(res.data)
    })
    .catch((error)=>{
      alert('발주목록 조회 오류🤢🛒')
      console.log(error)
    })
  },[])


  //상품 목록 조회
  useEffect(()=>{
    axios.get('/item/getItemList')
    .then((res)=>{
      setItemList(res.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  function changeItemCnt(e){
    const cnt = Number(e.target.value);

    if(cnt<1){
      setItemCnt(1);
      
      //발주 등록 때 필요시 수량 데이터 변경
      setInsertCartData({...insertCartData, 'cartCnt':1})
    }
    else{
      setItemCnt(e.target.value);

      //발주 등록 때 필요시 수량 데이터 변경
      setInsertCartData({...insertCartData, 'cartCnt':e.target.value});
    }
  }



  //카테고리별 목록 조회
  const filteredItems = itemList.filter(item =>{
    if(content === 'A') return true;
    return item.category === content;
  })

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
      <div className='search-item'>
        <input type='text'></input>
        <button type='button'>검색</button>
      </div>
      <div className='store-icon-div'>
        <div>
          <i className="bi bi-bag-plus"></i>
          <button type='button' onClick={() => {setContent('A')}} className={`button ${isActive('A') ? 'active' : ''}`}>전체</button>
        </div>
        <div>
          <i class="bi bi-capsule"></i>
          <button type='button' onClick={()=>{setContent('B')}} className={`button ${isActive('B') ? 'active' : ''}`}>전문의약품</button>
        </div>
        <div>
          <i className="bi bi-scissors"></i>
          <button type='button' onClick={()=>{setContent('C')}}className={`button ${isActive('C') ? 'active' : ''}`}>수술관련기기</button>
        </div>
        <div>
          <i className="bi bi-virus"></i>
          <button type='button' onClick={()=>{setContent('D')}}className={`button ${isActive('D') ? 'active' : ''}`}>멸균기</button>
        </div>
        <div>
          <i className="bi bi-heart-pulse-fill"></i>
          <button type='button' onClick={()=>{setContent('E')}} className={`button ${isActive('E') ? 'active' : ''}`}>폐활량계,심전계</button>
        </div>
      </div>

        <div className='item-list-box'>
          {content === 'A' && 
            filteredItems.map((item,i)=>{
              const money = item.itemPrice;
              const price = money.toLocaleString('ko-KR',{
                style : 'currency',
                currency: 'KRW'
              })
              return(
                <div key={i} className='item-list'>
                  <img src={`http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}`} />
                  <h4>{item.itemName}</h4>
                  <p>{item.itemIntro}</p>
                  <p>{price}</p>
                  <button type='button'>추가</button>
                </div>
              )
            })
          }
          {content ==='B' &&
            filteredItems.map((item,i)=>{
              const money = item.itemPrice;
              const price = money.toLocaleString('ko-KR',{
                style : 'currency',
                currency: 'KRW'
              })
              return(
                <div key={i} className='item-list'>
                  <img src={`http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}`} />
                  <h4>{item.itemName}</h4>
                  <p>{item.itemIntro}</p>
                  <p>{price}</p>
                </div>
              )
            })
          }
          {content ==='C' &&
            filteredItems.map((item,i)=>{
              const money = item.itemPrice;
              const price = money.toLocaleString('ko-KR',{
                style : 'currency',
                currency: 'KRW'
              })
              return(
                <div key={i} className='item-list'>
                  <img src={`http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}`} />
                  <h4>{item.itemName}</h4>
                  <p>{item.itemIntro}</p>
                  <p>{price}</p>
                </div>
              )
            })
          }
          {content ==='D' &&
            itemList.map((item,i)=>{
              const money = item.itemPrice;
              const price = money.toLocaleString('ko-KR',{
                style : 'currency',
                currency: 'KRW'
              })
              return(
                <div key={i} className='item-list'>
                  <img src={`http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}`} />
                  <h4>{item.itemName}</h4>
                  <p>{item.itemIntro}</p>
                  <p>{price}</p>
                </div>
              )
            })
          }
          {content ==='E' &&
            itemList.map((item,i)=>{
              const money = item.itemPrice;
              const price = money.toLocaleString('ko-KR',{
                style : 'currency',
                currency: 'KRW'
              })
              return(
                <div key={i} className='item-list'>
                  <img src={`http://localhost:8080/images/upload/${item.imgList[0].attachedFileName}`} />
                  <h4>{item.itemName}</h4>
                  <p>{item.itemIntro}</p>
                  <p>{price}</p>
                </div>
              )
            })
          }
        </div>

    </div>
  )
}

export default Store