import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const navigate = useNavigate();

  const getToken = async () => {
    const token = new URL(window.location.href).searchParams.get("code");
    console.log(token)
    const res = axios.post(
      "https://kauth.kakao.com/oauth/token",
      {
        grant_type: "authorization_code",
        client_id: 'adcad814e1275bc4c566c2bf9822fe52',
        redirect_uri : 'http://localhost:3000/auth',
        code : token,
      },
      {
        headers : {
          "Content-type" : "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    return res;
  };

  useEffect(()=>{
    getToken()
    .then((res)=>{
      if(res){
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        navigate("/");
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  },[]);
  return (
    <div></div>
  )
}

export default Auth