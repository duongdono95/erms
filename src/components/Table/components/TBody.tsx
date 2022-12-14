import React, {useState} from 'react'
import '../Table.scss'
import ExpandingBtn from "./ExpandingBtn"

interface Props {
  arrays:[string, number[]][],
  rowTitle: string
}
const TBody:React.FC<Props> = (props) => {
  const [showTr, setShowTr] = useState(false)
  const handleCollapse = () => {
    setShowTr(!showTr)
  }
  const {rowTitle, arrays} = props;
  const firstDataArray = arrays[0]
  console.log(firstDataArray)

  return (
    <div className="tbody">
      {!showTr?
      (<div className="tr">
        <div className="td">
          <p className="row__title">{rowTitle}</p>
        </div>
        <div className="td dark__bg">
          {firstDataArray[0]}
        </div>
        {
          firstDataArray[1].map((data, index) => {
            return (
              <React.Fragment key={index}>
                <div className="td">
                  <p>{Math.round((data + Number.EPSILON)*100)/100}</p>
                </div>
              </React.Fragment>
            )
          })
        }
        <div className="td"><p>{firstDataArray[1].reduce((a:number , b:number) => Math.round(((a+b) + Number.EPSILON)*100)/100)}</p></div>
        <div className="td expand-btn" onClick={handleCollapse}>{showTr? (<ExpandingBtn variant="show"/>): (<ExpandingBtn variant="hide"/>)}</div>
      </div>) : (<>
        {
          arrays.map((array, index) => {
            const year = array[0]
            const dataArray = array[1]
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
                          <p>{Math.round((data + Number.EPSILON)*100)/100}</p>
                        </div>
                      </React.Fragment>
                    )
                  })
                }
                <div className="td"><p>{dataArray.reduce((a:number , b:number) => Math.round(((a+b) + Number.EPSILON)*100)/100)}</p></div>
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