import ProductImg from '../assets/images/productImg.png';
import OurStory from '../assets/images/ourstory.jpg';
import OurMission from '../assets/images/our_mission.jpg';
import { statsData, cardData } from '../mockData';

const About = () => {

  return (
    <div className='my-18.75 flex flex-col gap-10 lg:gap-18'>

      {/* AboutUs banner */}

      <header>
        <figure className='relative after:content-["About_Us"] after:bg-indigo-800/60 after:absolute after:inset-0 after:z-10 after:text-4xl after:font-bold after:text-white after:flex after:justify-center after:items-center after:underline after:underline-offset-8 after:decoration-5 md:after:text-5xl'>
          <img src={ProductImg} alt="productImg" className='object-cover h-60 w-full sm:h-80 md:h-90 lg:h-100' />
        </figure>
      </header>


      {/* Our story */}

      <section className='p-4 flex flex-col justify-center items-center gap-15 md:flex-row md:px-8 md:py-4 md:items-stretch md:gap-10 lg:p-10 lg:gap-15'>

        <div className='flex-1 flex flex-col justify-center gap-8 sm:order-2 md:text-sm lg:gap-8 lg:text-sm xl:text-lg xl:gap-8'>

          <h2 className='text-3xl font-semibold text-black text-center lg:text-4xl'>
            <span className='text-indigo-800'>Our</span> Story</h2>

          <p>
            KantKart was created with a simple idea — to make online shopping easier, more convenient, and enjoyable. We bring products from different categories together in one place, helping customers discover quality products, explore exciting deals, and enjoy a smooth shopping experience.
          </p>
          <p>
            KantKart aims to create a seamless shopping experience where convenience meets variety. From everyday essentials to the latest electronics, fashion, beauty, and accessories, we make it easier for customers to find what they need, discover something new, and shop with confidence—all from one place.
          </p>
        </div>

        <div className='flex-1 sm:order-1'>
          <figure className=' relative after:content-[""] after:bg-indigo-800/60 after:absolute after:inset-0 after:z-10 after:text-4xl after:font-bold after:text-white after:flex after:justify-center after:items-center after:underline after:underline-offset-8 after:decoration-5 after:rounded-xl'>
            <img src={OurStory} alt="" className='w-full h-full min-h-80 object-cover rounded-xl' />
          </figure>
        </div>

      </section>


      {/* Stats */}

      <section className='p-5 bg-blue-800 grid grid-cols-2 gap-8 md:grid-cols-4 md:p-8 lg:p-10'>
        {
          statsData.map(data => {
            const { id, title, description } = data;
            return <div key={id} className='text-white text-center flex flex-col lg:gap-3'>
              <span className='text-4xl font-extrabold lg:text-5xl'>{title}</span>
              <p className='text-sm font-semibold text-gray-300'>{description}</p>
            </div>
          })
        }
      </section>


      {/* Our Mission */}

      <section className='p-4 flex flex-col justify-center items-center gap-15 md:flex-row md:px-8 md:py-4 md:items-stretch md:gap-10 lg:p-10 lg:gap-15'>

        <div className='flex-1 flex flex-col justify-center gap-8 md:text-sm lg:gap-8 lg:text-sm xl:text-lg xl:gap-8'>

          <h2 className='text-3xl font-semibold text-black text-center lg:text-4xl'>
            <span className='text-indigo-800'>Our </span>
            Mission
          </h2>

          <p>
            KantKart exists to make online shopping simpler, more convenient, and enjoyable — so customers can spend less time searching and more time discovering products they love. We believe great shopping should feel effortless: a wide variety of quality products, exciting deals, and a smooth experience, all in one place.
          </p>
          <p>
            KantKart's mission is to simplify online shopping by bringing variety, convenience, and value together in one platform. We aim to help customers easily discover quality products across different categories, find exciting deals, and shop with confidence. We continuously work to create a smooth, accessible, and enjoyable shopping experience for everyone.
          </p>
        </div>

        <div className='flex-1'>
          <figure className=' relative after:content-[""] after:bg-indigo-800/60 after:absolute after:inset-0 after:z-10 after:text-4xl after:font-bold after:text-white after:flex after:justify-center after:items-center after:underline after:underline-offset-8 after:decoration-5 after:rounded-xl'>
            <img src={OurMission} alt="" className='w-full h-full min-h-80 object-cover rounded-xl' />
          </figure>
        </div>

      </section>


      {/* Values */}

      <section className='p-4 flex flex-col items-center gap-4 sm:p-7 lg:p-10 lg:gap-10'>
        <h2 className='text-3xl font-bold lg:text-4xl lg:font-extrabold'>What Drives Us ?</h2>

        <div className='grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-7 lg:grid-cols-4 lg:gap-5 xl:gap-10'>
          {
            cardData.map(data => {
              const { id, title, description } = data;
              return <div key={id} className=' p-3 border-2 border-gray-300 rounded-xl flex flex-col gap-2 hover:shadow-lg/20 hover:-translate-y-2 transition-all duration-300'>
                <span className='text-base font-bold text-indigo-800 sm:text-lg'>0{id}</span>
                <p className='text-lg/5 font-bold'>{title}</p>
                <p className='text-sm text-gray-600'>{description}</p>
              </div>
            })
          }
        </div>
      </section>

    </div>
  )
}

export default About;
