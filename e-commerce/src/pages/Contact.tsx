import Header from '../components/Header'
import  Footer  from '../components/Footer'
import ContactHome from '../components/contact/ContactHome'
import Quality from '../components/shop/Quality'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => {
    return (

        <>
            <Header />
            
            <ContactHome />
            <ContactForm />
            <Quality />

            <Footer />
        </>
    )
}

export default Contact