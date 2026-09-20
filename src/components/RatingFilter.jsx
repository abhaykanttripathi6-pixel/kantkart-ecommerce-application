import { FaStar } from 'react-icons/fa';

const RatingFilter = ({ rating, changeRating }) => {
  return (
    <div className='flex flex-col gap-4'>

      <h3 className='text-base font-semibold'>Rating</h3>

      <div className='flex flex-wrap gap-y-4 gap-x-2 cursor-default'>

        {
          new Array(4).fill(0).map((_, indexVal) => (
            <button
              key={indexVal}
              onClick={() => changeRating(indexVal)}
              className={`p-2 border border-gray-300 text-base rounded-xl flex items-center gap-2 sm:text-xs sm:rounded-lg ${(indexVal + 1) === rating ? "bg-indigo-800 text-white" : "text-black bg-white"}`}
            >
              <span className='flex gap-1'>
                {
                  new Array(indexVal + 1).fill(0).map((_, index) => (
                    <FaStar
                      key={index}
                      className={`${(indexVal + 1) === rating ? "text-white" : "text-indigo-800"}`} />
                  ))
                }
              </span>
              <span>& above</span>
            </button>
          ))
        }

      </div>

    </div>

  )
}

export default RatingFilter;
