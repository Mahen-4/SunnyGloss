import * as React from 'react';
import { Product } from './Product';
import {FC} from 'react'
import banniereRouge from '../images/gloss/rouge.jpg'
import bannierePalette from '../images/gloss/palette.jpg'
import { Link } from 'react-router-dom';
import productJSON from '../json/allproduct.json'

export const Product_List:FC =  () => {


  return (
    <div>
      <img src={banniereRouge} alt=''className='banniere'/>
      <div className='product_list'>
        {productJSON.filter((item,index) => index < (productJSON.length /2)).map(product =>( 
          <Link to={{pathname:`/product/${product.id}`}} key={product.id}>
            <Product name={product.name} price={product.price} img={product.img} />
          </Link>
        ))}
      </div>
      <img src={bannierePalette} alt=''className='banniere'/> 
      <div className='product_list'>
        {productJSON.filter((item,index) => index > (productJSON.length /2)).map(product =>( 
          <Link to={`/product/${product.id}`} key={product.id}>
            <Product name={product.name} price={product.price} img={product.img} />
          </Link>
        ))}
      </div>
    </div>
  );
}
