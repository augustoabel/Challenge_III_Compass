import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeCart from '../components/cart/HomeCart'
import DetailsCart from '../components/cart/DetailsCart'
import Quality from '../components/shop/Quality'



const Cart = () => {
    return (
        <>
            <Header />

            <HomeCart />
            <DetailsCart />
            <Quality />
            <Footer />
        </>
    )
}

export default Cart