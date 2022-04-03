import React from 'react'
import './Modal.css'

const Modal = (props) => {
  const { open, close} = props;

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>

          <main>
            {props.children}
            <div className='modalCount'>
              <p className='modalAdult'>성인</p>
              <div className='modalCountNumber'>
                <button id='decrease'>-</button>
                <p id='number'>0</p>
                <button id='increase'>+</button>
              </div>
            </div>

            <div className='modalCount'>
              <p className='modalAdult'>어린이</p>
              <div className='modalCountNumber'>
                <button id='decrease'>-</button>
                <p id='number'>0</p>
                <button id='increase'>+</button>
              </div>
            </div>

            <div className='modalCount'>
              <p className='modalAdult'>유아</p>
              <div className='modalCountNumber'>
                <button id='decrease'>-</button>
                <p id='number'>0</p>
                <button id='increase'>+</button>
              </div>
            </div>

            <div className='modalCount'>
              <p className='modalAdult'>반려동물</p>
              <div className='modalCountNumber'>
                <button id='decrease'>-</button>
                <p id='number'>0</p>
                <button id='increase'>+</button>
              </div>
            </div>
          </main>

          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>

        </section>
      ) : null}
    </div>

  )
  
}

export default Modal