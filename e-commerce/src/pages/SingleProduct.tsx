import Header from '../components/Header'
import Footer from '../components/Footer'

import CartBar from '../components/singleProduct/CartBar';
import ProductDetails from '../components/singleProduct/ProductDetails';
import ProductDescription from '../components/singleProduct/ProductDescription';
import ProductRelated from '../components/singleProduct/ProductRelated';

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