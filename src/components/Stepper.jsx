
const Stepper = ({ step }) => {
    const checkoutSteps = [
        {
            id: 1,
            step: "Delivery Info",
        },
        {
            id: 2,
            step: "Payment Method",
        },
        {
            id: 3,
            step: "Summary",
        },
    ]
    return (
        <div className='p-3 flex justify-center sm:hidden'>
            {
                checkoutSteps.map(data => {
                    return <div key={data.id} className='mx-auto relative'>
                        <div className='flex flex-col items-center'>
                            <span className={`size-10 text-xl font-semibold border-2 rounded-full flex justify-center items-center ${data.id <= step ? 'bg-indigo-800 text-white' : 'bg-white text-black'}`}>{data.id}</span>
                            <span className={`text-base font-semibold ${data.id <= step ? 'text-indigo-800' : 'text-black'}`}>{data.step}</span>
                        </div>
                        {
                            data.id < (checkoutSteps.length) &&
                            <div className={`h-1 w-10 bg-black absolute top-5 -right-8 rounded ${data.id < step ? 'bg-indigo-800' : 'bg-black'}`}></div>
                        }
                    </div>
                })
            }
        </div>
    )
}

export default Stepper
