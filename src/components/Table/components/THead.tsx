import React from 'react'
import rawData from "../../../data/COEF/CostOfElectricityForecast.json"
import mathRound from "../../../hook/mathRound";
const GeneralDataRows = () => {
  const convertedRawData = Object.entries(rawData)
  const titleArray = convertedRawData[0];
  const generalDataRowArray = convertedRawData.slice(1, 5);

  return (
    <div className="thead">
      <div className="tr col__title">
        <div className="th"></div>
        <div className="th"></div>
        {titleArray[1].map((month, index) => {
          return (
            <div key={index} className="th">{month}</div>
          )
        })}
        <div className="th"></div>
      </div>
      {generalDataRowArray.map((item, index) => {

        return(
          <div key={index} className="tr">
            <div className="td row__title">{item[0]}</div>
            <div className="td"></div>
            {item[1].map((data, index) => {
              return <div key={index} className="td">{typeof data === 'number' && mathRound(data)}</div>
            })}
            <div className="td"></div>
          </div>
        )
      })}
    </div>
  )
}

export default GeneralDataRows