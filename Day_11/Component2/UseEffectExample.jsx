import React, { useEffect,useState } from 'react'

const UseEffectExample = () => {
    const[name,setName]=useState("KIET");
    const[course,setCourse]=useState("BTECH");
    const ChangeName= () => {
        setName("KIET MCA");
    };
    const ChangeCourse= () => {
        setCourse("MCA");
    };
    useEffect(()=>{
        console.log("UseEffect Hook");
    },[]);
    useEffect(()=>{
        console.log(name);
    },[name]);
    useEffect(()=>{
        console.log(course);
    },[course]);
  return (
    <div>
        <h1>UseEffectExample</h1>
        <h2>Name:{name}</h2>
        <button className="btn btn-danger" onClick={ChangeName}>Refresh</button>
        <h2>Course:{course}</h2>
        <button className="btn btn-danger" onClick={ChangeCourse}>Change Course</button>

        </div>
  )
}

export default UseEffectExample