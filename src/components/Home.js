import React, { useEffect, useState } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom';

function Home() {

  const [result,setResult] = useState();

  async function getApidata(){
    const data = await fetch('https://fakestoreapi.com/products');
    const json = await data.json();
    setResult(json);
    console.log({json});
  }
  

  useEffect(()=>{
    getApidata();
  })

  return (
    <div className='home h-auto'>
    <div>
        <div className='mx-10'>
            <img
            className='h-72 w-full my-5'
            src="https://images.freekaamaal.com/post_images/1662370514.webp" alt="" />
            <h1 className='bg-white my-5'> You are on amazon.com. You can aso shop on Amazon in for milions of products with fast delivery.</h1>
        </div>
    </div>
    <div className=" flex flex-wrap justify-evenly">
      {result && result.map(item => (
          <Link key={item?.id}><Product {...item} /></Link>
      ))}
    </div>
    </div>
  )
}

export default Home