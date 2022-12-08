import React from 'react'
import '../../Features.scss'
import COEF from "../../../../components/Table/COEF"

const AverageCost = () => {
  return (
    <div className="features__container">
      <div className="features__item">
        <p className="features__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took</p>
      </div>
      <div className="features__item summarized__chart">
        <div className="chart__container">
        </div>
      </div>
      <div className="features__item">
        <COEF />
      </div>
    </div>
  )
}

export default AverageCost