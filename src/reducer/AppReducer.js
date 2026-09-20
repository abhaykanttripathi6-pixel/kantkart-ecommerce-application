
const AppReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {

        case "SetData": {
            const productsInRupees = payload.map((item) => ({ ...item, price: Math.round(item.price * 95) }));
            return { ...state, products: productsInRupees };
        }

        case "SetLoading": {
            return { ...state, loading: payload };
        }

        case "SetError": {
            return { ...state, error: payload };
        }

        case "AddToWishlist": {
            return { ...state, wishlist: [...state.wishlist, payload] };
        }

        case "RemoveToWishlist": {
            const { wishlist } = state;
            const filteredItems = wishlist.filter(product => product.id !== payload.id)
            return { ...state, wishlist: filteredItems };
        }

        case "ResetWishList": {
            return { ...state, wishlist: [] };
        }

        default:
            return state;
    }
}

export default AppReducer;
