
import logo from '../assets/images/logo-black.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload , faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Navbar = () => {

   const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <nav className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2'>
        <div className='flex h-20 items-center justify-between'>
            <a className='flex flex-shrink-0 items-center' href='/'>
              <img className='h-10 w-auto cursor-pointer' src={logo} alt='Logo' />
            </a>
            {/* Desktop Menu */}
            <div className='hidden lg:flex w-full justify-center items-center lg:space-x-10'>
                <a href='/' className=' text-gray-700 hover:text-gray-900 hover:font-semibold'>
                  Home
                </a>
                <a href='/' className=' text-gray-700 hover:text-gray-900 hover:font-semibold'>
                  About Us
                </a>
                <a href='/' className=' text-gray-700 hover:text-gray-900 hover:font-semibold'>
                  Services
                </a>
                <a href='/' className=' text-gray-700 hover:text-gray-900 hover:font-semibold'>
                  Trainings
                </a>
                <a href='/' className=' text-gray-700 hover:text-gray-900 hover:font-semibold'>
                  Contact Us
                </a>
            </div>
            <a 
                href="/"
                className='lg:flex hidden bg-blue text-white px-6 py-2 rounded-full hover:bg-white hover:text-black hover:border hover:border-black'    
            >
                <FontAwesomeIcon className='mr-2 mt-1' icon={faDownload} />
                Brochure
            </a>
            <div onClick={() => setMenuOpen((prevState) => !prevState)} className="lg:hidden z-10">
                <FontAwesomeIcon className={`text-2xl mr-2 cursor-pointer ${menuOpen? 'text-white' : 'text-black' }`} icon={faBars} />
            </div>

            {/* Mobile Menu */}

            {menuOpen && (
                <div className='lg:hidden absolute top-0 right-0 flex flex-col w-[50vw] h-[100vh] justify-start items-start bg-darkBlue pt-24 gap-4 pl-8'>
                <a href='/' className=' text-white hover:text-gray-900 hover:font-semibold'>
                  Home
                </a>
                <a href='/' className=' text-white hover:text-gray-900 hover:font-semibold'>
                  About Us
                </a>
                <a href='/' className=' text-white hover:text-gray-900 hover:font-semibold'>
                  Services
                </a>
                <a href='/' className=' text-white hover:text-gray-900 hover:font-semibold'>
                  Trainings
                </a>
                <a href='/' className=' text-white hover:text-gray-900 hover:font-semibold'>
                  Contact Us
                </a>
                <a 
                href="/"
                className=' bg-white text-blue px-6 py-2 mt-4 ml-[-10px] rounded-full hover:text-black'    
            >
                <FontAwesomeIcon className='mr-2 mt-1' icon={faDownload} />
                Brochure
            </a>
            </div>
            )}

            
        </div>
        
    </nav>
  );
};
export default Navbar;