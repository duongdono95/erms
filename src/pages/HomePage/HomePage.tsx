import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import './HomePage.scss'

const HomePage = () => {
  return (
    <div className="page">
      <div className="page__item">
        <NavBar />
      </div>
      <div className="page__introduction page__item">
        <h1 >Welcome to New Zealand Energy Risk Management System</h1>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi molestias possimus odio natus maiores distinctio quae animi consequatur ipsum cupiditate reprehenderit neque tempore rem eveniet odit consequuntur. Sapiente, iusto.</p>
          <button>Read More</button>
        </div>
      </div>
      <div className="content__container page__item">
      </div>
    </div>
  )
}

export default HomePage