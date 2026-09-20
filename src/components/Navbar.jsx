import { useState, useEffect, useRef } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { RiMenu2Line } from "react-icons/ri";
import { useCartContext } from '../context/CartProvider';
import { Show, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/react'
import { BsFillBoxSeamFill } from "react-icons/bs";
import useScrollLock from '../hooks/useScrollLock';


const Navbar = () => {

  const { isSignedIn } = useUser();

  const { cartItems } = useCartContext();

  const [openMenu, setOpenMenu] = useState(false);

  useScrollLock(openMenu)

  const navigate = useNavigate();

  const isUserSignIn = useRef(isSignedIn);

  useEffect(() => {
    if(!isUserSignIn.current){
      localStorage.removeItem('cart');
      localStorage.removeItem('orders');
      localStorage.removeItem('wishlist');
    }

    isUserSignIn.current = isSignedIn; 
  }, [isSignedIn])


  return (
    <nav>
      <div className='w-full p-4.5 border-b bg-white border-gray-400 flex justify-between items-center text-gray-900 shadow-xl/15 fixed top-0 left-0 z-25 md:p-5 xl:px-8 xl:border-b-2 xl:shadow-xl/18'>

        {/* KantKart Name */}
        <div className='flex items-center gap-5'>
          <RiMenu2Line strokeWidth={0.5} className='size-7 text-gray-900 md:hidden' onClick={() => setOpenMenu(true)} />

          <h1 className='text-[25px] font-semibold md:text-3xl lg:text-4xl cursor-default'
            onClick={() => navigate('/')}
          >
            <span className='text-gray-900'>Kant</span>
            <span className='text-indigo-800'>Kart</span>
          </h1>

        </div>

        {/* Pages */}
        <div className='hidden md:flex'>
          <ul className=' md:flex md:gap-4 md:text-sm md:text-gray-800 md:font-semibold xl:text-base lg:ml-15 '>

            <li>
              <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-indigo-800 underline underline-offset-5 decoration-2' : ''}>Home</NavLink>
            </li>

            <li>
              <NavLink to={'/about'} className={({ isActive }) => isActive ? 'text-indigo-800 underline underline-offset-5 decoration-2' : ''}>About</NavLink>
            </li>

            <li>
              <NavLink to={'/products'} className={({ isActive }) => isActive ? 'text-indigo-800 underline underline-offset-5 decoration-2' : ''}>Products</NavLink>
            </li>

            <li>
              <NavLink to={'/contact'} className={({ isActive }) => isActive ? 'text-indigo-800 underline underline-offset-5 decoration-2' : ''}>Contact</NavLink>
            </li>

          </ul>
        </div>


        <div className='px-1 h-full  flex items-center gap-6 relative md:gap-5 md:min-h-10 lg:gap-6'>

          <NavLink to={'/wishlist'} className={({ isActive }) => isActive ? 'text-indigo-800' : ''}>
            <Heart strokeWidth={2.5} className='size-7 xl:size-8' />
          </NavLink>

          <NavLink to={'/cart'} className={({ isActive }) => isActive ? 'text-indigo-800' : ''}>
            <ShoppingCart strokeWidth={2.5} className="size-7 xl:size-8" />
          </NavLink>

          {
            isSignedIn &&
            <NavLink to={'/myOrders'} className={({ isActive }) => isActive ? 'hidden md:inline-block md:text-indigo-800' : 'hidden md:inline-block md:text-black'}>
              <BsFillBoxSeamFill className="size-7 xl:size-8" />
            </NavLink>
          }

          {/* Sign_In & Sign_Out */}
          <div className='hidden md:flex md:items-center'>
            <Show when="signed-out">
              <div className='hidden md:flex md:items-center md:gap-2'>
                <SignInButton
                  forceRedirectUrl="/"
                  className=' px-2 py-1 border-3 border-indigo-800 bg-white rounded-full text-sm text-indigo-800 font-semibold tracking-wide active:scale-97 transition-all duration-300 cursor-pointer hover:shadow-[0.5px_0.5px_10px_4px_rgba(0,0,255,0.2)] md:px-4 md:py-1.5 md:text-base md:tracking-wider' />
                <SignUpButton
                  forceRedirectUrl="/"
                  className='hidden md:block px-1.5 py-1 border-3 border-indigo-800 bg-indigo-800 rounded-full text-sm text-white font-semibold tracking-wide active:scale-97 transition-all duration-300 cursor-pointer hover:shadow-[0.5px_0.5px_10px_4px_rgba(0,0,255,0.2)] md:px-4 md:py-1.5 md:text-base md:tracking-wider' />
              </div>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>

          <div className='size-5 bg-indigo-800 text-white text-xs rounded-full flex justify-center items-center absolute -right-1 -top-1.5 md:left-17 md:top-0.5 lg:left-18 xl:left-20'>
            <span>{cartItems.length}</span>
          </div>
        </div>
      </div>

      {
        openMenu && <HamburgerMenu setOpenMenu={setOpenMenu} />
      }

    </nav>
  )
}

export default Navbar;
