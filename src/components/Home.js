import React, { useEffect, useRef, useState } from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

function Home() {
  let scrl = useRef(null);

  const [result, setResult] = useState();
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  async function getApidata() {
    const data = await fetch('https://fakestoreapi.com/products');
    const json = await data.json();
    setResult(json);
    console.log({ json });
  }

  useEffect(() => {
    getApidata();
  }, []);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setScrollX(scrollX + shift);

    if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const scrollCheck = () => {
    setScrollEnd(scrl.current.scrollLeft);
    if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  return (
    <div className='home h-auto'>
      <div className='flex'>
        {scrollX !== 0 && (
          <button  className="bg-gray-700 font-bold h-52 w-10 p-5 my-10 m-5 text-white opacity-40 hover:opacity-100 rounded-full" onClick={() => slide(-100)}>
            L
          </button>
        )}
        <div className='mx-10 flex overflow-x-hidden' onScroll={scrollCheck} ref={scrl}>
          <img className='h-72 w-[50%] m-2' src="https://m.media-amazon.com/images/I/611p9l6GmaL._SR412,360_.jpg" alt="" />
          <img className='h-72 w-[50%] m-2' src="https://m.media-amazon.com/images/I/61cOhOLmirL._SR1236,1080_.jpg" alt="" />
          <img className='h-72 w-[50%] m-2' src="https://m.media-amazon.com/images/I/61w+oUTyScL._SR1236,1080_.jpg" alt="" />
          <img className='h-72 w-[50%] m-2' src="https://m.media-amazon.com/images/I/61cOhOLmirL._SR1236,1080_.jpg" alt="" />
          <img className='h-72 w-[50%] m-2' src="https://m.media-amazon.com/images/I/61cOhOLmirL._SR1236,1080_.jpg" alt="" />
        </div>
        {!scrollEnd && (
          <button
            className="bg-gray-700 font-bold h-52 w-10 p-5 my-10 mr-5 text-white opacity-40 hover:opacity-100 rounded-full"
            onClick={() => slide(+100)}
          >
            R
          </button>
        )}
      </div>
      <h1 className='bg-white my-5 font-semibold text-center'>
        You are on amazon.com. You can also shop on Amazon in for millions of products with fast delivery.
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {result && result.map((item) => (
          <Link key={item?.id}>
            <Product {...item} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
