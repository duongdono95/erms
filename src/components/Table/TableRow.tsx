import React from 'react'
interface Props{
  data: string[] | number[]
}
const TableRow:React.FC<Props> = (props) => {
  return (
    <>
      {props.data.map((item, index) => {

        return (
          <>
            
            {
              item < 0 ? (
              <div key={index} className="td negative-value">
                <p>
                  {typeof item === 'number' && Math.round((item + Number.EPSILON)*100)/100}
                </p>
              </div>) : (
                <div key={index} className="td">
                <p>
                  {typeof item === 'number' && Math.round((item + Number.EPSILON)*100)/100}
                </p>
              </div>
              )
            }
          </>
          )
      })}
    </>
  )
}

export default TableRow