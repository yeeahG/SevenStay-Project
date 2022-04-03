import React, { useState, useUserContext} from 'react'
import './LoginForm.css'

const LoginForm = () => {
  
  let [loginId, setLoginId] = useState("");
  let [loginPassword, setLoginPassword] = useState("");
  let [savedLoginId, setSavedLoginId] = useState("");
  let [savedLoginPassword, setSavedLoginPassword] = useState("");

  let sessionStorage = window.sessionStorage;

  const onSubmitAccount = () => {
    sessionStorage.setItem("loginId", loginId);
    sessionStorage.setItem("loginPassword", loginPassword);

    setSavedLoginId(sessionStorage.getItem("loginId"));
    setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
  }
  

  return (
    <div className='container'>
      <input 
        id="id" 
        name="id" 
        placeholder="아이디를 입력해주세요" 
        type="text"
        onChange={ (e) => {setLoginId(e.target.value)}}
      />
      <input
        id="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        onChange={ (e) => {setLoginPassword(e.target.value)}}
      />

      <button 
        onClick={onSubmitAccount} 
        className='inputBtn'>
        로그인
      </button>

      <div>
        sessionStorage에 저장된 loginId는 {savedLoginId} 이고 loginPassword는 {savedLoginPassword} 이다. 
      </div>
      
      <div>
        { JSON.stringify(sessionStorage) }
      </div>
    </div>
    
  )
}

export default LoginForm