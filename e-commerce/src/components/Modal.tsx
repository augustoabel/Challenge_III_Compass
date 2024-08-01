import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux';
import { removeFromCart } from '../redux/cartSlice'; 
import { useNavigate } from 'react-router-dom';
import CartClose from '../img/cartClose.png'
import deleteProduct from '../img/deleteProduct.png'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    
    const total = cartItems.reduce((sum, item) => {
        return sum + item.product.normalPrice * item.quantity;
    }, 0);
    
    const formattedTotal = total.toFixed(2);
    
    const handleDelete = (id: number) => {
        dispatch(removeFromCart(id));
    };
    
    const navigate = useNavigate()

    return (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-end items-start z-50">
            <div className="bg-white p-6 shadow-lg w-[420px]  grid grid-cols-12">
                <div className='flex flex-row justify-between items-center col-span-12'>
                    <h2 className="text-xl font-semibold">Shopping Cart</h2>
                    <button onClick={onClose}>
                        <img src={CartClose} alt="" />
                    </button>
                </div>
                {cartItems.length < 1 ? <span className='text-center'>Cart empty</span> : (
                    <div className="space-y-4 border-t mt-10 pt-10 grid col-span-12">
                        {cartItems.map((i, index) => (
                            <div className="flex items-center space-x-4">
                                <img src={i.product.images.mainImage} alt="Product 1" className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <h3 className="text-base font-medium">{i.product.title}</h3>
                                </div>
                                <p className="ml-auto text-[#B88E2F]">{i.quantity} x Rs. {i.product.normalPrice}</p>
                                <button onClick={() => handleDelete(i.product.id)}>
                                    <img src={deleteProduct} alt="" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <div className="border-t pt-4 flex flex-col justify-end col-span-12">
                    <div className="flex justify-between font-semibold">
                        <span>Subtotal</span>
                        <span className='text-[#B88E2F]'>Rs. {formattedTotal}</span>
                    </div>

                    <div className="mt-4 flex justify-between">
                        <button className=" text-black py-2 px-6 border border-black rounded-3xl" onClick={() => navigate('/cart')}>Cart</button>
                        <button className=" text-black py-2 px-4 border border-black rounded-3xl" onClick={() => navigate('/checkout')}>Checkout</button>
                        <button className=" text-black py-2 px-4 border border-black rounded-3xl">Comparison</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
