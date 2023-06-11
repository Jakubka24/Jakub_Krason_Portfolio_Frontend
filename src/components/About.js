import React from 'react';
import {useInView} from 'react-intersection-observer';
import {motion} from "framer-motion"
import {fadeIn} from '../variants';
import {FaReact,FaHtml5,FaCss3Alt,FaNodeJs} from 'react-icons/fa'
import {SiJavascript, SiMysql, SiTailwindcss, SiTypescript} from 'react-icons/si'
import {Link} from 'react-scroll'
import ja from '../assets/avatar.jpg'
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
        className=''>
          <img className="rounded-[25px] m-l-[200px] border border-white-800 hidden lg:block" src={ja}/>
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
          <p className="text-[14px]">As I mentioned, I started at the end of 2021 with courses on the "Udemy" platform, where I familiarized myself with the basics of HTML and CSS. The next course I took on the same platform was titled "Intermediate-Advanced Front-End Development". After that, it was time to delve into my first serious programming language - JavaScript..</p>
          <p  className="text-[14px]">A significant and more serious step was enrolling in a 14-month back-end course with elements of full-stack development, covering technologies such as HTML, CSS, JavaScript, Node.js, TypeScript, MySQL, GIT, Scrum, and React.</p>

          {/*stats*/}
          <div className='mt-6'>
            <div className='text-gradient text-[26px]'>I'm familiar with:</div>
            <div className='flex text-[42px] m-6 justify-between'>
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
            <Link to="contact">
              <button className='btn btn-lg'>Contact me</button>
            </Link>
            <a href='https://github.com/Jakubka24' className='text-gradient btn-link'>
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
