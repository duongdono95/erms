import React from 'react'

function mathAverage(initialArray:[string, number[]][]) {
  const dataArrays = initialArray.map((array) => array[1])
  const sum = dataArrays.flat().reduce((a, b)=> a+b)
  const roundedSum = Math.round((sum + Number.EPSILON)*100)/100
  const averageSum = roundedSum/initialArray.length
  return (
    averageSum
  )
}

export default mathAverage