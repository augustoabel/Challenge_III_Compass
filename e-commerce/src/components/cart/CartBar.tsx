import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
const CartBar = () => {
    const { id } = useParams<{ id: string }>();
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);
                // console.log(response.data)
                setProducts(response.data);
                setTitle(response.data.title);
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
    return (
        <div className='h-[100px] w-full bg-[#F9F1E7] mb-0'>
            <div className='flex flex-row h-full w-full'>
                <div className='flex justify-start items-center container mx-auto' >
                    <span className='ms-3 text-xl text-[#9F9F9F] me-3'>Home</span> {'>'}
                    <span className='ms-3 text-xl text-[#9F9F9F] me-3'>Shop</span> {'>'}
                    <div className='ms-4 h-9 w-[2px] bg-[#9F9F9F]'></div>
                    <span className='ms-4 h-9 flex justify-center items-center text-base'>{title}</span>
                </div>
            </div>
        </div>
    )
}

export default CartBar