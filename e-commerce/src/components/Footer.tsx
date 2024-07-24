import React from 'react'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import x from '../img/x.png'
import linkedin from '../img/linkedin.png'

const Footer = () => {
  return (
    <div className='container mx-auto bg-white w-screen z-20 h-[500px]'>
      <div className='grid grid-cols-12 mt-10 xl:ms-[100px]'>
        <div className='col-span-4 flex flex-col gap-12'>
          <span className='font-extrabold text-2xl'>Funiro.</span>
          <span className='text-[#9F9F9F] xl:w-[250px]' >
            400 University Drive Suite 200 Coral Gables,<br></br>
            FL 33134 USA
          </span>
          <div></div>
          <div className="flex flex-row xl:gap-4 sm:gap-1">
            <div>
              <div className='w-9 h-9 rounded-full border border-black flex justify-center items-center'><img src={facebook} alt="Logo Facebook" /></div>
            </div>
            <div>
              <div className='w-9 h-9 rounded-full border border-black flex justify-center items-center'><img src={instagram} alt="Logo Facebook" /></div>
            </div>
            <div>
              <div className='w-9 h-9 rounded-full border border-black flex justify-center items-center'><img src={x} alt="Logo Facebook" /></div>
            </div>
            <div>
              <div className='w-9 h-9 rounded-full border border-black flex justify-center items-center'><img src={linkedin} alt="Logo Facebook" /></div>
            </div>

          </div>
        </div>

        <div className='col-span-2 flex flex-col gap-12 text-black font-medium'>
          <span className='text-[#9F9F9F]'>Links</span>
          <span>Home</span>
          <span>Shop</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <div className='col-span-2 flex flex-col gap-12'>
          <span className='text-[#9F9F9F]' >Help</span>
          <span>Payment Options</span>
          <span>Returns</span>
          <span>Privacy Policies</span>
        </div>

        <div className='col-span-4 flex flex-col gap-12'>
          <span className='text-[#9F9F9F]'>Newsletter</span>
          <div>

            <span className='underline me-2 text-[#9F9F9F]'>Enter Your Email Address </span>
            <span className='underline'>SUBSCRIBE</span>
          </div>
        </div>

        <div className='col-span-12 border border-[#D9D9D9] mt-12'></div>

        <div className='col-span-12 mt-9'>
          <span>2023 furino. All rights reverved</span>
        </div>
      </div>
    </div>
  )
}

export default Footer