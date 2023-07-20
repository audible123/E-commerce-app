import React from 'react'
import CartCard from './CartCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { buy, clearcart } from '../utils/CartSlice';
import useTotalPrice from '../utils/useTotalPrice';


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
    <div className="overflow-x-auto mt-12">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>Item Total</td>
        <td></td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>Delivery partner fee</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>GST</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
  </div>
  )
}

export function Cart() {
  
  const dispatch = useDispatch();
  const cartItem = useSelector(store => store.cart.item);
  
  const value = useTotalPrice(cartItem);
  
  dispatch(buy(value));
  
  function handleClearCart(){
    dispatch(clearcart());
  }




  if(cartItem.length === 0) return (
    <div className="flex justify-center items-center bg-white">
    <div className="min-h-[70vh] mt-32">
      <img className="h-[250px] w-auto mb-4 mx-auto" src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="Error" />
      <h1 className="text-4xl text-center">Your cart is empty</h1>
      <Link to="/">
      <button className=' h-14 w-[90%] m-5 bg-[#eb9d5e] text-white'>Return to Home</button>
      </Link>
    </div>
    </div>
  )

  return (
    <div className='min-h-screen m-4 flex flex-wrap flex-col bg-gray-200'>
    <div className='bg-white m-10 p-5'>
    <h1 className='font-bold text-2xl m-5'>Cart Items-{cartItem.length}</h1>
    <button className='shadow-lg text-red-600 border border-red-600 p-3 mx-5 hover:bg-red-600 hover:text-white max-sm:w-full max-sm:mx-1' onClick={()=>{
        handleClearCart();
    }}>Clear Cart</button>
    <div className='max-sm:p-12'>
    <div className='flex flex-wrap flex-row '>
        {cartItem.map((item)=>(
          <div key={item?.id}>
            <CartCard {...item}/>
          </div>
        ))}
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
