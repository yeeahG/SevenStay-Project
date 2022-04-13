import React from 'react'

const UserInfo = () => {
    let localStorage = window.localStorage;
    //console.log(localStorage);
    console.log(localStorage.getItem("users"));
    console.log(localStorage.getItem("users.id"));

    

  return (
    <div>
        <h3>USER INFO</h3>
        loginId {localStorage.getItem("signinId")}<br/>
        고객이름 {localStorage.getItem("username")}<br/>
        비밀번호 {localStorage.getItem("signinPassword")}<br/>
        phon Number {localStorage.getItem("phoneNumber")}<br/>
    </div>
  )
}

export default UserInfo