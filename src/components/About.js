import React from 'react';
import { useInView } from 'react-intersection-observer';
import {motion} from "framer-motion"
import { fadeIn } from '../variants';
import {FaReact,FaHtml5,FaCss3Alt,FaNodeJs} from 'react-icons/fa'
import {SiJavascript, SiMysql, SiTailwindcss, SiTypescript} from 'react-icons/si'
import ja from '../assets/20220908_141937.jpg'
const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  });

  
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
         variants={fadeIn('right',0.3)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once:false,amount:0.3}}
        className='flex-1  bg-contain bg-no-repeat  bg-top'>
          <img src={ja}/>
        </motion.div>
        <motion.div 
         variants={fadeIn('left',0.5)}
         initial="hidden"
         whileInView={'show'}
         viewport={{once:false,amount:0.7}}   
        className='flex-1'>
          <h2 className='h2 text-accent' >
            About me.
            </h2>
          <h3 className='h3 mb-4'>
            I'm Freelance Front-end developer.
            </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula ex eget mi bibendum lobortis. Nulla vitae tincidunt lorem. Curabitur hendrerit eget justo vel ultricies. Morbi ut ante quis mi auctor sodales vel in augue.</p>

          {/*stats*/}
          <div className='mt-6'>
            <div className='text-gradient text-[26px]'>I'm familiar with:</div>
            <div className='flex text-[42px] m-6 justify-between '>
              <FaReact/>
              <FaHtml5/>
              <FaCss3Alt/>
              <FaNodeJs/>
              <SiTailwindcss/>
              <SiTypescript/>
              <SiJavascript/>
              <SiMysql/>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'>Contact me</button>
            <a href='#' className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  ); 
};

export default About;
