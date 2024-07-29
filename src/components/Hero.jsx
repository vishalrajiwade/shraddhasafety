import React from 'react';
import { HERO } from '../ constants';

const Hero = () => {
  return (
    <>
        <section className='bg-heroBg h-[100vh] flex flex-col lg:flex-row pt-32 px-4 gap-8'>
            <h1 className='text-white font-bold text-5xl leading-snug'>
                <span className='text-blue'>Safety </span>
                {HERO.title}
            </h1>
            <p className='text-gray-300 w-80 font-light text-lg leading-normal'>{HERO.subTitle}</p> 
            <div className="flex justify-start items-center gap-10">
                <a href="/"
                    className='bg-blue rounded-full text-white px-6 py-3 hover:border-2 hover:border-white hover:bg-transparent'    
                >
                    {HERO.primaryBtnText}
                </a>
                <a href="/"
                    className='border-2 border-white rounded-full text-white px-6 py-3 hover:bg-blue hover:border-none'
                >
                    {HERO.secondaryBtnText}
                </a>
            </div> 
        </section>
    </>
  )
}

export default Hero