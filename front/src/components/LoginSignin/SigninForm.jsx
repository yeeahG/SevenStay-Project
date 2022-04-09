import React, { useState } from 'react'
import './SigninForm.css'

const SigninForm = () => {
  let [phoneNumber, setPhoneNumber] = useState("");
  let [username, setUsername] = useState("");
  let [signinId, setSigninId] = useState("");
  let [signinPassword, setSigninPassword] = useState("");

  let [savedPhoneNumber, setSavedPhoneNumber] = useState("");
  let [savedUsername, setSavedUsername] = useState("");
  let [savedSigninId, setSavedSigninId] = useState("");
  let [savedSigninPassword, setSavedSigninPassword] = useState("");

  let sessionStorage = window.sessionStorage;
  //let lcoalStorage = window.localStorage;

  //다른시도
  const onSubmitSignIn = (e) => {
    sessionStorage.setItem("phoneNumber", phoneNumber);
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("signinId", signinId);
    sessionStorage.setItem("signinPassword", signinPassword);
    
    setSavedPhoneNumber(sessionStorage.getItem("phoneNumber"));
    setSavedUsername(sessionStorage.getItem("username"));
    setSavedSigninId(sessionStorage.getItem("signinId"));
    setSavedSigninPassword(sessionStorage.getItem("signinPassword"));
    
    const userData = {
      id: sessionStorage.getItem("signinId"),
      password: sessionStorage.getItem("signinPassword"),
      phone: sessionStorage.getItem("phoneNumber"),
      userName: sessionStorage.getItem("username"),

      /*
      phoneNumber: phoneNumber,
      username: username,
      signinId: signinId,
      signinPassword: signinPassword, 
      */
    }

    sessionStorage.setItem("users", JSON.stringify(userData));
    console.log('user added');

    /*
    const json = JSON.stringify(userData);
    localStorage.setItem(phoneNumber, json);
    console.log('user added');
    */
    console.log(userData);

    alert('가입이 완료되었습니다')
    
  } 
  console.log(sessionStorage);
  console.log(JSON.stringify(sessionStorage));
  //console.log(sessionStorage.getItem("signinId"));

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

      <div>
        <h3>USER INFO</h3>
        sessionStorage에 저장된<br/>
        loginId {savedSigninId}<br/>
        고객이름 {savedUsername}<br/>
        비밀번호 {savedSigninPassword}<br/>
        phon Number {savedPhoneNumber}<br/>
      </div>

    </div>
  )
}

export default SigninForm