import * as React from 'react';
import {FC} from 'react'
import logo from '../images/SunnyGloss.png'
import profil from '../images/icon/profil.png'
import '../styles/App.scss'
import {Link} from 'react-router-dom'

export const NavBar:FC = () => {

  const profilDiv = React.useRef<HTMLDivElement>(null)
  const profilContentDiv = React.useRef<HTMLDivElement>(null)

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

  return (
    <div>
      <div className='navBar'>
        <Link to="/"><img src={logo} width={150} height={60} alt=""/></Link>
        <div className='navBar_Menu'>
            <Link to="/product_list"><h3>Product</h3></Link>
            <h3>Contact</h3>
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
    </div>
    
  );
}
