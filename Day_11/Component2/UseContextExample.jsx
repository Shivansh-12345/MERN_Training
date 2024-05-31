import React from 'react'
import A from "./A";
export const nameContext=React.createContext();
const UseContextExample = () => {
  return (
    <div>
        <h1>UseContextExample</h1>
        {/* <nameContext.Provider value={[10,20,30]}></nameContext.Provider> */}
        <nameContext.Provider value="KIET">
        <A/>
        </nameContext.Provider>
        </div>
  )
}

export default UseContextExample