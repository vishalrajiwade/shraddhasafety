import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-black.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload , faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const Navbar = () => {

   const [menuOpen, setMenuOpen] = useState(false); 

  const LinkActiveClass = ({ isActive }) => 
    isActive ? 
    'text-gray-700 border-b-2 border-blue hover:text-gray-900 hover:font-semibold' : 
    'text-gray-700 hover:text-gray-900 hover:font-semibold';

  return (
    <nav className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2'>
        <div className='flex h-20 items-center justify-between'>
            <a className='flex flex-shrink-0 items-center' href='/'>
              <img className='h-10 w-auto cursor-pointer' src={logo} alt='Logo' />
            </a>
            {/* Desktop Menu */}
            {/* text-gray-700 border-b-2 border-blue hover:text-gray-900 hover:font-semibold */}
            <div className='hidden lg:flex w-full justify-center items-center lg:space-x-10'>
                <NavLink to='/' className={ LinkActiveClass }>
                  Home
                </NavLink>
                <NavLink to='/about' className={LinkActiveClass}>
                  About Us
                </NavLink>
                <NavLink to='/services' className={LinkActiveClass}>
                  Services
                </NavLink>
                <NavLink to='/trainings' className={LinkActiveClass}>
                  Trainings
                </NavLink>
                <NavLink to='/contact' className={LinkActiveClass}>
                  Contact Us
                </NavLink>
            </div>
            <Link 
                target='_blank'
                to="https://drive.google.com/file/d/1e2IpDuy7hDaDEu-KZWCNMlexPIfRvZcl/view?usp=drive_link"
                className='lg:flex hidden bg-blue text-white px-6 py-2 rounded-full hover:bg-white hover:text-black hover:border hover:border-black'    
            >
                <FontAwesomeIcon className='mr-2 mt-1' icon={faDownload} />
                Brochure
            </Link>
            <div onClick={() => setMenuOpen((prevState) => !prevState)} className="lg:hidden z-10">
                <FontAwesomeIcon className={`text-2xl mr-2 cursor-pointer ${menuOpen? 'text-white' : 'text-black' }`} icon={faBars} />
            </div>

            {/* Mobile Menu */}

            {menuOpen && (
                <div className='lg:hidden absolute top-0 right-0 flex flex-col w-[50vw] h-[100vh] justify-start items-start bg-darkBlue pt-24 gap-4 pl-8'>
                <NavLink 
                  onClick={() => setMenuOpen((prevState) => !prevState)}
                  to='/' 
                  className=' text-white hover:text-gray-900 hover:font-semibold'>
                  Home
                </NavLink>
                <NavLink onClick={() => setMenuOpen((prevState) => !prevState)} to='/about' className=' text-white hover:text-gray-900 hover:font-semibold'>
                  About Us
                </NavLink>
                <NavLink onClick={() => setMenuOpen((prevState) => !prevState)} to='/services' className=' text-white hover:text-gray-900 hover:font-semibold'>
                  Services
                </NavLink>
                <NavLink onClick={() => setMenuOpen((prevState) => !prevState)} to='/trainings' className=' text-white hover:text-gray-900 hover:font-semibold'>
                  Trainings
                </NavLink>
                <NavLink onClick={() => setMenuOpen((prevState) => !prevState)} to='/contact' className=' text-white hover:text-gray-900 hover:font-semibold'>
                  Contact Us
                </NavLink>
                <NavLink 
                  target='_blank'
                  to="https://drive.google.com/file/d/1e2IpDuy7hDaDEu-KZWCNMlexPIfRvZcl/view?usp=drive_link"
                  className=' bg-white text-blue px-6 py-2 mt-4 ml-[-10px] rounded-full hover:text-black'    
                >
                  <FontAwesomeIcon className='mr-2 mt-1' icon={faDownload} />
                  Brochure
                </NavLink>
            </div>
            )}

            
        </div>
        
    </nav>
  );
};
export default Navbar;