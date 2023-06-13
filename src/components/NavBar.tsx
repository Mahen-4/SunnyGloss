import * as React from 'react';
import {FC} from 'react'
import logo from '../images/SunnyGloss.png'
import panier from '../images/icon/panier.png'
import profil from '../images/icon/profil.png'
import '../styles/App.scss'
import productJSON from '../json/allproduct.json'
import {Link} from 'react-router-dom'

export const NavBar:FC = () => {

  const profilDiv = React.useRef<HTMLDivElement>(null)
  const profilContentDiv = React.useRef<HTMLDivElement>(null)
  
  const panierDiv = React.useRef<HTMLDivElement>(null)

  const productExemple = productJSON[0]
  const productExemple2 = productJSON[4]

  const activeProfil = () => {
    if(profilDiv.current && profilContentDiv.current){
      if(!profilDiv.current.classList.contains('activeProfil')){
        profilDiv.current.classList.add('activeProfil')
        profilContentDiv.current.classList.add('activeProfilContent')
      }
      else{
        profilDiv.current.classList.remove('activeProfil')
        profilContentDiv.current.classList.remove('activeProfilContent')
      }   
    }
  }
  const activePanier = () => {
    if(panierDiv.current){
      if(!panierDiv.current.classList.contains('activepanierDiv')){
        panierDiv.current.classList.add('activepanierDiv')  
      }
      else{
        panierDiv.current.classList.remove('activepanierDiv')
      }   
    }
  }
  return (
    <div>
      <div className='navBar'>
        <Link to="/"><img src={logo} width={150} height={60} alt=""/></Link>
        <div className='navBar_Menu'>
            <Link to="/product_list"><h3>Product</h3></Link>
            <img src={panier} width={40} alt="" onClick={activePanier}/>
            <img src={profil} width={40} alt="" onClick={activeProfil}/>

        </div>
      </div>
      <div className='profilConnexion' ref={profilDiv}>
        <div className='profilConnexion_content' ref={profilContentDiv}>
          <h1>Connection</h1>
          <form>
            <input type='text' placeholder='Email'/>
            <input type='password' placeholder='Password' />
            <button>Sign In</button>
          </form>
          <p><a href='#'>Forgot you password ?</a></p>
          <p><a href='#'>Create your account</a></p>
        </div>
      </div>
      <div className='panier' ref={panierDiv}>
        <h1>Shopping Cart</h1>
        <div className='panier_list' >
          <div className='panier_details' >
            <img src={productExemple.img} alt="" />
            <div className='panier_detail_text'>
              <p>Name : <b>{productExemple.name}</b></p>
              <p>Price : <b>{productExemple.price} €</b></p>
              <p>Quantity : <b>{productExemple.quantity}</b></p>
              <a href='#'><i>Delete</i></a>
            </div>
          </div>
          <div className='panier_details'>
            <img src={productExemple2.img} alt="" />
            <div className='panier_detail_text'>
              <p>Name : <b>{productExemple2.name}</b></p>
              <p>Price : <b>{productExemple2.price} €</b></p>
              <p>Quantity : <b>{productExemple2.quantity}</b></p>
              <a href='#'><i>Delete</i></a>
            </div>
          </div>
        </div>
        <h1>Total Price : {productExemple.price + productExemple2.price} €</h1>
        <button>Buy</button>
      </div>
    </div>
    
  );
}
