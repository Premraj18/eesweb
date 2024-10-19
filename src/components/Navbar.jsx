/* eslint-disable no-unused-vars */
import { Fragment, useContext, useRef, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { Dialog, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { FiMenu } from "react-icons/fi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {

  //scroll effect
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setHidden(true);
    } else {
      setHidden(false)
    }
  })

  //color on which page is routing
  let { pathname } = useLocation()
  let subpage = pathname.split('/')?.[1]
  // console.log(subpage)

  function Linkness(type = null) {
    if (subpage === '') {
      subpage = 'home'
    }
    let classes = 'text-sm font-medium hover:text-orange-600 '

    if (type === subpage) {
      classes += 'border border-orange-600 rounded-3xl p-2'
    }
    else {
      classes += ' '
    }

    // console.log(classes)
    return classes
  }

  //toggle
  const ref = useRef();

  const toggleCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  return (
    <motion.header className='w-full py-2 fixed top-0 z-10 sm:px-10 px-5 flex justify-between items-center'
      variants={{
        visible: { background: 'transparent', color: 'black' },
        hidden: { background: 'white', boxShadow: '0px 0.01px 5px rgba(24, 22, 22, 0.155)', color: 'black' },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.1, }}
    >
      <nav className='flex w-full md:justify-center justify-between items-center screen-max-width'>

        {/* destop view */}
        <div className={``}>
          <Link to='/'>
            <img src={`${subpage === '' && hidden == !true ? '/eeslogo2.webp' : '/eeslogo.webp'}`} alt="img" className={`md:w-20 w-16`} />
          </Link>
        </div>
        <div className='md:flex text-lg flex-1 justify-center items-center space-x-8 hidden'>
          <Link to={'/'} className={Linkness('home')}>
            <p className={`lg:text-lg text-base ${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`}>Home</p>
          </Link>
          <Link to={'/about'} className={Linkness('about')}>
            <p className={`lg:text-lg text-base ${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`}>About </p>
          </Link>
          <Link to={'/event'} className={Linkness('event')}>
            <p className={`lg:text-lg text-base ${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`}>Events </p>
          </Link>
          <Link to={'/gallery'} className={Linkness('gallery')}>
            <p className={`lg:text-lg text-base ${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`}>Gallery </p>
          </Link>

          <Link to={'/team'} className={Linkness('team')}>
            <p className={`lg:text-lg text-base ${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`}>Our Team </p>
          </Link>

          {/* <Link to={'/contact'} className={Linkness('contact')}>
            <p className={`lg:text-lg text-base ${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`}>Contact Us </p>
          </Link> */}
        </div>
        <div className='md:flex lg:text-xl text-base hidden items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <Link to='/contact'>
            <button className={`px-2 py-1 text-base border-2 rounded-full border-orange-600 hover:bg-orange-700 hover:text-white ${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`} >Contact Us</button>
          </Link>
        </div>

        {/* mobile view */}
        <div onClick={toggleCart} className='cursor-pointer md:hidden font-semibold md:absolute md:right-0 md:mx-8 md:mt-0'>
          <button className={`${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`}><FiMenu size={30} /></button>
        </div>
        <div ref={ref} className="w-full md:hidden h-[100vh] sideCart bg-white absolute top-0 right-0 py-10 transition-transform transform translate-x-full ">
          <span onClick={toggleCart} className="absolute top-8 right-4 cursor-pointer"><RxCross2 size={30} /></span>
          <div className='flex flex-col border-t-2 py-5 justify-center items-center mt-12 gap-10'>
            <div className='flex flex-col text-lg items-center justify-center gap-y-6'>
             <Link to={'/'} className={Linkness('home')}>
                <p className='lg:text-lg text-base'>Home</p>
              </Link>
              <Link to={'/about'} className={Linkness('about')}>
                <p className='lg:text-lg text-base'>About </p>
              </Link>
              <Link to={'/event'} className={Linkness('event')}>
                <p className='lg:text-lg text-base'>Events </p>
              </Link>
              <Link to={'/gallery'} className={Linkness('gallery')}>
                <p className='lg:text-lg text-base'>Gallery </p>
              </Link>

              <Link to={'/team'} className={Linkness('team')}>
                <p className='lg:text-lg text-base'>Our Team </p>
              </Link>

              {/* <Link to={'/contact'} className={Linkness('contact')}>
                <p className='lg:text-lg text-base'>Contact Us </p>
              </Link> */}
            </div>
            <div className='flex lg:text-xl text-xl md:text-base items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
              <Link to='/contact'>
                <button className={`px-2 py-1 text-base border-2 rounded-full border-orange-600 hover:bg-orange-700 hover:text-white ${subpage === 'home' && hidden == !true ? 'text-white' : 'text-black'}`} >Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}