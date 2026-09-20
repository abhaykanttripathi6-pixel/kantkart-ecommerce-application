import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppProvider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/CartProvider.jsx';
import { ToastContainer } from 'react-toastify';
import { ClerkProvider } from '@clerk/react';
import { OrderProvider } from './context/OrderProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider>
      <BrowserRouter>
        <AppProvider>
          <CartProvider>
            <OrderProvider>
              <App />
              <ToastContainer
                position="bottom-right"
                autoClose={3000}
              />
            </OrderProvider>
          </CartProvider>
        </AppProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
)
