import React, { useState, useUserContext} from 'react'
import { useHistory } from 'react-router-dom';
import UserLogin from './UserLogin'
import './LoginForm.css'

const LoginForm = () => {
  //내생각에 여기는 get method를 써서 db에서 등록된 id, pw랑 비교해서 button이 실행되게 해야할 듯

  //--------1버전
  // let [loginId, setLoginId] = useState("");
  // let [loginPassword, setLoginPassword] = useState("");
  // let [savedLoginId, setSavedLoginId] = useState("");
  // let [savedLoginPassword, setSavedLoginPassword] = useState("");

  // let sessionStorage = window.sessionStorage;

  // const onSubmitAccount = () => {
  //   sessionStorage.setItem("loginId", loginId);
  //   sessionStorage.setItem("loginPassword", loginPassword);

  //   setSavedLoginId(sessionStorage.getItem("loginId"));
  //   setSavedLoginPassword(sessionStorage.getItem("loginPassword"));
  //   console.log(sessionStorage);
  // }

  //-------2버전
  {/*const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  const submit = (e) => {
    e.preventDefault();
    if(userId===sessionStorage.getItem("signinId")) {
      history.push('/');
    } 
  } */}

  //3버전
  const adminUser = {
    email: "admin@admin.com",
    password: "admin",
  }
  const [user, setUser]= useState({name: "", email:""});
  const [error, setError]=useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email
    });
    } else {
    console.log("Details do not match");
    setError("Details do not match")
    }
  } 

  const Logout = () => {
    console.log("log out");
    setUser({name: "", email: ""});
  }

  return (
    <div className='container'>
       {/* <input 
        id="id" 
        name="id" 
        placeholder="아이디를 입력해주세요" 
        type="text"
        //onChange={ (e) => {setLoginId(e.target.value)}}
      />
      <input
        id="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        //onChange={ (e) => {setLoginPassword(e.target.value)}}
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
      </div>  */}

      {/* -------2버전 */}
      {/*<input value={userId} onChange={(e) => setUserId(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={submit}>로그인</button>*/}

      {(user.email != "") ? (
        <div className='welcome'>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      )  : (
        <UserLogin Login={Login} error={error}/>
      )}
    </div>
    
  )
}

export default LoginForm