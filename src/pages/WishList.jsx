import { FaHeart } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppProvider';
import { useCartContext } from '../context/CartProvider';
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../assets/images/EmptyCart.jpg';

const WishList = () => {
    const { wishlist, resetWishList } = useAppContext();
    const { addToCart } = useCartContext();

    const navigate = useNavigate();

    const addAllToCart = () => {
        wishlist.forEach(item => addToCart(item));
        navigate('/cart');
        resetWishList();
    }


    return (
        <div className='min-h-90 p-5 my-18.75 flex flex-col gap-8 sm:p-7 lg:p-10'>

            {
                !wishlist.length ?
                    <div className='flex flex-col justify-center items-center'>
                        <div className='min-h-70 max-h-100 min-w-80 max-w-120 '>
                            <figure>
                                <img src={EmptyCart} alt="emptycart" className=' object-contain' />
                            </figure>
                        </div>

                        <div className='flex flex-col items-center gap-4 '>
                            <div>
                                <h1 className='text-xl font-semibold text-center'>Your wishlist is empty!</h1>
                                <p className='text-sm text-gray-400 text-center'>Explore more and shortlist some items.</p>
                            </div>
                            <button className='p-3 bg-indigo-800 text-sm text-white font-semibold rounded-lg'
                                onClick={() => navigate('/products')}
                            >Start Shopping</button>
                        </div>
                    </div >
                    :
                    <>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-semibold flex items-center gap-2 md:text-4xl'>
                                <span>My WishList</span>
                                <FaHeart className='text-red-500' />
                            </h1>

                            <button
                                onClick={addAllToCart}
                                className='px-3 py-2 text-base bg-indigo-800 text-white rounded-lg active:scale-98 transition-all transtion-duration-200 flex items-center gap-1'
                            >
                                Add All to Cart
                                <GrPowerReset className='text-white' />
                            </button>
                        </div>

                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:gap-8 lg:grid-cols-4 xl:sm:grid-cols-[repeat(auto-fit,minmax(200px,250px))] lg:gap-10'>
                            {
                                wishlist.map(item => (
                                    <ProductCard key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </>
            }
        </div>
    )
}

export default WishList
