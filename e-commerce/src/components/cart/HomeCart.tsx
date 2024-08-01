import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Product } from '../shop/ProductShop';
import cart from '../../img/img_shop/shop.png'
import axios from 'axios';
import Loading from '../Loading';


const Cart = () => {
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    return (
        <div className='w-screen h-full'>
        <div className='w-screen h-[350px]'
            style={{
                backgroundImage: `url(${cart})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            
            <div className='flex flex-col justify-center items-center h-full'>
                <span className='font-medium text-5xl text-black mb-4'>Cart</span>
                <div>
                    <span className='font-semibold'>Home {'>'} </span>
                    <span className='font-light'>Cart</span>
                </div>
            </div>

        </div>
    </div>
    )
}

export default Cart