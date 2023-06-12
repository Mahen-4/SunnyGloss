import React from 'react';
import {FC} from 'react'
import '../styles/App.scss'

interface IProductProps {
    name: string;
    price: number;
    img: string;
    
}
                                        //({name,price,img}) : can use this syntax if you don't want to write "props.something"
export const Product: FC<IProductProps> = (props) => {    
  return (
    <div className='product_of_List'>
      <img src={props.img} height={500} alt=''/>
        <div className='product_List_detail'>
            <h2>{props.name}</h2>
            <h2>{props.price}€</h2>
        </div>
      </div>
  );
}
