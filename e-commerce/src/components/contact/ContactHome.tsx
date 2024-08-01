import shop from '../../img/img_shop/shop.png'

const ContactHome = () => {
    return (
        <div className='w-screen h-full'>
            <div className='w-screen h-[350px]'
                style={{
                    backgroundImage: `url(${shop})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='flex flex-col justify-center items-center h-full'>
                    <span className='font-medium text-5xl text-black mb-4'>Contact</span>
                    <div>
                        <span className='font-semibold'>Home {'>'} </span>
                        <span className='font-light'>Contact</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactHome

