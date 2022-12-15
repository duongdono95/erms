import React from 'react'
import '../Table.scss'
import Data from "../../../data/COEF/CostOfElectricityForecast.json"
import ToolBar from "../components/ToolBar/ToolBar"

import THead from "../components/THead"

const COEF = () => {
  const convertedData = Object.entries(Data)
  // to cut off the data of THead from ConvertedData
  const tBodyData = convertedData.splice(5, convertedData.length);
  return (
    <div className="table__container">
      <ToolBar />
      <div className="table">
        <THead />
        {tBodyData.map((item, index) => {
          const tRowTitle = item[0]
          const TRowData = item[1]
          return (
            <div key={index} className="tbody">
              <div className="tr">
                <div className="td "><p className="row__title">{tRowTitle}</p></div>
                <div className="td"></div>
                {
                  TRowData.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="td"> <p>{typeof data === "number" && Math.round((data + Number.EPSILON)*100)/100}</p></div>
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