import * as React from 'react';
import {FC} from 'react'
import logo from '../images/SunnyGloss.png'
import profil from '../images/profil.png'
import '../styles/App.scss'
import {Link} from 'react-router-dom'

export const NavBar:FC = () => {
  return (
    <div className='navBar'>
        <Link to="/"><img src={logo} width={150} height={60}/></Link>
        <div className='navBar_Menu'>
            <Link to="/product_list"><h3>Product</h3></Link>
            <h3>Contact</h3>
            <img src={profil} width={40} />
        </div>
    </div>
  );
}
