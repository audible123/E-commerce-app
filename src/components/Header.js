import React from 'react'
import { FaSearch,FaAmazon } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {

  const data = useSelector((store) => store.cart.item)

  console.log({data})

  return (
    <div className='grid grid-cols-4 bg-[#131921] h-12'>

        <Link to='/'>
        <img 
        className='h-8 m-2'
        src="https://w7.pngwing.com/pngs/911/623/png-transparent-amazon-com-amazon-alexa-retail-amazon-prime-order-fulfillment-amazon-miscellaneous-company-text-thumbnail.png" 
        alt="amazon" />
        </Link>

        <div 
        className='col-span-2'>
            <input
            className='my-2 p-1 w-[70%] text-lg'
            type="text" />
            <button
            className='bg-[#cd9042] px-[8px] my-1 rounded-r-md text-xs'>
              <FaSearch/></button>
        </div>

        <div className='text-white grid grid-cols-4'>
          <Link to='/login'>
            <h1 
            className='m-3 text-[17px]'
            >Login</h1>
          </Link>
            <h1 
            className='text-[17px] leading-tight'
            >Returns & Orders</h1>
            <h1 
            className='mx-3 p-1'
            ><FaAmazon/>Prime</h1>
            <div 
            className='m-3 text-white flex flex-col'
            ><FiShoppingCart/> {data.length}</div>
        </div>

    </div>
  )
}

export default Header