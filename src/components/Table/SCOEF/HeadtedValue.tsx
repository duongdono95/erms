import React from 'react'
import '../Table.scss'

interface Props {
  averageValue: number;
  rowTotalValue: number;
}
const HeatedValue:React.FC<Props> = (props) => {
  const {averageValue, rowTotalValue } = props
  return (
    <>
      {
        (averageValue - rowTotalValue > 0) ? (
          <div className="td red__bg"><p>{rowTotalValue}</p></div>
        ) : (
          <div className="td green__bg"><p>{rowTotalValue}</p></div>
        )
      }
    </>

  )
}

export default HeatedValue