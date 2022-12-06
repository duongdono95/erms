import React from 'react';
import './HomePage.scss'
import {ReactComponent as GraphicIcon1} from '../../assets/AverageCostOfElectricityForeCast.svg'
import {ReactComponent as GraphicIcon2} from '../../assets/ScenarioCostOfElectricityForecast.svg'
import {ReactComponent as GraphicIcon3} from '../../assets/MonthProfileCharting.svg'
import {ReactComponent as GraphicIcon4} from '../../assets/FinancialYearPositionCharting.svg'
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Button } from "../../components/button";
const HomePage = () => {
  return (
    <div className="page">
      <section className="header">
        <div><NavBar /></div>
        <div className="introduction">
          <h1 >Welcome to New Zealand Energy Risk Management System</h1>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi molestias possimus odio natus maiores distinctio quae animi consequatur ipsum cupiditate reprehenderit neque tempore rem eveniet odit consequuntur. Sapiente, iusto.</p>
            {/* <Button variant={"primary"}>Primary</Button> */}
            <Button variant={"secondary"}>Read More</Button>
          </div>
        </div>
      </section>
      <section className="body">
        <div className="body__container">
          <div className="body__item">
            <div className="content__group">
              <h1>Average Cost Of Electricity Forecast</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            </div>
            <GraphicIcon1 />
          </div>
          <div className="spacer"></div>
          <div className="body__item reverse">
            <div className="content__group">
              <h1>Scenario Cost of Electricity Forecast</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            </div>
            <GraphicIcon2 />
          </div>
          <div className="spacer"></div>
          <div className="body__item">
            <div className="content__group">
              <h1>Month Profile Charting</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            </div>
            <GraphicIcon3 />
          </div>
          <div className="spacer"></div>
          <div className="body__item reverse">
            <div className="content__group">
              <h1>Financial Year Position Charting</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
            </div>
            <GraphicIcon4 />
          </div>
        </div>
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  )
}

export default HomePage