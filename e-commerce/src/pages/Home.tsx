import React from 'react';
import Header from '../components/Header';
import img1 from '../img/img1.png';
import Footer from '../components/Footer';
import BrowserRange from '../components/home/BrowserRange';
import OurProducts from '../components/home/OurProducts';
import RoomsInspiration from '../components/home/RoomsInspiration';
import FuniroFurniture from '../components/home/FuniroFurniture';


const Home = () => {
  return (
    <>
      <Header />
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <div className="overlay rounded-lg sm:mx-4 lg:ml-[740px] lg:mt-[100px] xl:w-[640px] xl:h-[440px] lg:w-[640px] lg:h-[440px] md:w-[400px] md:h-[450px]">
          <div className='justify-start flex items-start'>
            <span className='text-[#333333] tracking-widest mt-[60px] font-bold md:text-xl'>New Arrival</span>
          </div>

          <div className='justify-start flex items-start w-[70%]'>
            <span className='font-extrabold text-5xl text-[#B88E2F] text-start leading-tight'>Discover Our New Collection</span>
          </div>

          <div className='justify-start flex items-start mt-3'>
            <span className='text-[#333333] text-start text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</span>
          </div>

          <div className='justify-start flex items-start mt-10'>
            <button className='bg-[#B88E2F] lg:w-[222px] lg:h-[75px] md:w-[111px] md:h-[35px] sm:w-[111px] sm:h-[35px] md:text-xl sm:text-xs'>BUY</button>
          </div>
        </div>
      </div>
      <BrowserRange />
      <OurProducts />
      <RoomsInspiration />
      <FuniroFurniture />

      <Footer />

    </>
  );
};

export default Home;
