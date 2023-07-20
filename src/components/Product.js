import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { addItem } from '../utils/CartSlice';

function Product() {

    const [product,setproduct] = useState();

    const {id} = useParams();

    const dispatch = useDispatch();

    const handleClick =() => {
      dispatch(addItem(product));
    }

    const getproductinfo = async () => {
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const json = await data.json();
        setproduct(json);
    }

    useEffect(()=>{
        getproductinfo();
    },[])

  return (
    <div className='bg-white h-[100vh]'>
        <div className="hero min-h-screen bg-primary-content">
        <div className="hero-content flex-col lg:flex-row">
        <img src={product?.image} />
    <div>
      <h1 className="text-5xl font-bold my-2">{product?.title}</h1>
      <h1 className="text-3xl font-bold my-2">${product?.price}</h1>
      <p className='font-bold border border-gray-600 inline rounded-lg p-1 my-2'>{product?.category}</p>
      <p className="py-6 my-2">{product?.description}</p>
        
      <div className='flex'>
      <Link to="/cart">
      <button className="btn btn-primary mx-2 h-10 w-52" onClick={()=>{handleClick(product)}}>Buy Now</button>
      </Link>
      <button className="btn btn-info mx-2 h-10 w-52" onClick={()=>{handleClick(product)}}>Add to Cart</button>
      </div>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Product