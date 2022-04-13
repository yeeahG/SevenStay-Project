import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RightNavModal.css';


const RightNavModal = (props) => {
  const { open , close } = props;
  //const {isLogin, setIsLogin} = 
  let user = JSON.parse(localStorage.getItem('users'))
  console.log(user);

  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.clear();
    navigate.push('/')
  }



  return (
    <div className={open ? 'openModal logmodal' : 'logmodal'}>
      {open ? (

        <section className='section__login'>

          <main>
            {/*원본*/}
            {/* <a href="../LoginSignup/SignupForm">
              <div className='signup'>회원가입</div>
            </a>  */}            
            {localStorage.getItem('users') ? 
            null : <a href="../LoginSignup/SignupForm"><div className='signup'>회원가입</div></a> }

            {/* < {isLogin ? '로그아웃':'로그인'} >*/}
            {/* <a href="../LoginSignup/LoginForm">
              <div className='login'>임시로그인</div>
            </a>*/}

            {/* 로그아웃 기능 테스트 - 회원가입 해야 로그아웃 버튼이 생김*/}
            {localStorage.getItem('users') ? 
            <a href="/"><div className='login' onClick={LogOut}>로그아웃</div></a>
            :
            <a href="../LoginSignup/LoginForm"><div className='login'>로그인</div></a>
            }

            {/* {localStorage.getItem('users') ? 
            <div className='login' onClick={LogOut}>로그아웃</div>: null
            } */}
            
            <div className='line' />
            <div className='menu'>예약내역</div>
            <div className='menu'>쿠폰함</div>
            <div className='line' />
            <div className='menu'>고객센터</div>
            <div className='menu'>공지사항</div>
            <a href="../LoginSignup/UserInfo">
              <div className='menu'>회원정보</div>
            </a>
            <div className='line' />
          </main>

          <footer className="footer">
            <button type="button" className="close" onClick={close}>
              close
            </button>
          </footer>

        </section>
      ) : null}
    </div>
  )

}

export default RightNavModal