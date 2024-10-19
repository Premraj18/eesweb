// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { MdMail } from 'react-icons/md'
import { motion } from 'framer-motion'

const TamCard = ({ item }) => {
    return (
        <div className="w-full flex flex-col sm:flex-row flex-wrap py-20 pt-16 justify-center items-center gap-10 md:gap-13 px-5">
            {
                // eslint-disable-next-line react/prop-types
                item?.map((e, i) => (
                    <motion.div key={e.id} className='lg:w-[28vw] sm:w-[50vw] w-80 md:h-60 h-52 bg-white rounded-2xl shadow-lg'
                        whileHover={{ scale: 1.1, transition: { duration: 0.4 } }}
                    >
                        <div className='w-full h-full flex items-center px-3 lg:px-10 gap-5 lg:gap-13'>
                            <div className='w-2/5'>
                                <img src={e.img} alt="" className='w-[115px] h-28 md:w-32 md:h-32 shadow-md rounded-[100%] object-cover' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-lg font-semibold'>{e.name}</h2>
                                <p>{e.designation}</p>
                                <div className='flex gap-6 text-xl'>
                                    <a href={e.linkedin} target='_blank' rel="noreferrer"><BsLinkedin /></a>
                                    <a href={e.email} target='_blank' rel="noreferrer"><MdMail /></a>
                                    
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default TamCard
