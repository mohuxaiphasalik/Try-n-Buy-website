import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard'
import axios from 'axios';

import '../styles/productPageContent.css'
export default function ProductMain() {
    console.log('request is being made')
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/products');
                const data = response.data;
                setProductsData(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

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

// description: "Add some flair to your wardrobe with our vibrant red t-shirts!"
// discount: "30% Off"
// img: "../data/images/boyT1.png"
// newPrice: 3143
// originalPrice:5000
// sale:true
// title:"Red T-Shirt"