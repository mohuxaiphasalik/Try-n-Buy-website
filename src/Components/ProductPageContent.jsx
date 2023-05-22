import React from 'react'
import productsData from '../data/productsData'
import ProductCard from './ProductCard'
import '../styles/productPageContent.css'
import { useEffect } from 'react';
export default function ProductMain() {

    async function test() {
        const data = await fetch('http://localhost:4000/products');
        console.log(data);
    }

    useEffect(() => {
        test();
    }, [])

    return (
        <div className="productContent">
            <ProductCard title={productsData[0].title} img={productsData[0].img} description={productsData[0].description}
                newPrice={productsData[0].newPrice} sale={productsData[0].sale}
                originalPrice={productsData[1].originalPrice} discount={productsData[1].discount} />
            <ProductCard title={productsData[1].title} img={productsData[1].img} description={productsData[1].description}
                newPrice={productsData[1].newPrice} sale={productsData[1].sale}
                originalPrice={productsData[1].originalPrice} discount={productsData[1].discount} />
            <ProductCard title={productsData[2].title} img={productsData[2].img} description={productsData[2].description}
                newPrice={productsData[2].newPrice} sale={productsData[2].sale}
                originalPrice={productsData[2].originalPrice} discount={productsData[2].discount} />
            <ProductCard title={productsData[3].title} img={productsData[3].img} description={productsData[3].description}
                newPrice={productsData[3].newPrice} sale={productsData[3].sale}
                originalPrice={productsData[3].originalPrice} discount={productsData[3].discount} />
            <ProductCard title={productsData[4].title} img={productsData[4].img} description={productsData[4].description}
                newPrice={productsData[4].newPrice} sale={productsData[4].sale}
                originalPrice={productsData[4].originalPrice} discount={productsData[4].discount} />
            <ProductCard title={productsData[5].title} img={productsData[5].img} description={productsData[5].description}
                newPrice={productsData[5].newPrice} sale={productsData[5].sale}
                originalPrice={productsData[5].originalPrice} discount={productsData[5].discount} />
            <ProductCard title={productsData[0].title} img={productsData[0].img} description={productsData[0].description}
                newPrice={productsData[0].newPrice} sale={productsData[0].sale}
                originalPrice={productsData[1].originalPrice} discount={productsData[1].discount} />
            <ProductCard title={productsData[1].title} img={productsData[1].img} description={productsData[1].description}
                newPrice={productsData[1].newPrice} sale={productsData[1].sale}
                originalPrice={productsData[1].originalPrice} discount={productsData[1].discount} />
            <ProductCard title={productsData[2].title} img={productsData[2].img} description={productsData[2].description}
                newPrice={productsData[2].newPrice} sale={productsData[2].sale}
                originalPrice={productsData[2].originalPrice} discount={productsData[2].discount} />
            <ProductCard title={productsData[3].title} img={productsData[3].img} description={productsData[3].description}
                newPrice={productsData[3].newPrice} sale={productsData[3].sale}
                originalPrice={productsData[3].originalPrice} discount={productsData[3].discount} />
            <ProductCard title={productsData[4].title} img={productsData[4].img} description={productsData[4].description}
                newPrice={productsData[4].newPrice} sale={productsData[4].sale}
                originalPrice={productsData[4].originalPrice} discount={productsData[4].discount} />
            <ProductCard title={productsData[5].title} img={productsData[5].img} description={productsData[5].description}
                newPrice={productsData[5].newPrice} sale={productsData[5].sale}
                originalPrice={productsData[5].originalPrice} discount={productsData[5].discount} />
        </div>)
}