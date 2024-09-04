import React, { useEffect, useRef, useState } from 'react'
import '../css/adminRegInfo.css'
import axios from 'axios';
import { joinValiate } from '../validate/joinValidate';
import { useNavigate, useParams } from 'react-router-dom';
import RegBar from './RegBar';
import { getCLS } from 'web-vitals';

const AdminRegInfo = () => {

  const navigate = useNavigate();

  //자바에서 받아온 데이터를 저장할 state 
  const [selectMember, setSelectMember] = useState({});

  const {memTel} = useParams();

  //id 중복 체크 여부를 저장할 변수
  const [isCheckId, setIsCheckId] = useState(false);

  //id 유효성 검사
  const memId_valid_tag = useRef();
  const confirmPw_valid_tag = useRef();
  const memPw_valid_tag = useRef();

  //유효성 검사 ref 태그들을 한번에 배열로 가져가기 
  const valid_tag = [
    memId_valid_tag,
    confirmPw_valid_tag,
    memPw_valid_tag
  ];

  //유효성 검사 state
  const [validResult, setValidResult] = useState(false);

  //email useRef
  const email1 = useRef();
  const email3 = useRef();
  const email2 = useRef();

  //입력된 데이터 저장할 state
  const [member, setMember] = useState({
    memName : selectMember.memName || '',
    gender : selectMember.gender || '',
    memTel : memTel,
    birthday : selectMember.birthday || '',
    memId : '',
    memPw : '',
    confirmPw : '',
    email : '',
    hospitalCode : '',
    memRole : 'admin'
  });

  //휴대폰 인증시 insert된 데이터 받아오기
  useEffect(()=>{
    axios
    .get(`/member/getMemberList/${memTel}`)
    .then((res)=>{
      console.log(res.data)
      setSelectMember(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  //전화번호 변수 
  const middleTel = selectMember.memTel ? selectMember.memTel.substring(4,8) : '';
  const lastTel = selectMember.memTel ? selectMember.memTel.substring(9,13): '';

  //입력된 데이터 state값에 저장
  function memberChange(e){
    //입력한 데이터
    const newData = {
      ...member,
      [e.target.name] : e.target.name != 'email' ?
      e.target.value :
      email1.current.value + '@' + email3.current.value
    }
    //입력한 데이터에 대한 validation 처리
    //모든 데이터가 유효한 데이터면 리던 true
    const result = joinValiate(newData, valid_tag, e.target.name);
    setValidResult(result);
  
    //유효성 검사 끝난 데이터를 setMember에 저장
    setMember(newData)
  }
  console.log(member.hCode)

  // email 선택 버튼 클릭시 주소창에 입력
  function emailClick(){
    email3.current.value = member.email2
  }

  // id 중복확인
  function idChk(){
    axios
    .get(`/member/idChk/${member.email}`)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        alert('사용 가능한 이메일 입니다')
        setIsCheckId(true)
      }else{
        alert('이미 가입된 이메일 주소입니다.')
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  //직원가입 버튼 클릭시 직원기초정보 업데이트 
  function goJoin(){
    console.log(member)
    axios
    .post('/member/updateAdmin', member)
    .then((res)=>{
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  console.log(selectMember)

  return (
    <div className='regInfo-div'>
      <RegBar step={3}/>
      <table className='regInfo-table'>
        <tbody>
          <tr>
            <td>성명</td>
            <td>{selectMember.memName}</td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>{selectMember.birthday}</td>
          </tr>
          <tr>
            <td>성별</td>
            <td>{selectMember.gender}</td>
          </tr>
          <tr>
            <td><span>✔</span>e-mail</td>
            <td>
              <p className='desc'>
                입력하신 이메일로 H-hospital의 진료예약내역이 전송되오니 정확하게 입력하여 주시기 바랍니다. <br/>
                부정확한 이메일 주소 입력 시 다른 사람에게 나의 진료예약 일정 정보가 전송될 수 도 있습니다.
              </p>
              <div className='inpSec'>
                <select className='selectText' id='email2' name='email2' onChange={(e)=>{memberChange(e)}} ref={email2}>
                  <option>직접입력</option>
                  <option value={'hanmail.net'}>hanmail.net</option>
                  <option value={'paran.com'}>paran.com</option>
                  <option value={'korea.com'}>korea.com</option>
                  <option value={'naver.com'}>naver.com</option>
                </select>
                <button type='button' onClick={(e)=>{
                  emailClick(e)
                }}>선택</button>
                <input type='text' className='inputText' name='email' id='email1' ref={email1} onChange={(e)=>{memberChange(e)}}/>
                <span className='alpha'>@</span>
                <input type='text' className='inputText' name='email' id='email3' ref={email3} onChange={(e)=>{memberChange(e)}}/>
                <button type='button' onClick={()=>{
                  idChk()
                }}>중복확인</button>
              </div>
            </td>
          </tr>
          {/* <tr>
            <td><span>✔</span>아이디</td>
            <td>
              <p className='desc'>
                아이디를 입력하신 후 중복확인을 클릭하세요.
                <br></br>
                아이디 입력은 영문 소문자와 숫자만 가능하며, 첫 자는 반드시 영문 소문자를 입력하여야 합니다.
                <br></br>
                한번 가입한 아이디는
                <strong>변경이 불가</strong>
                하며
                <strong>탈퇴 후 재가입 시 동일 아이디 사용이 불가</strong>
                하므로 신중히 입력하여 주세요.
              </p>
              <div className='inpSec'>
                <input type='text' className='inputText' name='memId' id='memId' onChange={(e)=>{
                  memberChange(e)
                  setIsCheckId(false)
                }}/>
                <button type='button' onClick={()=>{
                  idChk()
                }}>중복확인</button>
              </div>
              <div className='feedback' ref={memId_valid_tag}></div>
            </td>
          </tr> */}
          <tr>
            <td><span>✔</span>비밀번호</td>
            <td>
              <p className='desc'>
                비밀번호는 영문자와 숫자가 반드시 혼용되어야 하며, 특수문자의 혼용 또한 가능합니다.
                <br></br>
                보안등급 확인버튼 클릭 시 입력하신 비밀번호가 안전한지 여부를 확인 할 수 있습니다.
              </p>
              <div className='inpSec'>
                <input type='password' className='inputText' name='memPw' id='memPw' onChange={(e)=>{
                  memberChange(e)
                }}/>
                <div className='feedback' ref={memPw_valid_tag}></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>✔</span>
              비밀번호 확인
            </td>
            <td>
              <input type='password' className='inputText' name='confirmPw' id='confirmPw' onChange={(e)=>{
                  memberChange(e)
                }}/>
                <div className='feedback' ref={confirmPw_valid_tag}></div>
            </td>
          </tr>
          <tr>
            <td><span>✔</span>휴대전화</td>
            <td>
              <p className='desc'>
                입력하신 휴대전화번호로 울산메디칼센터의 진료예약내역이 전송되오니 정확하게 입력하여 주시기 바랍니다.
                <br></br>
                부정확한 휴대본 번호 입력 시 다른 사람에게 나의 진료예약 일정 정보가 전송될 수 도 있습니다.
              </p>
              <div className='inpSec' id='cel'>
                <select id='celNo1' name='celNo1' className='selectText'>
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                </select>
                <span> - </span>
                <input type='text' className='inputText' maxLength={4} name='celNo2' id='celNo2' value={middleTel} readOnly></input>
                <span> - </span>
                <input type='text' className='inputText' maxLength={4} name='celNo3' id='celNo3' value={lastTel} readOnly></input>
              </div>
            </td>
          </tr>
          <tr>
            <td><span>✔</span>직원코드</td>
            <td><input type='text' className='inputText' name='hospitalCode'  onChange={(e)=>{memberChange(e)}}/></td>
          </tr>
        </tbody>
      </table>

      <div className='regInformation'>
        <h3>추가정보</h3>
        <p>※추가정보 동의 거부 시 불이익은 없으나 해당 서비스를 제공받을 수 없습니다.</p>
      </div>
      <div className='regInfo-bottom-table-div'>
        <table className='regInfo-bottom-table'>
          <tbody>
            <tr>
              <td className='addMail'>
                <span>
                  개인정보 마케팅
                  <br></br>
                  활용 동의 
                  <br></br>
                  (선택)
                </span>
              </td>
              <td>
                <div className='regInfo-dl-div'>
                  <dl>
                    <dt>[마케팅 활용 항목]</dt>
                    <dd>- 성명, 연락처, E-mail</dd>
                    <dt className='style'>[수집 및 이용 목적]</dt>
                    <dd className='style'>- 건강정보/병원소식 제공</dd>
                    <dt className='style'>[보유기간]</dt>
                    <dd className='style'>- 회원 탈퇴 시 까지</dd>
                    <dt>[거부 시 불이익]</dt>
                    <dd>선택 항목에 대한 수집 • 이용에 동의하지 않더라도 회원가입은 가능하나, 추가 서비스를 제공받지 못합니다.</dd>
                  </dl>
                </div>
                <div className='inpSec'>
                  <input type='radio' name='mailingYn' className='radio' value={'Y'} id='mailRadio0'></input>
                  <label form='mailRadio0'>동의함</label>
                  <input type='radio' name='mailingYn' className='radio' value={'N'} id='mailRadio1'></input>
                  <label form='mailRadio1'>동의안함</label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='joinBtn-div'>
        <button type='button' onClick={()=>{goJoin()}}>회원가입</button>
        <button type='button'>취소</button>
      </div>
    </div>
  )
}



export default AdminRegInfo