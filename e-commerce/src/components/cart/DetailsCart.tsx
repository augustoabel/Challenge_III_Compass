import React from 'react';
import dump from '../../img/img_cart/dump.png';

const CartSkeleton = () => {
    return (
        <div className="grid grid-cols-12 justify-between p-4 mt-20">
            <div className="col-span-8">
                <table className=" mx-auto bg-white">
                    <thead>
                        <tr className="bg-[#F9F1E7] border-none">
                            <th className="py-2 px-4 font-medium">Product</th>
                            <th className="py-2 px-4 font-medium ">Price</th>
                            <th className="py-2 px-4 font-medium ">Quantity</th>
                            <th className="py-2 px-4 font-medium ">Subtotal</th>
                            <th className="py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="flex items-center py-4 px-4 border-b mt-5">
                                <div className="w-20 h-20 bg-gray-100 mr-4"></div>
                                <span>Asgaard sofa</span>
                            </td>
                            <td className="py-4 px-4 border-b">Rs. 250,000.00</td>
                            <td className="py-4 px-4 border-b">
                                <div className="flex items-center border border-gray-300 rounded">
                                    <button className="px-2">-</button>
                                    <span className="px-2">1</span>
                                    <button className="px-2">+</button>
                                </div>
                            </td>
                            <td className="py-4 px-4 border-b">Rs. 250,000.00</td>
                            <td className="py-4 px-4 border-b">
                                <button className="text-black hover:text-red-500">
                                  <img src={dump} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="col-span-4 me-20 h-[390px] bg-[#F9F1E7] p-4 rounded px-20 mb-10">
                <h2 className="text-3xl font-semibold mb-4 text-center">Cart Totals</h2>
                <div className="flex justify-between mb-6 mt-12">
                    <span>Subtotal</span>
                    <span>Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between mb-4">
                    <span>Total</span>
                    <span className="text-yellow-600 font-semibold">Rs. 250,000.00</span>
                </div>
                <div className='flex justify-center mt-20'>
                    <button className="w-2/3 bg-transparent border border-black py-2 rounded-lg shadow">
                        Check Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartSkeleton;
