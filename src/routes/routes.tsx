import React from 'react';

// -------------------------- pageRoutes -------------------------------------------//
import HomePage from "../pages/HomePage/HomePage";
import Features from "../pages/Features/Features";

// -------------------------- featureRoutes -------------------------------------------//
import AverageCost from "../pages/Features/Categories/AverageCost/AverageCost";
import FinancialYear from "../pages/Features/Categories/FinancialYear/FinancialYear";
import MonthProfile from "../pages/Features/Categories/MonthProfile/MonthProfile";
import ScenarioCost from '../pages/Features/Categories/ScenarioCost/ScenarioCost';


interface route{
  path: string;
  component: React.FC;
}

export const pageRoutes:route[] = [
  {path: '/', component: HomePage},
  {path: '/Features/*', component: Features},
]
export const featureRoutes:route[] = [
  {path: '/AverageCost', component: AverageCost},
  {path: '/FinancialYear', component: FinancialYear},
  {path: '/MonthProfile', component: MonthProfile},
  {path: '/ScenarioCost', component: ScenarioCost},
]