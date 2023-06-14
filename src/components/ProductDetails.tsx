import React from 'react';
import {FC} from 'react'
import productJSON from '../json/allproduct.json'
import { useParams } from 'react-router-dom';

 

export const ProductDetails: FC= () => {    
  let { idProduct } = useParams();
  
  let [product, setProduct] = React.useState<object | any>({})

  let [priceChange, setPriceChange] = React.useState<number>(0)

  React.useEffect(()=>{
    productJSON.map(productONE => {
      if(productONE.id === Number(idProduct)){
        setProduct({...productONE})
        setPriceChange(productONE.price)
      }
    }) 
  },[])
  
  return (
    <div >
      {product && 
        <div className='productDetails'>
          <img src={product.img} />
          <div className='Pdetails'>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <input type='number' placeholder='Quantity' min={1} onChange={(e) => {setPriceChange(product.price * Number(e.target.value))}}/>
            <h3>{priceChange} €</h3>
            <button>Add to shopping cart</button>
          </div>
        </div>}
      </div>
  );
}
