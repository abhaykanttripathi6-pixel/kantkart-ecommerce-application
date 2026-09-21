import ShoesImage from '../assets/images/shoes.png';
import { useNavigate } from 'react-router-dom';

const ShoesBanner = () => {

    const navigate = useNavigate();

    const handleShopNowBtn = () => {
        navigate('/products', {
            state: {
                categories: ["mens-shoes", "womens-shoes"],
                section: ["Men Fashion", "Women Fashion"]
            }
        });
    }

    return (
        <div className=' min-h-55 p-5 flex bg-blue-50 relative overflow-hidden sm:p-8 sm:gap-10 md:gap-15 lg:h-100 lg:gap-20'>

            <div className='flex-1 flex flex-col justify-center gap-3 lg:p-10 lg:gap-5'>
                    <div className='text-base font-extrabold sm:text-xl md:text-3xl lg:text-6xl lg:font-extrabold'>
                        <h2 className='text-gray-800 text-shadow-lg'>ICONIC STYLE.</h2>
                        <h2 className='text-red-700 text-shadow-lg'>TIMELESS APPEAL.</h2>
                    </div>
                    <p className='text-sm/4 font-semibold md:text-base lg:text-lg'>Running, Casual, Sports, Formal, All in one place.</p>

                    <button
                        onClick={handleShopNowBtn}
                        className='w-fit px-4 py-2 bg-red-700 text-sm text-white font-semibold rounded-full active:scale-98 transition-all duration-200 shadow-lg/30 cursor-pointer lg:px-7 lg:py-3'
                    >
                        Shop Now
                    </button>
            </div>

            <div className='flex-1 flex items-center relative z-1 bg-transparent'>
                <figure className='mx-auto bg-transparent'>
                    <img src={ShoesImage} alt="shoes_png" className='h-30 -rotate-30 sm:h-40 md:h-50 lg:h-60 lg:-rotate-35 bg-transparent' />
                </figure>
                <div className='h-[calc(100%+5rem)] w-30 -skew-10 bg-red-700 -z-1 absolute -top-9 left-[35%] sm:left-[45%] md:w-35 md:h-[calc(100%+6rem)] md:-top-11 lg:h-[calc(100%+7rem)] lg:w-50 lg:-top-13 lg:left-[45%]'></div>
            </div>

        </div>
    )
}

export default ShoesBanner;
