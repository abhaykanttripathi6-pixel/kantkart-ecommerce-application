import { useOrderContext } from '../context/OrderProvider'
import EmptyCart from '../assets/images/EmptyCart.jpg';
import { useNavigate } from 'react-router-dom';
import formatPrice from '../utils/formatPrice';
import discounted_price from '../utils/discounted_price';

const MyOrders = () => {

  const { orders } = useOrderContext();

  const navigate = useNavigate();

  return (
    <div className='my-18 p-5 flex justify-center items-center'>

      {
        !orders.length ?
          <div className=' flex flex-col justify-center items-center'>
            <div className='min-h-70 max-h-100 min-w-80 max-w-120 '>
              <figure>
                <img src={EmptyCart} alt="empty_cart" className='object-contain' />
              </figure>
            </div>

            <div className='flex flex-col items-center gap-4 '>
              <div>
                <h1 className='text-xl font-semibold text-center lg:text-2xl'>No Orders Yet</h1>
                <p className='text-sm text-gray-400 text-center lg:text-base'>You haven't placed any orders yet.</p>
              </div>
              <button className='p-3 bg-indigo-800 text-sm text-white font-semibold rounded-lg'
                onClick={() => navigate('/products')}
              >Start Shopping</button>
            </div>
          </div >
          :

          <div className='flex flex-col gap-5 p-5 sm:p-10 md:w-full lg:w-[70%]'>
            <h1 className='text-3xl font-semibold '>My Orders</h1>

            <div className='w-full flex flex-col gap-5 sm:gap-8'>
              {
                orders.map(orderData => {

                  const { orderId, orderDate, items, total, shippingInfo: { address, customerName, phoneNumber, pincode, state, region } } = orderData;

                  return <div
                    key={orderId}
                    className='w-full p-4 border border-gray-300 rounded-xl flex flex-col shadow-[1px_1px_5px_1px_rgba(0,0,0,0.2)] gap-5 sm:p-6 '>

                    <div className='flex flex-col gap-5 md:flex-row md:gap-10'>
                      <div className='flex flex-col gap-5 md:flex-1 md:border-r md:border-gray-300'>
                        <div className='flex flex-col'>
                          <h2 className='text-base font-semibold'>Order #{orderId}</h2>
                          <p className='text-sm text-gray-700'>{orderDate}</p>
                        </div>

                        <div>
                          <h2 className='text-base font-semibold'>Shipping Info</h2>

                          <div className='p-1 text-sm text-gray-700 wrap-anywhere'>
                            <p>{customerName},</p>
                            <p>{address},</p>
                            <p>{pincode} {state},</p>
                            <p>{region}</p>
                          </div>

                          <div className='flex items-center gap-2'>
                            <h2 className='text-sm font-semibold'>Phone Number:</h2>
                            <p className='text-sm'>{phoneNumber}</p>
                          </div>
                        </div>

                      </div>

                      <div className='flex flex-col gap-5 md:flex-2'>
                        <h2 className='text-base font-semibold'>Products:</h2>

                        {
                          items.map(productData => {

                            const { id, thumbnail, title, quantity, price, discountPercentage } = productData;

                            return <div
                              key={id}
                              className='flex justify-between gap-2 lg:gap-5'>

                              <div className='flex gap-2'>
                                <div className='size-20 bg-gray-100 shrink-0'>
                                  <figure>
                                    <img src={thumbnail} alt={title} className='object-contain' />
                                  </figure>
                                </div>

                                <div>
                                  <h3 className='text-sm font-semibold'>{title}</h3>
                                  <p className='text-sm  text-gray-500'>Qty: {quantity}</p>
                                </div>
                              </div>

                              <div className='flex flex-col items-end gap-2'>

                                <span className='text-base font-semibold'>
                                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</span>

                                <span className='text-base font-semibold text-red-500'>-{formatPrice(price - discounted_price(price, discountPercentage))}
                                </span>

                              </div>
                            </div>
                          })
                        }
                      </div>
                    </div>

                    <div className='flex justify-between items-center border-t  border-gray-400 pt-3 md:justify-end md:gap-2'>
                      <span className='text-lg font-semibold'>Total: </span>
                      <span className='text-lg font-semibold md:text-xl'>{formatPrice(total)}</span>
                    </div>
                  </div>

                })
              }
            </div>
          </div>
      }
    </div>
  )
}

export default MyOrders
