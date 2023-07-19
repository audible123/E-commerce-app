import React from 'react'
import CartCard from './CartCard';
import { Link } from 'react-router-dom';


export function CancelPolicy(){
  return (
      <div className=' mt-10 p-10 m-10 shadow-2xl max-sm:col-span-2 max-sm:h-auto '>
      <h1>Review your order and address details to avoid cancellations</h1>
      <h2>Note: If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.Avoid cancellation as it leads to food wastage.</h2>
      <Link className='text-red-800' to={"https://www.swiggy.com/refund-policy"}>Read cancellation policy</Link>
      </div>
  )
}

export function Price(){
  return (
    <div></div>
  )
}

export function Cart() {

  const cartItem = 0;

  function handleClearCart(){
    // add dispatching an action
  }

  // if(cartItem.length === 0) return (
  //   <div className="flex justify-center items-center">
  //   <div className="min-h-[70vh] mt-32">
  //     <img className="h-[250px] w-auto mb-4 mx-auto" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="Error" />
  //     <h1 className="text-4xl text-center">Your cart is empty</h1>
  //     <h3 className='text-center'>You can go to home page to view more restaurants</h3>
  //     <Link to="/">
  //     <button className=' h-14 w-[90%] m-5 bg-[#fc8019] text-white'>SEE RESTAURANTS NEAR YOU</button>
  //     </Link>
  //   </div>
  //   </div>
  // )

  return (
    <div className='min-h-screen m-4 flex flex-wrap flex-col bg-gray-200'>
    <div className='bg-white m-10 p-5'>
    <h1 className='font-bold text-2xl m-5'>Cart Items-{cartItem.length}</h1>
    <button className='shadow-lg text-red-600 border border-red-600 p-3 mx-5 hover:bg-red-600 hover:text-white max-sm:w-full max-sm:mx-1' onClick={()=>{
        handleClearCart();
    }}>Clear Cart</button>
    <div className='max-sm:p-12'>
    <div className='flex flex-wrap flex-row '>
        {/* here add the cards */}
    </div>
    </div>
    <div className='grid grid-cols-2'>
    <Price/>
    <CancelPolicy/>
    </div>
    <div className='flex justify-end m-10 max-sm:justify-evenly'>
    <Link to="/mapandpayment" ><button className='shadow-lg text-[#60b246] border border-[#60b246] w-[90%] hover:bg-[#60b246] hover:text-white p-3 mx-5'>Proceed</button>
    </Link>
    <button className='shadow-lg text-red-600 border border-red-600 p-3 mx-5 hover:bg-red-600 hover:text-white ' onClick={()=>{
        handleClearCart();
    }}>Clear Cart</button>
    </div>
    </div>
</div>
  )
}
