import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Product } from '../shop/ProductShop';
import Loading from '../Loading';
import share from '../../img/img_shop/share.png'
import compare from '../../img/img_shop/compare.png'
import like from '../../img/img_shop/like.png'
import { useNavigate } from 'react-router-dom';

const RelatedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [tags, setTags] = useState([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate()

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

  function singleProduct(product: number) {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/\/\d+$/, `/${product}`); 
    navigate(newPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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

                <div className='flex justify-end items-end absolute ms-48 top-1'>
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
                    <img className='w-4 h-4 me-2' src={share} />
                    <span className='font-medium text-white me-3 text-sm '> Share</span>
                    <img className='w-4 h-4 me-2' src={compare} />
                    <span className='font-medium text-white me-3 text-sm'>Compare</span>
                    <img className='w-4 h-4 me-2' src={like} />
                    <span className='font-medium text-white me-3 text-sm'> Like</span>
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
