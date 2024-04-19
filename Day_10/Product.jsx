import React from 'react'
import { NavLink,Outlet } from 'react-router-dom';

const Product = () => {
  return (
    <div className='container'>
        <h2>Product Main Page</h2>
        <div className='d-flex flex-row'>
            <NavLink to="product1" className="p-2">Product 1</NavLink>
            <NavLink to="product2" className="p-2">Product 2</NavLink>
            <NavLink to="product3" className="p-2">Product 3</NavLink>
        </div>
        <Outlet/>
        </div>
  );
};

export default Product