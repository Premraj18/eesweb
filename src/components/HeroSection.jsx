/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { LuMoveRight } from "react-icons/lu";

const variants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
}

const HeroSection = () => {
  return (
    <div className="slide-container">
      <div className='h-[80vh] sm:h-[110vh] -mt-16' style={{
        backgroundImage: "url(" + "/nitjsr.webp" + ")",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.633),rgba(2, 2, 2, 0.633))',
      }}>
        <div className='flex flex-col justify-start items-center h-full w-full' style={{
          background: 'linear-gradient(to bottom, rgba(27, 27, 225, 0.350), rgba(27, 27, 225, 0.350))'
        }}>
          <motion.div className='flex text-black items-center justify-center pt-28 md:pt-32'
            variants={variants}
            initial='initial'
            whileInView='animate'
          >
            <div className='flex flex-col items-center justify-center text-white pt-20 '>
              <motion.h2 className='text-4xl text-center md:w-4/6 sm:text-6xl font-semibold my-4 sm:my-10' variants={variants}>
              We ensure innovation through learning and passion
              </motion.h2>
              <motion.p className='px-5 md:px-0 md:w-3/5 text-center sm:mb-10 mb-1 sm:text-lg' variants={variants}>
              "Empowering Innovation in Electrical Engineering Together through learning and passion”
              </motion.p>
              {/* <motion.p className='px-5 md:px-0 md:w-1/2 text-center mb-2 sm:mb-8 sm:text-lg' variants={variants}>
                Our architectural design guidelines help you to create outstanding interior experiences to your home within your budget and the committed timeliness.
              </motion.p> */}
              <Link to='/about'>
                 <motion.button className='bg-orange-600 hover:bg-orange-500 text-white sm:w-40 flex items-center justify-center gap-3 p-2 py-1 sm:py-2 mt-5 rounded-full' variants={variants} >Explore more <span className='pt-1'><LuMoveRight/></span></motion.button>
              </Link>
            </div>
            {/* <div className='w-1/3'>
              <img src="/hero1.webp" alt="" className='rounded-sm h-[40vh] mb-12' />
            </div> */}
          </motion.div>
         
            
        </div>
      </div>

    </div>
  )
}

export default HeroSection
