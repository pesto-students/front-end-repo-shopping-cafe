// App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer';
import HomeContainer from './containers/HomeContainer';
import Products from './components/Screens/Products';
import Cart from './components/Screens/Cart';
import './App.css'; // Import your global CSS file
import Signup from './components/Screens/Signup';
import Login from './components/Screens/Login';
import SingleProductPage from "./components/Screens/Products/SingleProductPage"


const App = () => {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomeContainer/>} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/product" exact element={<SingleProductPage />} />
      </Routes>
    </Router>
    <Footer />
    </>
    
  );
};

export default App;
