/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import TeamCard from './TamCard'
import Data1 from './2k21.json'
import Data2 from './2k22.json'
import { motion } from 'framer-motion'
import { BsLinkedin } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

const Team = () => {
    const [active, setActive] = useState("item1")
    const [item1, setItem1] = useState(Data1)
    const [item2, setItem2] = useState(Data2)
    const [item3, setItem3] = useState()

    console.log(active);
    return (
        <Layout>
            <div className='bg-slate-100'>
                <div className='bg-slate-100 flex flex-col justify-center items-center h-full w-full pt-28'>
                    <h2 className='md:text-5xl text-3xl text-orange-600 font-semibold'>Team EES</h2>
                </div>
                <div className='w-full flex items-center justify-center mt-10 px-5'>
                    <p className='text-center lg:w-2/3'>We are Team EES, a dynamic blend of dedicated faculty and 
                    passionate students working together to push the boundaries of electrical engineering. Our 
                    society thrives on the collaborative efforts of experienced mentors and innovative minds, 
                    ensuring that every initiative we undertake is a perfect harmony of academic excellence and 
                    practical experience. At EES, we are united in our commitment to fostering growth, embracing 
                    challenges, and driving progress in both education and industry.</p>
                </div>

                {/* Buuton */}
                <div className='flex justify-center flex-wrap w-full mt-10 text-xs sm:text-base'>
                    <button className="sm:w-36 w-32 mx-5 my-2 px-4 py-2 border-2 rounded-full border-orange-700 "
                        onClick={() => {
                            setActive('item1')
                        }} style={{ background: active === 'item1' ? '#e06514' : '', color: active === 'item1' ? 'white' : '' }}>2k21 batch</button>
                    <button className="sm:w-36 w-32 mx-5 my-2 px-4 py-2 border-2 rounded-full border-orange-700 "
                        onClick={() => {
                            setActive('item2')
                        }} style={{ background: active === 'item2' ? '#e06514' : '', color: active === 'item2' ? 'white' : '' }}>2k22 batch</button>
                    <button className="sm:w-36 w-32 mx-5 my-2 px-4 py-2 border-2 rounded-full border-orange-700 "
                        onClick={() => {
                            setActive('item3')
                        }} style={{ background: active === 'item3' ? '#e06514' : '', color: active === 'item3' ? 'white' : '' }}>Faculty</button>
                </div>

                {/* President */}

                {active === 'item1' && <div className='president flex flex-col items-center justify-center mt-10 '>
                    <motion.div className='lg:w-[33vw] sm:w-[50vw] w-[83vw] md:h-64 bg-white rounded-2xl shadow-lg py-6'
                        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    >
                        <div className='w-full h-auto flex flex-col md:flex-row items-center lg:justify-between px-5 lg:px-10 gap-5 lg:gap-10'>
                            <div className=''>
                                <img src='/2k21/inderjeet.webp' alt="" className='w-[145px] h-36 md:w-80 md:h-32 shadow-md rounded-[100%] border-2 object-cover' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='text-lg font-semibold'>Indrajeet Kumar</h2>
                                <p>President</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut perspiciatis!</p>
                                <div className='flex gap-6 text-xl'>
                                    <a href="https://www.linkedin.com/in/indrajeet-kumar-919b69255/" target='_blank' rel="noreferrer"><BsLinkedin /></a>
                                    <MdMail />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>}

                {/* Faculty Advisor */}

                {active === "item3" && <div className='faculty flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-center py-10 md:py-20 '>
                    <motion.div className='lg:w-[33vw] sm:w-[50vw] w-[83vw] md:h-64 bg-white rounded-2xl shadow-lg py-6'
                        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    >
                        <div className='w-full h-auto flex flex-col md:flex-row items-center lg:justify-between px-5 lg:px-10 gap-5 lg:gap-10'>
                            <div className=''>
                                <img src='/ravi.webp' alt="" className='w-[145px] h-36 md:w-80 md:h-32 shadow-md rounded-[100%] border-2 object-cover' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='text-lg font-semibold'>Ravi Bhusan</h2>
                                <p>Associate Professor, Electrical Engineering Department</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut perspiciatis!</p>
                                <div className='flex gap-6 text-xl'>
                                <a href="https://www.linkedin.com/in/dr-ravi-bhushan-aa995053/" target='_blank' rel="noreferrer"><BsLinkedin className='cursor-pointer'/></a>
                                    <MdMail className='cursor-pointer'/>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='lg:w-[33vw] sm:w-[50vw] w-[83vw] md:h-64 bg-white rounded-2xl shadow-lg py-6'
                        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    >
                        <div className='w-full h-auto flex flex-col md:flex-row items-center lg:justify-between px-5 lg:px-10 gap-5 lg:gap-10'>
                            <div className=''>
                                <img src='/arvind.webp' alt="" className='w-[145px] h-36 md:w-80 md:h-32 shadow-md rounded-[100%] border-2 object-cover' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h2 className='text-lg font-semibold'>Arvind Prajapati</h2>
                                <p>Associate Professor, Electrical Engineering Department</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora aspernatur aut perspiciatis!</p>
                                <div className='flex gap-6 text-xl'>
                                    <a href="https://www.linkedin.com/in/dr-arvind-kumar-prajapati-1214618a/" target='_blank' rel="noreferrer"><BsLinkedin className='cursor-pointer'/></a>
                                    <MdMail className='cursor-pointer'/>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>}

                <div className='w-full '>
                    {active === 'item1' && <TeamCard item={item1} />}
                    {active === 'item2' && <TeamCard item={item2} />}
                </div>

            </div>
        </Layout>
    )
}

export default Team
