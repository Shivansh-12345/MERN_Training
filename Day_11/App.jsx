//import { useState } from 'react'
//import './App.css'
import Mycounter from './Component/Mycounter'
 import Mycard from './Component/Mycard'

import { Route, Routes } from "react-router-dom"
import HomePage from "./Component/HomePage"
import NavBar from './Component/NavBar'
import ErrorPage from './Component/ErrorPage'
import About from './Component/About'
import Product from './Component/Product'
import Product1 from './Component/Product1'
import Product2 from './Component/Product2'
import Product3 from './Component/Product3'
import Student from './Component/Student'
import UseStateExample from './Component2/UseStateExample'
import UseEffectExample from './Component2/UseEffectExample'
import UseReducerExample from './Component2/UseReducerExample'
import UseContextExample from './Component2/UseContextExample'
import Login from './Component2/Login'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Mycounter/> */}
      {/* <Mycard/> */}
      {/* <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/card" element={<Mycard />}/>
        <Route path="/counter" element={<Mycounter/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/student' element={<Student/>}>
          <Route path='/student/:name' element={<Student />}/>
        </Route>

        <Route path='/product' element={<Product/>}>
        <Route path='product1' element={<Product1/>}/>
        <Route path='product2' element={<Product2/>}/>
        <Route path='product3' element={<Product3/>}/>
        </Route>

        <Route path="*" element={<ErrorPage/>}/>
      </Routes> */}
      {/* <h1>Home</h1>
      <hr/>
      <UseStateExample/> */}
      {/* <h1>Home</h1>
      <hr/>
      <UseEffectExample/> */}
      {/* <h1>Home</h1>
      <hr/>
      <UseReducerExample/> */}
      {/* <h1>Home</h1>
      <hr/>
      <UseContextExample/> */}
      <h1>Home</h1>
      <hr/>
      <Login/>
      </>
  )
}

export default App
