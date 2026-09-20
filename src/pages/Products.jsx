import { useEffect, useState } from 'react';
import { Search, Funnel, ChevronDown } from 'lucide-react'
import Pagination from '../components/Pagination'
import { useAppContext } from '../context/AppProvider';
import DesktopFilter from '../components/DesktopFilter';
import MobileFilter from '../components/MobileFilter';
import { categoriesData } from '../mockData';
import { useLocation } from 'react-router-dom';
import maxPrice from '../utils/maxPrice';
import useScrollLock from '../hooks/useScrollLock';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';

const Products = () => {

  const { products, error, loading } = useAppContext();

  const [searchTerm, setSearchTerm] = useState('');
  const [sortProducts, setSortProducts] = useState('All');

  const [category, setCategory] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [rating, setRating] = useState(1);

  const [isDropDownOpen, setIsDropDownOpen] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useScrollLock(isFilterOpen);

  const location = useLocation();

  const categoryInfo = location.state || {};

  // Filter & Sort products
  let productsToShow = [...products];

  // Category
  if (category.length !== 0) {
    productsToShow = productsToShow.filter((item) => category.includes(item.category));
  }

  // Price & Rating
  productsToShow = productsToShow.filter((item) => item.price <= priceRange)
  productsToShow = productsToShow.filter((item) => item.rating >= rating)

  // Search
  if (searchTerm !== '') {
    productsToShow = productsToShow.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    })

  }

  // Sort products
  switch (sortProducts) {
    case 'A-Z':
      productsToShow = productsToShow.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'Z-A':
      productsToShow = productsToShow.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'High-Low':
      productsToShow = productsToShow.sort((a, b) => Number(b.price) - Number(a.price));
      break;
    case 'Low-High':
      productsToShow = productsToShow.sort((a, b) => Number(a.price) - Number(b.price));
      break;
    default:
      break;
  }

  // Reset Filter
  const handleReset = () => {
    setCategory([]);
    setPriceRange(maxPrice(products));
    setRating(1);
  }


  useEffect(() => {
    if (categoryInfo.categories?.length) {
      setIsDropDownOpen([categoryInfo.section]);
      setCategory(categoryInfo.categories);
    }
  }, [])


  useEffect(() => {
    if (products.length > 0) {
      setPriceRange(maxPrice(products));
    }
  }, [products]);


  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage />
  }


  return (
    <div className='p-5 mt-18.75 bg-white flex flex-col gap-8 sm:bg-gray-100 sm:flex-row sm:gap-5 md:p-8 md:gap-10 lg:p-10'>

      {/* Mobile Search */}
      <div className='relative sm:hidden'>
        <input
          type="text"
          placeholder='Search products...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full p-3 pl-11 border-2 border-gray-300 bg-gray-50 rounded-xl text-lg outline-none'
        />
        <Search className='absolute top-3.5 left-3 text-gray-400' />
      </div>

      {/* Mobile Filter */}
      <div className='flex gap-4 sm:hidden'>

        <button
          onClick={() => setIsFilterOpen(true)}
          className='flex-1 flex justify-center items-center gap-3 border-2 border-gray-300 p-3 rounded-xl bg-gray-50'
        >
          <Funnel strokeWidth={2.3} className='size-6' />
          <span className='text-base font-semibold'>Filters</span>
        </button>

        <div className='flex-1 flex justify-center items-center border-2 border-gray-300 p-3 rounded-xl bg-gray-50 text-base font-semibold'>
          <select
            value={sortProducts}
            onChange={(e) => setSortProducts(e.target.value)}
            className=' outline-none appearance-none'
          >
            <option value="All">Sort: All</option>
            <option value="A-Z">Name: A-Z</option>
            <option value="Z-A">Name: Z-A</option>
            <option value="High-Low">Price: High-Low</option>
            <option value="Low-High">Price: Low-High</option>
          </select>

          <ChevronDown />
        </div>
      </div>

      <DesktopFilter
        category={category}
        setCategory={setCategory}
        setPriceRange={setPriceRange}
        rating={rating}
        setRating={setRating}
        priceRange={priceRange}
        filterData={categoriesData(products)}
        handleReset={handleReset}
        isDropDownOpen={isDropDownOpen}
        setIsDropDownOpen={setIsDropDownOpen}
      />

      <Pagination
        productsToShow={productsToShow}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortProducts={sortProducts}
        setSortProducts={setSortProducts}
      />

      {
        isFilterOpen &&
        <MobileFilter
          setIsFilterOpen={setIsFilterOpen}
          category={category}
          setCategory={setCategory}
          setPriceRange={setPriceRange}
          rating={rating} setRating={setRating}
          priceRange={priceRange}
          filterData={categoriesData(products)}
          handleReset={handleReset}
          isDropDownOpen={isDropDownOpen}
          setIsDropDownOpen={setIsDropDownOpen} />
      }
    </div>
  )
}

export default Products
