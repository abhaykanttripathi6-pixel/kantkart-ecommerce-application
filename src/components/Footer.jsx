import { ChevronRight } from 'lucide-react'

const Footer = () => {

    const footerData = [
        {
            id: 1,
            title: "Company",
            links: ["About Us", "Our Story", "Careers", "Contact Us"]
        },
        {
            id: 2,
            title: "Support",
            links: ["Feedback", "FAQs", "Shipping", "Returns"]
        }
    ]

    return (
        <footer>
            <div className='p-8 bg-gray-800 text-white grid grid-cols-1 gap-15 md:grid-cols-3 lg:p-15'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-3xl font-semibold'>KantKart</h3>
                    <p className='flex flex-col'>
                        <span>Shop Smarter. Live Better.</span>
                        <span className='text-sm'>Your destination for quality products at great prices.</span>
                    </p>
                </div>
                <div className='flex md:gap-10'>
                    {
                        footerData.map(data => {
                            const { id, title, links } = data;
                            return (
                                <div key={id} className='flex-1 flex flex-col gap-3'>
                                    <h4 className='text-xl font-semibold'>{title}</h4>
                                    <div className='flex flex-col gap-1'>
                                        {
                                            links.map((link, index) => (
                                                <p key={index} className='text-base'>{link}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className='flex flex-col gap-4'>
                    <h4 className='text-xl font-semibold'>Stay Connected</h4>
                    <p>
                        Questions or Feedback?<br />
                        We'd love to hear from you.
                    </p>

                    <div className='w-full relative  sm:max-w-76'>
                        <input type="email" placeholder='Email Address' className='w-full p-2 pr-11 bg-white outline-none text-black rounded-md' />
                        <button className='size-8 bg-indigo-800 rounded-md absolute top-1 right-1'>
                            <ChevronRight className='m-auto' />
                        </button>
                    </div>

                </div>
            </div>

            <div className='p-4 border-t border-gray-400 bg-gray-900 text-center'>
                <p className='text-sm text-gray-300'>© {new Date().getFullYear()} KantKart. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
