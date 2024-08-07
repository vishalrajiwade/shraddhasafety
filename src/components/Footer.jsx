import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo-white.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='bg-pattern-bg bg-center bg-cover'>
        <div className="container mx-auto flex flex-col lg:flex-row px-8 py-10 gap-8">
            <div className='flex flex-col items-start gap-4 lg:w-2/4'>
                <img src={Logo} alt="Logo" className='h-12'/>
                <p className='text-gray-300 font-urbanist text-[15px]'>We are capable of catering quality and state of arts services in the field of EHS to the emerged in chemical and  other industries across the pan India, Provides total EHS solutions developed to meet the need of each customers.</p>
            </div>

            <div className='lg:w-1/4'>
                <h4 className='text-gray-200 font-urbanist font-semibold text-xl mb-4'>
                    Explore
                </h4>

                <div className='flex flex-col gap-2'>
                    <Link to='/' className=' text-gray-400 font-light hover:text-blue hover:font-normal'>
                        Home
                    </Link>
                    <Link to='/about' className=' text-gray-400 font-light hover:text-blue hover:font-normal'>
                        About Us
                    </Link>
                    <Link to='/services' className=' text-gray-400 font-light hover:text-blue hover:font-normal'>
                        Services
                    </Link>
                    <Link to='/trainings' className=' text-gray-400 font-light hover:text-blue hover:font-normal'>
                        Trainings
                    </Link>
                    <Link to='/contact' className=' text-gray-400 font-light hover:text-blue hover:font-normal'>
                        Contact Us
                    </Link>
                </div>
            </div>
                
            <div className='flex flex-col gap-4 lg:w-1/4'>
                <h4 className='text-gray-200 font-urbanist font-semibold text-xl mb-4'>
                    Contact
                </h4>
                <p className='text-gray-400 font-light text-[16px]'>2300/15, Sadguru Apartment, Near Manish Complex, Pasthal, Boisar(West), Tal. & Dist. Palghar - 401504</p>
                <div className='flex items-center'>
                    <FontAwesomeIcon className='mr-2 mt-1 text-gray-400' icon={faEnvelope} />
                    <span className='text-gray-400 text-[16px]'>info@shraddhasafetyservices.com</span>
                </div>
                <div>
                <FontAwesomeIcon className='mr-2 mt-1 text-gray-400' icon={faPhone} />
                    <span className='text-gray-400 text-[16px]'>+91 1234567890</span>
                </div>
            </div>
        </div>
        <div className='bg-darkBlue py-1 flex justify-center items-center'>
            <p className='text-gray-300 font-urbanist text-sm'>Copyright &#169; 2024 Shraddha Safety Services - Created by Vishal Rajiwade</p>
        </div>
    </footer>
  )
}

export default Footer