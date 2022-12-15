import React, {useState} from 'react';

function mathRound(value:number) {
  const roundedValue = Math.round((value + Number.EPSILON)*100)/100;
  return roundedValue;
}

export default mathRound;