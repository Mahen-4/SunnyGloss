import * as React from 'react';
import {FC} from 'react';
import pourcentage from '../images/pourcentage.png'
import glossyPalette from '../images/gloss/glossyPalette.png'
import {Link} from 'react-router-dom'

export const Home: FC = () => {
  return (
    <div>
        <div className='nouvelleCollection'>
            <div className='nvC_titre'>
                <Link to="/product_list"><h1>NOUVELLE COLLECTION</h1></Link>
                <p>Promotion jusqu'au 1 Juin</p>
            </div>
            <div className='nvC_detail'>
                <p>Sunny Smile</p>
                <img src={pourcentage} height={200} width={200} alt=""/>
                <img src={glossyPalette} height={700} width={700} id='palette' alt=""/>
            </div>
        </div>
    </div>
  );
}
