import { useAppContext } from '../context/AppProvider';
import formatPrice from '../utils/formatPrice';
import maxPrice from '../utils/maxPrice';

const PriceFilter = ({ priceRange, changePrice }) => {

    const { products } = useAppContext();

    return (
        <div className='flex flex-col gap-4 sm:gap-6'>
            <h3 className='text-base font-semibold'>Price Range</h3>
            <div className='flex flex-col gap-2'>

                <input
                    type="range"
                    min={0}
                    max={maxPrice(products)}
                    value={priceRange}
                    onChange={(e) => changePrice(e.target.value)}
                    className='w-full accent-indigo-800'
                />

                <div className='flex justify-between font-semibold text-base'>
                    <span>₹0</span>
                    <span>{formatPrice(priceRange, 0)}</span>
                </div>

            </div>
        </div>
    )
}

export default PriceFilter
