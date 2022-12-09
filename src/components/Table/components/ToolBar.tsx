import React from 'react';
import './ToolBar.scss';
const ToolBar = () => {
  return (
    <div className="toolbar">
      <div className="toolbar__group">
        <div className="switch__option isActive">
          <p>Total</p>
        </div>
        <div className=" switch__option dropdown__container">
          <button className="dropdown__btn site__selector">Site 1</button>
          <div className="dropdown__options">
            <option value="site1">Site 1</option>
            <option value="site2">Site 2</option>
            <option value="site3">Site 3</option>
            <option value="site4">Site 4</option>
            <option value="site5">Site 5</option>
          </div>
        </div>
      </div>
      <div className="toolbar__group">
        <p className="year__selector__label">From: </p>
        <div className="switch__option dropdown__container">
          <button className="year__selector">Site 1 <span><i className="fa-solid fa-angle-down"></i></span></button>
          <div className="dropdown__options year__selector_options">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
          </div>
        </div>
          <i className="fa-solid fa-file-arrow-down"></i>
      </div>
    </div>
  )
}

export default ToolBar