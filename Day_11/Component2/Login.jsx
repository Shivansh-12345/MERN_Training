import React, { useEffect, useRef, useState } from 'react'


const Login = () => {
    // const [user,setUser]=useState();
    // const [pass,setPass]=useState();
    // const changeUser=(event)=>{
        //     setUser(event.target.value);
        // }
        // const changePass=(event)=>{
            //     setPass(event.target.value);
            // }
    const [userInfo,setUserInfo]=useState({user:"",pass:""});
    const userRef = useRef();
    useEffect(()=>{
        userRef.current.focus();
        userRef.current.style.color="#ff0000";
    },[]);
    const changeUserInfo=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setUserInfo({...userInfo,[name]:value});
    }
  return (
    <div>
        <h2>Login Information</h2>
        <form className='d-flex flex-column col-3 m-2'>
            <label htmlFor="name">Enter UserName</label>
            <input ref={userRef} type='text' name="user" value={userInfo.user} onChange={changeUserInfo}/>
            <label htmlFor="pass">Enter Password</label>
            <input type='password' name="pass" value={userInfo.pass} onChange={changeUserInfo}/>
        </form>
        <h2>User:{userInfo.user}</h2>
        <h2>Pass:{userInfo.pass}</h2>
    </div>
  )
}

export default Login