import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';
import share from '../../img/img_shop/share.png'
import compare from '../../img/img_shop/compare.png'
import like from '../../img/img_shop/like.png'

interface Description {
    short: string;
    long: string;
}

interface Color {
    name: string;
    hex: string;
}

interface Images {
    mainImage: string;
    gallery: string[];
}

export interface Product {
    id: number;
    sku: string;
    title: string;
    category: string;
    tags: string[];
    normalPrice: number;
    salePrice: number;
    discountPercentage: number;
    new: boolean;
    description: Description;
    colors: Color[];
    sizes: string[];
    rating: number;
    images: Images;
}

const ProductShop = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                // console.log(response.data)
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    function singleProduct(product: number) {
        console.log('chamou',product)
        navigate(`singleProduct/${product}`);
    }

    return (
        <div className="container mx-auto  mt-12">
            <div className='flex justify-center items-center flex-col'>

                <div className='grid grid-cols-12 container mx-auto '>
                    {products.slice(0, 16).map((i, index) => (
                        <div className="col-span-3 flex justify-start items-center h-[480px] w-[290px] mx-2 my-2 flex-col bg-[#F4F5F7]" key={i.id}>

                            <div className='h-[480px] w-[290px]'
                                style={{
                                    backgroundImage: `url(${i.images.mainImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className='flex flex-row justify-end items-end'>
                                    {i.new == true &&
                                        <div className="flex-row top-2 me-2 bg-[#2EC1AC] text-white text-xs font-bold rounded-full w-10 h-10 flex justify-center items-center">
                                            New
                                        </div>
                                    }
                                    <div className="top-2  bg-red-500 text-white text-xs font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                                        -{(i.discountPercentage * 100).toFixed(0)}%
                                    </div>
                                </div>
                                <div className="flex flex-col top-14 w-full h-[88%] z-20 justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-black text-lg font-semibold">
                                    <button className='w-[200px] h-12 bg-white text-[#B88E2F]' onClick={() => singleProduct(i.id)}>Add to cart</button>
                                    <div className='flex flex-row mt-6'>
                                        <img className='w-4 h-4 me-2' src={share} />
                                        <span className='font-medium text-white me-3 text-sm '> Share</span>
                                        <img className='w-4 h-4 me-2' src={compare} />
                                        <span className='font-medium text-white me-3 text-sm'>Compare</span>
                                        <img className='w-4 h-4 me-2' src={like} />
                                        <span className='font-medium text-white me-3 text-sm'> Like</span>
                                    </div>
                                </div>
                            </div>



                            <div className='flex flex-col px-2'>
                                <span className='text-[#3A3A3A] font-semibold mt-4'>{i.title}</span>
                                <span className='text-[#898989] text-sm'>{i.description.short}</span>

                                <div className='mt-2 mb-2'>
                                    <span className='text-[#3A3A3A] font-semibold me-4'>Rp {i.normalPrice}</span>
                                    <span className='text-[#898989] text-sm mid-underline'>Rp {i.salePrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-16 mb-20'>
                    <button className='border-none mx-9 bg-[#B88E2F] rounded-md w-[60px] h-[60px] text-white'>1</button>
                    <button className='border-none mx-9 bg-[#F9F1E7] rounded-md w-[60px] h-[60px]'>2</button>
                    <button className='border-none mx-9 bg-[#F9F1E7] rounded-md w-[60px] h-[60px]'>3</button>
                    <button className='border-none mx-9 bg-[#F9F1E7] rounded-md w-[60px] h-[60px]'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default ProductShop