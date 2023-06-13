import React, {FC} from 'react';
import './styles/App.scss';
import {Routes, Route} from "react-router-dom"
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Product_List } from './components/ProductList';
import { Footer } from './components/Footer';

const App: FC = () => {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product_list' element={<Product_List />}/>  
      </Routes>  
      <Footer />
    </div>
  );
}

export default App;