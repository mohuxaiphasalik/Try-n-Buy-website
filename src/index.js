import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductPage from './Pages/productPage';
import PDetailPage from './Pages/pDetailPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/products' element={<ProductPage />} />
        <Route
          path="/productDetails"
          element={<PDetailPage />}
        />     </Routes>
    </BrowserRouter>
  </>
);

