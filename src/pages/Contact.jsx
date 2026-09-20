import CustomerServiceImg from '../assets/images/customerService.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


const Contact = () => {
  return (
    <div className='my-18.75 flex flex-col gap-10 lg:gap-18'>

      {/* Contact banner */}

      <header>
        <figure className='relative after:content-["Contact_Us"] after:bg-indigo-800/60 after:absolute after:inset-0 after:z-10 after:text-4xl after:font-bold after:text-white after:flex after:justify-center after:items-center after:underline after:underline-offset-8 after:decoration-5 md:after:text-5xl'>
          <img src={CustomerServiceImg} alt="productImg" className='object-cover h-60 w-full sm:h-80 md:h-90 lg:h-100' />
        </figure>
      </header>

      {/* Contact Info & Form */}

      <section className='p-4 flex flex-col gap-10 sm:flex-row lg:gap-15 lg:p-10'>

        {/* Contact Information */}

        <div className='p-8 flex flex-col gap-5 bg-indigo-800 text-base text-white rounded-xl sm:flex-1'>

          <h1 className='text-2xl font-semibold md:text-3xl'>Need More Information?</h1>
          <h2 className='text-xl font-semibold md:text-2xl'>Get in touch</h2>
          <p>Have questions, feedback, or need assistance? Our team is here to help. Reach out to us anytime, and we’ll do our best to provide quick, friendly support.
          </p>

          <div className='flex gap-8 flex-wrap'>

            <div className='flex items-center gap-2'>
              <div className='p-2 border-2 border-white rounded-lg'>
                <IoLocationOutline className='size-5' />
              </div>
              <div>
                <p className='text-base font-semibold'>Address</p>
                <p className='text-sm'>24 Civil Lines, Prayagraj, Uttar Pradesh 211001</p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <div className='p-2 border-2 border-white rounded-lg'>
                <MdMailOutline className='size-5' />
              </div>
              <div>
                <p className='text-base font-semibold'>Email Address</p>
                <p className='text-sm'>kantkartsupport@gmail.com</p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <div className='p-2 border-2 border-white rounded-lg'>
                <FaPhoneAlt className='size-5' />
              </div>
              <div>
                <p className='text-base font-semibold'>Phone Number</p>
                <p className='text-sm'>+1 234 567 890</p>
              </div>
            </div>

          </div>

        </div>

        {/* Contact Form */}

        <div className='p-5 border-2 border-gray-300 rounded-xl flex flex-col gap-2 sm:flex-1'>
          <h2 className='text-2xl font-semibold'>Send us a Message</h2>

          <form className='flex flex-col gap-4'
            action="https://formspree.io/f/mwlkvjvg"
            method='POST'
          >

            <label className='flex flex-col gap-1'>
              <span className='text-base font-semibold'>Your Name</span>
              <input
                type="text"
                name="username"
                required
                placeholder='Enter your full name'
                className='w-full p-3 bg-gray-50 rounded-lg border-2 border-gray-300 text-sm' />
            </label>

            <label className='flex flex-col gap-1'>
              <span className='text-base font-semibold'>Email Address</span>
              <input
                type="text"
                name="email"
                required placeholder='Enter your email 
              address' className='w-full p-3 bg-gray-50 rounded-lg border-2 border-gray-300 text-sm' />
            </label>

            <label className='flex flex-col gap-1'>
              <span className='text-base font-semibold '>Message</span>
              <textarea
                name="message"
                rows='5'
                required
                placeholder='Write your message...'
                className='w-full p-3 bg-gray-50 rounded-lg border-2 border-gray-300 text-sm resize-none'>
              </textarea>
            </label>

            <button className='p-3 bg-indigo-800 text-white text-base rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-800/95'>
              <span>Send Message</span>
              <IoIosSend className='size-5' />
            </button>
          </form>

        </div>
      </section>

      {/* Location */}
      <section className='m-4 border-2 border-gray-300  rounded-xl lg:m-10 lg:rounded-2xl'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.5088744286177!2d81.83272851744383!3d25.454678099999988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acac36bd6b4bd%3A0xa8f91cae0abd4820!2sPVR%20Vinayak%20Prayagraj!5e0!3m2!1sen!2sin!4v1788179581619!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
          className='w-full h-80 rounded-xl lg:rounded-2xl'
        >
        </iframe>
      </section>

    </div>
  )
}

export default Contact
