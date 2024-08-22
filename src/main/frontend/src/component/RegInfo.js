import React from 'react'
import '../css/regInfo.css'

const RegInfo = () => {
  return (
    <div className='regInfo-div'>
      <table className='regInfo-table'>
        <tbody>
          <tr>
            <td>성명</td>
            <td>홍길동</td>
          </tr>
          <tr>
            <td>생년월일</td>
            <td>1995.04.27</td>
          </tr>
          <tr>
            <td>성별</td>
            <td>남자</td>
          </tr>
          <tr>
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
                <input type='text' className='inputText' name='memId' id='memId'/>
                <button type='button'>중복확인</button>
              </div>
            </td>
          </tr>
          <tr>
            <td><span>✔</span>비밀번호</td>
            <td>
              <p className='desc'>
                비밀버호는 영문자와 숫자가 반드시 혼용되어야 하며, 특수문자의 혼용 또한 가능합니다.
                <br></br>
                보안등급 확인버튼 클릭 시 입력하신 비밀번호가 안전한지 여부를 확인 할 수 있습니다.
              </p>
              <div className='inpSec'>
                <input type='password' className='inputText' name='memPw' id='memPw'/>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <span>✔</span>
              비밀번호 확인
            </td>
            <td>
              <input type='password' className='inputText' name='memPwChk' id='memPwChk' />
            </td>
          </tr>
          <tr>
            <td><span>✔</span>휴대전화</td>
            <td>
              <p className='desc'>
                입력하신 휴대전화번호로 서울아산병원의 진료예약내역이 전송되오니 정확하게 입력하여 주시기 바랍니다.
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
                <input type='text' className='inputText' maxLength={4} name='celNo2' id='celNo2'></input>
                <span> - </span>
                <input type='text' className='inputText' maxLength={4} name='celNo3' id='celNo3'></input>
              </div>
            </td>
          </tr>
          <tr>
            <td><span>✔</span>e-mail</td>
            <td>
              <p className='desc'>
                입력하신 이메일로 H-hospital의 진료예약내역이 전송되오니 정확하게 입력하여 주시기 바랍니다. <br/>
                부정확한 이메일 주소 입력 시 다른 사람에게 나의 진료예약 일정 정보가 전송될 수 도 있습니다.
              </p>
              <div className='inpSec'>
                <select className='selectText' id='email2' name='email2'>
                  <option>직접입력</option>
                  <option>hanmail.net</option>
                  <option>paran.com</option>
                  <option>korea.com</option>
                </select>
                <button type='button'>선택</button>
                <input type='text' className='inputText' name='email1' id='email1'/>
                <span className='alpha'>@</span>
                <input type='text' className='inputText' name='email3' id='email3'/>
              </div>
            </td>
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
      
    </div>
  )
}

export default RegInfo