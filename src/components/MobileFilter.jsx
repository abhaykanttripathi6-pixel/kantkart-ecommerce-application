import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from "./RatingFilter";

const MobileFilter = ({
  setIsFilterOpen,
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

  const [filterVal, setFilterVal] = useState({
    categoryVal: category || [],
    priceRangeVal: priceRange || 40000,
    ratingVal: rating || 1
  })

  const handleCloseFilter = () => {
    setIsFilterOpen(false);
  }

  const handleApplyBtn = () => {
    setCategory(filterVal.categoryVal);
    setPriceRange(filterVal.priceRangeVal);
    setRating(filterVal.ratingVal);

    setIsFilterOpen(false);
  }

  const handleResetBtn = () => {
    setFilterVal({
      categoryVal: [],
      priceRangeVal: 40000,
      ratingVal: 1
    })

    handleReset();
  }

  const changeCategory = (categoryName) => {
    return setFilterVal(prev => ({
      ...prev,
      categoryVal: prev.categoryVal.includes(categoryName) ? prev.categoryVal.filter(catInfo => catInfo !== categoryName) : [...prev.categoryVal, categoryName]
    })
    )
  }

  const changePrice = (priceVal) => {
    setFilterVal((prev) => ({ ...prev, priceRangeVal: priceVal }));
  }

  const changeRating = (indexVal) => {
    return setFilterVal(prev => ({ ...prev, ratingVal: indexVal + 1 }))
  }

  return (
    <section className=' h-[85vh] w-full animate-slideUp bg-white fixed bottom-0 left-0 z-25 rounded-t-4xl shadow-[0_1px_5px_3px_rgba(0,0,0,0.18)] flex flex-col sm:hidden'>

      <div className='self-center w-15 my-3 mx-5 bg-gray-300 rounded-xl p-0.75'></div>

      <div className='flex justify-between items-center py-3 px-5 border-b-2 border-gray-300 relative'>

        <h2 className='text-lg font-semibold'>Filters</h2>

        <button
          onClick={handleCloseFilter}
          className='flex gap-2'
        >
          <RxCross2 className='size-7' />
        </button>

      </div>

      <div className='p-5 flex flex-col gap-5 overflow-y-auto scrollbar-none'>

        <CategoryFilter
          filterData={filterData}
          category={filterVal.categoryVal}
          changeCategory={changeCategory}
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen}
        />

        <PriceFilter
          priceRange={filterVal.priceRangeVal}
          changePrice={changePrice}
        />

        <RatingFilter
          rating={filterVal.ratingVal}
          changeRating={changeRating}
        />

        <div className='flex gap-2'>

          <button
            onClick={handleResetBtn}
            className='flex-1 text-indigo-800 font-semibold border-2 border-indigo-800 rounded-xl'
          >
            Reset
          </button>

          <button
            onClick={handleApplyBtn}
            className='flex-1 w-full p-3 bg-indigo-800 text-white text-base rounded-xl'
          >
            Apply Filters
          </button>

        </div>

      </div>
    </section>

  )
}

export default MobileFilter;
