//유효성 검사 결과를 저장할 변수
let resultArr = [
  false,
  false,
  false,
  false
]

let result_pw1 = false;
let result_pw2 = false;

//valid_tag[0] : memName
//valid_tag[1] : memTel
export const snsValidata = (newData, valid_tag, tagName) => {

  //name값을 변경했으면 name 피드백만 띄움
  //tel값을 변경했으면 tel 피드백만 띄움

  //비밀번호 및 비밀번호 확인 글자가 같아야함
  //4 ~ 12글자, 영문 소문자 + 숫자 조합
  const regex_memPw = /^(?=.*[a-zA-Z])(?=.*[0-9]).{4,12}$/

  //이름이 한글만 포함  + 2 ~ 10자리인지 검사하는 정규식
  const regex_memName = /^[가-힣]{2,10}$/;

  //연락처 010-숫자4개-숫자4개
  const regex_memTel = /^010-\d{4}-\d{4}$/;

  switch(tagName){
    case 'memPw' :
    case 'confirmPw' :
      if(regex_memPw.test(newData.memPw)){
        sendFeedbackMsg(valid_tag[1],'사용가능한 비밀번호 입니다.', 'good');
        result_pw1 = true;
      }else{
        sendFeedbackMsg(valid_tag[1], '비밀번호는 영문 + 숫자 조합 4~12글자 입니다.', 'error');
        result_pw1 = false;
      }
      //입력한 두 비밀번호가 다르면
      if(newData.memPw != newData.confirmPw){
        sendFeedbackMsg(valid_tag[0], '비밀번호가 일치하지 않습니다.', 'error');
        result_pw2 = false;
      }else{
        sendFeedbackMsg(valid_tag[0], '비밀번호가 일치합니다', 'good');
        result_pw2 = true;
      }

      resultArr[1] = result_pw1 && result_pw2 ? true : false;

      break;
    case 'memName' :
      //이름 값 유효성 검사 정규식 충족하면
      if(regex_memName.test(newData.memName)){
        sendFeedbackMsg(valid_tag[2],'이름이 맞습니다.', 'good')
        resultArr[0] = true;
      }else{
        sendFeedbackMsg(valid_tag[2], '이름은 2~10글자 한글이어야합니다.', 'error')
        resultArr[0] = false;
      }
      break;
    case 'memTel' :
      if(regex_memTel.test(newData.memTel)){
        sendFeedbackMsg(valid_tag[3], '연락처가 맞습니다.', 'good')
        resultArr[1] = true;
      }else{
        sendFeedbackMsg(valid_tag[3], '연락처 양식이 맞지 않습니다.', 'error')
        resultArr[1] = false;
      }
      break;
  }


  //resultArr의 모든 데이터가 true 일때만 리턴 true
  return !resultArr.includes(false);


}

//유효성 결과 메세지를 띄우는 함수
function sendFeedbackMsg(feedbackTag, msg, type){
  feedbackTag.current.className = `feedback ${type}`;
  feedbackTag.current.textContent = msg;
}