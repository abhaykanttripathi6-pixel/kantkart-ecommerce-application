import { FaStar } from "react-icons/fa";
import { FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";

const StarRating = ({ rating }) => {

  return (
    <div className='flex gap-0.5 text-base'>
      {
        new Array(5).fill(0).map((_, index) => {
          return <span key={index}>
            {
              (index + 1) <= rating
                ?
                <FaStar className='text-amber-500' />
                :
                rating >= (index + 0.5)
                  ?
                  <FaRegStarHalfStroke className='text-amber-500' />
                  :
                  <FaRegStar className='text-amber-500' />
            }
          </span>
        })
      }
    </div>

  )
}

export default StarRating;
