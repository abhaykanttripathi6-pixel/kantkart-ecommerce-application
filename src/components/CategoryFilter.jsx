import { IoIosArrowDown } from "react-icons/io";

const CategoryFilter = ({
    filterData,
    category,
    changeCategory,
    isDropDownOpen,
    setIsDropDownOpen,
}) => {

    const toggleSection = (section) => {
        setIsDropDownOpen(prev => prev.includes(section) ? prev.filter(cat => cat !== section) : [...prev, section]);
    }

    return (
        <div className='p-2 flex flex-col gap-2'>

            <h3 className='text-base font-semibold'>Category</h3>

            <div className='p-2 flex flex-col gap-2'>

                {
                    filterData.map(categoryData => {
                        const { id, section, categories } = categoryData;
                        return <div key={id}>

                            <div className='w-full flex justify-between items-center sm:text-sm lg:text-base'>
                                <span>{section}</span>
                                <button
                                    onClick={() => toggleSection(section)}
                                    className={`transition-all transition-duration-300 cursor-pointer ${isDropDownOpen.includes(section) ? "rotate-180" : "rotate-0"}`}
                                >
                                    <IoIosArrowDown />
                                </button>

                            </div>
                            {
                                isDropDownOpen.includes(section) &&
                                <div className='p-2 flex flex-col gap-1'>
                                    {
                                        categories.map((categoryName) => {
                                            return <label
                                                key={categoryName}
                                                className='flex items-center gap-2'
                                            >

                                                <input
                                                    type="checkbox"
                                                    checked={category.includes(categoryName)}
                                                    onChange={() => changeCategory(categoryName)} />

                                                {categoryName}

                                            </label>
                                        })
                                    }
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default CategoryFilter;
