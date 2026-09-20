import React from 'react'

const OrderReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "AddOrder":
            const { shippingInfo, paymentMethod, checkoutItem, total } = payload;
            const order = {
                orderId: `KK-${Date.now().toString().slice(-6)}`,
                shippingInfo,
                items: checkoutItem,
                paymentMethod,
                total,
                orderDate: new Date().toLocaleDateString('en-GB', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })
            };

            return [...state, order];

        default:
           return state;
    }
}

export default OrderReducer
