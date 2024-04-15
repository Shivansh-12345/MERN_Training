import React, { useState } from 'react'
import { useEffect } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0);
    const checkvalue=()=>{
        return count===0?"Zero":count;
    }
    const checkCounter=()=>{
        return count===0?
        "badge bg-danger m-3 p-3 rounded text-white":
        " badge bg-warning m-3 p-3 rounded text-black";
    }
    const Increment=()=>{
        setCount(count+1,()=>{
            console.log(count)

        });
        //return count;

    }
    const Decrement=()=>{
        if(count>0){
        setCount(count-1);
        }
        //return count;
    };
    useEffect(()=>{
        console.log(count);
    },[count]);
    //let count=2;
  return (
    <div className='container mt-3'>
        <button className='btn btn-primary' onClick={Decrement}>Decrement</button>
        <span className={checkCounter()}>{checkvalue()}</span>
        
        <button className='btn btn-primary' onClick={Increment}>Increment</button>
    </div>
  )
}

export default Counter