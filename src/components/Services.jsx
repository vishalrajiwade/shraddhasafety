import React from 'react';
import { Link } from 'react-router-dom';
import safetyAuditImg from '../assets/images/safety-audit.png';
import riskAssesImg from '../assets/images/risk-assessment.png';
import fireSafetyImg from '../assets/images/fire-safety.png';
import mockDrillImg from '../assets/images/mock-drill.png';

const Services = () => {
  return (
    <section className='h-full bg-white'>
        <div className="container mx-auto flex flex-col justify-center py-32
        gap-16 ">
            <div className="flex flex-col justify-center items-center gap-4">
                <h4 className='text-blue font-urbanist font-semibold text-xl'>Features</h4>
                <h2 className='text-black font-urbanist font-bold text-3xl lg:text-4xl'>One Platform Many Services</h2>
            </div>
            <div className="flex flex-col gap-8 lg:flex-row justify-center items-center">
                {/* Service Card 1 */}
                <div className="group relative w-10/12 py-16 rounded-md flex flex-col justify-center items-center gap-3 border-2 border-gray-100 hover:border-blue hover:rounded-tr-[100px] ease-in-out duration-500">
                    <div className="rounded-full w-16 h-16 bg-paleBlue flex justify-center items-center group-hover:bg-blue">
                        <img className='h-9' src={safetyAuditImg} alt="" />
                    </div>
                    <h3 className='text-center font-urbanist font-bold text-2xl'>Safety Audit</h3>
                    <p className=' text-[16px] w-9/12 font-urbanist text-gray-600 text-center'>We carry out safety audit for all type of Process Industries, Power Plants, Building, Hotels, Hospital, School etc</p>
                    <div className="bg-blue absolute rounded-b-lg text-white px-[7px] py-[5px] top-[-1px] left-10">
                        01
                    </div>
                </div>

                {/* Service Card 2 */}
                <div className="group relative w-10/12 py-16 rounded-md flex flex-col justify-center items-center gap-3 border-2 border-gray-100 hover:border-blue hover:rounded-tr-[100px] ease-in-out duration-500">
                    <div className="rounded-full w-16 h-16 bg-paleBlue flex justify-center items-center group-hover:bg-blue">
                        <img className='h-9' src={riskAssesImg} alt="" />
                    </div>
                    <h3 className='text-center font-urbanist font-bold text-2xl'>Risk Assessment</h3>
                    <p className=' text-[16px] w-9/12 font-urbanist text-gray-600 text-center'>Risk Assessment is evaluating various things that could go wrong and what the consequences would be if they did</p>
                    <div className="bg-blue absolute rounded-b-lg text-white px-[7px] py-[5px] top-[-1px] left-10">
                        02
                    </div>
                </div>

                {/* Service Card 3 */}
                <div className=" group relative w-10/12 py-16 rounded-md flex flex-col justify-center items-center gap-3 border-2 border-gray-100 hover:border-blue hover:rounded-tr-[100px] ease-in-out duration-500">
                    <div className="rounded-full w-16 h-16 bg-paleBlue flex justify-center items-center group-hover:bg-blue">
                        <img className='h-9' src={fireSafetyImg} alt="" />
                    </div>
                    <h3 className='text-center font-urbanist font-bold text-2xl'>Fire Safety Audit</h3>
                    <p className=' text-[16px] w-9/12 font-urbanist text-gray-600 text-center'>For improvement into the fire system, Fire Audit is an effective tool which identified & assesses the fire risk during operation</p>
                    <div className="bg-blue absolute rounded-b-lg text-white px-[7px] py-[5px] top-[-1px] left-10">
                        03
                    </div>
                </div>

                {/* Service Card 4 */}
                <div className="group relative w-10/12 py-16 rounded-md flex flex-col justify-center items-center gap-3 border-2 border-gray-100 hover:border-blue hover:rounded-tr-[100px] ease-in-out duration-500">
                    <div className="rounded-full w-16 h-16 bg-paleBlue flex justify-center items-center group-hover:bg-blue">
                        <img className='h-9' src={mockDrillImg} alt="" />
                    </div>
                    <h3 className='text-center font-urbanist font-bold text-2xl'>Mock Drills</h3>
                    <p className=' text-[16px] w-9/12 font-urbanist text-gray-600 text-center'>For the full satisfaction of our clients, we are involved in providing services Conduct Mock Drill. Also, our Conduct Mock Drill service is known for its timeliness</p>
                    <div className="bg-blue absolute rounded-b-lg text-white px-[7px] py-[5px] top-[-1px] left-10">
                        04
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link 
                    to="/services"
                    className='bg-blue border-2 border-blue rounded-full text-white px-6 py-3 hover:bg-white hover:text-black'    
                >
                    Browse Services
                </Link>
            </div>
            
        </div>
    </section>
  )
}

export default Services