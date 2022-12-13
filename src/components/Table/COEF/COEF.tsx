import React from 'react'
import '../Table.scss'
import Data from "../../../data/COEF/CostOfElectricityForecast.json"
import ToolBar from "../components/ToolBar"
import TableRow from "./TableRow"
import THead from "../components/THead"

const COEF = () => {
  console.log(Data)
  const convertedData = Object.entries(Data)
  const titleArray = convertedData.shift();
  return (
    <div className="coef__container">
      <ToolBar />
      <div className="table">
        <THead />

      </div>
      {/* <div className="table__container">
        <div className="table">
            <div className="tr table__title">
              <div className="td">
                <p>{titleArray && titleArray[0]}</p>
              </div>
              <div className="td"></div>
              {titleArray && titleArray[1].map((title, index) => {
                return (
                  <div key={index} className="td">{title}</div>
                )
              })}
            </div>
          {convertedData.map((item, index) => {
            console.log(item)
            return (
              <>{index == 4
                ? (
                <div key={index} className="tr border">
                  <div className="td">{item[0]}</div>
                  <div className="td"></div>
                  <TableRow data={item[1]}/>
                </div>
              ) : index == 5
              ? (
              <div key={index} className="tr border">
                <div className="td">{item[0]}</div>
                <div className="td"></div>
                <TableRow data={item[1]}/>
              </div>
            ) : index == 9
            ? (
            <div key={index} className="tr border">
              <div className="td">{item[0]}</div>
              <div className="td"></div>
              <TableRow data={item[1]}/>
            </div>
          ) : index == 10
          ? (
          <div key={index} className="tr border">
            <div className="td">{item[0]}</div>
            <div className="td"></div>
            <TableRow data={item[1]}/>
          </div>
        ) : index == 11
        ? (
        <div key={index} className="tr border">
          <div className="td">{item[0]}</div>
          <div className="td"></div>
          <TableRow data={item[1]}/>
        </div>
      ) : (
                <div key={index} className="tr">
                  <div className="td">{item[0]}</div>
                  <div className="td"></div>
                  <TableRow data={item[1]}/>
              </div>
              )}</>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default COEF