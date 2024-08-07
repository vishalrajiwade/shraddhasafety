import React from 'react'
import { Link } from 'react-router-dom'
import ERTImg from '../assets/images/ERT.jpg'
import ETPImg from '../assets/images/ETP.jpg'
import TeamBuildingImg from '../assets/images/Team-building.jpg'
import HouseKeepingImg from '../assets/images/Housekeeping.jpg'

const Trainings = () => {
  return (
    <section className='h-full bg-white'>
        <div className="container mx-auto flex flex-col justify-center py-32
        gap-16 ">
            <div className="flex flex-col justify-center items-center gap-4">
                <h4 className='text-blue font-urbanist font-semibold text-xl'>Our Trainings List</h4>
                <h2 className='text-black font-urbanist font-bold text-3xl lg:text-4xl'>Most Popular Trainings</h2>
            </div>
            <div className="px-12 lg:px-0 flex flex-col justify-between items-center lg:flex-row gap-8">
                {/* Training 1 */}
                <div className='bg-white border shadow-md border-gray-200 relative rounded-md'>
                    <div>
                        <img src={ERTImg} alt="Training1" />
                        <span className='absolute top-4 left-4 px-2 py-1 z-10 bg-blue text-white'> Training</span>
                    </div>
                    <div className='px-4 flex flex-col justify-around items-start gap-2 pt-2 mb-4'>
                        <h2 className='text-black font-urbanist font-semibold text-xl lg:text-2xl'>ERT Training</h2>
                        <p className='text-[16px] font-urbanist text-gray-600'>Emergency Response Training is designed for people who work on a high-risk site that may require an ERT to respond to potential incidents.</p>
                        <div className='bg-gray-300 h-[1px] w-full mb-2'></div>
                        <Link 
                            to="/training/ert"
                            className='bg-white border-2 border-blue rounded-lg text-black px-4 py-1 hover:bg-blue hover:text-white'    
                        >
                            View
                        </Link>
                    </div>
                </div>

                {/* Training 2 */}
                <div className='bg-white border shadow-md border-gray-200 relative rounded-md'>
                    <div>
                        <img src={ETPImg} alt="Training1" />
                        <span className='absolute top-4 left-4 px-2 py-1 z-10 bg-blue text-white'> Training</span>
                    </div>
                    <div className='px-4 flex flex-col justify-around items-start gap-2 pt-2 mb-4'>
                        <h2 className='text-black font-urbanist font-semibold text-xl lg:text-2xl'>ETP Operations</h2>
                        <p className='text-[16px] font-urbanist text-gray-600'>Operating and maintaining effluent treatment plant ETP or Sewage treatment plant STP is a challenging job because of various health risks.</p>
                        <div className='bg-gray-300 h-[1px] w-full mb-2'></div>
                        <Link 
                            to="/training/etp"
                            className='bg-white border-2 border-blue rounded-lg text-black px-4 py-1 hover:bg-blue hover:text-white'    
                        >
                            View
                        </Link>
                    </div>
                </div>

                {/* Training 3 */}
                <div className='bg-white border shadow-md border-gray-200 relative rounded-md'>
                    <div>
                        <img src={TeamBuildingImg} alt="Training1" />
                        <span className='absolute top-4 left-4 px-2 py-1 z-10 bg-blue text-white'> Training</span>
                    </div>
                    <div className='px-4 flex flex-col justify-around items-start gap-2 pt-2 mb-4'>
                        <h2 className='text-black font-urbanist font-semibold text-xl lg:text-2xl'>Team Building</h2>
                        <p className='text-[16px] font-urbanist text-gray-600'>employees can take advantage of the opportunity to develop strengths that could hold company back from accomplishing important objectives</p>
                        <div className='bg-gray-300 h-[1px] w-full mb-2'></div>
                        <Link 
                            to="/training/team"
                            className='bg-white border-2 border-blue rounded-lg text-black px-4 py-1 hover:bg-blue hover:text-white'    
                        >
                            View
                        </Link>
                    </div>
                </div>

                {/* Training 4 */}
                <div className='bg-white border shadow-md border-gray-200 relative rounded-md'>
                    <div>
                        <img src={HouseKeepingImg} alt="Training1" />
                        <span className='absolute top-4 left-4 px-2 py-1 z-10 bg-blue text-white'> Training</span>
                    </div>
                    <div className='px-4 flex flex-col justify-around items-start gap-2 pt-2 mb-4'>
                        <h2 className='text-black font-urbanist font-semibold text-xl lg:text-2xl'>Housekeeping's 5'S</h2>
                        <p className='text-[16px] font-urbanist text-gray-600'>The strategy is to engage the frontline process teams to facilitate improvement and keep out the waste on a daily basis</p>
                        <div className='bg-gray-300 h-[1px] w-full mb-2'></div>
                        <Link 
                            to="/training/housekeeping"
                            className='bg-white border-2 border-blue rounded-lg text-black px-4 py-1 hover:bg-blue hover:text-white'    
                        >
                            View
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <Link 
                    to="/trainings"
                    className='bg-blue border-2 border-blue rounded-full text-white px-6 py-3 hover:bg-white hover:text-black'    
                >
                    Browse Trainings
                </Link>
            </div>
        </div>
    </section>

    
  )
}

export default Trainings