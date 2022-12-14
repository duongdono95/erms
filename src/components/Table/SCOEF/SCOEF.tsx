import React from 'react';
import ToolBar from "../components/ToolBar";
import '../Table.scss';
import Data from '../../../data/SCOEF/ScenarioCostOfElectricityForecast.json'
import THead from "../components/THead";
import TBody from '../components/TBody'

const SCOEF = () => {
  const convertedData = Object.entries(Data)
  const rowTitles = convertedData.map(item => item[0])
  const dataArrays = convertedData.map(item => Object.entries(item[1]))


  return (
    <div className="scoef__wrapper">
      <ToolBar />
      <div className="scoef__table__container">
        <div className="table">
          <THead />
          {dataArrays.map((arrays, index) => {
            return (
              <TBody key={index} rowTitle={rowTitles[index]} arrays={arrays.reverse()} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SCOEF