
import React, { useRef, useState } from 'react'
import '../css/FindId.css'
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const FindId = () => {
  const navigate = useNavigate();

  const [memInfo, setMemInfo] = useState({});

  //id찾기 정보를 입력 받아 저장할 변수
  const [insertFindIdData, setInsertFindIdData] = useState({
    memName : '',
    gender : '',
    birthday : '',
    memTel : '',
    email : ''
  })

  //생년월일을 저장할 변수
  const bdYear = useRef();
  const bdMonth = useRef();
  const bdDay = useRef();

  //전화번호를 저장할 변수
  const memTel1 = useRef();
  const memTel2 = useRef();
  const memTel3 = useRef();

  // id 찾기를 위한 기본 정보
  function insertFindId(){

    if(!insertFindIdData.memName.trim()){
      alert('이름을 입력해 주세요')
      return;
    }
    if(!insertFindIdData.gender){
      alert('성별을 클릭해 주세요')
      return;
    }
    if(!insertFindIdData.birthday || 
      bdYear.current.value === "" ||
      bdMonth.current.value === "" ||
      bdDay.current.value === "" ||
      bdYear.current.value === '년' ||
      bdMonth.current.value === '월' ||
      bdDay.current.value === '일'){ 
      
      alert('생년월일을 클릭해 주세요')
      return;
    }
    if(!insertFindIdData.memTel || memTel2.current.value.trim() === '' || memTel3.current.value.trim() === '') {
      alert('전화번호를 입력해 주세요')
      return;
    }


    axios.post('/member/findId', insertFindIdData)
    .then((res)=>{
        console.log(res.data)
        setMemInfo(res.data);
        navigate('/successFindId',{state:{memInfo:res.data}})
    })
    .catch((error)=>{
      console.log(error)
      alert('오류가 발생했습니다')
    })
  }
  
  // //id 찾기를 위해 입력한 정보를 받아와 줄 함수
  function changeInsertFindId(e){

    const telBdData ={
      ...insertFindIdData,
      [e.target.name] : e.target.name === 'memTel'
        ? memTel1.current.value + '-' + memTel2.current.value + '-' + memTel3.current.value
        : e.target.name === 'birthday'
        ? bdYear.current.value + '.' + bdMonth.current.value + '.' + bdDay.current.value
        : e.target.value
    }

    //데이터 저장
    setInsertFindIdData(telBdData);
  }
  console.log(insertFindIdData)



  return (
    <div className='findId-div'>
      <div className='findId-div-div'>
        <div className='find-header'>
          <h3>아이디 찾기</h3>
          <span>회원가입 시 등록한 정보로 사용자를 확인해 주세요</span>
        </div>
        <div className='find-content'>
          <div className='findId-content-title'>
            <p>등록 정보로 찾기</p>
            <span>회원가입 시 등록한 정보를 아래에 입력해 주세요</span>
          </div>
          <table className='findId-table'>
            <tbody className='findId-table-body'>
            <tr>
              <td>이름</td>
              <td><input type='text' name='memName' onChange={(e)=>{changeInsertFindId(e)}}></input></td>
            </tr>
            <tr>
              <td>성별</td>
              <td>
                <input type='radio' name='gender' value='남성' onChange={(e)=>{changeInsertFindId(e)}}/> 남성
                <input type='radio' name='gender' value='여성' onChange={(e)=>{changeInsertFindId(e)}}/> 여성
              </td>
            </tr>
            <tr>
              <td>생년월일</td>
              <td>
                <select name='birthday' ref={bdYear} onChange={(e)=>{changeInsertFindId(e)}}>
                  <option value=''>년</option>
                  <option value="2011">2011 년</option>
                  <option value="2010">2010 년</option>
                  <option value="2009">2009 년</option>
                  <option value="2008">2008 년</option>
                  <option value="2007">2007 년</option>
                  <option value="2006">2006 년</option>
                  <option value="2005">2005 년</option>
                  <option value="2004">2004 년</option>
                  <option value="2003">2003 년</option>
                  <option value="2002">2002 년</option>
                  <option value="2001">2001 년</option>
                  <option value="2000">2000 년</option>
                  <option value="1999">1999 년</option>
                  <option value="1998">1998 년</option>
                  <option value="1997">1997 년</option>
                  <option value="1996">1996 년</option>
                  <option value="1995">1995 년</option>
                  <option value="1994">1994 년</option>
                  <option value="1993">1993 년</option>
                  <option value="1992">1992 년</option>
                  <option value="1991">1991 년</option>
                  <option value="1990">1990 년</option>
                  <option value="1989">1989 년</option>
                  <option value="1988">1988 년</option>
                  <option value="1987">1987 년</option>
                  <option value="1986">1986 년</option>
                  <option value="1985">1985 년</option>
                  <option value="1984">1984 년</option>
                  <option value="1983">1983 년</option>
                  <option value="1982">1982 년</option>
                  <option value="1981">1981 년</option>
                  <option value="1980">1980 년</option>
                  <option value="1979">1979 년</option>
                  <option value="1978">1978 년</option>
                  <option value="1977">1977 년</option>
                  <option value="1976">1976 년</option>
                  <option value="1975">1975 년</option>
                  <option value="1974">1974 년</option>
                  <option value="1973">1973 년</option>
                  <option value="1972">1972 년</option>
                  <option value="1971">1971 년</option>
                  <option value="1970">1970 년</option>
                  <option value="1969">1969 년</option>
                  <option value="1968">1968 년</option>
                  <option value="1967">1967 년</option>
                  <option value="1966">1966 년</option>
                  <option value="1965">1965 년</option>
                  <option value="1964">1964 년</option>
                  <option value="1963">1963 년</option>
                  <option value="1962">1962 년</option>
                  <option value="1961">1961 년</option>
                  <option value="1960">1960 년</option>
                  <option value="1959">1959 년</option>
                  <option value="1958">1958 년</option>
                  <option value="1957">1957 년</option>
                  <option value="1956">1956 년</option>
                  <option value="1955">1955 년</option>
                  <option value="1954">1954 년</option>
                  <option value="1953">1953 년</option>
                  <option value="1952">1952 년</option>
                  <option value="1951">1951 년</option>
                  <option value="1950">1950 년</option>
                  <option value="1949">1949 년</option>
                  <option value="1948">1948 년</option>
                  <option value="1947">1947 년</option>
                  <option value="1946">1946 년</option>
                  <option value="1945">1945 년</option>
                  <option value="1944">1944 년</option>
                  <option value="1943">1943 년</option>
                  <option value="1942">1942 년</option>
                  <option value="1941">1941 년</option>
                  <option value="1940">1940 년</option>
                  <option value="1939">1939 년</option>
                  <option value="1938">1938 년</option>
                  <option value="1937">1937 년</option>
                  <option value="1936">1936 년</option>
                  <option value="1935">1935 년</option>
                  <option value="1934">1934 년</option>
                  <option value="1933">1933 년</option>
                  <option value="1932">1932 년</option>
                  <option value="1931">1931 년</option>
                  <option value="1930">1930 년</option>
                  <option value="1929">1929 년</option>
                  <option value="1928">1928 년</option>
                  <option value="1927">1927 년</option>
                  <option value="1926">1926 년</option>
                  <option value="1925">1925 년</option>
                  <option value="1924">1924 년</option>
                  <option value="1923">1923 년</option>
                  <option value="1922">1922 년</option>
                  <option value="1921">1921 년</option>
                  <option value="1920">1920 년</option>
                  <option value="1919">1919 년</option>
                  <option value="1918">1918 년</option>
                  <option value="1917">1917 년</option>
                  <option value="1916">1916 년</option>
                  <option value="1915">1915 년</option>
                  <option value="1914">1914 년</option>
                  <option value="1913">1913 년</option>
                  <option value="1912">1912 년</option>
                  <option value="1911">1911 년</option>
                  <option value="1910">1910 년</option>
                  <option value="1909">1909 년</option>
                  <option value="1908">1908 년</option>
                  <option value="1907">1907 년</option>
                  <option value="1906">1906 년</option>
                  <option value="1905">1905 년</option>
                  <option value="1904">1904 년</option>
                  <option value="1903">1903 년</option>
                  <option value="1902">1902 년</option>
                  <option value="1901">1901 년</option>
                  <option value="1900">1900 년</option>
                </select>
                <select name='birthday' ref={bdMonth} onChange={(e)=>{changeInsertFindId(e)}}>
                  <option value=''>월</option>
                  <option value="01">1 월</option>
                  <option value="02">2 월</option>
                  <option value="03">3 월</option>
                  <option value="04">4 월</option>
                  <option value="05">5 월</option>
                  <option value="06">6 월</option>
                  <option value="07">7 월</option>
                  <option value="08">8 월</option>
                  <option value="09">9 월</option>
                  <option value="10">10 월</option>
                  <option value="11">11 월</option>
                  <option value="12">12 월</option>
                </select>
                <select name='birthday' ref={bdDay} onChange={(e)=>{changeInsertFindId(e)}}>
                  <option value=''>일</option>
                  <option value="01">1 일</option>
                  <option value="02">2 일</option>
                  <option value="03">3 일</option>
                  <option value="04">4 일</option>
                  <option value="05">5 일</option>
                  <option value="06">6 일</option>
                  <option value="07">7 일</option>
                  <option value="08">8 일</option>
                  <option value="09">9 일</option>
                  <option value="10">10 일</option>
                  <option value="11">11 일</option>
                  <option value="12">12 일</option>
                  <option value="13">13 일</option>
                  <option value="14">14 일</option>
                  <option value="15">15 일</option>
                  <option value="16">16 일</option>
                  <option value="17">17 일</option>
                  <option value="18">18 일</option>
                  <option value="19">19 일</option>
                  <option value="20">20 일</option>
                  <option value="21">21 일</option>
                  <option value="22">22 일</option>
                  <option value="23">23 일</option>
                  <option value="24">24 일</option>
                  <option value="25">25 일</option>
                  <option value="26">26 일</option>
                  <option value="27">27 일</option>
                  <option value="28">28 일</option>
                  <option value="29">29 일</option>
                  <option value="30">30 일</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>전화번호</td>
              <td>
                <select name='memTel' ref={memTel1} onChange={(e)=>{changeInsertFindId(e)}}>
                  <option selected value='010'>010</option>
                </select>
                -
                <input type='text' name='memTel' className='tel-input1' ref={memTel2} onChange={(e)=>{changeInsertFindId(e)}}></input>
                -
                <input type='text' name='memTel' className='tel-input2' ref={memTel3} onChange={(e)=>{changeInsertFindId(e)}}></input>
              </td>
            </tr>
            </tbody>
          </table>
          <div className='findId-btn-div'>
            <button className='findId-btn' type='button' onClick={()=>{insertFindId()}}>확인</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default FindId