import Hero from '../components/Hero';
import PopularCategories from '../components/PopularCategories';
import Banner from '../components/Banner';
import OurValues from '../components/OurValues';
import ShoesBanner from '../components/ShoesBanner';
import Testimonial from '../components/Testimonial';

const Home = () => {

  return (
    <div className='flex flex-col gap-15'>
      <Hero />
      <PopularCategories />
      <Banner />
      <OurValues />
      <ShoesBanner />
      <Testimonial />
    </div>
  )
}

export default Home
