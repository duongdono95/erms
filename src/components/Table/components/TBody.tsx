import React, {useEffect, useState} from 'react'
import RawData from "../../../data/SCOEF/ScenarioCostOfElectricityForecast.json"
// import TBodyRow from "./TBodyRow"

const TBody = () => {
  const [processedData, setProcessedData] = useState<any>([])
  const convertedRawData = Object.values(RawData)
  const rowTitleArray = Object.keys(RawData)

  useEffect(() => {
    const dataProcessor = () => {
      const result = convertedRawData.map(item => Object.entries(item))
      result.forEach((item) => {
        setProcessedData((prev:any) => [...prev, item])
      })
    }
    dataProcessor()
  },[])

  return (
    <>
      {
        processedData.map((tBodys:any, tBodyIndex:number) => {
          return (
            <div key={tBodyIndex} className="tbody">
              {tBodys.reverse().map((rows:any,index:number) => {
                return (
                  <div className="tr" key={index}>
                    {
                      index === 0 ?
                      (<div className="td "><p className="row__title">{rowTitleArray[tBodyIndex]}</p></div>) :
                      (<div className="td"></div>)
                    }
                    <div className="td dark__bg"><p>{rows[0]}</p></div>
                    {rows[1].map((data:any, dataIndex:number) => {
                        return (
                          <div className="td" key={dataIndex}>
                            <p>{Math.round((data + Number.EPSILON)*100)/100}</p>
                          </div>
                        )
                      })}
                    <div className="td"><p>{rows[1].reduce((a:number , b:number) => Math.round(((a+b) + Number.EPSILON)*100)/100)}</p></div>
                    {
                      index === 0 ?
                      (<div className="td expand-btn"><i className="fa-solid fa-chevron-down"></i>
                      </div>) :
                      (<div className="td"></div>)
                    }
                  </div>
                )
              })}
            </div>
          )
        })
      }
    </>
  )
}

export default TBody