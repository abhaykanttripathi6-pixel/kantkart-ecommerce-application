import { useCartContext } from '../context/CartProvider';
import StarRating from './StarRating';
import { useAppContext } from '../context/AppProvider';
import { BsCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { memo } from 'react';
import discounted_price from '../utils/discounted_price';
import formatPrice from '../utils/formatPrice';


const ProductCard = memo(({ item }) => {

    const navigate = useNavigate();

    const { id, thumbnail, title, price, discountPercentage, rating, stock } = item;

    const { toggleWishList, wishlist } = useAppContext();
    const { cartItems, handleAddToCartBtn } = useCartContext();


    return <div className='border-2 border-gray-300 rounded-xl relative flex flex-col hover:shadow-[1px_1px_5px_3px_rgba(0,0,0,0.1)] hover:scale-103 transition-all transition-duration-300'>
        <div onClick={() => navigate(`/singleProduct/${id}`)} className='h-full min-h-44  p-2 bg-gray-100 rounded-t-xl'>
            <figure>
                <img src={thumbnail} alt={title} loading='lazy' className='object-contain' />
            </figure>
        </div>

        <div className='flex-1 p-2.5 flex flex-col gap-0.5'>
            <p className=' text-base/5 font-semibold'>{title}</p>
            <div className='flex items-center gap-2'>
                <StarRating rating={rating} />
                <p className='text-base font-semibold'>{rating}</p>
            </div>
            <p className='mt-auto flex items-center gap-2'>
                <span className='text-base font-semibold text-indigo-800 lg:text-lg'>{formatPrice(discounted_price(price, discountPercentage,), 0)}</span>
                <span className='text-sm font-semibold text-gray-500 line-through lg:text-base'>{formatPrice(price, 0)}</span>
            </p>

            <div className='mt-auto flex justify-between items-center'>
                <span className='text-sm text-green-600 font-semibold'>Free Delivery</span>
                <button
                    disabled={!stock}
                    onClick={() => handleAddToCartBtn(id, item)}
                    className={`p-2.5 rounded-full ${!stock ? 'bg-indigo-800/70 cursor-not-allowed' : 'bg-indigo-800 cursor-pointer'}`}
                >
                    {cartItems.some((product) => product.id === id) ?
                        <BsCartCheckFill className='size-5 text-white' />
                        :
                        <FaCartShopping className='size-5 text-white' />
                    }
                </button>
            </div>

        </div>

        <button
            onClick={() => toggleWishList(item)}
            className='absolute top-3 right-3'>
            {
                wishlist.some(product => product.id === id) ? (
                    <FaHeart
                        className="size-6 text-red-500 cursor-pointer active:scale-90 transition-all duration-200"
                    />
                ) : (
                    <FaRegHeart
                        className="size-6 text-gray-400 cursor-pointer active:scale-90 transition-all duration-200"
                    />
                )
            }
        </button>

        {discountPercentage >= 10 && <span className='absolute top-2 left-2 text-xs text-red-600 font-semibold bg-red-100 rounded-xl p-1.5'>{Math.floor(discountPercentage)}% OFF</span>}
    </div>
})

export default ProductCard;
