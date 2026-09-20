import { paymentMethodData } from "../mockData"

const PaymentMethod = ({ paymentMethod, setPaymentMethod, isMobile }) => {


    return (
        <div className='p-3 flex flex-col gap-5 sm:p-5 sm:border-2 sm:border-gray-300 sm:rounded-xl sm:shadow-[1px_1px_5px_3px_rgba(0,0,0,0.1)]'>
            <h1 className='text-2xl font-semibold'>Payment Method</h1>
            <div className='flex flex-col gap-4'>
                {
                    paymentMethodData.map(method => {
                        return <label
                            key={method.id}
                            className='p-3 flex gap-3 border rounded-lg'
                        >
                            <input
                                type="radio"
                                required
                                name={isMobile ? 'paymentMethodMobile' : 'paymentMethodDesktop'}
                                value={method.title}
                                checked={paymentMethod.includes(method.title)}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />

                            <div className='p-2 bg-gray-200 text-3xl text-indigo-800 rounded-lg'>
                                {method.logo}
                            </div>

                            <div>
                                <h2 className='text-base font-semibold'>{method.title}</h2>
                                <p className='text-sm text-gray-500'>{method.description}</p>
                            </div>
                        </label>
                    })
                }
            </div>
        </div>
    )
}

export default PaymentMethod
