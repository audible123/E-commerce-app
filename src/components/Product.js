import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, buy } from '../utils/CartSlice';

function Data({
  id,
  title,
  image,
  price,
  description,
  category,
}){
  return (
    <>
    <img 
        className='h-[50%] w-[70%] mx-7'
        src={image} alt="image" />
        <div 
        className='text-xs m-2'>
          <h1 
          className='font-bold'>{title}</h1>
        <h1>Price-${price}</h1>
        <h1 
        className='font-bold'>{category}</h1>
        </div>
</>
  )
}

function Product(props) {

  const dispatch = useDispatch();

  const handleClick=(props)=>{
    dispatch(addItem(props))
  }
  
  const handleBuy=(props)=>{
    dispatch(buy(props))
  }

  return (
    <div className='bg-white  w-52 m-2 h-96'>
    <Data {...props}/>
    <div className="flex justify-evenly flex-col">
    <button 
    className="shadow-lg  border border-[#ffd814] p-1  w-[95%] m-1 bg-[#ffd814] " 
    onClick={()=>{handleClick(props)}}>Add </button>
    <button 
    className="shadow-lg bg-[#ffa41c] p-1  w-[95%] m-1  " 
    onClick={()=>{handleBuy(props)}}>Buy Now</button>
    </div>
</div>
  )
}

export default Product