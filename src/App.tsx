import React, {FC} from 'react';
import './styles/App.scss';
import {Routes, Route} from "react-router-dom"
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Product_List } from './components/ProductList';

const App: FC = () => {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product_list' element={<Product_List />}/>  
      </Routes>  
    </div>
  );
}

export default App;