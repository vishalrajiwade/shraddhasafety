import React from 'react'
import { Link } from 'react-router-dom'
import AboutImage from '../assets/images/about.png'
import BulbImg from '../assets/images/light-bulb.png'
import RelationImg from '../assets/images/relations.png'

const About = () => {
  return (
    <section className='h-full py-12'>
        <div className="container mx-auto flex flex-col gap-24 lg:flex-row lg:gap-12">
            <div className='flex justify-center items-center w-[450px] lg:w-1/2'>
                <img 
                    src={AboutImage} 
                    alt="About Image" 
                    className='h-full w-full'
                />
            </div>
            <div className="pl-10 flex flex-col justify-center gap-4 lg:w-1/2">
                <h4 className='text-blue font-urbanist font-semibold text-xl'>About Us</h4>
                <h2 className='text-black font-urbanist font-bold text-3xl lg:text-4xl'>Protecting Your Workplace</h2>
                <p className='text-gray-500 font-urbanist leading-normal'>Shradha Safety Services offers EHS services like Process safety management, Hazard identification, Risk Assessment HIRA, HAZOP, QRA, HAC ,Emergency response and disaster management plan, EHS training, Behaviour Based safety training,  safety manual and supply of all personal protective equipments</p>

                <div className="pt-6 flex gap-4 items-center">
                    <img 
                        src={BulbImg} 
                        alt="About 1"
                        className='h-12' 
                    />
                    <h2 className='text-black font-urbanist font-bold text-2xl lg:text-3xl'>Customer Centric</h2>
                </div>
                <div className="flex gap-4 items-center">
                    <img 
                        src={RelationImg} 
                        alt="About 1"
                        className='h-12' 
                    />
                    <h2 className='text-black font-urbanist font-bold text-2xl lg:text-3xl'>Customer Relations</h2>
                </div>
                <div className="pt-6 flex justify-start items-center">
                <Link 
                    to="/services"
                    className='bg-blue border-2 border-blue rounded-full text-white px-6 py-3 hover:bg-white hover:text-black'    
                >
                    Browse Services
                </Link>
            </div>
            </div>

        </div>
    </section>
  )
}

export default About