import Header from '../components/Header'
import Footer from '../components/Footer'

import CartBar from '../components/cart/CartBar';
import ProductDetails from '../components/cart/ProductDetails';
import ProductDescription from '../components/cart/ProductDescription';
import ProductRelated from '../components/cart/ProductRelated';

const SingleProduct = () => {

    

    return (
        <>
            <Header />

            <CartBar />
            <ProductDetails />
            <ProductDescription />
            <ProductRelated />
            <Footer />

        </>
    )
}

export default SingleProduct