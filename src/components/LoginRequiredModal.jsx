import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { GoLock } from "react-icons/go";
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

const container = document.getElementById('modal-root')

const LoginRequiredModal = ({ setIsLoginRequiredModalOpen }) => {

    const navigate = useNavigate();

    const handleSignInBtn = () => {
        setIsLoginRequiredModalOpen(false);
        navigate("/signIn");
    }

    const handleCloseBtn = () => {
        setIsLoginRequiredModalOpen(false);
    }

    return createPortal(
        <div className='h-full w-full fixed top-0 left-0 z-100 bg-transparent backdrop-blur-md flex justify-center items-center'>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className=' w-90 p-5 bg-white border border-gray-300 shadow-[1px_1px_10px_1px_rgba(0,0,0,0.2)] rounded-xl flex flex-col items-center gap-6 relative'>
                <div className='flex flex-col items-center gap-3'>

                    <div className='size-15 bg-indigo-800 rounded-full flex justify-center items-center'>
                        <GoLock strokeWidth='1' className='text-white text-2xl' />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-xl font-semibold'>Login Required</h1>
                        <p className='text-sm text-gray-500'>Please login to conitinue with your checkout.</p>
                    </div>

                    <button
                        onClick={handleSignInBtn}
                        className='w-full p-3 bg-indigo-800 text-white text-sm font-semibold rounded-lg'
                    >
                        Sign In
                    </button>
                </div>

                <button
                    onClick={handleCloseBtn}
                    className='absolute top-3 right-3 border border-gray-400 rounded-sm p-0.5 hover:bg-red-500 hover:text-white hover:border-white'>
                    <RxCross2 className='size-5' />
                </button>
            </motion.div>

        </div>,
        container
    )
}

export default LoginRequiredModal
