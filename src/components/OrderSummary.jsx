import discounted_price from '../utils/discounted_price';
import formatPrice from '../utils/formatPrice';

const OrderSummary = ({ items }) => {

    const totalItems = items.reduce((totalQty, currentItem) => totalQty += currentItem.quantity, 0);
    const subtotal = items.reduce((totalPrice, currentItem) => totalPrice += (currentItem.price * currentItem.quantity), 0);
    const discountedAmt = items.reduce((totalDiscount, currentItem) => totalDiscount += (currentItem.price - discounted_price(currentItem.price, currentItem.discountPercentage)) * currentItem.quantity, 0);
    const total = subtotal - discountedAmt;

    return (
        <div className='p-3 flex flex-col gap-5 sm:p-5 sm:border-2 sm:border-gray-300 sm:rounded-xl sm:shadow-[1px_1px_5px_3px_rgba(0,0,0,0.1)]'>
            <h1 className='text-2xl font-semibold'>Order Summary</h1>
            <div className='p-3 border-2 border-gray-400 rounded-xl flex flex-col gap-4 '>
                <div className='flex flex-col gap-1'>
                    <p className='flex justify-between text-base font-semibold'>
                        <span className='text-gray-600'>Subtotal ({totalItems})</span>
                        <span>{formatPrice(subtotal, 2)}</span>
                    </p>

                    <p className='flex justify-between text-base font-semibold'>
                        <span className='text-gray-600'>Discount</span>
                        <span>{formatPrice(discountedAmt, 2)}</span>
                    </p>

                    <p className='flex justify-between text-base font-semibold'>
                        <span className='text-gray-600'>Shipping Fee</span>
                        <span className='text-green-500'>Free</span>
                    </p>
                </div>

                <div className='pt-4 border-t-2 border-gray-300'>
                    <p className='flex justify-between text-xl font-semibold'>
                        <span>Total</span>
                        <span>{formatPrice(total, 2)}</span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default OrderSummary;
