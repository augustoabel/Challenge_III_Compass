const FuniroFurniture = () => {
    return (
        <div className='container h-full'>
            <div className='flex w-screen justify-center items-center flex-col'>
                <span className='text-[#616161] text-xl font-semibold mb-3 mt-6'>Share your setup with</span>
                <span className='text-[#333333] text-4xl font-bold'>#FuniroFurniture</span>

                <div className="background-image w-screen h-screen"
                    style={{
                        backgroundImage: `url(https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/mosaic_images.png)`,
                        backgroundSize: 'cover',
                    }}>
                </div>
                <div className='border border-1 border-[#0000002B] w-screen mt-10 mb-10'></div>
            </div>
        </div>
    )
}

export default FuniroFurniture