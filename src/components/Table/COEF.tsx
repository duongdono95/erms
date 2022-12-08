import React from 'react'
import './COEF.scss'
import Data from "../../data/COEF/CostOfElectricityForecast.json"
import ToolBar from "./components/ToolBar"
import TableRow from "./TableRow"

const COEF = () => {
  const convertedData = Object.entries(Data)
  const titleArray = convertedData.shift();
  console.log(convertedData)
  return (
    <div className="coef__container">
      <ToolBar />
      <div className="table__container">
        <div className="table">
          {convertedData.map((item, index) => {
            const
            return (
              <div key={index} className="tr">
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default COEF