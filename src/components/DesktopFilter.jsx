import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

const DesktopFilter = ({
    category,
    setCategory,
    priceRange,
    setPriceRange,
    rating,
    setRating,
    filterData,
    handleReset,
    isDropDownOpen,
    setIsDropDownOpen
}) => {

    const changeCategory = (categoryName) => {
        setCategory(prev => prev.includes(categoryName) ? prev.filter(catInfo => catInfo !== categoryName) : [...prev, categoryName])
    }

    const changePrice = (priceVal) => {
        setPriceRange(priceVal);
    }

    const changeRating = (indexVal) => {
        setRating(indexVal + 1);
    }


    return (
        <aside className='hidden sm:flex sm:flex-col sm:gap-5 sm:flex-1 sm:p-5 sm:bg-white sm:rounded-xl sm:shadow-[1px_1px_6px_3px_rgba(0,0,0,0.08)]'>

            <h2 className='text-xl font-bold'>Filters</h2>

            <CategoryFilter
                filterData={filterData}
                category={category}
                changeCategory={changeCategory}
                isDropDownOpen={isDropDownOpen}
                setIsDropDownOpen={setIsDropDownOpen}
            />

            <PriceFilter
                priceRange={priceRange}
                changePrice={changePrice}
            />

            <RatingFilter
                rating={rating}
                changeRating={changeRating}
            />

            <div>
                <button
                    onClick={handleReset}
                    className='py-2 px-8 bg-indigo-800 text-white rounded-lg active:scale-98 transition-all transition-duration-300'
                >
                    Reset
                </button>
            </div>

        </aside>
    )
}

export default DesktopFilter
