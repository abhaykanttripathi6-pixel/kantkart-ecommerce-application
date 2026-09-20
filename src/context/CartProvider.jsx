import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/CartReducer';
import { toast } from 'react-toastify';

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const initialState = JSON.parse(localStorage.getItem('cart')) || []
  const [cartItems, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    const isItemIncluded = cartItems.some(prouduct => prouduct.id === item.id);
    if (!isItemIncluded) {
      dispatch({ type: 'AddToCart', payload: item });
      toast.success("Added to cart");
    }
    return;
  }

  const removeToCart = (item) => {

    const isItemIncluded = cartItems.some(prouduct => prouduct.id === item.id);
    if (isItemIncluded) {
      dispatch({ type: 'RemoveToCart', payload: item });
      toast.success("Removed from cart")
    }
    return;
  }

  const clearCart = () => {
    dispatch({ type: 'ClearCart' });
  }

  const increaseQty = (item) => {

    const itemToIncrease = cartItems.find((product) => product.id === item.id);

    const maximumOrderQty = itemToIncrease.minimumOrderQuantity; //took minimumOrderQuantity as maximumOrderQuantity.

    if ((itemToIncrease.quantity < maximumOrderQty) && (itemToIncrease.quantity < itemToIncrease.stock)) {
      dispatch({ type: 'IncreaseQty', payload: item });
      toast.success("Quantity increased");
    } else if (maximumOrderQty === itemToIncrease.quantity) {
      toast.info(`Maximum order quantity is only ${itemToIncrease.quantity}`);
    } else if (itemToIncrease.quantity === itemToIncrease.stock) {
      toast.info(`Only ${itemToIncrease.quantity} items are available.`);
    }

  }

  const decreaseQty = (item) => {
    const itemToIncreased = cartItems.find((product) => product.id === item.id);

    if (itemToIncreased.quantity === 1) return;
    dispatch({ type: 'DecreaseQty', payload: item });
    toast.success("Quantity decreased");
  }

  const handleAddToCartBtn = (id, item) => {
    const isItemPresent = cartItems.some((product) => product.id === id)
    if (isItemPresent) {
      increaseQty(item);
    } else {
      addToCart(item);
    }
  }

  const selectItem = (item) => {
    dispatch({ type: 'SelectItem', payload: item });
  }

  const deselectItem = (item) => {
    dispatch({ type: 'DeselectItem', payload: item });
  }

  const selectedItems = cartItems.filter(item => item.isSelected);

  const removeSelectedItems = () => {
    dispatch({ type: 'RemoveSelectedItems' });
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeToCart, clearCart, handleAddToCartBtn, decreaseQty, increaseQty, selectItem, deselectItem, selectedItems, removeSelectedItems }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext must be use within the CartProvider.");
  return context;
}

export { CartProvider, useCartContext };
