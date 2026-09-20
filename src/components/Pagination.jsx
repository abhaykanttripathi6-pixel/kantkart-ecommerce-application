import { useEffect, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Search } from 'lucide-react';
import NoSearchFound from '../assets/images/no_search_found.png'
import ProductCard from './ProductCard';

const Pagination = ({
    productsToShow,
    searchTerm,
    setSearchTerm,
    sortProducts,
    setSortProducts
}) => {

    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(productsToShow.length / 12);

    const handleNextBtn = () => {
        setCurrentPage((prev) => prev + 1);
    }

    const handlePrevBtn = () => {
        setCurrentPage((prev) => prev - 1);
    }


    const pages = () => {
        const arr = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                arr.push(i);
            }
        } else {
            if (currentPage <= 3) {
                arr.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                arr.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                arr.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }
        return arr;
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm])


    return (
        <div className=' flex flex-col gap-8 sm:flex-2 sm:bg-white sm:p-5 sm:rounded-xl sm:gap-5 sm:shadow-[1px_1px_6px_3px_rgba(0,0,0,0.08)] md:p-8 lg:flex-4 lg:p-10'>

            {/* Desktop Search */}
            <div className='hidden sm:flex sm:justify-between sm:gap-3 lg:gap-8'>
                <div className='sm:w-full sm:relative'>
                    <input type="text" placeholder='Search products...' className='w-full p-2 pl-10 border-2 border-gray-300 bg-gray-50 rounded-xl text-base outline-none'
                        value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className='sm:absolute sm:top-3 sm:left-3 sm:text-gray-400 sm:size-5' />
                </div>

                <div className='h-full w-30 border-2 p-1 rounded-xl border-gray-300 bg-gray-50 text-sm flex justify-center items-center md:w-55 lg:p-2 lg:text-base '>
                    <select className='w-full outline-none ' value={sortProducts} onChange={(e) => setSortProducts(e.target.value)}>
                        <option value="All">Sort: All</option>
                        <option value="A-Z">Name: A-Z</option>
                        <option value="Z-A">Name: Z-A</option>
                        <option value="High-Low">Price: High-Low</option>
                        <option value="Low-High">Price: Low-High</option>
                    </select>
                </div>
            </div >

            <p className='font-semibold text-gray-600'>
                {productsToShow.length
                    ?
                    `Showing ${((currentPage - 1) * 12 + 1)} - ${Math.min(currentPage * 12, productsToShow.length)} of ${productsToShow.length} products.`
                    :
                    "Item not found."
                }
            </p>

            {/* pagination */}
            {
                productsToShow.length === 0 ?

                    <div className='h-100 flex items-center justify-center'>
                        <figure>
                            <img src={NoSearchFound} alt="NoSearchFound" className='h-full w-full min-h-60 min-w-90 md:max-h-75 md:max-w-100 lg:max-h-90 lg:max-w-120' />
                            <figcaption className='text-center text-2xl font-semibold'>No Search Found</figcaption>
                            <p className='text-center text-sm text-gray-600 font-semibold '>We couldn't find any result for your search.</p>
                            <p className='text-center text-sm text-gray-600 font-semibold '>Try different words or check for typos.</p>
                        </figure>
                    </div>
                    :
                    <div className='h-full flex flex-col justify-between gap-5'>
                        <div className='grid grid-cols-2 gap-4 relative sm:gap-5 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4'>
                            {
                                productsToShow.slice(currentPage * 12 - 12, currentPage * 12).map(item => {

                                    return <ProductCard key={item.id} item={item} />
                                })
                            }
                        </div>

                        {/* Next & Previous button */}
                        <div className='flex justify-center items-center gap-3 md:gap-5 lg:gap-8'>
                            <button className='flex-1 p-2 rounded-xl bg-indigo-800 text-white disabled:bg-indigo-800/80 flex justify-center items-center gap-2 md:flex-0 md:px-4' onClick={handlePrevBtn} disabled={currentPage === 1}>
                                <span><FaArrowRight className='rotate-180' /></span>
                                <span>Prev</span>
                            </button>

                            <div className='flex-2 flex justify-center gap-2 md:flex-0'>
                                {
                                    pages().map((pageNo, index) => (
                                        <button
                                            key={index}
                                            onClick={() => isNaN(pageNo) || setCurrentPage(pageNo)}
                                            className={`text-xl cursor-default ${currentPage === pageNo ? 'text-white font-semibold bg-indigo-800 border-white' : 'text-gray-600'} ${isNaN(pageNo) || 'border py-0.5 px-0.75 rounded-sm border-gray-500 lg:px-1.5'}`}
                                        >
                                            {pageNo}
                                        </button>
                                    ))
                                }
                            </div>

                            <button className='flex-1 p-2 border rounded-xl bg-indigo-800 text-white disabled:bg-indigo-800/80 flex justify-center items-center gap-2 md:flex-0 md:px-4' onClick={handleNextBtn} disabled={currentPage === totalPages}>
                                <span>Next</span>
                                <span><FaArrowRight /></span>
                            </button>
                        </div>
                    </div>
            }

        </div >
    )
}

export default Pagination
