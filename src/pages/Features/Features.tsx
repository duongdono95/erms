import React from 'react';
import './Features.scss';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { NavLink, Routes, Route } from 'react-router-dom'
import { featureRoutes } from '../../routes/routes'
import SwitchingMenu from "./components/SwitchingMenu/SwitchingMenu";
const Features = () => {
  return (
    <div className="page">
      <section className="header">
        <div><NavBar /></div>
        <SwitchingMenu />
      </section>
      <section className="body">
        <Routes>
          {featureRoutes.map((route) => {
            return (
              <Route path={route.path} element={<route.component />}/>
            )
          })}
        </Routes>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default Features