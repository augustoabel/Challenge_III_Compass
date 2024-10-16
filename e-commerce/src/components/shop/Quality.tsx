const Quality = () => {
    return (
        <div className='w-screen h-[270px] bg-[#FAF3EA] py-6 flex justify-center items-center'>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center mx-auto px-6 '>
                <div className='flex flex-row items-center'>
                    <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/trophy.png" alt="Troféu" className='w-[50px] h-[60px]' />
                    <div className='flex flex-col ms-3'>
                        <span className='text-[#242424] font-semibold text-lg md:text-2xl'>High Quality</span>
                        <span className='text-[#898989] font-medium text-md md:text-xl'>crafted from top materials</span>
                    </div>
                </div>

                <div className='flex flex-row items-center'>
                    <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/verified.png" alt="Verificado" className='w-[50px] h-[50px]' />
                    <div className='flex flex-col ms-3'>
                        <span className='text-[#242424] font-semibold text-lg md:text-2xl'>Warranty Protection</span>
                        <span className='text-[#898989] font-medium text-md md:text-xl'>Over 2 years</span>
                    </div>
                </div>

                <div className='flex flex-row items-center'>
                    <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/shipping.png" alt="Envio grátis" className='w-[50px] h-[50px]' />
                    <div className='flex flex-col ms-3'>
                        <span className='text-[#242424] font-semibold text-lg md:text-2xl'>Free Shipping</span>
                        <span className='text-[#898989] font-medium text-md md:text-xl'>Order over $150</span>
                    </div>
                </div>

                <div className='flex flex-row items-center'>
                    <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/support.png" alt="Suporte" className='w-[50px] h-[50px]' />
                    <div className='flex flex-col ms-3'>
                        <span className='text-[#242424] font-semibold text-lg md:text-2xl'>24/7 Support</span>
                        <span className='text-[#898989] font-medium text-md md:text-xl'>Dedicated support</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quality