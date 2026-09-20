import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { customerReviews } from '../mockData';
import StarRating from './StarRating';

const Testimonial = () => {

    const [slide, setSlide] = useState(0);

    return (
        <section>
            <div className='p-7 text-black flex flex-col items-center gap-10 lg:gap-10 xl:px-20'>
                <h2 className='text-2xl font-bold lg:text-3xl'>
                    <span className='text-indigo-800'>Customer </span>
                    Saying
                </h2>


                <div className='flex flex-col gap-4'>
                    <div className='w-full flex gap-3 justify-end sm:w-[98%]'>
                        <button
                            onClick={() => (slide > 0) && setSlide(slide - 1)}
                            className='p-2 bg-gray-100 text-xl rounded-lg hover:shadow-[0_0_3px_1px_rgba(0,0,0,0.18)] hover:cursor-pointer hover:bg-indigo-800 hover:text-white'
                        >
                            <IoIosArrowBack />
                        </button>

                        <button
                            className='p-2 bg-gray-100 text-xl rounded-lg hover:shadow-[0_0_3px_1px_rgba(0,0,0,0.18)] hover:cursor-pointer rotate-180 hover:bg-indigo-800 hover:text-white'
                            onClick={() => ((window.innerWidth < 640 && slide < customerReviews.length - 1) || ((window.innerWidth > 768 && window.innerWidth < 1024) && slide < 6) || ((window.innerWidth > 1024 && window.innerWidth < 1282) && slide < 5) || (window.innerWidth > 1282 && slide < 7)) && setSlide(slide + 1)}
                        >
                            <IoIosArrowBack />
                        </button>
                    </div>
                    <div className="w-95 overflow-hidden sm:w-140 lg:w-250 xl:w-290">
                        <div
                            className={`p-2 flex transition-all duration-300 ease-in-out`}
                            style={{ transform: `translateX(-${385 * slide}px)` }}>
                            {
                                customerReviews.map(data => {

                                    const { id, name, role, image, rating, description } = data;

                                    return <div key={id} className='w-90 shrink-0 p-5 mx-3 bg-gray-100 border-3 border-indigo-800 rounded-xl flex flex-col gap-8 shadow-[0_0_3px_1px_rgba(0,0,0,0.15)] sm:w-65 xl:w-90 hover:shadow-lg hover:shadow-gray-400 hover:-translate-y-2 transition-all duration-300'>
                                        <div className='flex items-center gap-3'>
                                            <div className=' p-1 border-3 border-indigo-800 rounded-full grid place-content-center'>
                                                <figure>
                                                    <img src={image} alt="cutomer" className='h-15 w-15 w-object-cover rounded-full' />
                                                </figure>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <div>
                                                    <p className='text-lg font-bold'>{name}</p>
                                                    <p className='text-md'>{role}</p>
                                                </div>
                                                <div className='flex gap-1 text-md text-yellow-400'>
                                                    <StarRating rating={rating} />
                                                </div>
                                            </div>
                                        </div>
                                        <p>{description}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
