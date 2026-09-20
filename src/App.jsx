import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import CheckoutRoute from './components/CheckoutRoute';
import Loading from './components/Loading';

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const SingleProduct = lazy(() => import('./pages/SingleProduct'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const MyOrders = lazy(() => import('./pages/MyOrders'));
const Login = lazy(() => import('./pages/Login'));
const WishList = lazy(() => import('./pages/WishList'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {

  return (
    <div>
      <Navbar />

      <Suspense fallback={<Loading />}>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/singleProduct/:id' element={<SingleProduct />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/signIn' element={<Login />} />

          <Route
            path='/checkout'
            element={
              <ProtectedRoute>
                <CheckoutRoute>
                  <Checkout />
                </CheckoutRoute>
              </ProtectedRoute>
            } />

          <Route
            path='/myOrders'
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            } />
            
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  )
}

export default App
