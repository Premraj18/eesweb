/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BiCheckDouble } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
//this is naman
const variants = {
    initial: {
        x: -200,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
        },
    },
}

const About = () => {
    return (
        <motion.div className=' bg-white flex flex-col justify-center items-center py-20'
          variants={variants}
          initial='initial'
          whileInView='animate'
        >
            <h3 className='text-4xl font-semibold text-orange-600 mb-10'>ABOUT US</h3>
            <div className='flex w-full flex-col lg:flex-row justify-center items-center px-5 lg:px-20 gap-8 gap-y-14 lg:gap-y-0'>
                <motion.div className='lg:w-2/5 lg:text-lg' variants={variants}>
                    <motion.p variants={variants}>The Electrical Engineering Society (EES) at the National Institute of Technology, Jamshedpur, is a hub for innovation, technical growth, and academic excellence, designed to empower students with real-world skills.</motion.p>
                    <motion.p className='my-5' variants={variants}>EES provides you a platform to :-</motion.p>
                    <div className='text-base flex flex-col gap-3'>
                        <motion.p className='flex items-center gap-x-3' variants={variants}><span className='text-orange-600 text-xl'><BiCheckDouble/></span> Develop technical expertise and apply it to real-world challenges. </motion.p>
                        <motion.p className='flex items-center gap-x-3' variants={variants}><span className='text-orange-600 text-xl'><BiCheckDouble/></span> Collaborate with like-minded, innovation-driven individuals passionate about electrical engineering and technology.  </motion.p>
                        <motion.p className='flex items-center gap-x-3' variants={variants}><span className='text-orange-600 text-xl'><BiCheckDouble/></span> Represent your team, yourself, and the society in various competitions and events</motion.p>
                    </div>
                </motion.div>
                <motion.div className='lg:w-2/5 lg:text-lg' variants={variants}>
                   <motion.p variants={variants}>EES is not just a technical society, it's much more than that. 
                    It provides you with opportunities to nurture your skills, ignite your passion for technology, 
                    and be at the forefront of innovation. Here, we believe in continuous growth, fostering a 
                    community where every initiative is a step toward creating a technologically advanced and connected future. </motion.p>

                   <motion.p className='my-6' variants={variants}>Here, you will explore diverse fields and 
                    technologies across various domains, be it electrical engineering, software development, 
                    automation, or interdisciplinary collaborations.</motion.p>
                   <Link to='/about'>
                      <motion.button className='px-3 py-1 text-base border-2 rounded-full bg-orange-600 hover:bg-orange-500 text-white' variants={variants}>Learn More</motion.button>
                   </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About
