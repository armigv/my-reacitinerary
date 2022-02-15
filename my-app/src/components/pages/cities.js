import React from 'react';

import CitiesFather from '../CitiesFather';



export default function Cities(props) {
  console.log(props.data)
  return (
    <div>
      <CitiesFather cities={props.data}/>
    </div>
  )  
}
