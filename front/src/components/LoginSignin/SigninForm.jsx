import React, { useState } from 'react'
import './SigninForm.css'

const SigninForm = () => {
  let [phoneNumber, setPhoneNumber] = useState("");
  let [signinId, setSigninId] = useState("");
  let [signinPassword, setSigninPassword] = useState("");

  let [savedPhoneNumber, setSavedPhoneNumber] = useState("");
  let [savedSigninId, setSavedSigninId] = useState("");
  let [savedSigninPassword, setSavedSigninPassword] = useState("");

  let sessionStorage = window.sessionStorage;


  const onSubmitSignIn = () => {
    sessionStorage.setItem("phoneNumber", phoneNumber);
    sessionStorage.setItem("signinId", signinId);
    sessionStorage.setItem("signinPassword", signinPassword);
    
    setSavedPhoneNumber(sessionStorage.getItem("phoneNumber"));
    setSavedSigninId(sessionStorage.getItem("signinId"));
    setSavedSigninPassword(sessionStorage.getItem("signinPassword"));
    
    const userData = {
      id: sessionStorage.getItem("signinId"),
      password: sessionStorage.getItem("signinPassword")
    }
    
    console.log(userData);
  }
  console.log(sessionStorage);
  //console.log(sessionStorage.getItem("signinId"));



  return (
    <div className='signContainer'>
      <input label="연락처" name="phone" placeholder="연락처" onChange={(e) => {setPhoneNumber(e.target.value)}}></input>
      <input label="이름" name="username" placeholder="이름"></input>
      <input label="아이디" name="userId" placeholder="아이디"  onChange={ (e) => {setSigninId(e.target.value)}}></input>
      <input label="비밀번호" name="password" placeholder="비밀번호" type="password" onChange={(e) => {setSigninPassword(e.target.value)}}></input>
      <input label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인" type="password"></input>

      <button onClick={onSubmitSignIn} className='inputBtn'>
        회원가입
      </button>

      <div>
        sessionStorage에 저장된 loginId는 {savedSigninId} 이고 loginPassword는 {savedSigninPassword} phon Number은 {savedPhoneNumber}이다. 
      </div>
      <div>
        { JSON.stringify(sessionStorage) }
      </div>

    </div>
  )
}

export default SigninForm