import React from 'react'
import Dining from '../../img/dining.png'
import Living from '../../img/living.png'
import Bedroom from '../../img/bedroom.png'
const BrowserRange = () => {
    return (
        <div className="container mx-auto h-screen mt-12">
            <div className='flex justify-center items-center flex-col'>
                <span className='text-[#333333] text-4xl font-bold mb-5'>Browse The Range</span>
                <span className='text-[#666666] text-xl font-thin mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

                <div className='grid grid-cols-12 gap-4 rounded'>
                    <div className='col-span-4 xl:h-[480px] xl:w-[380px] md:h-[240px] md:w-[190px] sm:h-[120px] sm:w-[95px] text-center'>
                        <button>
                            <img src={Dining} alt="Dining" className='mb-6 rounded-lg' />
                        </button>
                        <span className='text-[#333333] text-xl font-bold'>Dining</span>
                    </div>
                    <div className='col-span-4 xl:h-[480px] xl:w-[380px] md:h-[240px] md:w-[190px] sm:h-[120px] sm:w-[95px] text-center'>
                        <button>
                            <img src={Living} alt="Living" className='mb-6 rounded-lg' />
                        </button>
                        <span className='text-[#333333] text-xl font-bold'>Living</span>
                    </div>
                    <div className='col-span-4 xl:h-[480px] xl:w-[380px] md:h-[240px] md:w-[190px] sm:h-[120px] sm:w-[95px] text-center'>
                        <button>
                            <img src={Bedroom} alt="Bedroom" className='mb-6 rounded-lg ' />
                        </button>
                        <span className='text-[#333333] text-xl font-bold'>Bedroom</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowserRange