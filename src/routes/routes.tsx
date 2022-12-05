import React from 'react';
import HomePage from "../pages/HomePage/HomePage";
import ScenarioCostPage from "../pages/ScenarioCostPage/ScenarioCostPage";
import MonthProfilePage from "../pages/MonthProfilePage/MonthProfilePage";
import FinancialYearPage from "../pages/FinancialYearPage/FinancialYearPage";
import AverageCostPage from "../pages/AverageCostPage/AverageCostPage";

interface route{
  path: string;
  component: React.FC;
}

const routes:route[] = [
  {path: '/', component: HomePage},
  {path: '/ScenarioCostPage', component: ScenarioCostPage},
  {path: '/MonthProfilePage', component: MonthProfilePage},
  {path: '/FinancialYearPage', component: FinancialYearPage},
  {path: '/AverageCostPage', component: AverageCostPage}

]

export default routes