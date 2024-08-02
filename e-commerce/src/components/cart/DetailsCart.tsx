import React from 'react';
import dump from '../../img/img_cart/dump.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/cartSlice';

const DetailsCart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const { user } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleDelete = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const handleIncrement = (id: number) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id: number) => {
        dispatch(decrementQuantity(id));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.product.normalPrice * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();

    console.log('user details', (user))

    return (
        <div className="grid grid-cols-12 justify-between p-4 mt-20">
            <div className="col-span-8">
                <table className="mx-auto bg-white">
                    <thead>
                        <tr className="bg-[#F9F1E7] border-none">
                            <th className="py-2 px-4 font-medium">Product</th>
                            <th className="py-2 px-4 font-medium">Price</th>
                            <th className="py-2 px-4 font-medium">Quantity</th>
                            <th className="py-2 px-4 font-medium">Subtotal</th>
                            <th className="py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.length <= 0 ? <span className='text-center'>Empty Cart</span> : (
                            cartItems.map((i) => (
                                <tr key={i.product.id} className="bg-white">
                                    <td className="flex items-center py-4 px-4 border-b mt-5">
                                        <div className="w-20 h-20 bg-gray-100 mr-4">
                                            <img src={i.product.images.mainImage} alt="" />
                                        </div>
                                        <span>{i.product.title}</span>
                                    </td>
                                    <td className="py-4 px-4 border-b">Rs. {i.product.normalPrice}</td>
                                    <td className="py-4 px-4 border-b">
                                        <div className="flex items-center border border-gray-300 rounded">
                                            <button onClick={() => handleDecrement(i.product.id)}>-</button>
                                            <span className='mx-6'>{i.quantity}</span>
                                            <button onClick={() => handleIncrement(i.product.id)}>+</button>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4 border-b">Rs. {i.product.normalPrice * i.quantity}</td>
                                    <td className="py-4 px-4 border-b">
                                        <button className="text-black hover:text-red-500" onClick={() => handleDelete(i.product.id)}>
                                            <img src={dump} alt="Remove" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )
                        }
                    </tbody>
                </table>
            </div>

            <div className="col-span-4 me-20 h-[390px] bg-[#F9F1E7] p-4 rounded px-20 mb-10">
                <h2 className="text-3xl font-semibold mb-4 text-center">Cart Totals</h2>
                <div className="flex justify-between mb-6 mt-12">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span>Total</span>
                    <span className="text-yellow-600 font-semibold">Rs. {subtotal.toFixed(2)}</span>
                </div>
                <div className='flex justify-center mt-20'>
                    {user != null ?
                        <button onClick={() => navigate('/checkout')} className="w-2/3 bg-transparent border border-black py-2 rounded-lg shadow">
                            Check Out
                        </button>
                        :
                        <button onClick={() => navigate('/login')} className="w-2/3 bg-transparent border border-black py-2 rounded-lg shadow">
                            Login
                        </button>
                    }

                </div>
            </div>
        </div>
    );
};

export default DetailsCart;
