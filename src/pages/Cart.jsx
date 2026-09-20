import { useState } from 'react'
import { useCartContext } from '../context/CartProvider'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../assets/images/EmptyCart.jpg';
import OrderSummary from '../components/OrderSummary';
import LoginRequiredModal from '../components/LoginRequiredModal';
import { useUser } from '@clerk/react';
import discounted_price from '../utils/discounted_price';
import formatPrice from '../utils/formatPrice';
import useScrollLock from '../hooks/useScrollLock';
import getStockColor from '../utils/getStockColor';

const Cart = () => {

  const { cartItems, removeToCart, clearCart, selectItem, deselectItem, selectedItems, increaseQty, decreaseQty } = useCartContext();

  const navigate = useNavigate();

  const { isSignedIn } = useUser();

  const [showMessage, setShowMessage] = useState(false);
  const [isLoginRequiredModalOpen, setIsLoginRequiredModalOpen] = useState(false);

  useScrollLock(isLoginRequiredModalOpen);

  const handleSelectItem = (item) => {
    if (item.isSelected) {
      deselectItem(item)
    } else {
      setShowMessage(false)
      selectItem(item)
    }
  }

  const handleProceedToBuyBtn = () => {

    if (!isSignedIn) {

      setIsLoginRequiredModalOpen(true);

    } else {

      if (!selectedItems.length) {
        setShowMessage(true);
      } else {
        navigate('/checkout');
      }

    }
  }


  return (
    <div className='h-full min-h-150 my-18.75 flex flex-col justify-center sm:p-5 md:gap-0 md:p-8 lg:flex-row lg:p-10'>

      {!cartItems.length
        ?
        <div className='flex flex-col justify-center items-center'>
          <div className='min-h-70 max-h-100 min-w-80 max-w-120 '>
            <figure>
              <img src={EmptyCart} alt="emptycart" className=' object-contain' />
            </figure>
          </div>

          <div className='flex flex-col items-center gap-4 '>
            <div>
              <h1 className='text-xl font-semibold text-center'>Your Cart is empty!</h1>
              <p className='text-sm text-gray-400 text-center'>Looks like you haven’t added anything yet.</p>
            </div>
            <button className='p-3 bg-indigo-800 text-sm text-white font-semibold rounded-lg'
              onClick={() => navigate('/products')}
            >Continue Shopping
            </button>
          </div>
        </div >
        :
        <>
          <div className='p-3 flex flex-col gap-5 lg:flex-1 xl:flex-2 lg:gap-5 lg:px-10'>

            <div className='flex justify-between items-center'>
              <h1 className='text-2xl font-semibold sm:text-3xl '>Shopping Cart ({cartItems.length})</h1>
              <button className='px-2 py-1 border text-sm rounded-full sm:px-3 sm:py-2 sm:font-semibold hover:text-red-500 cursor-pointer'
                onClick={() => clearCart()}
              >Clear Cart
              </button>

            </div>

            {
              cartItems.map(item => {
                const { id, thumbnail, title, availabilityStatus, price, discountPercentage, quantity, isSelected } = item;
                return <div key={id} className='p-3 flex justify-between border-2 border-gray-300 rounded-xl shadow-[1px_1px_5px_3px_rgba(0,0,0,0.1)] relative'>
                  <div className='flex gap-2 lg:gap-4'>
                    <div className='size-30 shrink-0 p-1 bg-gray-200 rounded-xl'
                      onClick={() => navigate(`/singleProduct/${id}`)}
                    >
                      <figure>
                        <img src={thumbnail} alt={title} className='object-contain' />
                      </figure>
                    </div>

                    <div className='flex flex-col'>
                      <h2 className='text-base/5 font-semibold wrap-break-word lg:text-lg'>{title}</h2>
                      <p
                        className='text-sm lg:font-semibold'
                        style={{
                          color: `${getStockColor(availabilityStatus)}`
                        }}
                      >
                        {availabilityStatus}
                      </p>

                      <p className=' flex items-center gap-2'>
                        <span className='text-lg font-semibold text-indigo-800 lg:text-xl'>{formatPrice(discounted_price(price, discountPercentage), 0)}</span>
                        <span className='text-sm font-semibold text-gray-500 line-through sm:text-lg'>{formatPrice(price, 0)}</span>
                      </p>

                      {/* counter */}
                      <div className=' mt-auto w-fit border rounded-full flex items-center justify-between gap-4'>
                        <button className='px-1 text-xl font-semibold rounded-l-full hover:bg-black/10'
                          onClick={() => decreaseQty(item)}
                        >–</button>
                        <span>{item.quantity}</span>
                        <button className='px-1 text-xl font-semibold rounded-r-full hover:bg-black/10'
                          onClick={() => increaseQty(item)}
                        >+
                        </button>
                      </div>

                    </div>
                  </div>

                  <div className='flex flex-col justify-between items-center'>
                    <button className='p-1.5 border border-gray-400 rounded-full hover:border-red-500 hover:text-white hover:bg-red-500 cursor-pointer'
                      onClick={() => removeToCart(item)}
                    >
                      <RiDeleteBin6Line className='text-xl ' />
                    </button>
                    <span className='text-base font-semibold md:text-xl'>{formatPrice(discounted_price(price, discountPercentage) * quantity, 0)}</span>
                  </div>

                  <div className='absolute top-3 left-3'>
                    <input
                      type="checkbox"
                      className='size-5 outline-none'
                      checked={isSelected}
                      onChange={() => handleSelectItem(item)} />
                  </div>

                </div>
              })
            }
          </div>

          <div className='p-3 flex flex-col gap-2.5 lg:flex-1'>

            <OrderSummary items={selectedItems} />

            {
              showMessage &&
              <div className='p-2 text-center border-2 border-l-10 border-indigo-800 rounded-lg text-base font-semibold text-indigo-800'>
                Select at least 1 item to buy
              </div>
            }

            <button
              onClick={handleProceedToBuyBtn}
              className='p-3 w-full bg-indigo-800 text-white text-base font-semibold rounded-lg '
            >
              Proceed to Buy ({selectedItems.length} items)
            </button>
          </div>

          {
            isLoginRequiredModalOpen && <LoginRequiredModal setIsLoginRequiredModalOpen={setIsLoginRequiredModalOpen} />
          }
        </>
      }
    </div>
  )
}

export default Cart
