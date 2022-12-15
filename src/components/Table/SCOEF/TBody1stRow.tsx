import React from 'react'
import mathRound from "../../../hook/mathRound";
import ExpandingBtn from '../components/ExpandingBtn'

interface Props {
  dataArray: [string, number[]];
  rowTitle: string;
  handleShow: () => void;
}
const TBody1stRow:React.FC<Props> = (props) => {
  const {rowTitle, dataArray, handleShow} = props;
  const year = dataArray[0]
  const array = dataArray[1]
  const total = array.reduce((a:number , b:number) => Math.round(((a+b) + Number.EPSILON)*100)/100)

  return (
    <>
      <div className="tr">
        <div className="td">
          <p className="row__title">{rowTitle}</p>
        </div>
        <div className="td dark__bg">
          {year}
        </div>
          {
            array.map((data, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="td">{mathRound(data)}</div>
                </React.Fragment>
              )
            })
          }
        <div className="td"><p>{total}</p></div>
        <div className="td expand-btn" onClick={handleShow}> <ExpandingBtn variant="hide" /></div>
      </div>
    </>
  )
}

export default TBody1stRow