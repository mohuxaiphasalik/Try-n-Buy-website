import React from 'react';
import Navbar from '../Components/Navbar';
import SidebarFilters from '../Components/SidebarFilters';
import ProductPageContent from '../Components/ProductPageContent';
import '../styles/productpage.css'
export default function ProductPage() {
    return (
        <>
            <Navbar />
            <SidebarFilters />
            <ProductPageContent />
        </>

    )
}