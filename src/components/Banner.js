import React from 'react';


import {Link} from 'react-scroll'

//icons
import {FaGithub,FaYoutube,FaDribbble} from 'react-icons/fa'

//type animations
import { TypeAnimation } from 'react-type-animation';

//motion
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants';


const Banner = () => {
  return (
  <section className=' flex ' id='home' >
    <div className='container mx-auto '>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-36'>
      <div className='flex-1 text-center font-secondary lg:text-left'>
      <motion.h1
      variants={fadeIn('up',0.3)}
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false,amount:0.7}}  
      className='flex justify-center text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
    JAKUB KRASOŃ
    </motion.h1>
    <motion.div 
    variants={fadeIn('up',0.4)}
    initial="hidden"
    whileInView={'show'}
    viewport={{once:false,amount:0.7}}   
    
    className=' flex justify-center w-[1200px] mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[0.8]'>
      <span className='mr-4 text-white leading-[0.8]'>I am a</span>
      <TypeAnimation
      sequence={[
        'Developer',
        2000,
        'Frontend',
        2000,
      ]}
      speed={50}
      className='text-accent'
      wrapper='span'
      repeat={Infinity}
      />
    </motion.div>
    <div className="flex justify-center">
      <motion.p
          variants={fadeIn('up',0.5)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once:false,amount:0.7}}   
      className='mb-8 max-w-lg mx-auto lg:mx-0'>
       <p className= 'text-2xl'> Some time after completing my studies and obtaining a Master's degree in engineering, I began to ponder the future of my professional career. After much contemplation, I decided to pursue a career in the IT industry. I started my journey in web development towards the end of 2021. </p>

      </motion.p>
    </div>
    <motion.div  
        variants={fadeIn('up',0.6)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}} 
    className='flex justify-center gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
      <Link to="contact"> <button className='btn btn-lg'>Contact with me </button> </Link>
      <a href='https://github.com/Jakubka24' className='btn-link text-gradient'>
        My portfolio
      </a>
      {/* socials */}
      <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
        <a href='https://github.com/Jakubka24'>
          <FaGithub/>
        </a>
      </div>
    </motion.div>
      </div>
      {/* image */}
    <motion.div 
         variants={fadeIn('down',0.5)}
         initial="hidden"
         whileInView={'show'}
    className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto '>
      {/*<img src={Image}></img>*/}
    </motion.div>
    </div>
    </div>
    </section>
  )
};

export default Banner;
