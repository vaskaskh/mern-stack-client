import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserScreen from './screens/UserScreen';



function App() {
  return (
    <>
      <Header/>
      <main>
          <Routes>
            <Route exact  path="/" element={<HomeScreen/>}/>
            <Route        path="/product/:id" element={<ProductScreen/>}/>
            <Route        path='/cart/:id' element={<CartScreen/>}/>
            <Route        path='/cart/' element={<CartScreen/>}/>
            <Route        path='/login' element={<LoginScreen/>}/>
            <Route        path='/register' element={<RegisterScreen/>}/>
            
            <Route        path='/profile' element={<UserScreen/>}/>
          </Routes>
      </main>
    
    
      <Footer/>
    </>
  );
}

export default App;
