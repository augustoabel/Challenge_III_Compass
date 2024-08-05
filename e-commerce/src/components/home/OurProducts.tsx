import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux';
import { fetchProducts } from '../../redux/productSlice';

const OurProducts = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>();
    const { items, status } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === 'loading') {
        return <Loading />;
    }

    function singleProduct(product: number) {
        navigate(`shop/singleProduct/${product}`);
    }


    return (
        <div className="container mx-auto h-auto mt-48 w-screen">
            <div className='flex justify-center items-center flex-col'>
                <span className='text-[#333333] text-4xl font-bold mb-5'>Our Products</span>

                <div className='grid grid-cols-12 container justify-center'>
                    {items.slice(30, 38).map((i) => (
                        <div className="xl:col-span-3 lg:col-span-4 col-start-3 sm:col-span-6 md:col-span-6 col-span-8 flex justify-center items-center h-[480px] w-[290px] mx-2 my-2 flex-col bg-[#F4F5F7]" key={i.id}>

                        <div className='h-[480px] w-[290px]'
                            style={{
                                backgroundImage: `url(${i.images.mainImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className='flex flex-row justify-end items-end absolute ms-48'>
                                {i.new == true &&
                                    <div className="flex-row top-2 me-2 bg-[#2EC1AC] text-white text-xs font-bold rounded-full w-10 h-10 flex justify-center items-center">
                                        New
                                    </div>
                                }
                                <div className="top-2  bg-red-500 text-white text-xs font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                                    -{(i.discountPercentage * 100).toFixed(0)}%
                                </div>
                            </div>
                            <div className="flex flex-col top-14 w-full h-full z-20 justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-black text-lg font-semibold">
                                <button className='w-[200px] h-12 bg-white text-[#B88E2F]' onClick={() => singleProduct(i.id)}>Add to cart</button>
                                <div className='flex flex-row mt-6'>
                                    <img className='w-4 h-4 me-2' src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/share.png" />
                                    <span className='font-medium text-white me-3 text-sm '> Share</span>
                                    <img className='w-4 h-4 me-2' src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/compare.png" />
                                    <span className='font-medium text-white me-3 text-sm'>Compare</span>
                                    <img className='w-4 h-4 me-2' src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/like.png" />
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



                    <div className='col-span-12 mx-auto mt-8'>
                        <button className='text-[#B88E2F] bg-white border border-[#B88E2F] px-20 py-2 mt-8' onClick={() => navigate('/shop')}>
                            Show More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts