import React from 'react'


const RoomsInspiration = () => {
    return (
        <div className='h-screen w-full bg-[#FCF8F3] mt-10'>
            <div className='grid grid-cols-12 h-screen'>
                <div className='col-span-3 col-start-2 flex flex-col justify-center items-start'>
                    <span className='text-[#3A3A3A] text-4xl font-bold'>50+ Beautiful rooms inspiration</span>
                    <span className='text-[#616161] text-1xl mt-4'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</span>

                    <a href="#" className='bg-[#B88E2F] px-10 py-3 text-[#FFFFFF] mt-8 text-sm'>Explore More</a>
                </div>

            </div>
        </div>
    )
}

export default RoomsInspiration