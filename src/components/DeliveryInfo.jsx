
const DeliveryInfo = ({ shippingInfo, handleOnChange, errorMessage }) => {

    const statesName = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
        "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
        "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
        "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
        "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
        "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
        "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
    ];

    return (
        <div className='p-3 flex flex-col gap-5 sm:p-5 sm:border-2 sm:border-gray-300 sm:rounded-xl sm:sm:shadow-[1px_1px_5px_3px_rgba(0,0,0,0.1)]'>

            <h1 className='text-2xl font-semibold'>Delivery Info</h1>

            {
                errorMessage &&
                <div className='p-2 text-sm text-center border-2  border-red-500 rounded-lg font-semibold text-red-500'>
                    {errorMessage}
                </div>
            }

            <div className='flex flex-col gap-4'>

                <div>
                    <label className='flex flex-col gap-1'>
                        <span className='text-semibold '>Full Name</span>
                        <input
                            type="text"
                            placeholder='Enter your name'
                            required
                            name='customerName'
                            value={shippingInfo.customerName}
                            onChange={(e) => handleOnChange(e)}
                            className='p-2 border rounded-lg outline-indigo-800' />
                    </label>
                </div>

                <div>
                    <label className='flex flex-col gap-1'>
                        <span>Address</span>
                        <input
                            type="text"
                            placeholder='Enter your address'
                            required
                            name='address'
                            value={shippingInfo.address}
                            onChange={(e) => handleOnChange(e)}
                            className='p-2 border rounded-lg outline-indigo-800 ' />
                    </label>
                </div>

                <div className='flex items-center gap-3 sm:gap-5'>

                    <label className='flex-1 flex flex-col gap-1'>
                        <span>City</span>
                        <input
                            type="text"
                            placeholder='Enter your city'
                            required
                            name='city'
                            value={shippingInfo.city}
                            onChange={(e) => handleOnChange(e)}
                            className='p-2 w-full min-w-0 border rounded-lg outline-indigo-800' />
                    </label>

                    <label className='flex-1 flex flex-col gap-1'>
                        <span>State</span>
                        <select
                            required
                            name='state'
                            value={shippingInfo.state}
                            onChange={(e) => handleOnChange(e)}
                            className='p-2 w-full min-w-0 border rounded-lg outline-indigo-800'
                        >
                            <option disabled value=''>Select State</option>
                            {
                                statesName.map(name => (
                                    <option key={name} value={name}>{name}</option>
                                ))
                            }
                        </select>
                    </label>
                </div>

                <div className='flex gap-3 sm:gap-5'>
                    <label className='flex-1 flex flex-col gap-1'>
                        <span>Pincode</span>
                        <input
                            type="text"
                            inputMode='numeric'
                            placeholder='Enter pincode'
                            required
                            name='pincode'
                            value={shippingInfo.pincode}
                            onChange={(e) => handleOnChange(e)}
                            className='p-2 w-full min-w-0 border rounded-lg outline-indigo-800' />
                    </label>

                    <label className='flex-1 flex flex-col gap-1'>
                        <span>Phone Number</span>
                        <input
                            type="tel"
                            inputMode='numeric'
                            placeholder='Enter mobile number'
                            required
                            name='phoneNumber'
                            value={shippingInfo.phoneNumber}
                            onChange={(e) => handleOnChange(e)}
                            className='p-2 w-full min-w-0 border rounded-lg outline-indigo-800' />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default DeliveryInfo
