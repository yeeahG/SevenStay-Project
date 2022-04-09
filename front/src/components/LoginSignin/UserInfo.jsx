import React, { useState } from 'react'

const UserInfo = () => {
    let sessionStorage = window.sessionStorage;
    console.log(sessionStorage);
    
  return (
    <div>
        <h3>USER INFO</h3>
        sessionStorage에 저장된<br/>
        loginId {sessionStorage.getItem("signinId")}<br/>
        고객이름 {sessionStorage.getItem("username")}<br/>
        비밀번호 {sessionStorage.getItem("signinPassword")}<br/>
        phon Number {sessionStorage.getItem("phoneNumber")}<br/>
    </div>
  )
}

export default UserInfo