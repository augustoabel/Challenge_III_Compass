import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeShop from '../components/shop/HomeShop'
import ProductShop from '../components/shop/ProductShop'

import FilterBar from '../components/shop/FilterBar'
import Quality from '../components/shop/Quality'



const Shop = () => {
    return (
        <>
            <Header />

            <HomeShop />
            <FilterBar />
            <ProductShop />

            <Quality />

            <Footer />
        </>
    )
}

export default Shop