import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Category from './components/Category';
import Description from './components/Description';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/category" element={<Category />} />
        <Route path="/description" element={<Description />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;






