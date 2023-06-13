import * as React from 'react';
import {FC} from 'react'
import logoSunnyGloss from '../images/logoSunnygloss.png'

import insta from '../images/icon/insta.png'
import tiktok from '../images/icon/tiktok.png'


export const Footer:FC = () => {
  return (
    <div className='footer'>
      <img src={logoSunnyGloss} alt='' height={300}/>
      <div className='footer_details'>
        <div className='footer_content'>
          <h2>CUSTOMER SERVICE</h2>
            <ul>
              <li>Contact</li>
              <li>Delivery & Returns</li>
              <li>FAQs</li>
            </ul>
        </div>
        <div className='footer_content'>
          <h2>THE HOUSE OF SUNNY GLOSS</h2>
            <ul>
              <li>Legal Notice</li>
              <li>Privacy Policy</li>
              <li>Cookie management</li>
              <li>Terms of Sales</li>
            </ul>
        </div>
        <div className='footer_content'>
          <h2>FOLLOW US</h2>
            <ul>
              <li><img src={insta} alt='' height={50}/>SunnyGloss_Official</li>
              <li><img src={tiktok} alt='' height={50}/>SunnyGloss_Official</li>
            </ul>
        </div>
      </div>
      
    </div>
  );
}
