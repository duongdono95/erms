import React from 'react'
interface Variants {
  variant : 'hide' | 'show'
}
const expandinguttonVariants = {
  "hide" : <i className="fa-solid fa-chevron-down"></i>,
  "show" : <i className="fa-solid fa-chevron-up"></i>
}
const ExpandingBtn:React.FC<Variants> = (props) => {
  const {variant , ...rest} = props
  return (
    <div className="td">{expandinguttonVariants[variant]}</div>
  )
}

export default ExpandingBtn