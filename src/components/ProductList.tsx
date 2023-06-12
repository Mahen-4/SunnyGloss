import * as React from 'react';
import { Product } from './Product';
import {FC} from 'react'
import gRouge from '../images/gloss/glossRouge.png'
import gBelge from '../images/gloss/glossBelge.jpg'
import gRose from '../images/gloss/glossRose.jpg'
import gRoseFonce from '../images/gloss/glossRoseFonce.jpg'
import gBleu from '../images/gloss/glossBleu.jpg'
import banniereRouge from '../images/gloss/rouge.jpg'
import bannierePalette from '../images/gloss/palette.jpg'


export const Product_List:FC =  () => {
  return (
    <div>
      <img src={banniereRouge} alt=''className='banniere'/>
      <div className='product_list'>
        <Product name="Gloss Rouge" price={30} img={gRouge}/>
        <Product name="Gloss Rouge" price={30} img={gBelge}/>
        <Product name="Gloss Rouge" price={30} img={gRose}/>
      </div>
      <img src={bannierePalette} alt=''className='banniere'/> 
      <div className='product_list'>
        <Product name="Gloss Rouge" price={30} img={gRoseFonce}/>  
        <Product name="Gloss Rouge" price={30} img={gBleu}/>
      </div>
    </div>
  );
}
