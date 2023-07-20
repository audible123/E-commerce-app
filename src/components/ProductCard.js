import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/CartSlice';
import { Link } from 'react-router-dom';


function Data ( {
    id,
    title,
    image,
    price,
    description,
    category,
}) {
    return (
        <div 
    >

  <figure><img
  className='h-[200px] w-[70%] mx-7' src={image}
   alt="Shoes" /></figure>

  <div 
  className="card-body">

    <h2 
    className="card-title text-xs font-bold"
    >{title}</h2>

    <h2 
    className="card-title text-xs"
    >$ {price}</h2>

    <p className='text-xs'>{category}</p>

  </div>
</div>
        
    )
}


function ProductCard(props) {

  const dispatch = useDispatch();

  function handleCart(props){
      dispatch(addItem(props));
  }

  return (
    <div
    className="card w-52 m-2 h-96 bg-neutral-content text-black relative shadow-2xl ">
    
    <Link to={"/" + props?.id}>
    <Data {...props}/>
    </Link>
    
    <div 
    className="card-actions justify-end">

      <button
      onClick={()=> {handleCart(props)}} 
      className="btn btn-primary absolute right-0 bottom-0"
      >Buy Now</button>
    </div>
    </div>
  )
}

export default ProductCard