import { Carousel } from "flowbite-react";

const RoomsInspiration = () => {
    return (
        <div className='h-auto w-full bg-[rgb(252,248,243)] mt-20'>
            <div className='grid grid-cols-12'>
                <div className='col-span-3 col-start-2 flex flex-col justify-center items-start'>
                    <span className='text-[#3A3A3A] text-4xl font-bold'>50+ Beautiful rooms inspiration</span>
                    <span className='text-[#616161] text-1xl mt-4'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</span>

                    <a href="#" className='bg-[#B88E2F] px-10 py-3 text-[#FFFFFF] mt-8 text-sm'>Explore More</a>
                </div>

                <div className="col-span-8 flex justify-center items-center">
                    <div className="w-[404px] h-[582px] sm:h-64 xl:h-80 2xl:h-96 py-4">
                        <Carousel>
                            <div>
                                <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/Rectangle+25.png"  />
                                <div className='w-52 h-32 bg-white'>

                                </div>
                            </div>
                            <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/Rectangle+24.png"  />
                            <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/Rectangle+25.png"  />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomsInspiration