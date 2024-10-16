import { useState } from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (

        <>
            <nav className="bg-white w-screen z-20 top-0 start-0">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex">
                        <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/logo.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
                        <span className="self-center xl:text-4xl md:text-xl font-bold whitespace-nowrap">Furniro</span>
                    </div>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            aria-expanded={isMenuOpen}
                            aria-controls="navbar-sticky"
                            onClick={toggleMenu}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex items-center justify-between flex-col p-4 md:p-0 mt-4 xl:gap-20 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to="/about">About</Link>
                            </li>
                            <li>
                                <Link className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} md:flex md:w-auto md:order-1`} id="navbar-sticky">
                        <ul className="flex items-center justify-center flex-col p-4 md:p-0  font-medium  rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li className="">
                                <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/people.png" className="w-6" alt="People Icon" />
                            </li>
                            <li className="py-2">
                                <button onClick={openModal} className="p-2 rounded">
                                    <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/cart.png" className="w-6" />
                                </button>
                                <Modal isOpen={isModalOpen} onClose={closeModal} />
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header