import React from 'react'


const Card = (props) => {
    const {id,title,description,price,brand,category,thumbnail}=props;
  return (
    <div className='mx-3 my-3'>
        <div class="card m-3" style={{width: "18rem",height:"25rem"}}>
        <img src={thumbnail} class="card-img-top" alt="" height={"150px"}/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text overflow-scroll" style={{height:"80px"}}>
        {description}
    </p>
   <div className='d-flex flex-wrap justify-content-between'>
    <div>price:{price}RS</div>
    <div>Brand:{brand}</div>
    <div>category:{category}</div>
    </div>
      </div>
</div>
        </div>
  )
}

export default Card