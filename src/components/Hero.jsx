import { motion } from 'motion/react';
import ProductsImg from '../assets/images/productsImg.png';
import { ShieldCheck, Truck, LockKeyhole, ArrowRight, Handbag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate();

    return (
        <div className='min-h-[calc(100vh-73px)] mt-18.75 px-6 py-10 bg-blue-50 flex flex-col md:max-h-[calc(100vh-83px)] md:p-10 md:mt-21 lg:flex-row lg:px-10 xl:p-20'>

            <div className='flex-1 flex flex-col items-center gap-5 md:justify-center lg:items-start lg:gap-8'>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}

                    className=' flex flex-col justify-center items-center gap-5 text-center lg:items-start lg:text-left lg:gap-8'
                >

                    <p className='py-1 px-2 bg-blue-100 text-sm font-semibold text-indigo-800 rounded-full md:py-2 md:px-3 md:text-base'>Welcome to Kant Kart</p>

                    <h1 className=' text-5xl font-extrabold flex flex-col md:text-6xl lg:text-6xl xl:text-7xl'>
                        <span>Shop Smarter</span>
                        <span className='text-indigo-800'>Live Better.</span>
                    </h1>

                    <p className='text-sm text-gray-500 font-semibold md:text-base xl:max-w-[85%]'>KantKart brings you the best of electronics, fashion, accessories and more - all in one place. Quality products, unbeatable prices.</p>


                    <div className='flex items-center gap-5 lg:gap-10'>

                        <div className=' flex flex-col items-center gap-1 xl:flex-row lg:gap-2'>
                            <div className='p-3 bg-blue-100 rounded-full'>
                                <ShieldCheck strokeWidth={2} className='size-7 text-indigo-800' />
                            </div>
                            <div>
                                <p className='text-black text-sm font-semibold'>Trusted Brand</p>
                                <p className='text-gray-600 text-xs  font-semibold'>100% Original</p>
                            </div>
                        </div>

                        <div className=' flex flex-col items-center gap-1 xl:flex-row lg:gap-2'>
                            <div className='p-3 bg-blue-100 rounded-full'>
                                <Truck strokeWidth={2} className='size-7 text-indigo-800' />
                            </div>
                            <div>
                                <p className='text-black text-sm font-semibold'>Fast Delivery</p>
                                <p className='text-gray-600 text-xs font-semibold'>At your doorstep</p>
                            </div>
                        </div>

                        <div className=' flex flex-col items-center gap-1 xl:flex-row lg:gap-2'>
                            <div className='p-3 bg-blue-100 rounded-full'>
                                <LockKeyhole strokeWidth={2} className='size-7 text-indigo-800' />
                            </div>
                            <div>
                                <p className='text-black text-sm  font-bold'>Secure Payment</p>
                                <p className='text-gray-600 text-xs font-semibold'>Safe & Protected</p>
                            </div>
                        </div>

                    </div>

                </motion.div>



                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className='flex gap-5 lg:gap-8'
                >
                    <button
                        onClick={() => navigate("/products")}
                        className='flex-1 py-3 px-5 bg-indigo-800 text-white font-semibold rounded-lg flex gap-2 whitespace-nowrap hover:shadow-[0.5px_0.5px_10px_4px_rgba(0,0,255,0.2)] hover:-translate-y-1 active:scale-98 transition-all duration-200 cursor-pointer'>
                        <Handbag />
                        Shop Now
                    </button>

                    <button
                        onClick={() => navigate("/about")}
                        className='flex-1 py-3 pl-5 pr-12 border-2 border-indigo-800 bg-white text-indigo-800 font-semibold rounded-lg flex gap-2 whitespace-nowrap relative group hover:shadow-[0.5px_0.5px_10px_4px_rgba(0,0,255,0.2)] active:scale-98 transition-all transition-duration-200'>
                        Learn More
                        <ArrowRight className='absolute top-3 right-4 group-hover:right-2 transition-all duration-200 group-active:right-2' />
                    </button>

                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}

                className='w-full flex-1 flex justify-center items-center'>
                <figure>
                    <img src={ProductsImg} alt='hero_products' className='w-120 animate-float md:scale-100 lg:w-full lg:min-w-135 lg:max-w-175' />
                </figure>
            </motion.div>

        </div>
    )
}

export default Hero;
