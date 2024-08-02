import { Carousel } from "flowbite-react";

const RoomsInspiration = () => {
    return (
        <div className='h-screen w-full bg-[#FCF8F3] mt-10'>
            <div className='grid grid-cols-12 h-screen'>
                <div className='col-span-3 col-start-2 flex flex-col justify-center items-start'>
                    <span className='text-[#3A3A3A] text-4xl font-bold'>50+ Beautiful rooms inspiration</span>
                    <span className='text-[#616161] text-1xl mt-4'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</span>

                    <a href="#" className='bg-[#B88E2F] px-10 py-3 text-[#FFFFFF] mt-8 text-sm'>Explore More</a>
                </div>

                <div className="col-span-8 flex justify-center items-center">
                    <div className="w-[404px] h-[582px] sm:h-64 xl:h-80 2xl:h-96">
                        <Carousel>
                            <div>
                                <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                                <div className='w-52 h-32 bg-white'>

                                </div>
                            </div>
                            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomsInspiration