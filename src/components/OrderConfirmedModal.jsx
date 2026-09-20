import { createPortal } from 'react-dom';
import { FaCheck } from "react-icons/fa6";
import { motion } from 'motion/react';
import { useOrderContext } from '../context/OrderProvider';
import { useNavigate } from 'react-router-dom';
import formatPrice from '../utils/formatPrice';

const container = document.getElementById('modal-root');

const OrderConfirmedModal = () => {

    const navigate = useNavigate();

    const { orders } = useOrderContext();
  

    return createPortal(
        <div className='h-full w-full fixed top-0 left-0 z-100 bg-transparent backdrop-blur-md flex justify-center items-center'>
            <div
                className=' w-90 p-5 bg-white border border-gray-300 shadow-[1px_1px_10px_1px_rgba(0,0,0,0.2)] rounded-xl flex flex-col items-center gap-6 relative'>

                <div className='flex flex-col items-center gap-3'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className='size-15 bg-indigo-800 rounded-full flex justify-center items-center'>
                        <FaCheck strokeWidth='10' className='text-white text-2xl' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-center'>
                        <h1 className='text-xl font-semibold'>Order Confirmed</h1>
                        <p className='text-sm text-gray-500'>Your Order has been placed successfully.</p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full border-2 border-gray-300 rounded-lg flex flex-col items-center p-2'>
                    <div className='w-full flex justify-between border-b py-2'>
                        <span className='text-gray-500'>Order ID</span>
                        <span className='font-semibold'>{orders.at(-1).orderId}</span>
                    </div>
                    <div className='w-full flex justify-between py-2'>
                        <span className='text-base text-gray-500'>Total Amount</span>
                        <span
                            className='text-base font-semibold text-indigo-800'>{formatPrice(orders.at(-1).total)}</span>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full flex flex-col gap-2'>

                    <button
                        onClick={() => navigate('/myOrders')}
                        className='w-full p-3 bg-indigo-800 text-white text-sm font-semibold rounded-lg'
                    >
                        View My Orders
                    </button>

                    <button
                        onClick={() => navigate('/products')}
                        className='w-full p-3 border-2 border-indigo-800 text-indigo-800 text-sm font-semibold rounded-lg'>Continue Shopping</button>
                </motion.div>

            </div>

        </div>,
        container
    )
}

export default OrderConfirmedModal
