import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Product } from '../shop/ProductShop';
import axios from 'axios';
import Loading from '../../components/Loading';
import ProductRating from './ProductRating';
import facebook from "../../img/img_shop/facebook-fill.png"
import linkedin from "../../img/img_shop/linkedin-fill.png"
import x from "../../img/img_shop/twitter-fill.png"

interface ProductImages {
    mainImage: string;
    gallery: string[];
}



const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState<Product>([]);
    const [title, setTitle] = useState("");
    const [gallery, setGallery] = useState<ProductImages>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);
                // console.log(response.data)
                setProducts(response.data);
                setTitle(response.data.title);
                setGallery(response.data.images);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const handleClick = (index: number) => {
        setActiveIndex(index);
    };

    if (loading) {
        return <Loading />;
    }



    return (
        <div className='container mx-auto h-screen w-screen grid grid-cols-12'>
            <div className='col-span-2 flex flex-col ms-2'>
                {gallery.gallery.map((i) => (
                    <div className='w-40 h-40 rounded-xl  flex justify-center items-center mt-2'>
                        <img src={i} alt="Details Product" className='rounded-2xl mt-10 w-full h-full' />
                    </div>
                ))
                }
            </div>
            <div className='col-span-4 flex justify-center items-start mt-20'>
                <img src={gallery.mainImage} alt="Main image" />
            </div>
            <div className='col-span-6 flex justify-start items-start mt-20 flex-col ms-10'>
                <span className='font-normal text-black text-5xl'>{title}</span>
                <span className='font-medium text-[#9F9F9F] text-2xl mt-4 mb-4'>Rs. {products.normalPrice}</span>

                <div className='flex flex-row '>
                    <ProductRating products={{ rating: products.rating }} />
                    <div className='ms-4 h-9 w-[2px] bg-[#9F9F9F]'></div>
                    <span className='text-[#9F9F9F] text-sm ms-2 mt-2'>5 Customer Review</span>
                </div>

                <span className='text-sm leading-relaxed'>{products.description.long}</span>

                <div className='mt-5'>
                    <span className='text-sm text-[#9F9F9F]'>Size</span>

                    <div className='flex flex-row justify-center items-center mb-5'>
                        {products.sizes.map((i, index) => (
                            <button
                                key={index}
                                onClick={() => handleClick(index)}
                                className={`w-8 h-8 rounded-sm mt-2 me-3 ${activeIndex === index ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7] text-black'
                                    }`}>{i}</button>
                        ))}
                    </div>

                    <span className='text-sm text-[#9F9F9F]'>Color</span>

                    <div className='flex flex-row justify-start items-center'>

                        {products.colors.map((i, index) => (
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
                        <button>-</button>
                        <span className='mx-6'>1</span>
                        <button>+</button>
                    </div>

                    <button className='ms-4 border border-black rounded-lg text-center h-12 w-52'>Add to Cart</button>


                </div>

                <div className='bg-[#D9D9D9] h-[1px] w-full'></div>

                <div className='flex flex-col text-[#9F9F9F]'>

                    <div className='grid grid-cols-12 mb-4'>
                        <div className='col-span-2'>
                            <span>SKU</span>
                        </div>
                        <span className='col-span-1'>: </span>
                        <span>{products.sku}</span>
                    </div>

                    <div className='grid grid-cols-12 mb-4'>
                        <div className='col-span-2'>
                            <span>Category</span>
                        </div>
                        <span className='col-span-1'>: </span>
                        <span>{products.category}</span>
                    </div>

                    <div className='grid grid-cols-12 mb-4'>
                        <div className='col-span-2'>
                            <span>Tags</span>
                        </div>
                        <span className='col-span-1'>: </span>
                        <span className='col-span-4 '>{products.tags + `  `} </span>
                    </div>

                    <div className='grid grid-cols-12 mb-4'>
                        <div className='col-span-2'>
                            <span>Share</span>
                        </div>
                        <span className='col-span-1'>: </span>
                        <div className='flex'>
                            <img src={facebook} alt="" className='w-5 h-5 me-4' />
                            <img src={linkedin} alt="" className='w-5 h-5 me-4' />
                            <img src={x} alt="" className='w-5 h-5' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails