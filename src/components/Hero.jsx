import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers} from '@fortawesome/free-solid-svg-icons'
import { HERO } from '../ constants';
import heroImg from '../assets/images/hero-img.jpg';

const Hero = () => {
  return (
    <>
        <section className='bg-pattern-bg h-[100vh]'>
            <div className="mx-auto container flex justify-between items-center h-full">
                <div className=" max-w-7xl flex flex-col justify-center gap-8 px-6 lg:px-0">
                    <h1 className='text-white font-bold text-5xl lg:text-6xl leading-snug max-w-[90vw] md:w-[60vw] lg:w-[50vw]'>
                    <span className='text-blue'>Safety </span>
                    {HERO.title}
                    </h1>
                    <p className='text-gray-300 w-80 md:w-96 lg:w-96 font-light text-lg leading-normal'>        
                    {HERO.subTitle}
                    </p> 
                    <div className="flex justify-start items-center gap-10">
                        <Link to="/services"
                        className='bg-blue border-2 border-blue rounded-full text-white px-6 py-3 hover:bg-white hover:text-black'    
                        >
                        {HERO.primaryBtnText}
                        </Link>
                        <Link to="/contact"
                        className='border-2 border-white rounded-full text-white px-6 py-3 hover:bg-blue'
                        >
                        {HERO.secondaryBtnText}
                        </Link>
                    </div> 
                    <p className='text-gray-300 w-80 lg:w-96 font-light text-md leading-normal'>
                        <FontAwesomeIcon className='mr-2 mt-1' icon={faUsers} /> 
                        {HERO.happyClients}</p>
                </div>
                <div className="hidden lg:flex overflow-hidden absolute right-20 bottom-[-93px]">
                    <img src={heroImg} alt="Hero Image" className='lg:h-[600px] md:h-[500px] rounded-tr-[150px] rounded-br-3xl'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero