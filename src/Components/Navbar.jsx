import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import { ShoppingCart, AlignJustify, UserRound } from 'lucide-react';
import Logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useCart } from '../Context/CartContext';

const Navbar = () => {
  const { logout, isAuthenticated, token } = useAuth();
  const [visible, setVisible] = useState(false);
  const { cartItems } = useCart();

  const OpenNav = () => {
    setVisible(!visible);
  }

  const cartCount = cartItems.length;

  return (
    <div className='w-full  px-5 xl:px-10 py-2 flex justify-start mb-2 fixed top-0 left-0 z-10 bg-white' id='Navbar'>
      <div className='w-full flex flex-col gap-10 lg:flex-row  lg:justify-center xl:gap-7'>
        <div className='flex flex-row'>
          <AlignJustify className='lg:hidden relative top-5 mr-10' onClick={OpenNav} />
          <Link className='flex flex-1 w-full items-center gap-3' to={'/'}>
            <img src={Logo} alt="" className='h-16' />
            <h1 className='text-2xl font-semibold'>INDIAN PODIATRY ASSOCIATION</h1>
          </Link>
        </div>
        {
          visible &&
          <div className='flex flex-col gap-4 flex-1 text-center lg:items-center underline underline-offset-4'>
            <Link className='font-SubHeading text-lg border-solid' to={'/'}>Home</Link>
            <Link className='font-SubHeading text-lg border-solid' to={'/myCourses'}>MyLearing</Link>
            <Link className='font-SubHeading text-lg border-solid' to={'/courses'}>Courses</Link>
            <Link className='font-SubHeading text-lg' to={'/cart'} >Cart</Link>
            {isAuthenticated &&
              <Link to={`/profile`} className='font-SubHeading text-lg'>Profile</Link>
            }
            <Link className='font-SubHeading text-lg' to={'/contactUs'}>Contact Us</Link>
            {
              isAuthenticated ?
                <button className='font-SubHeading text-lg' onClick={logout} >Logout</button>
                :
                <Link className='font-SubHeading text-lg' to={'/login'} > Login</Link>
            }
          </div>
        }
        <div className='hidden flex-1 gap-5 lg:flex  lg:justify-end lg:items-center underline underline-offset-6'>
          <Link className='font-SubHeading text-lg' to={'/myCourses'}>MyLearing</Link>
          <Link className='font-SubHeading text-lg' to={'/courses'}>Courses</Link>
          <Link className='font-SubHeading text-lg' to={'/contactUs'}>Contact Us</Link>
          <Badge badgeContent={cartCount} color="primary" overlap="circular">
            <Link className='font-SubHeading text-lg' to={'/cart'}>
              <ShoppingCart />
            </Link>
          </Badge>
          <div className='flex gap-3 items-center'>
            {isAuthenticated &&
              <Link to={`/profile`} className='font-SubHeading text-lg'><UserRound /></Link>
            }
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