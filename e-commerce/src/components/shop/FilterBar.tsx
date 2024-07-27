import filter from '../../img/img_shop/filter.png'
import grid from '../../img/img_shop/grid.png'
import view_list from '../../img/img_shop/view-list.png'
import ProductShop from './ProductShop'

const FilterBar = () => {
    return (
        <div className='h-[100px] w-full bg-[#F9F1E7] mb-0'>
            <div className='flex flex-row h-full w-full'>
                <div className='flex justify-start items-center'>
                    <img src={filter} alt="Icon Filter" className='ms-20' />
                    <span className='ms-3 text-xl'>Filter</span>

                    <img src={grid} className='ms-6' alt="Grid Buttons" />
                    <img src={view_list} className='ms-6' alt="View List" />

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