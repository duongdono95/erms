import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <section className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__item">
          <i className="fa-regular fa-copyright"></i>
          <span>ERMS</span>
        </div>
        <div className="footer__item">
          <ul>
            <li>Help</li>
            <li>Privacy & Legal Notices</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer__item">
          <i className="fa-brands fa-facebook footer__icon"></i>
          <i className="fa-brands fa-square-whatsapp footer__icon"></i>
          <i className="fa-brands fa-linkedin footer__icon"></i>
        </div>
      </div>
    </section>
  )
}

export default Footer