import React from 'react'
import '../Table.scss'
import Data from "../../../data/COEF/CostOfElectricityForecast.json"
import ToolBar from "../components/ToolBar"
import TableRow from "./TableRow"
import THead from "../components/THead"

const COEF = () => {
  const convertedData = Object.entries(Data)
  const theadArray = convertedData.splice(0, 5);
  return (
    <div className="coef__container">
      <ToolBar />
      <div className="table">
        <THead />
        {convertedData.map((item, index) => {
          return (
            <div key={index} className="tbody">
              <div className="tr">
                <div className="td "><p className="row__title">{item[0]}</p></div>
                <div className="td"></div>
                {
                  item[1].map((item, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="td"> <p>{typeof item === "number" && Math.round((item + Number.EPSILON)*100)/100}</p></div>
                      </React.Fragment>
                    )
                  })
                }
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default COEF