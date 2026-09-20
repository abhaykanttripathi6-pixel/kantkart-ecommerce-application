import { useNavigate } from 'react-router-dom';
import { categoriesData } from '../mockData';
import { useAppContext } from '../context/AppProvider';

const PopularCategories = () => {

  const { products } = useAppContext();

  const navigate = useNavigate();

  const handleOnClick = (categories, section) => {
    navigate('/products', {
      state: {
        categories,
        section
      }
    });
  }

  return (
    <div className='px-4 py-2 flex flex-col gap-5 md:px-8 md:py-4 md:gap-8 lg:p-10'>
      <div className='flex justify-center'>

        <h2 className='text-2xl font-semibold text-center lg:text-3xl'>
          <span className='text-indigo-800'>Popular </span>
          Categories
        </h2>

      </div>
      <div className='flex gap-8 overflow-x-auto scrollbar-none'>
        {
          categoriesData(products).map((category) => {

            const { id, section, image, categories } = category

            return <div
              key={id}
              onClick={() => handleOnClick(categories, section)}
              className='flex-1 min-w-fit'>
              <figure className='flex flex-col items-center gap-1'>
                <img src={image} alt={section} className='size-20 object-cover rounded-full sm:size-20 md:size-30 lg:size-35' />
                <figcaption className=' text-xs font-semibold sm:text-base md:text-lg'>{section}</figcaption>
              </figure>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default PopularCategories;
