import React from 'react';
import { NavLink } from "react-router-dom";

const SwitchingMenu = () => {
  return (
    <div className="switching__menu">
          <NavLink to="AverageCost">Average Cost of Electricity Forecast</NavLink>
          <NavLink to="ScenarioCost">Scenario Cost of Electricity Forecast:</NavLink>
          <NavLink to="MonthProfile">Month Profile Charting</NavLink>
          <NavLink to="FinancialYear">Financial Year Position Charting:</NavLink>
    </div>
  )
}

export default SwitchingMenu