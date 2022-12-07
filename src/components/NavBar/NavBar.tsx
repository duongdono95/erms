import React from 'react'
import { NavLink } from "react-router-dom"
import './NavBar.scss'

const NavBar = () => {
  const logo = require("./logo.png") as string
  return (
    <div className="nav__container">
      <NavLink to="/">
        <div className="nav__item">
          <img src={logo} alt="Logo" />
        </div>
      </NavLink>
      <div className="nav__item flex__grow">
        <ul className="menu__list">
          <li className="menu__item">Nav</li>
          <li className="menu__item">Nav</li>
          <li className="menu__item">Nav</li>
          <li className="menu__item">Nav</li>
          <li className="menu__item">Nav</li>
        </ul>
      </div>
      <div className="nav__item nav__icons">
      <i className="fa-solid fa-user"></i>
      <i className="fa-solid fa-right-from-bracket"></i>
      </div>
    </div>
  )
}

export default NavBar