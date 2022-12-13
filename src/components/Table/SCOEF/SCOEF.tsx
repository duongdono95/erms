import React from 'react';
import ToolBar from "../components/ToolBar";
import '../Table.scss';
import Data2 from '../../../data/SCOEF/ScenarioCostOfElectricityForecast.json'
import THead from "../components/THead";
import TBody from "../components/TBody";
const SCOEF = () => {
  return (
    <div className="scoef__wrapper">
      <ToolBar />
      <div className="scoef__table__container">
        <div className="table">
          <THead />
          <TBody />
        </div>
      </div>
    </div>
  )
}

export default SCOEF