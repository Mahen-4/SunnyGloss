import * as React from 'react';
import { Product } from './Product';
import produit1 from '../images/gloss1.png'


export function Product_List () {
  return (
    <div>
      <div className='product_list'>
        <Product name="Gloss Rouge" price={30} img={produit1}/>
        <Product name="Gloss Rouge" price={30} img={produit1}/>
        <Product name="Gloss Rouge" price={30} img={produit1}/>
        <Product name="Gloss Rouge" price={30} img={produit1}/>  
        <Product name="Gloss Rouge" price={30} img={produit1}/>
        <Product name="Gloss Rouge" price={30} img={produit1}/>
      </div>
    </div>
  );
}
