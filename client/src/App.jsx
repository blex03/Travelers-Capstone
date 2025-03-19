import { useState } from 'react'
import './App.css'
import { Featured } from './components/Featured'
import { Search } from './components/Search'
import { Categories } from './components/Categories'
import { Home }  from './components/Home'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login'
import { Checkout } from './components/Checkout'
import { Navbar } from './components/Navbar'


export const App = () => {
  return (
    <Router>
      <Routes>
        console.log('hi')
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};