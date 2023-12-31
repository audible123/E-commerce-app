import React from 'react'
import store from '../utils/store';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Sidebar() {
    const isMenuOpen = useSelector((store)=> store.click.menuopen)


    if(!isMenuOpen){
      return null;
    }
  
    return (
      <div className='h-auto w-80 shadow-xl scroll'>
        <ul className='m-5 text-sm w-80'>
          <Link  className='text-xl m-5' to="/">Home</Link>
          <li className='text-xl m-5'>Shorts</li>
          <li className='text-xl m-5'>Youtube Studios</li>
        </ul>
        <h1 className='text-xl m-10 font-bold'>Subscription</h1>
        <ul className='m-5 text-sm'>
    <li className='text-xl m-5'>Trending</li>
    <li className='text-xl m-5'>Subscriptions</li>
    <li className='text-xl m-5'>Library</li>
    <li className='text-xl m-5'>History</li>
    <li className='text-xl m-5'>Watch Later</li>
    <li className='text-xl m-5'>Liked Videos</li>
    <li className='text-xl m-5'>Music</li>
    <li className='text-xl m-5'>Gaming</li>
    <li className='text-xl m-5'>Sports</li>
    <li className='text-xl m-5'>News</li>
    <li className='text-xl m-5'>Movies</li>
    <li className='text-xl m-5'>Shows</li>
    <li className='text-xl m-5'>Live</li>
    <li className='text-xl m-5'>Settings</li>
    <li className='text-xl m-5'>Help & Feedback</li>
        </ul>
  
      </div>
  )
}

export default Sidebar