import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from '../reducer/AppReducer';

const AppContext = createContext();

const API = "https://dummyjson.com/products/?limit=193";

const AppProvider = ({ children }) => {

  const initialState = {
    products: [],
    loading: true,
    error: false,
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    try {
      dispatch({ type: "SetError", payload: false });
      dispatch({ type: 'SetLoading', payload: true });
      const res = await axios.get(url);
      dispatch({ type: "SetData", payload: res.data.products });
    }
    catch (error) {
      dispatch({ type: "SetError", payload: true });
    }
    finally {
      dispatch({ type: 'SetLoading', payload: false });
    }
  }


  const toggleWishList = (item) => {
    const isItemInWishlist = state.wishlist.some(product => product.id === item.id)
    if (isItemInWishlist) {
      dispatch({ type: 'RemoveToWishlist', payload: item })
    } else {
      dispatch({ type: 'AddToWishlist', payload: item })
    }
  }

  const resetWishList = (item) => {
    dispatch({ type: "ResetWishList", payload: item });
  }

  useEffect(() => {
    fetchData(API);
  }, []);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));

  }, [state.wishlist])
  
  return (
    <AppContext.Provider value={{ ...state, toggleWishList, resetWishList }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("AppContext must be use within the AppProvider");
  return context; 
}

export { useAppContext, AppProvider };
