const BrowserRange = () => {
    return (
        <div className="container mx-auto h-auto mt-12 mb-12">
            <div className='flex justify-center items-center flex-col'>
                <span className='text-[#333333] text-4xl font-bold mb-5'>Browse The Range</span>
                <span className='text-[#666666] text-xl font-thin mb-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>

                <div className='grid grid-cols-12 gap-4 rounded'>
                    <div className='col-span-4 xl:h-[480px] xl:w-[380px] md:h-[240px] md:w-[190px] sm:h-[120px] sm:w-[95px] text-center'>
                        <button>
                            <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/dining.png" alt="Dining" className='mb-6 rounded-lg' />
                        </button>
                        <span className='text-[#333333] text-xl font-bold'>Dining</span>
                    </div>
                    <div className='col-span-4 xl:h-[480px] xl:w-[380px] md:h-[240px] md:w-[190px] sm:h-[120px] sm:w-[95px] text-center'>
                        <button>
                            <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/living.png" alt="Living" className='mb-6 rounded-lg' />
                        </button>
                        <span className='text-[#333333] text-xl font-bold'>Living</span>
                    </div>
                    <div className='col-span-4 xl:h-[480px] xl:w-[380px] md:h-[240px] md:w-[190px] sm:h-[120px] sm:w-[95px] text-center'>
                        <button>
                            <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/bedroom.png" alt="Bedroom" className='mb-6 rounded-lg ' />
                        </button>
                        <span className='text-[#333333] text-xl font-bold'>Bedroom</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowserRange