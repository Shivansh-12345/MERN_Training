import React from 'react'

const Languages = () => {
    let lang=[
        {id:1, name:"Java"},
        {id:2,name:"Kotlin"},
        {id:3,name:"JavaScript"},
        {id:4,name:"Python"},
        {id:5,name:"C"}
    ];
    var check=false;
  return (
    <div>
        <h1 className={check?"bg-warning":"bg-danger text-blue"}>{(check===false)?"Best Programming Languagessss":"top 5 prgm lng"}</h1>
        <ul>
            {lang.map((item)=>(
                <li key={item.id}>{item.name}</li>
                ))}
        </ul>
        
        </div>
  )
}
export default Languages;