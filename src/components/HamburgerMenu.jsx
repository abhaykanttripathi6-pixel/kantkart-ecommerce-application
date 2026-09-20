import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { useUser } from "@clerk/react";
import { menuData } from '../mockData';

const HamburgerMenu = ({ setOpenMenu }) => {

  const { user, isSignedIn } = useUser();

  return (
    <div className='h-screen w-62.5 px-5 py-8 bg-gray-50 fixed top-0 left-0 z-50 rounded-r-3xl flex flex-col gap-8 shadow-[1px_1px_4px_2px_rgba(0,0,0,0.18)] animate-slide sm:w-70 sm:px-7 sm:py-10  md:hidden'>
      <div className='self-end absolute top-6 right-4' onClick={() => setOpenMenu(false)}>
        <X className='size-7' />
      </div>

      <div className='flex items-center border-b-2 border-gray-300 pt-6 pb-4 md:hidden'>
        <Show when="signed-out">
          <div className='flex items-center gap-2'>
            <SignInButton className=' px-3 py-2 border-3 border-indigo-800 bg-white rounded-full text-sm text-indigo-800 font-semibold tracking-wide active:scale-97 transition-all transition-duration-300 cursor-pointer hover:shadow-[0.5px_0.5px_10px_4px_rgba(0,0,255,0.2)]' />
            <SignUpButton className=' px-3 py-2 border-3 border-indigo-800 bg-indigo-800 rounded-full text-sm text-white font-semibold tracking-wide active:scale-97 transition-all transition-duration-300 cursor-pointer hover:shadow-[0.5px_0.5px_10px_4px_rgba(0,0,255,0.2)]' />
          </div>
        </Show>
        <Show when="signed-in">
          <div className='flex gap-1'>
            <UserButton />

            {
              isSignedIn &&
              <div>
                <p className='text-sm font-semibold wrap-break-word'>{user?.fullName}</p>
                <p className='text-xs wrap-anywhere'>{user?.primaryEmailAddress?.emailAddress}</p>
              </div>
            }

          </div>
        </Show>
      </div>

      <div className='flex flex-col gap-3 sm:gap-5'>
        {
          menuData.map(data => {
            const { id, Icon, page, navigate } = data;
            if (page === 'My Orders' && !isSignedIn) return;
            return (
              <div key={id} className='flex-1 p-2 flex items-center gap-3'
                onClick={() => setOpenMenu(false)}
              >
                <Icon className='size-7' />
                <NavLink to={navigate} className={({ isActive }) => isActive ? 'text-indigo-800 text-lg font-semibold' : 'text-lg font-medium'}>{page}</NavLink>
              </div>
            )
          })
        }



        {/* <div>
          <Info />
          <span>About</span>
        </div>

        <div>
          <ShoppingBag />
          <span>Products</span>
        </div>

        <div>
          <MessagesSquare />
          <span>Contact</span>
        </div> */}
      </div>

    </div >
  )
}

export default HamburgerMenu;
