import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductPage from './Pages/productPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <ProductPage />
  </React.StrictMode>
);

