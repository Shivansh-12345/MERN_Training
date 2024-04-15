import { useState } from 'react'

const ChangeName = (props) => {//destructring
    let {name,onUpdate}=props;
//   const [name,setName]=useState(sname)
  return (
    <div>
      <div>{name};</div>
      {/* <button className='btn btn-warning' onClick={()=>setName("Javascript")}> */}
      <button className='btn btn-warning' onClick={onUpdate}>
        ChangeName</button>
    </div>
  )
}

export default ChangeName