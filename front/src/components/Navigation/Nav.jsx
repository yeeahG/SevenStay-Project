import React, { useState } from 'react';
import './Nav.css';
import image from '../Navigation/images/7stay.png';
import Calender from './Calender';
import Modal from './Modal';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import RightNav from './RightNav';

const Nav = () => {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (

    <div className='navicontainer'>
      <a href='/'>
        <img className="storeTitle"
          src={image} alt="Seven stay title" />
      </a>

      {/* 네비게이션 예약 부분*/}
      <div className='naviCenter'>
        <div className='naviContent'>
          <div className='naviLocation'>위치</div>
          <input className="naviInput" placeholder='어디로 여행가세요?' />
        </div>

        <div className="naviLine" />

        <div className='naviContent' id="navi2">
          <Calender />
        </div>
        <div className="naviLine" />

        <div className='naviContent' id="label4">
          <Modal open={modalOpen} close={closeModal}></Modal>
          <div className='naviGuest' onClick={openModal}>인원</div>
          <div className="naviAddGuest" onClick={openModal}>게스트 추가</div>
        </div>

        <div className='naviSearch'>
          <SearchIcon />
        </div>
      </div>

      {/* 네비게이션 로그인 부분*/}
      <div className='naviRight'>
        <div className='naviLang'>
          <LanguageIcon />
        </div>
        <RightNav></RightNav>
      </div>

    </div>

  )

}

export default Nav