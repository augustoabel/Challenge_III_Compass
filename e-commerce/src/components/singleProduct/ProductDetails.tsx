import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux';
import { fetchProductById } from '../../redux/productSlice';
import { addToCart } from '../../redux/cartSlice';

import Loading from '../Loading';
import ProductRating from './ProductRating';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<number>(1);

    const dispatch = useDispatch<AppDispatch>();
    const { currentProduct, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(Number(id)));
        }
    }, [dispatch, id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!currentProduct) {
        return <div>No product found</div>;
    }

    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    const handleAddToCart = () => {
        if (currentProduct) {
            dispatch(addToCart({ product: currentProduct, quantity }));
        }
    };

    return (
        <div className='container mx-auto h-auto w-auto grid grid-cols-12'>
            <div className='col-span-2 flex flex-col ms-2'>
                {currentProduct.images.gallery.map((i, index) => (
                    <div key={index} className='w-40 h-40 rounded-xl  flex justify-center items-center mt-2'>
                        <img src={i} alt="Details Product" className='rounded-2xl mt-10 w-full h-full' />
                    </div>
                ))}
            </div>
            <div className='col-span-4 flex justify-center items-start mt-20'>
                <img src={currentProduct.images.mainImage} alt="Main image" />
            </div>
            <div className='col-span-6 flex justify-start items-start mt-20 flex-col ms-10'>
                <span className='font-normal text-black text-5xl'>{currentProduct.title}</span>
                <span className='font-medium text-[#9F9F9F] text-2xl mt-4 mb-4'>Rs. {currentProduct.normalPrice}</span>

                <div className='flex flex-row '>
                    <ProductRating products={{ rating: currentProduct.rating }} />
                    <div className='ms-4 h-9 w-[2px] bg-[#9F9F9F]'></div>
                    <span className='text-[#9F9F9F] text-sm ms-2 mt-2'>5 Customer Review</span>
                </div>

                <span className='text-sm leading-relaxed'>{currentProduct.description.long}</span>

                <div className='mt-5'>
                    <span className='text-sm text-[#9F9F9F]'>Size</span>

                    <div className='flex flex-row justify-center items-center mb-5'>
                        {currentProduct.sizes.map((i, index) => (
                            <button
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`w-8 h-8 rounded-sm mt-2 me-3 ${activeIndex === index ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7] text-black'
                                    }`}>{i}</button>
                        ))}
                    </div>

                    <span className='text-sm text-[#9F9F9F]'>Color</span>

                    <div className='flex flex-row justify-start items-center'>
                        {currentProduct.colors.map((i, index) => (
                            <button
                                key={index}
                                className={`w-8 h-8 rounded-full mt-2 me-3 bg-[${i.hex}] border border-[${i.hex}] `}
                            >
                            </button>
                        ))}
                    </div>
                </div>

                <div className='flex flex-row items-end mb-10'>
                    <div className='w-32 h-12 rounded-lg mt-5 border border-black flex justify-center items-center'>
                        <button onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}>-</button>
                        <span className='mx-6'>{quantity}</span>
                        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                    </div>

                    <button 
                        className='ms-4 border border-black rounded-lg text-center h-12 w-52' 
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>

                <div className='bg-[#D9D9D9] h-[1px] w-full mb-4'></div>

                <div className='flex flex-col text-[#9F9F9F]'>

                    <div className='grid grid-cols-12 mb-4'>
                        <div className='col-span-2'>
                            <span>SKU</span>
                        </div>
                        <span className='col-span-1'>: </span>
                        <span>{currentProduct.sku}</span>
                    </div>

                    <div className='grid grid-cols-12 mb-4'>
                        <div className='col-span-2'>
                            <span>Category</span>
                        </div>
                        <span className='col-span-1'>: </span>
                        <span>{currentProduct.category}</span>
                    </div>

                    <div className='grid grid-cols-12 mb-4'>
                        <div className='col-span-2'>
                            <span>Tags</span>
                        </div>
                        <span className='col-span-1'>: </span>
                        <span className='col-span-4 '>{currentProduct.tags + `  `} </span>
                    </div>

                    <div className='grid grid-cols-12 mb-4'>
                        <div className='col-span-2'>
                            <span>Share</span>
                        </div>
                        <span className='col-span-1'>: </span>
                        <div className='flex'>
                            <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/facebook-fill.png" alt="Facebook" className='w-5 h-5 me-4' />
                            <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/linkedin-fill.png" alt="Linkedin" className='w-5 h-5 me-4' />
                            <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/twitter-fill.png" alt="X" className='w-5 h-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
