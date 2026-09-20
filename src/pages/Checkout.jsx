import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import Stepper from '../components/Stepper'
import DeliveryInfo from '../components/DeliveryInfo';
import PaymentMethod from '../components/PaymentMethod';
import OrderSummary from '../components/OrderSummary';
import OrderConfirmedModal from '../components/OrderConfirmedModal';
import discounted_price from '../utils/discounted_price';

import { useOrderContext } from '../context/OrderProvider';
import { useCartContext } from '../context/CartProvider';
import useScrollLock from '../hooks/useScrollLock';
import axios from 'axios';

const Checkout = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const { addOrderedItems } = useOrderContext();
    const { selectedItems, removeSelectedItems } = useCartContext();

    const [isModalOpen, setIsModalOpen] = useState(false);

    useScrollLock(isModalOpen);

    const [step, setStep] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [shippingInfo, setShippingInfo] = useState({
        customerName: '',
        address: '',
        city: '',
        state: '',
        pincode: '',
        phoneNumber: ''
    });

    const [errorMessage, setErrorMessage] = useState(null);


    const subtotal = selectedItems.reduce((totalPrice, currentItem) => totalPrice += (currentItem.price * currentItem.quantity), 0);
    const discountedAmt = selectedItems.reduce((totalDiscount, currentItem) => totalDiscount += (currentItem.price - discounted_price(currentItem.price, currentItem.discountPercentage)) * currentItem.quantity, 0);
    const cartItem_total = subtotal - discountedAmt;

    const checkoutItem = location.state?.checkoutItem?.length
        ? location.state?.checkoutItem
        : selectedItems;

    const checkoutItem_total = discounted_price(checkoutItem[0]?.price, checkoutItem[0]?.discountPercentage);

    const total = location.state?.checkoutItem?.length ? checkoutItem_total : cartItem_total;

    const isShippingInfoIncomplete = Object.keys(shippingInfo).some(key => shippingInfo[key] === '');

    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setShippingInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const fetchPostOfficeInfo = async (pincode) => {

        let postOfficeInfo;

        try {
            const pincodeData = await axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
            if (pincodeData.status === 200 && pincodeData.data[0].Status === 'Success') {
                postOfficeInfo = pincodeData.data[0].PostOffice;
            }
        } catch (error) {
            console.log("Something went wrong", error.message);
        }

        return postOfficeInfo;
    }

    const deliveryInfo_formValidattion = async () => {
        const { customerName, address, city, state, pincode, phoneNumber } = shippingInfo;

        // Name Validation
        if (!/^[a-zA-Z ]{3,50}$/.test(customerName)) {
            return "Name should be between 3-50 characters."
        }

        // Address Validation
        if (!/^[a-zA-Z0-9$#\-,.'()\/ ]{10,100}$/.test(address)) {
            return "Addresss should be between 10-100 characters."
        }

        // City Validation
        if (!/^[a-zA-Z ]{3,20}$/.test(city)) {
            return "City name should be between 3-20 characters."
        }

        // Phone_Number Validation
        if (!/^[0-9]{10}$/.test(phoneNumber)) {
            return "Invalid Phone Number."
        }

        //Pincode Validation
        if (!/^[0-9]{6}$/.test(pincode)) {
            return "Invalid Pincode."
        } else {
            const postOfficeInfo = await fetchPostOfficeInfo(pincode);

            if (!postOfficeInfo) {
                return "Unable to verify pincode."
            } else {
                const verifyPincode = postOfficeInfo.some(data => Number(data.Pincode) === Number(pincode));
                const verifyPincode_City = postOfficeInfo.some(data => Number(data.Pincode) === Number(pincode) && data.District.toLowerCase() === city.toLowerCase());

                const verifyPincode_State = postOfficeInfo.some(data => Number(data.Pincode) === Number(pincode) && data.State.toLowerCase().includes(state.toLowerCase()));

                if (!verifyPincode) {
                    return "Pincode is not serviceable.";
                } else if (!verifyPincode_City && !verifyPincode_State) {
                    return "The PIN code is not matching to City and State. Please fill it correctly.";
                } else if (!verifyPincode_City) {
                    return "The PIN code is not matching to City. Please enter the correct city name or its previous name.";
                } else if (!verifyPincode_State) {
                    return "The PIN code is not matching to State. Please select the correct State.";
                }
            }

        }

    }

    const handleCheckoutBtn = async () => {
        if (isShippingInfoIncomplete || paymentMethod === '') return;

        const errMessage = await deliveryInfo_formValidattion();

        if (errMessage) {
            return setErrorMessage(errMessage);
        }

        setIsModalOpen(true);
        addOrderedItems({ shippingInfo, paymentMethod, checkoutItem, total });
        setShippingInfo({
            customerName: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            phoneNumber: ''
        })
        setErrorMessage(null);
        setPaymentMethod('');
        removeSelectedItems();
    }

    const handleContinueBtn = async () => {
        if (step === 1) {
            if (isShippingInfoIncomplete) return;

            const errMessage = await deliveryInfo_formValidattion();

            if (errMessage) {
                setErrorMessage(errMessage);
                return;
            }

            setErrorMessage(null);
        }

        if (step === 2 && paymentMethod === '') return;

        if (step < 3) {
            setStep(step + 1);
            return;
        }
        handleCheckoutBtn();
    }

    const handleBackBtn = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigate(-1);
        }

    }
    


    return (
        <div className=' mt-18.75 '>

            {/* Mobile Checkout */}
            <div className=' flex flex-col gap-5 sm:hidden'>
                <Stepper step={step} setStep={setStep} />
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleContinueBtn();
                }
                }>
                    {step === 1 && <DeliveryInfo shippingInfo={shippingInfo} handleOnChange={handleOnChange} errorMessage={errorMessage} />}

                    {step === 2 && <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} isMobile={true} />}

                    {step === 3 && <OrderSummary items={checkoutItem} />}

                    <div className='p-3 flex justify-between sm:hidden'>
                        <button
                            type='button'
                            onClick={handleBackBtn}
                            className='py-3 px-6 bg-indigo-800 text-white font-semibold rounded-lg'
                        >
                            {step === 1 ? 'Cancel' : 'back'}
                        </button>

                        <button
                            type='submit'
                            className='p-3 bg-indigo-800 text-white font-semibold rounded-lg'
                        >
                            {step === 3 ? 'Checkout' : 'Continue'}
                        </button>
                    </div>
                </form>
            </div>


            {/* Desktop Checkout */}
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleCheckoutBtn();
                }}
                >
                    <div className='hidden sm:p-5 sm:flex sm:flex-col sm:gap-8 md:flex-row lg:p-10 lg:gap-8 xl:gap-12'>
                        <div className='sm:flex-1 sm:flex sm:flex-col sm:gap-8'>

                            <DeliveryInfo shippingInfo={shippingInfo} handleOnChange={handleOnChange} errorMessage={errorMessage} />
                            <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} isMobile={false} />

                        </div>
                        <div className='sm:flex-1 sm:flex sm:flex-col sm:gap-8'>

                            <OrderSummary items={checkoutItem} />

                            <button
                                className='sm:p-3 sm:bg-indigo-800 cursor-pointer sm:rounded-xl sm:text-white sm:font-semibold sm:active:cursor-progress'
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </form>
            </div>


            {
                isModalOpen &&
                <OrderConfirmedModal setIsModalOpen={setIsModalOpen} />
            }

        </div >
    )
}

export default Checkout
