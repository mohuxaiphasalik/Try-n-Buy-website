import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductPage from './Pages/productPage';
import PDetailPage from './Pages/pDetailPage';
import SizePrediction from './Pages/sizePrediction';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ClothImposing from './Pages/clothImposing';
import SignupPage from './Pages/signup';
import LoginPage from './Pages/login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path="/productDetails" element={<PDetailPage />} />
        <Route path="/sizePrediction" element={<SizePrediction />} />
        <Route path="/clothImposing" element={<ClothImposing />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
  </>
);

