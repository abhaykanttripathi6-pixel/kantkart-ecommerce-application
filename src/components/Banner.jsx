import LaptopImg from '../assets/images/laptop.png';
import PerfumeImg from '../assets/images/perfume.png';
import MobileImg from '../assets/images/mobile.png';
import TabletImg from '../assets/images/tablet.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();

    const handleOnClick = (categoriesData, sectionData) => {
        navigate('/products', {
            state: {
                categories: [categoriesData],
                section: [sectionData]
            }
        });
    }

    return (
        <div className='p-3 flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:p-8 lg:p-15'>

            <div
                onClick={() => handleOnClick("laptops", "Electronics")}
                className='order-3 min-h-40 p-3 flex items-center bg-radial-[at_80%_50%] from-orange-300 via-orange-600 to-orange-900 rounded-lg sm:flex-col sm:bg-radial-[at_50%_80%]'>
                <div className='self-start flex-1 flex flex-col gap-3'>
                    <div className='text-xl text-amber-50  font-extrabold'>
                        Starting ₹97,000
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-lg/5 text-white font-extrabold'>Performance Meets Productivity</h3>
                        <p className='text-xs/4 text-amber-50  font-medium'>The perfect laptop for study, work and entertainment.</p>
                    </div>

                </div>
                <div className='flex-1 flex justify-center'>
                    <figure>
                        <img src={LaptopImg} alt="laptop" className='h-30 sm:h-40 lg:h-45' />
                    </figure>
                </div>
            </div>

            <div
                onClick={() => handleOnClick("fragrances", "Beauty & Fragrances")}
                className='order-2 min-h-40 p-3 flex items-center bg-radial-[at_80%_50%] from-gray-500 via-gray-700 to-gray-900 rounded-lg sm:flex-col sm:bg-radial-[at_50%_80%]'>

                <div className='self-start flex-1 flex flex-col gap-3'>
                    <div className='text-xl text-orange-100 font-extrabold'>
                        Starting ₹4,600
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-lg/5 text-orange-200 font-extrabold'>Elevate Your Style With Fragrance.</h3>
                        <p className='text-xs/4 text-orange-100 font-medium'>Discover Your Signature Scent.</p>
                    </div>
                </div>

                <div className='flex-1 flex justify-center'>
                    <figure>
                        <img src={PerfumeImg} alt="perfume" className='h-30 sm:h-35 lg:h-45' />
                    </figure>
                </div>

            </div>

            <div
                onClick={() => handleOnClick("smartphones", "Electronics")}
                className='order-4 min-h-40 p-4 flex flex-col items-center bg-radial-[at_50%_40%] from-blue-400 via-blue-700 to-blue-900 rounded-lg md:col-span-2 lg:flex-row-reverse lg:bg-radial-[at_80%_60%]'>

                <div className='order-1 flex-1 flex flex-col items-center justify-center gap-3 '>
                    <div className='text-xl text-blue-50 font-extrabold'>
                        Starting ₹16,500
                    </div>
                    <div className='flex flex-col items-center gap-3 text-center'>
                        <h3 className='text-xl/5 text-white font-extrabold xl:text-4xl'>Massive Deals On Latest Mobiles</h3>
                        <p className='text-sm/4 text-blue-50 font-medium'>Smart Technology. Seamless Experience.</p>
                    </div>
                </div>

                <div className='flex-1 flex justify-center'>
                    <figure>
                        <img src={MobileImg} alt="mobile" className='h-50 lg:h-60' />
                    </figure>
                </div>

            </div>

            <div
                onClick={() => handleOnClick("tablets", "Electronics")}
                className='order-1 min-h-40 p-3 flex flex-col items-center  bg-radial-[at_80%_50%] from-slate-500 via-slate-700 to-slate-950 rounded-lg md:col-span-2 lg:flex-row-reverse'>

                <div className='order-1 flex-1 flex flex-col items-center justify-center gap-3 text-center'>
                    <div className='text-xl text-gray-100 font-extrabold'>
                        Starting ₹27,000
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h3 className='text-lg/5 text-white font-extrabold xl:text-4xl'>Unbeatable Tablet Offers Today</h3>
                        <p className='text-xs/4 text-gray-100 font-medium'>Big Screen. Bigger Possibilities.</p>
                    </div>
                </div>

                <div className='flex-1 flex justify-center'>
                    <figure>
                        <img src={TabletImg} alt="tablet" className='h-50 lg:h-60 ' />
                    </figure>
                </div>

            </div>
        </div>
    )
}

export default Banner
