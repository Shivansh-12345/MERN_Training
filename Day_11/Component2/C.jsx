import React, { useContext } from 'react'
import {nameContext} from './UseContextExample'
const C = () => {
    const name=useContext(nameContext);
  return (
    <div>
         <h2>A Component</h2>
         <h2> Name:{name}</h2>
    </div>
  )
}

export default C