import React from 'react';
import ToolBar from "../components/ToolBar/ToolBar";
import '../Table.scss';
import Data from '../../../data/SCOEF/ScenarioCostOfElectricityForecast.json'
import THead from "../components/THead";
import TBody from './TBody'
import mathAverage from '../../../hook/mathAverage'
import mathRound from "../../../hook/mathRound";

const SCOEF = () => {
  const convertedData = Object.entries(Data)
  const rowTitles = convertedData.map(item => item[0])
  const dataArrays = convertedData.map(item => Object.entries(item[1]))

  return (
    <div className="table__container">
      <ToolBar />
        <div className="table">
          <THead />
          {dataArrays.map((arrays, index) => {
            const averageValue = mathRound(mathAverage(arrays))
            return (
              <TBody key={index} averageValue={averageValue} rowTitle={rowTitles[index]} arrays={arrays.reverse()} />
            )
          })}
        </div>
    </div>
  )
}

export default SCOEF