import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard'
import axios from 'axios';

import '../styles/productPageContent.css'
import { useEffect } from 'react';
export default function ProductMain() {

    return (

        <div className="productContent">
            {productsData.map((product) => (
                <ProductCard
                    id={product._id}
                    title={product.title}
                    img={product.img}
                    description={product.description}
                    newPrice={product.newPrice}
                    sale={product.sale}
                    originalPrice={product.originalPrice}
                    discount={product.discount}
                />
            ))}
        </div>)
}
