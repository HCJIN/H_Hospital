import { useRef } from "react"
import '../css/modal.css'

const Modal = ({setShow, clickCloseBtn}) => {

  //content : 모달에서 보여지는 내용
  //setShow : 모달을 닫는 코드
  //clickCloseBtn : 모달의 확인버튼 클릭 시 실행할 코드

  const modalContainer = useRef();

  return(
    <div className="modal-container show" ref={modalContainer}>
      <div className="modal">
        <div className="modal-header">
          <span onClick={()=>{
            modalContainer.current.className = 
            'modal-container';
            setTimeout(()=>{
              setShow(false);
              clickCloseBtn();
            },300)}}>
          </span>
        </div>
        <div className="modal-content">
          <div className="poptit-wrap">
            <p className="ptit">고객 간편 진료예약 서비스</p>
            <div className="close">
              전화문의
              <span>1688-7575</span>
            </div>
          </div>
          <p className="pcont-tit01">
            아래 사항을 입력해주시면, 상담 간호사가 확인 후 상담 시간내에 전화를 드려 예약을 도와드리겠습니다.
          </p>
          <p className="timetext-wrap">
            상담시간 : 평일 08:30 ~ 17:30 / 토요일 08:30 ~ 12:30(공휴일 제외)
            <br></br>
            <span>※ 상담 전화 연결 3회 이상 실패 시 간편예약접수가 자동으로 취소 되오니, 이점 양해하여 주시기 바랍니다.</span>
          </p>
          <p className="required-input">
            <span>필수 입력사항입니다.</span>
          </p>
          <div className="ptbl-view02-wrap">
            <table className="ptbl-view02">
              <colgroup>
                <col width='25%'></col>
                <col width='75%'></col>
              </colgroup>
              <tbody>
                <tr>
                  <th>성명</th>
                  <td>황찬진</td>
                </tr>
                <tr>
                  <th>
                    <sapn className="star">휴대전화</sapn>
                  </th>
                  <td>010-6676-7910</td>
                </tr>
                <tr>
                  <th>
                    <span className="star">진료항목</span>
                  </th>
                  <td>
                    <textarea name="serviceType"></textarea>
                    <p className="textbite-wrap">
                      *
                      <sapn className="count">0</sapn>
                      byte / 최대
                      <span className="maxcount">200</span>
                      byte(한글 100자, 영문 200자)
                    </p>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-primary" onClick={()=>{
            modalContainer.current.className = 'modal-container';
            setTimeout(()=>{
              //모달창 닫기
              setShow(false);
              clickCloseBtn();
            },300)
          }}>확인</button>
        </div>
      </div>
    </div>
  )

}

export default Modal