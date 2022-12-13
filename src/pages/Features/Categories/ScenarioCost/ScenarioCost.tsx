import React from 'react';
import SCOEF from "../../../../components/Table/SCOEF/SCOEF";
import HightlightedData from "../../components/HightlightedData/HightlightedData";
import '../../Features.scss';

const ScenarioCost = () => {
  return (
    <div className="features__container">
      <div className="features__item">
        <p className="features__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
      </div>
      <div className="highlighted__data__section">
        <HightlightedData />
        <HightlightedData />
      </div>
      <div className="features__item summarized__chart">
        <div className="chart__container">
        </div>
      </div>
      <div className="features__item">
        <SCOEF />
      </div>
    </div>
  )
}

export default ScenarioCost