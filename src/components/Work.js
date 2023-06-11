import React from 'react';

//motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../variants'

import Img1 from '../assets/portfolio-1.png'
import Img2 from '../assets/portfolio-2.png'
import Img3 from '../assets/portfolio-3.png'


const Work = () => {

  return (

<section className='section' id='work'>
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row gap-x-10'>
      <motion.div 
      variants={fadeIn('up',0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}   
      className='flex-1 flex flex-col gap-y-14 mb-10 lg:mb-0 '>
        {/* text */}
        <div>
          <h2 className='h2 leading-tight text-accent'>
        My lates <br/>
        Work 
          </h2>
          <p className='max-w-m mb-16 text-[22px] text-accent-white'>
            My latest creation is a "memory" type game called "Medieval Match," created in the beloved medieval theme that I adore.
            Previously, I worked on a larger project titled "Music Mood," where every music fan will find something for themselves.
          </p>
          <a className="btn btn-sm p-4" href='https://github.com/Jakubka24?tab=repositories'>View all projects</a>
        </div>
        {/* image */}
        <div  className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/* img */}
        <img 
        className='group-hover:scale-125 transition-all duration-500'
        src={Img1} 
        alt='img1'></img>
        {/* pretitle */}
        <div
        className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
          <span className='text-gradient'>Full stack app</span>
          </div>
        {/* title */}
        <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3x1 text-white'>Music Mood</span>
        </div>
        </div>
      </motion.div>
      <motion.div
       variants={fadeIn('down',0.5)}
       initial="hidden"
       whileInView={'show'}
       viewport={{once:false,amount:0.3}}   
       className='flex-1 flex flex-col gap-y-10 lg:gap-y-[64px]' >
        {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/* img */}
        <img 
        className='group-hover:scale-125 transition-all duration-500'
        src={Img2} 
        alt='img2'></img>
        {/* pretitle */}
        <div
        className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
          <span className='text-gradient'>Frontend app</span>
          </div>
        {/* title */}
        <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3x1 text-white'>Medieval Match</span>
        </div>
        </div>
        <div className='flex-1'>
        {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          {/* overlay */}
          <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/* img */}
        <img 
        className='group-hover:scale-125 transition-all duration-500'
        src={Img3} 
        alt='img3'></img>
        {/* pretitle */}
        <div
        className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
          <span className='text-gradient'>My first tailwind app</span>
          </div>
        {/* title */}
        <div  className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
          <span className='text-3x1 text-white'>My portfolio</span>
        </div>
        </div>
      </div>
      </motion.div>
      
    </div>
  </div>
  </section>
  ) 
};

export default Work;
