import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { Heart, ShoppingCart, AlignJustify } from 'lucide-react';
import Logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import {useCart} from '../Context/CartContext';
const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();
  const [visible, setVisible] = useState(false);
  const {cartItems} = useCart();

  const OpenNav = () => {
    setVisible(!visible);
  }

  const cartCount = cartItems.length;

  return (
    <div className='w-full  px-5 xl:px-10 py-2 flex justify-center mb-2 fixed top-0 left-0 z-10 bg-white' id='Navbar'>
      <AlignJustify className='lg:hidden relative top-5 mr-10' onClick={OpenNav} />
      <div className='w-full flex flex-col gap-10 justify-between items-center lg:flex-row  lg:justify-center xl:gap-7'>
        <Link className='flex flex-1 w-full items-center gap-3' to={'/'}>
          <img src={Logo} alt="" className='h-20' />
          <h1 className='text-2xl font-semibold'>IPA EDUCATION ACADEMY</h1>
        </Link>
        {
          visible &&
          <div className='flex flex-col gap-10 flex-1 lg:items-center'>
            <Link className='font-SubHeading text-lg' to={'/courses'}>Courses</Link>
            <Link className='font-SubHeading text-lg' to={'/contactUs'}>Contact Us</Link>
            <h4 className='font-SubHeading text-lg'>Wish List</h4>
            <h4 className='font-SubHeading text-lg'>Cart</h4>
            <h4 className='font-SubHeading text-lg'>Profile</h4>
          </div>
        }
        <div className='hidden flex-1 gap-5 xl:flex  lg:justify-end lg:items-center'>
          <Link className='font-SubHeading text-lg' to={'/myCourses'}>MyLearing</Link>
          <Link className='font-SubHeading text-lg' to={'/courses'}>Courses</Link>
          <Link className='font-SubHeading text-lg' to={'/contactUs'}>Contact Us</Link>
          <Heart />
          <Badge badgeContent={cartCount} color="primary" overlap="circular">
            <Link className='font-SubHeading text-lg' to={'/cart'}>
              <ShoppingCart />
            </Link>
          </Badge>
          <div className='hidden lg:flex gap-3'>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            {
              isAuthenticated ?
                <button className='bg-black py-1 px-3 rounded-md text-white' onClick={logout} >Logout</button>
                :
                <Link to={"/login"} className='bg-black py-1 px-4 rounded-md text-white' onClick={logout} >Login</Link>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar