import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'
import SidebarFilters from '../Components/SidebarFilters';
import ProductPageContent from '../Components/ProductPageContent';
import '../styles/productpage.css'
export default function ProductPage() {

    return (
        <div className='productPage'>
            <Navbar />
            <SidebarFilters />
            <ProductPageContent />
            <Footer />
        </div>

    )
}