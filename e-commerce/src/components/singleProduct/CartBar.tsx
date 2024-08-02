import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Loading';

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../redux';
import { fetchProductById } from '../../redux/productSlice';

const CartBar = () => {
    const { id } = useParams<{ id: string }>();

    const dispatch = useDispatch<AppDispatch>();
    const { currentProduct, loading, error } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (id) {
            dispatch(fetchProductById(Number(id)));
        }
    }, [dispatch, id]);

    
    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!currentProduct) {
        return <div>No product found</div>;
    }

    if (loading) {
        return <Loading />;
    }
    return (
        <div className='h-[100px] w-full bg-[#F9F1E7] mb-0'>
            <div className='flex flex-row h-full w-full'>
                <div className='flex justify-start items-center container mx-auto' >
                    <span className='ms-3 text-xl text-[#9F9F9F] me-3'>Home</span> {'>'}
                    <span className='ms-3 text-xl text-[#9F9F9F] me-3'>Shop</span> {'>'}
                    <div className='ms-4 h-9 w-[2px] bg-[#9F9F9F]'></div>
                    <span className='ms-4 h-9 flex justify-center items-center text-base'>{currentProduct.title}</span>
                </div>
            </div>
        </div>
    )
}

export default CartBar