import ProductShop from './ProductShop'

const FilterBar = () => {
    return (
        <div className='sm:h-[100px] w-full bg-[#F9F1E7] mb-0 h-[200px]'>
            <div className='flex xl:flex-row xl:flex-nowrap h-full w-auto flex-wrap md:mb-3 '>
                <div className='flex justify-start items-center md:flex-nowrap flex-wrap'>
                    <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/filter.png" alt="Icon Filter" className='ms-20' />
                    <span className='ms-3 text-xl'>Filter</span>

                    <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/grid.png" className='ms-6' alt="Grid Buttons" />
                    <img src="https://bucketimgcompass.s3.sa-east-1.amazonaws.com/img/img_shop/view-list.png" className='ms-6' alt="View List" />

                    <div className='bg-[#9F9F9F] h-9 w-[2px] ms-8'></div>

                    <span className='ms-8 text-xl w-96'>Showing 1–16 of 32 results</span>
                </div>

                <div className='flex flex-row justify-end items-center h-full w-full'>
                    <label className='ms-8 text-xl'>Show</label>
                    <input type="text" className='w-[55px] h-[55px] ms-4 border-none text-center' placeholder='16' />

                    <label className='ms-8 text-xl'>Short by</label>
                    <input type="text" className='w-[188px] h-[55px] ms-4 border-none me-[100px] text-center' placeholder='Default' />
                </div>
            </div>
            <ProductShop />
        </div>

        
    )
}

export default FilterBar