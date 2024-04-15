//import './App.css'

import Counter from "./component/Counter";
import { useState } from "react";
import ChangeName from "./component/ChangeName";
import ControlledInfo from "./component/ControlledInfo";


function App() {
  // const [name,setName]=useState("KIET");
  // const [sname,setSName]=useState("MCA");

  return (
    <>
      {/* <Counter/> */}
      {/* <ChangeName name={name} onUpdate={()=>setName("KIET MCA")}/>
      <ChangeName name={sname} onUpdate={()=>setSName("KIET MCA")}/> */}

      {/* props */}
      <ControlledInfo/>
    </>
  );
}

export default App
