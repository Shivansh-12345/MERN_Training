import React from 'react'
import Info from './Info'

const ControlledInfo = () => {
    // const lang=["java","Python","C","Kotlin"]
    let lang=[
        {id:1, name:"Java"},
        {id:2,name:"Kotlin"},
        {id:3,name:"JavaScript"},
        {id:4,name:"Python"},
        {id:5,name:"C"}
    ];
  return (
    <div>
        <Info lang={lang}/>
    </div>
  )
}

export default ControlledInfo