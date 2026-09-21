import { Heart, ShieldCheck, ShoppingCart, Tags } from 'lucide-react';
import ShoppingBag from '../assets/images/ShoppingBag.png';

const OurValues = () => {
    return (
        <div className='py-2 px-4 flex flex-col gap-8 md:p-8 lg:gap-25 lg:p-15 '>

            <h2 className='text-2xl font-semibold text-center lg:text-3xl'>
                <span className='text-indigo-800'>Our </span>
                Values
            </h2>

            <div className='flex flex-col gap-10 sm:flex-row sm:gap-5'>

                <div className='flex-1 flex flex-col gap-10 sm:justify-between'>

                    <div className='flex items-center gap-3 sm:flex-row-reverse lg:gap-5'>
                        <div className='p-4 bg-indigo-800 rounded-full text-white '><Heart fill='white' /></div>
                        <div>
                            <h3 className='text-xl font-semibold lg:text-2xl'>Trust</h3>
                            <p className='text-base font-medium'>Shop confidently with products you can count on.</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3 sm:flex-row-reverse'>
                        <div className='p-4 bg-indigo-800 rounded-full text-white '>
                            <ShieldCheck fill='white' />
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold lg:text-2xl'>Quality</h3>
                            <p className='text-base font-medium'>Discover products selected with quality in mind.</p>
                        </div>
                    </div>

                </div>

                <div className='hidden sm:block sm:self-center'>
                    <figure>
                        <img src={ShoppingBag} alt="ShoppingBag" className=' sm:w-full sm:max-w-40 md:max-w-65 lg:max-w-95' />
                    </figure>
                </div>

                <div className='flex-1 flex flex-col gap-10 sm:justify-between'>

                    <div className='flex items-center gap-3 lg:gap-5'>
                        <div className='p-4 bg-indigo-800 rounded-full text-white '><ShoppingCart fill='white' /></div>
                        <div>
                            <h3 className='text-xl font-semibold lg:text-2xl'>Easy Shopping</h3>
                            <p className='text-base font-medium'>Find what you need with a simple, seamless experience.</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='p-4 bg-indigo-800 rounded-full text-white'><Tags fill='white' /></div>
                        <div>
                            <h3 className='text-xl font-semibold lg:text-2xl'>Great Deals</h3>
                            <p className='text-base font-medium'>Enjoy exciting offers across your favorite categories.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default OurValues;
