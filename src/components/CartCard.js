import React from 'react'

function CartCard({
    id,
    title,
    image,
    price,
}) {
  return (
    <div className="card w-96 h-72 bg-base-100 shadow-xl image-full m-5">
    <figure><img className='w-full' src={image} alt="Shoes" /></figure>
    <div className="card-body">
    <h2 className="card-title font-bold">{title}</h2>
    <p className='font-bold'>$-{price}</p>
  </div>
</div>
  )
}

export default CartCard

