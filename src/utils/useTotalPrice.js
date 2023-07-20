import React,{useEffect, useState} from 'react'





const useTotalPrice = (items) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const deliveryCharge = 20;
    const gst = 15;
  
    const calculateTotalPrice = () => {
      let sum = 0;
      const fakePrice = 251;
  
      for (let i = 0; i < items.length; i++) {
        if (items[i]?.price) {
          sum += items[i]?.price ;
        } else {
          sum += fakePrice;
        }
      }
  
      setTotalPrice(sum);
    };
  
    // Call the calculateTotalPrice function whenever the items array changes
    useEffect(() => {
      calculateTotalPrice();
    }, [items]);
  
    return totalPrice;
  };
  
  export default useTotalPrice;
  