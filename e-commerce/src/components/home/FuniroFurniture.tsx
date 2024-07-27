import React from 'react'
import mosaicImage from '../../img/mosaic_images.png'

const FuniroFurniture = () => {
    return (
        <div className='container h-full'>
            <div className='flex w-screen justify-center items-center flex-col'>
                <span className='text-[#616161] text-xl font-semibold mb-3 mt-6'>Share your setup with</span>
                <span className='text-[#333333] text-4xl font-bold'>#FuniroFurniture</span>

                <div className="background-image w-screen h-screen"
                    style={{
                        backgroundImage: `url(${mosaicImage})`,
                        backgroundSize: 'cover',
                    }}>
                </div>
                <div className='border border-1 border-[#0000002B] w-screen mt-10 mb-10'></div>
            </div>
        </div>
    )
}

export default FuniroFurniture