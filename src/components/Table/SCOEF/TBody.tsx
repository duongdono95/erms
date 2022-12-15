import React, {useState} from 'react'
import '../Table.scss'
import ExpandingBtn from "../components/ExpandingBtn"
import mathRound from "../../../hook/mathRound"
import TBody1stRow from "./TBody1stRow"
import HeatedValue from './HeadtedValue'
interface Props {
  arrays:[string, number[]][],
  rowTitle: string
  averageValue:number
}
const TBody:React.FC<Props> = (props) => {
  const {rowTitle, arrays, averageValue} = props;
  const [showTr, setShowTr] = useState(false)
  const TbodyTotalArray: number[] = []
  // Functions
  const handleCollapse = () => {
    setShowTr(!showTr)
  }
  return (
    <div className="tbody">
      {!showTr?
      (<TBody1stRow handleShow={handleCollapse} rowTitle={rowTitle} dataArray={arrays[0]} />) : (<>
        {
          arrays.map((array, index) => {
            const year = array[0]
            const dataArray = array[1]
            const rowTotalValue = dataArray.reduce((a:number , b:number) => Math.round(((a+b) + Number.EPSILON)*100)/100)
            TbodyTotalArray.push(rowTotalValue)
            return (
              <div key={index} className="tr">
                {index === 0 ? (
                  <div className="td row__title">
                    <p className="row__title">{rowTitle}</p>
                  </div>
                ) : (
                  <div className="td row__title"></div>
                )}
                <div className="td dark__bg"><p>{year}</p></div>
                {
                  dataArray.map((data, index) => {
                    return (
                      <React.Fragment key={index}>
                        <div className="td">
                          <p>{mathRound(data)}</p>
                        </div>
                      </React.Fragment>
                    )
                  })
                }
                <HeatedValue rowTotalValue={rowTotalValue} averageValue={averageValue}/>
                {index === 0 ? (<div className="td expand-btn" onClick={handleCollapse}>{showTr? (<ExpandingBtn variant="show"/>): (<ExpandingBtn variant="hide"/>)}</div>) : (<div className="td"></div>)}
              </div>
            )
          })
        }
      </>)}

    </div>
  )
}

export default TBody