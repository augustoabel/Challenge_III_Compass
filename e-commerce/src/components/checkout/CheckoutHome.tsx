const CheckoutHome = () => {
    return (
        <div className='w-screen h-full'>
            <div className='w-screen h-[350px]'
                style={{
                    backgroundImage: `url(https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/shop.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='flex flex-col justify-center items-center h-full'>
                    <span className='font-medium text-5xl text-black mb-4'>Checkout</span>
                    <div>
                        <span className='font-semibold'>Home {'>'} </span>
                        <span className='font-light'>Checkout</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CheckoutHome

