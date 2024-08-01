import CheckoutForm from "../components/checkout/CheckoutForm"
import CheckoutHome from "../components/checkout/CheckoutHome"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Quality from "../components/shop/Quality"

const Checkout = () => {
    return (
        <>
            <Header />

            <CheckoutHome />
            <CheckoutForm />

            <Quality />

            <Footer />
        </>
    )
}

export default Checkout