import React from 'react'

const RegInfo = () => {
  return (
    <div>

      <div>
        <table>
          <tbody>
            <tr>
              <td>성명</td>
              <td></td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td></td>
            </tr>
            <tr>
              <td>성별</td>
              <td></td>
            </tr>
            <tr>
              <td>아이디</td>
              <td>
              아이디를 입력하신 후 중복확인을 클릭하세요.<br/>
              아이디 입력은 영문 소문자와 숫자만 가능하며, 첫 자는 반드시 영문 소문자를 입력하여야 합니다. <br/>
              한번 가입한 아이디는 변경이 불가하며, 탈퇴 후 재가입시 동일 아이디 사용이 불가하므로 신중히 입력하여 주세요<br/>
              <input type='text' />
              <button type='button'>중복확인</button>
              </td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                비밀번호는 영문자와 숫자가 반드시 혼용되어야 하며, 특수문자의 혼용 또한 가능합니다.<br/>
                보안등급 확인버튼 클릭 시 입력하신 비밀번호가 안전한지 여부를 확인 할 수 있습니다. <br />
                <input type='text' />
                <button type='button'>보안등급 확인</button>
              </td>
            </tr>
            <tr>
              <td>비밀번호 확인</td>
              <td>
                <input type='text' />
              </td>
            </tr>
            <tr>
              <td>휴대전화</td>
              <td></td>
            </tr>
            <tr>
              <td>e-mail</td>
              <td>
                입력하신 이메일로 H-hospital의 진료예약내역이 전송되오니 정확하게 입력하여 주시기 바랍니다. <br/>
                부정확한 이메일 주소 입력 시 다른 사람에게 나의 진료예약 일정 정보가 전송될 수 도 있습니다.<br/>
                <select>
                  <option>직접입력</option>
                  <option>hanmail.net</option>
                  <option>paran.com</option>
                  <option>korea.com</option>
                </select>
                <button type='button'>선택</button>
                <input type='text'/>@
                <input type='text'/>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>추가정보</h2>
        <span>※추가정보 동의 거부 시 불이익은 없으나 해당 서비스를 제공받을 수 없습니다.</span>
        <table>
          <tbody>
            <tr>
              <td>개인정보 마케팅 활용 동의(선택)</td>
              <td>
                <div>
                

                </div>
                <div></div>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default RegInfo