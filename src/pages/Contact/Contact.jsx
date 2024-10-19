/* eslint-disable no-unused-vars */
import React, { useContext, useRef, useState } from 'react'
import { BsTelephone } from 'react-icons/bs'
import { MdLocationPin, MdMail } from "react-icons/md";
import { motion, useInView } from 'framer-motion'
import Layout from '../../components/Layout';
import toast from 'react-hot-toast'

const textvariants = {

    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const Contact = () => {
    const ref = useRef()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (name == '' || email == '' || message == '') {
            toast.error("Please fill all the credentials!")
        }
        else {
            toast.success("message sent successfully");
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return (    
        <Layout>
            <div className='bg-slate-100'>
                <div className="flex justify-center pb-20">
                    <div className='flex flex-col items-center h-full w-full' style={{
                        // background: 'linear-gradient(to bottom, rgba(2, 2, 2, 0.633), rgba(2, 2, 2, 0.633))'
                    }}>
                        <h2 className='md:text-5xl text-3xl text-orange-600 mt-28 font-bold'>Contact Us</h2>
                        <p className='text-black text-lg mt-5 md:w-[600px] text-center px-10'>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center pb-16 px-5 gap-y-14 lg:gap-20'>
                    <div className='lg:w-2/5 w-full flex items-center justify-center'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6863772192432!2d86.14154107508409!3d22.77701737934658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sjp!4v1718941681102!5m2!1sen!2sjp"
                            width="100%"
                            height="550"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            className='rounded-2xl shadow-xl'
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">

                        </iframe>
                    </div>
                    <form onSubmit={handleSubmit} className='lg:w-2/5 border-2 p-10 w-full mx-3 bg-white shadow-lg rounded-xl'>
                        <div className="-mx-2 md:items-center md:flex">
                            <div className="flex-1 px-2">
                                <label className="block mb-2 text-sm text-gray-600 ">Name</label>
                                <input type="text" placeholder="John Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                            <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg   focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="w-full mt-4">
                            <label className="block mb-2 text-sm text-gray-600 ">Message</label>
                            <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56   focus:border-orange-400 dark:focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <button type='submit' className="w-40 px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                            Send message
                        </button>
                    </form>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='md:text-5xl text-3xl mb-12 font-semibold'>Get In <span className='text-orange-500'>Touch</span></h2>
                    <p className='md:text-xl sm:w-[70%] px-5 text-center sm:mb-12 mb-5'>Feel free to reach out to us with any inquiries, feedback, or concerns. Your communication is important to us, and we aim to respond promptly to assist you.</p>
                </div>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 py-20 pt-10">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-orange-500 rounded-full bg-orange-100/80 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
                        <p className="mt-2 text-gray-500 ">Our friendly team is here to help.</p>
                        <p className="mt-2 text-orange-500 ">hello@merakiui.com</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-orange-500 rounded-full bg-orange-100/80 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 ">Office</h2>
                        <p className="mt-2 text-gray-500 ">Come say hello at our office HQ.</p>
                        <p className="mt-2 text-orange-500 ">100 Smith Street Collingwood VIC 3066 AU</p>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="p-3 text-orange-500 rounded-full bg-orange-100/80 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 ">Phone</h2>
                        <p className="mt-2 text-gray-500 ">Mon-Fri from 8am to 5pm.</p>
                        <p className="mt-2 text-orange-500 ">+1 (555) 000-0000</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
