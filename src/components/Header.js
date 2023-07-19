import React, { useState } from 'react';
import { FaSearch, FaAmazon } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AMAZON_LOGO } from '../utils/constants';
import Header_2 from './Header_2';
import { MdSentimentSatisfiedAlt} from "react-icons/md";



function Header() {
  const user = useSelector((store) => store.data.user);

  console.log({user});

  const data = useSelector((store) => store.cart.item);

  return (
    <>
    <div 
    className="navbar bg-[#131921] ">
  <div 
  className="flex-1">
    <img 
    className='h-8 m-2' 
    src={AMAZON_LOGO}/>
  </div>
  <div 
  className="flex-none gap-2">
    <div 
    className="form-control">
      <input 
      type="text" 
      placeholder="Search" 
      className="input input-bordered w-96 md:w-auto" />
    </div>

    <div 
    className="dropdown dropdown-end">
      <label 
      tabIndex={0} 
      className="btn btn-ghost btn-circle avatar">

        <div 
        className="w-10 rounded-full">
          <img 
          src="https://www.computerhope.com/jargon/g/guest-user.png" />
        </div>
      </label>
      <ul 
      tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
<Header_2/>
</>
  );
}

export default Header;
