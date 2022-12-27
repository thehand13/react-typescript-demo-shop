import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import Administration from './components/administration/Administration';
import About from './components/about/About';
import NotFound from './components/not-found/NotFound';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Administration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
