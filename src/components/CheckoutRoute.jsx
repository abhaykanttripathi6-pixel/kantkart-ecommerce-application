import { useEffect } from 'react';
import { useCartContext } from '../context/CartProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutRoute = ({ children }) => {

    const location = useLocation();

    const { selectedItems } = useCartContext();

    const navigate = useNavigate();

    useEffect(() => {
        if (!selectedItems.length && !location.state?.checkoutItem.length) return navigate('/cart');
    }, [])


    return children;
}

export default CheckoutRoute;
