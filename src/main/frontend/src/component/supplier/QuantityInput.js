import axios from 'axios';
import React, { useState } from 'react';

const QuantityInput = ({ stock, itemIndex, setItemList, itemCode }) => {

  // 재고 수량을 상태로 관리
  const [quantity, setQuantity] = useState(stock);

  // 재고 수량을 itemList에 업데이트하는 함수
  const updateStock = (newStock) => {
    setItemList((currentItems) => {
      const updatedItems = [...currentItems]; // 현재 아이템 리스트 복사
      updatedItems[itemIndex].itemStock = newStock; // 특정 아이템의 재고 업데이트
      console.log(updatedItems[itemIndex]); // 콘솔에 업데이트된 아이템 출력
      return updatedItems; // 업데이트된 리스트 반환
    });
  };

  // 수량 증가 함수
  const increment = () => {
    setQuantity((currentQuantity) => {
      const newQuantity = currentQuantity + 1;
      updateStock(newQuantity); // 새로운 수량으로 재고 업데이트
      return newQuantity; // 상태 업데이트
    });
  };

  // 수량 감소 함수
  const decrement = () => {
    setQuantity((currentQuantity) => {
      if (currentQuantity > 1) {
        const newQuantity = currentQuantity - 1;
        updateStock(newQuantity); // 새로운 수량으로 재고 업데이트
        return newQuantity; // 상태 업데이트
      }
      return currentQuantity; // 1 이하로는 줄이지 않음
    });
  };

  // 입력 필드에서 수량 변경 시 호출되는 함수
  const onChange = (e) => {
    const newQuantity = Math.max(1, Number(e.target.value)); // 입력된 값을 숫자로 변환하고 최소값을 1로 설정
    setQuantity(newQuantity); // 상태 업데이트
    updateStock(newQuantity); // 새로운 수량으로 재고 업데이트
  };

  //수정버튼 클릭시 업데이트 
  function goUpdate(){
    const itemStock = quantity
    axios
    .post(`/item/updateStock`, {itemCode, itemStock})
    .then((res)=>{
      alert('재고 수량이 업데이트 되었습니다.');
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }} className='numberBtn-div'>
        <button onClick={decrement} className='numberBtn' id='mina'>-</button>
        <input
          type='number'
          min='1'
          value={quantity}
          readOnly
          style={{ width: '50px', textAlign: 'center' }}
          onChange={(e) => { onChange(e) }}
          name='itemStock'
        />
        <button onClick={increment} className='numberBtn'>+</button>
      </div>
      <button type='button' className='updateNumberBtn' onClick={()=>{
        goUpdate()
      }}>수정</button>
    </div>
  );
};

export default QuantityInput;
