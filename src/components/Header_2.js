import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../utils/ClickSlice';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import useTotalPrice from '../utils/useTotalPrice';

function Header_2() {

    const dispatch = useDispatch();


    const data = useSelector((store) => store.cart.item)

    const value = useTotalPrice(data);


    const handleClick = () => {
        dispatch(toggleMenu());
    }

  return (
    <div 
    className="navbar bg-neutral h-5">
  <div 
  className="navbar-start">
    <div 
    className="dropdown">
      <label 
      tabIndex={0} 
      className="btn btn-ghost lg:hidden">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>

      <ul 
      tabIndex={0} 
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul 
          className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li>
          <a>Item </a>
        </li>
      </ul>
    </div>
  </div>
  <div 
  className="navbar-center hidden lg:flex">
    <ul 
    className="menu menu-horizontal px-1">
      <li><Link>Amazon </Link></li>
      <li 
      tabIndex={0}>
        <details>
          <summary>Prime</summary>
          <ul 
          className="p-2">
            <li>Introducing Amazon Prime
                <ul>
                  <li>Prime members enjoy:</li>
                  <li>FREE One-Day, Two-Day & Standard Delivery on eligible items</li>
                  <li>Unlimited streaming of the latest movies, TV shows</li>
                  <li>30-minute early access to top deals every day</li>
                </ul>
            </li>
            <li>
              <button className='btn btn-primary text-xl m-4'>Join Now</button>
            </li>
          </ul>
        </details>
      </li>
      <li><Link to='/login'>
           Login
          </Link></li>
      
      <li><Link >Returns & Orders</Link></li>
      
      <li><Link>Prime</Link></li>
    </ul>
  </div>
  <div 
  className="navbar-end">
  <div 
  className="flex-none">
    <div 
    className="dropdown dropdown-end">
      <label 
      tabIndex={0} 
      className="btn btn-ghost btn-circle">
        <div 
        className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>

          <span 
          className="badge badge-sm indicator-item">{data.length}</span>
        </div>
      </label>
      <div 
      tabIndex={0} 
      className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">

        <div className="card-body">
          <span 
          className="font-bold text-lg">{data.length}</span>
          <span 
          className="text-info">$ {value}</span>
          <div 
          className="card-actions">
            <Link to="/cart"><button 
            className="btn btn-primary btn-block">View cart</button>
            </Link>
          </div>
        </div>
  </div>
  </div>
  </div>
  </div>
</div>
  )
}

export default Header_2