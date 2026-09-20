import { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppProvider';
import StarRating from '../components/StarRating';
import { TbTruckDelivery } from "react-icons/tb";
import { GoShieldCheck } from "react-icons/go";
import { IoIosReturnLeft } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaRegHeart } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { useCartContext } from '../context/CartProvider';
import Loading from '../components/Loading';
import { FaHeart } from 'react-icons/fa';
import discounted_price from '../utils/discounted_price';
import formatPrice from '../utils/formatPrice';
import ErrorMessage from '../components/ErrorMessage';
import getStockColor from '../utils/getStockColor';


const SingleProduct = () => {

  const { id } = useParams();
  const { products, loading, error, wishlist, toggleWishList, } = useAppContext();

  const { handleAddToCartBtn } = useCartContext();

  const [mainImgIndex, setMainImgIndex] = useState(0);

  const navigate = useNavigate();

  const slideRef = useRef();

  const singleProductToShow = products.filter(item => item.id === Number(id));

  const handleBuyNowBtn = (item) => {
    navigate("/checkout", {
      state: {
        checkoutItem: [{ ...item, quantity: 1, isSelected: true }]
      }
    });
  }

  if (loading) {
    return <Loading />
  }

  if(error){
    return <ErrorMessage />
  }

  return (
    <div className='p-5 mt-18.75 my-10 sm:p-7 lg:p-10'>

      {/* Product Images */}
      {
        singleProductToShow.map((item) => {
          const { id, title, images, rating, reviews, discountPercentage, price, availabilityStatus, stock, description, shippingInformation, warrantyInformation, returnPolicy, brand, category, weight, minimumOrderQuantity, sku, meta: { barcode }, dimensions: { depth, width, height } } = item;
          return <div key={id} className='flex flex-col gap-5 sm:gap-8 lg:gap-10'>

            <div className='flex flex-col gap-5 md:flex-row lg:gap-10 '>
              <div className='w-full min-w-0 relative md:flex-1 md:border-2 md:border-gray-300 md:p-4 md:rounded-xl md:flex md:flex-col xl:flex-row'>

                <div className='hidden md:flex-1 md:p-2 md:grid md:grid-cols-[repeat(auto-fit,minmax(80px,1fr))] md:gap-2 md:overflow-y-auto md:order-2 xl:grid-cols-1 xl:order-0'>
                  {
                    images?.map((data, index) => (
                      <figure key={index} className={`md:p-2 md:size-20 md:border-2 md:rounded-xl md:cursor-pointer lg:size-25 ${mainImgIndex === index ? ' md:border-gray-700' : 'md:border-gray-300'}`}
                        onClick={() => {
                          setMainImgIndex(index);
                          slideRef.current.slideTo(index);
                        }}
                      >
                        <img src={data} alt={title} className=' object-cover ' />
                      </figure>
                    ))
                  }
                </div>


                <div className='w-full min-w-0 md:flex-3'>
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    onSlideChange={(swiper) => {
                      setMainImgIndex(swiper.activeIndex)
                    }}
                    onSwiper={(swiper) => {
                      slideRef.current = swiper;
                    }}
                    className='h-full'
                  >

                    {
                      images?.map((data, index) => (
                        <SwiperSlide key={index}>
                          <figure>
                            <img src={data} alt={title} className='size-80 m-auto' />
                          </figure>
                        </SwiperSlide>
                      ))
                    }

                  </Swiper>
                </div>

                <button
                  onClick={() => toggleWishList(item)}
                  className='p-2 w-fit border-2 bg-white border-gray-300 rounded-full absolute top-0 right-0 z-5 md:top-2 md:right-2'>
                  {
                    wishlist.some(product => product.id === id) ? (
                      <FaHeart
                        className="size-6 text-red-500 cursor-pointer active:scale-90 transition-all duration-200"
                      />
                    ) : (
                      <FaRegHeart
                        className="size-6 text-gray-800 cursor-pointer active:scale-90 transition-all duration-200"
                      />
                    )
                  }
                </button>

                <button className='p-2 w-fit border-2 bg-white border-gray-300 rounded-full absolute top-0 left-0 z-5 md:top-2 md:left-2'
                  onClick={() => navigate(-1)}
                >
                  <GoArrowLeft className='size-6' />
                </button>
              </div>


              {/* Product Information */}
              <div className='min-w-0 flex flex-col gap-6 md:flex-1 md:border-2 md:border-gray-300 md:p-4 md:rounded-xl lg:gap-3'>
                <div className='flex flex-col gap-3 lg:gap-2'>
                  <h1 className='text-2xl font-semibold lg:text-xl'>{title}</h1>
                  <div className='flex items-center gap-2'>
                    <p className='font-semibold'>{rating}</p>
                    <StarRating rating={rating} />
                    <p className='text-indigo-800 font-semibold'>({reviews.length} reviews)</p>
                  </div>
                  <div>
                    <p className='mt-auto flex items-end gap-5'>
                      <span className='text-3xl font-semibold text-indigo-800'>{formatPrice(discounted_price(price, discountPercentage), 2)}</span>
                      <span className='text-lg font-semibold text-gray-500 line-through'>{formatPrice(price, 2)}</span>
                      <span className='text-green-600 font-semibold'>{discountPercentage}% OFF</span>
                    </p>
                    <p className='text-sm text-gray-700 font-semibold'>Inclusive of all taxes</p>
                  </div>


                  <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-2'>
                      <div 
                      style={{backgroundColor: `${getStockColor(availabilityStatus)}`}}
                      className={`size-3 rounded-full `}
                      ></div>
                      <span
                       style={{color: `${getStockColor(availabilityStatus)}`}}
                        className={` font-semibold`}
                      >
                        {availabilityStatus}
                      </span>
                    </div>
                    <p className='text-gray-900'>({stock} available)</p>
                  </div>

                </div>

                <div className='md:my-auto'>
                  <h2 className='text-lg font-semibold lg:text-base'>About this item</h2>
                  <p className='text-base md:text-sm'>{description}</p>
                </div>

                <div className='flex flex-col gap-3 md:flex-row md:gap-3 md:my-auto lg:gap-5 xl:gap-7'>
                  <button
                    disabled={!stock}
                    onClick={() => handleAddToCartBtn(id, item)}
                    className={`w-full p-3 border rounded-xl font-semibold lg:p-3 lg:text-sm 
                    ${!stock ? 'border-gray-400 bg-gray-100 text-gray-500/80 cursor-not-allowed' : 'border-indigo-800 bg-white text-indigo-800 cursor-pointer'}`}
                  >
                    Add to Cart
                  </button>

                  <button
                    disabled={!stock}
                    onClick={() => handleBuyNowBtn(item)}
                    className={`w-full p-3 border rounded-xl text-white font-semibold lg:p-3 lg:text-sm ${!stock ? 'border-indigo-800/50 bg-indigo-800/50 cursor-not-allowed' : 'border-indigo-800 bg-indigo-800 cursor-pointer'}`}
                  >
                    Buy Now
                  </button>
                </div>

                <div className='pt-2 pb-2 flex border-t border-b md:my-auto'>
                  <div className='flex-1 flex flex-col items-center'>
                    <TbTruckDelivery className='size-8 lg:size-7 ' strokeWidth='1.5' />
                    <p className='text-sm'>{shippingInformation}</p>
                  </div>
                  <div className='flex-1 flex flex-col items-center border-l border-r'>
                    <GoShieldCheck className='size-8 lg:size-7' />
                    <p className='text-sm'>{warrantyInformation}</p>
                  </div>
                  <div className='flex-1 flex flex-col items-center'>
                    <IoIosReturnLeft className='size-8 lg:size-7' />
                    <p className='text-sm'>{returnPolicy}</p>
                  </div>
                </div>
              </div>
            </div>


            {/* Product Details */}
            <div className='flex flex-col gap-5 md:flex-row lg:gap-10'>

              <div className='flex flex-col gap-2 md:flex-1 md:border-2 md:border-gray-300 md:p-4 md:rounded-xl md:gap-4'>
                <h2 className='text-xl font-semibold'>Product Details</h2>

                <div className='flex flex-col gap-1 md:gap-2'>

                  <div className='flex'>
                    <span className='font-semibold flex-1'>Brand: </span>
                    <span className='flex-1'>{brand}</span>
                  </div>

                  <div className='flex'>
                    <span className='font-semibold flex-1'>Category: </span>
                    <span className='flex-1'>{category}</span>
                  </div>

                  <div className='flex'>
                    <span className='font-semibold flex-1'>SKU: </span>
                    <span className='flex-1'>{sku}</span>
                  </div>

                  <div className='flex'>
                    <span className='font-semibold flex-1'>Weight: </span>
                    <span className='flex-1'>{weight}g</span>
                  </div>

                  <div className='flex'>
                    <span className='font-semibold flex-1'>Dimensions: </span>
                    <span className='flex-1'>{width} x {height} x {depth} cm</span>
                  </div>

                  <div className='flex items-center'>
                    <span className='font-semibold flex-1'>Minimum Order Quantity: </span>
                    <span className='flex-1'>{minimumOrderQuantity}</span>
                  </div>

                  <div className='flex'>
                    <span className='font-semibold flex-1'>Warranty: </span>
                    <span className='flex-1'>{warrantyInformation}</span>
                  </div>

                  <div className='flex'>
                    <span className='font-semibold flex-1'>Barcode:</span>
                    <span className='flex-1'>{barcode}</span>
                  </div>

                </div>
              </div>


              {/* Customer Reviews */}
              <div className='flex flex-col gap-4 md:flex-1 md:border-2 md:border-gray-300 md:p-4 md:rounded-xl'>
                <h2 className='text-xl font-semibold'>Customer Reviews</h2>

                <div className='flex flex-col md:flex-row md:flex-wrap md:gap-8'>
                  {
                    reviews.map((data, index) => {
                      const { comment, date, rating, reviewerName } = data;
                      return <div key={index} className='flex flex-col gap-2'>
                        <div>
                          <div className='flex items-center gap-2'>
                            <RiAccountCircleFill className='size-8 text-gray-500' />
                            <p className='text-base'>{reviewerName}</p>
                          </div>

                          <div><p className='text-sm text-gray-600 font-semibold'>Reviewed on {date.slice(0, 10).split('-').reverse().join('-')}</p></div>

                          <div className='flex items-center gap-2'>
                            <StarRating rating={rating} />
                            <p className='text-sm text-red-700 font-semibold'>Verified Purchased</p>
                          </div>
                        </div>

                        <p className='text-base'>{comment}</p>
                      </div>
                    })
                  }
                </div>
              </div>

            </div>

          </div>
        })
      }
    </div >
  )
}

export default SingleProduct;
