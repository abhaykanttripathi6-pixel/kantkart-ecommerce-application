import { createContext, useContext, useEffect, useReducer } from 'react';
import OrderReducer from '../reducer/OrderReducer';

const OrderContext = createContext();

const OrderProvider = ({ children }) => {

    const initialState = JSON.parse(localStorage.getItem('orders')) || [];

    const [orders, dispatch] = useReducer(OrderReducer, initialState);

    const addOrderedItems = (orderInfo) => {
        dispatch({ type: "AddOrder", payload: orderInfo })
    }

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders])

    return (
        <OrderContext.Provider value={{ orders, addOrderedItems }}>
            {children}
        </OrderContext.Provider>
    )
}

const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (!context) throw new Error("OrderContext must be use within OrderProvider.")
    return context;
}

export { OrderProvider, useOrderContext }