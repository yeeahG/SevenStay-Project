import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignupForm.css'

const SignupForm = () => {
  let [phoneNumber, setPhoneNumber] = useState("");
  let [username, setUsername] = useState("");
  let [signinId, setSigninId] = useState("");
  let [signinPassword, setSigninPassword] = useState("");

  let [savedPhoneNumber, setSavedPhoneNumber] = useState("");
  let [savedUsername, setSavedUsername] = useState("");
  let [savedSigninId, setSavedSigninId] = useState("");
  let [savedSigninPassword, setSavedSigninPassword] = useState("");

  let sessionStorage = window.sessionStorage;

  //localstorage로 사용
  let localStorage = window.localStorage;

  const navigate = useNavigate();


  //다른시도
  
  const onSubmitSignIn = (e) => {
    /*
    sessionStorage.setItem("phoneNumber", phoneNumber);
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("signinId", signinId);
    sessionStorage.setItem("signinPassword", signinPassword);
    
    setSavedPhoneNumber(sessionStorage.getItem("phoneNumber"));
    setSavedUsername(sessionStorage.getItem("username"));
    setSavedSigninId(sessionStorage.getItem("signinId"));
    setSavedSigninPassword(sessionStorage.getItem("signinPassword"));
    */

    //localstorage
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("username", username);
    localStorage.setItem("signinId", signinId);
    localStorage.setItem("signinPassword", signinPassword);
    
    setSavedPhoneNumber(localStorage.getItem("phoneNumber"));
    setSavedUsername(localStorage.getItem("username"));
    setSavedSigninId(localStorage.getItem("signinId"));
    setSavedSigninPassword(localStorage.getItem("signinPassword"));
    

    const userData = {
      id: localStorage.getItem("signinId"),
      password: localStorage.getItem("signinPassword"),
      phone: localStorage.getItem("phoneNumber"),
      userName: localStorage.getItem("username"),
    }

    sessionStorage.setItem("users", JSON.stringify(userData));
    localStorage.setItem("users", JSON.stringify(userData));
    console.log('user added');

    /*
    const json = JSON.stringify(userData);
    localStorage.setItem(phoneNumber, json);
    console.log('user added');
    */
    console.log(userData);

    alert('가입이 완료되었습니다')
    //navigate.push('/')
    window.location = "/LoginSignup/LoginForm ";
  } 
  console.log(sessionStorage);
  console.log(JSON.stringify(sessionStorage));
  //console.log(sessionStorage.getItem("signinId"));

  console.log(localStorage);
  console.log(JSON.stringify(localStorage));
  



  //database
  // const onSubmitSignIn = async () => {
  //   const item = {
  //     phone: localStorage.getItem("phoneNumber"),
  //     user_name: localStorage.getItem("username"), 
  //     user_id: localStorage.getItem("signinId"),
  //     user_password: localStorage.getItem("signinPassword")
  //   }
  //   console.log(item);


  //   const result = await fetch("http://localhost:8090/signup", 
  //   {
  //     method:'POST', 
  //     body:JSON.stringify(item),
  //     headers: {
  //       "Content-Type":'application/json',
  //       "Accept" : 'application/json'
  //     }
  //   })
  //   result = await result.json()
  //   localStorage.setItem("user-info", JSON.stringify(result))
  //   navigate.push("/add")
  // }




  return (
    <div className='signContainer'>
       <input label="연락처" name="phone" placeholder="연락처" onChange={(e) => {setPhoneNumber(e.target.value)}}></input>
      <input label="이름" name="username" placeholder="이름" onChange={(e) => {setUsername(e.target.value)}}></input>
      <input label="아이디" name="userId" placeholder="아이디"  onChange={ (e) => {setSigninId(e.target.value)}}></input>
      <input label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={(e) => {setSigninPassword(e.target.value)}}></input>
      <input label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password"></input> 
      
      {/*
      <input label="연락처" name="phone" id="phone" placeholder="연락처" ></input>
      <input label="이름" name="username" id="phone" placeholder="이름"></input>
      <input label="아이디" name="userId" id="phone" placeholder="아이디"></input>
      <input label="비밀번호" name="password" id="phone" placeholder="비밀번호" type="password" ></input>
      <input label="비밀번호 확인" name="passwordConfirm" id="passwordConfirm" placeholder="비밀번호 확인" type="password"></input>*/}
      
      <button onClick={onSubmitSignIn} className='inputBtn'>
        회원가입
      </button>

      {/* <div>
        <h3>USER INFO</h3>
        sessionStorage에 저장된<br/>
        loginId {savedSigninId}<br/>
        고객이름 {savedUsername}<br/>
        비밀번호 {savedSigninPassword}<br/>
        phon Number {savedPhoneNumber}<br/>
      </div> */}

    </div>
  )
}

export default SignupForm
