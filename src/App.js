import React, { Component } from 'react';

import './App.css';
import 'rxjs';

import Header from './components/Header';
import ProductList from './components/ProductList';
import WishlistPanel from './components/WishlistPanel';

export const App = props => (
  <div className="App">
    <Header {...props}/>
    <WishlistPanel {...props}/>
    <ProductList {...props} />
  </div>
);

export default App;
