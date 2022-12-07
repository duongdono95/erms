import React from 'react';
import { NavLink } from "react-router-dom";

const SwitchingMenu = () => {
  return (
    <div className="switching__menu">
          <NavLink to="AverageCost">AverageCost</NavLink>
          <NavLink to="FinancialYear">FinancialYear</NavLink>
          <NavLink to="MonthProfile">MonthProfile</NavLink>
          <NavLink to="ScenarioCost">ScenarioCost</NavLink>
    </div>
  )
}

export default SwitchingMenu