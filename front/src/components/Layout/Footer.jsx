import React from 'react'
import classes from './Footer.module.css';
import { FaFacebook , FaInstagramSquare, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
            <span>
              &copy;  2022 Seven Stay, Inc. 개인정보 처리방침·이용약관·사이트맵·한국의 변경된 환불 정책·회사 세부정보
            </span>
            <span className={classes.footerIcon}>
              <FaFacebook size="24"/>
              <FaInstagramSquare size="24"/>
              <FaTwitter size="24"/>
            </span>
    </div>
  )
}

export default Footer