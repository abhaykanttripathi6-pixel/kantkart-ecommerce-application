import React from 'react'

const CartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "AddToCart": {
            return [...state, { ...payload,  quantity: 1 , isSelected: true }];
        }
        case "RemoveToCart": {
            const filteredCartItems = state.filter(item => item.id !== payload.id)
            return filteredCartItems;
        }
        case "ClearCart": {
            return [];
        }
        case "IncreaseQty": {
            const updatedCartItem = state.map((item) => item.id === payload.id ? { ...item, quantity: item.quantity + 1 } : item);
            return updatedCartItem;
        }

        case "DecreaseQty": {
            const updatedCartItem = state.map((item) => item.id === payload.id ? { ...item, quantity: item.quantity - 1 } : item);
            return updatedCartItem;
        }
        case "SelectItem": {
            const updatedCartItem = state.map(item => item.id === payload.id ? { ...item, isSelected: true } : item)
            return updatedCartItem;
        }

        case "DeselectItem": {
            const updatedCartItem = state.map(item => item.id === payload.id ? { ...item, isSelected: false } : item)
            return updatedCartItem;
        }

        case "RemoveSelectedItems": {
            const filteredCartItems = state.filter(item => item.isSelected === false);
            return filteredCartItems;
        }

        default:
            return state;
    }
}

export default CartReducer;
