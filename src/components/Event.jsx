import React from 'react'
import EventCard from './EventCard'
import { Link } from 'react-router-dom'
import { LuMoveRight } from 'react-icons/lu'

const Event = () => {
    return (
        <div>
            <div className="w-full sm:mt-0 bg-slate-100 pt-10 pb-16">
                <div className='w-full'>
                    <h2 className='w-full text-5xl text-center font-semibold text-orange-600 md:text-5xl pb-20'>Events</h2>
                </div>
                <div className="w-full">
                    <EventCard />
                </div>
                <div className="flex items-center justify-center w-full">
                    <p className="px-2 md:px-16 sm:w-[80vw] text-lg text-center font-semibold md:text-2xl my-12">"Dreams aspirations are not easily obtained but one of the hardest things to do is to keep going is to keep chasing.
                        Being a Predator we will definitely strive for success but we want you to be our support while carrying this responsibility.
                        Contribute to a cause, Be a Predator with us."</p>
                </div>
                <div className="w-full my-16 text-center">
                    <Link to='/event' className='flex items-center justify-center'>
                        <button className='bg-orange-600 hover:bg-orange-500 text-white sm:w-40 flex items-center justify-center gap-3 p-2 py-1 sm:py-2 mt-5 rounded-full' >Learn more <span className='pt-1'><LuMoveRight/></span></button>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default Event
