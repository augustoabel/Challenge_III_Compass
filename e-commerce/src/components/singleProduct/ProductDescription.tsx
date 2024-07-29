import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Product } from '../shop/ProductShop';
import Loading from '../Loading';
const ProductDescription: React.FC = () => {
    const [activeTab, setActiveTab] = useState('description');
    const [products, setProducts] = useState<Product>()
    const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/products/${id}`);
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
    return (
        <div className="container mx-auto px-4 py-8 border-y-2 ">
            <div className="flex justify-center mb-4">
                <button
                    className={`px-4 py-2 text-lg font-medium ${activeTab === 'description' ? 'text-black' : 'text-gray-400'
                        }`}
                    onClick={() => setActiveTab('description')}
                >
                    Description
                </button>
                <button
                    className="px-4 py-2 text-lg font-medium text-gray-400"
                >
                    Additional Information
                </button>
            </div>

            {activeTab === 'description' && (
                <div className='container mx-auto'>
                    <p className="text-[#9F9F9F] mb-4">
                        Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                    </p>
                    <p className="text-[#9F9F9F]">
                        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                    </p>
                </div>
            )}

            <div className="flex justify-center mt-8 space-x-4">
                <div className="w-1/2 p-4 rounded-md">
                    <img
                        src={products?.images.gallery[0]}
                        className="w-full rounded-md"
                    />
                </div>
                <div className="w-1/2 p-4 rounded-md">
                    <img
                        src={products?.images.gallery[1]}
                        className="w-full rounded-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
