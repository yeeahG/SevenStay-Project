import React, { useState } from 'react';
import RightNavModal from './RightNavModal';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './RightNavModal.css'


const Login = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
      <>
        <button type='button' className='navi__rb' onClick={openModal}>
          <div className='deha'>
            <DehazeIcon />
          </div>
          <div className='account'>
            <AccountCircleIcon />
          </div>
        </button>

        <div>
          <RightNavModal open={modalOpen} close={closeModal}></RightNavModal>
        </div>
      </>    
    )
}

export default Login