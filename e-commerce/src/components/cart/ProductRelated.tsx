import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Product } from '../shop/ProductShop';
import Loading from '../Loading';

const RelatedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [tags, setTags] = useState([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const selectProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setTags(response.data.tags);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    if (id) {
      selectProduct();
    }
  }, [id]);

  useEffect(() => {
    if (tags.length > 0 && products.length > 0) {
      setFilteredProducts(filterProductsByTags(tags));
    }
  }, [tags, products]);

  const filterProductsByTags = (tags: string[]): Product[] => {
    return products.filter(product =>
      tags.some(tag => product.tags.includes(tag))
    );
  };
 


  if (loading) {
    return <Loading />;
  }


  return (
    <div className="container mx-auto h-full mt-12 border-b-2">
      <div className='flex justify-center items-center flex-col'>
        <span className='text-[#333333] text-4xl font-bold mb-5'>Related Products</span>

        <div className='grid grid-cols-12 container mx-auto'>
          {filteredProducts.slice(0, visibleProducts).map((i, index) => (
            <div className="col-span-3 flex justify-start items-center  mx-2 my-2 flex-col bg-[#F4F5F7]" key={i.id}>
              <div
                className="background-image w-full h-80"
                style={{
                  backgroundImage: `url(${i.images.mainImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className='flex flex-row justify-end items-start w-full h-full'>
                  {i.new == true &&
                    <div className="flex-row top-2 me-2 bg-[#2EC1AC] text-white text-xs font-bold rounded-full w-10 h-10 flex justify-center items-center">
                      New
                    </div>
                  }
                  <div className="top-2  bg-red-500 text-white text-xs font-semibold rounded-full w-10 h-10 flex justify-center items-center">
                    -{(i.discountPercentage * 100).toFixed(0)}%
                  </div>
                </div>
              </div>
              <div className='w-72 flex flex-col'>
                <span className='text-[#3A3A3A] font-semibold mt-4'>{i.title}</span>
                <span className='text-[#898989] text-sm'>{i.description.short}</span>

                <div className='mt-2 mb-2'>
                  <span className='text-[#3A3A3A] font-semibold me-4'>Rp {i.normalPrice}</span>
                  <span className='text-[#898989] text-sm mid-underline'>Rp {i.salePrice}</span>
                </div>

              </div>
            </div>
          ))}

          <div className='col-span-12 mx-auto mt-8 mb-28'>
            <button onClick={() => setVisibleProducts(visibleProducts + 4)} className='text-[#B88E2F] bg-white border border-[#B88E2F] w-[250px] h-12 py-2 mt-8'>Show More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
