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
          console.log(tBodys)
          return (
            <div className="tbody">
              {tBodys.map((rows:any,index:number) => {
                return (
                  <div className="tr" key={index}>
                    {
                      index === 0 ?
                      (<div className="td row__title">{rowTitleArray[tBodyIndex]}</div>) :
                      (<div className="td"></div>)
                    }
                    <div className="td dark__bg">{rows[0]}</div>
                    {rows[1].map((data:any, dataIndex:number) => {
                        return (
                          <div className="td" key={dataIndex}>
                            {Math.round((data + Number.EPSILON)*100)/100
                            }
                          </div>
                        )
                      })}
                    <div className="td">{rows[1].reduce((a:number , b:number) => Math.round(((a+b) + Number.EPSILON)*100)/100)}</div>
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