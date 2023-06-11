
import React from 'react';
//icon
import {BsArrowUpRight} from 'react-icons/bs'

//motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../variants'

//services
const services = [
  {
    name:'IDE',
    description: 
    'I had the opportunity to work with development environments such as Brackets, Webstorm, and Visual Studio Code, of which "Webstorm" was the one I enjoyed the most. ',
    link: <a href="https://www.jetbrains.com/webstorm/">learn more</a>
  },
  {
    name:'SCRUM',
    description: 
    'During the implementation of the project in the bonus stage of the aforementioned "MEGA COURSE," I had the opportunity to work in the SCRUM framework for 4 weeks.',
    link: <a href="https://www.atlassian.com/pl/agile/scrum">learn more</a>
  },
  {
    name:'GIT',
    description: 
    'Throughout my previous education, I had the opportunity to learn the version control system GIT, which proved to be particularly useful during a group project where each team member created their own branches to work on.',
    link:<a href="https://github.com/">learn more</a>
  },
]

const Services = () => {


  return (
    <section className='section ' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row '>
        {/* text & image */}
        <motion.div 
        variants={fadeIn('right',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}   

        className='flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6 leading-[1.2]'>Other skills and technologies</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
            In the course of my educational path, in addition to programming languages and libraries, I have gained knowledge of other technologies.
          </h3>
          <button className='btn btn-sm'><a href="https://github.com/Jakubka24">See my work</a></button>
        </motion.div>
        {/* services */}
      <motion.div
      variants={fadeIn('left',0.5)}
      initial="hidden"
      whileInView={'show'}
      viewport={{once:false,amount:0.3}}   
       className='flex-1'>
        {/* service list */}
        <div >
          {services.map((service,index) => {
            const {name,description,link} = service;
            return (
            <div 
            className='border-b border-white/20 h-auto mb-[35px] flex '
            key={index}
            >
              <div className='max-w-[476px]'>
              <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 '>
                {name}
                </h4>
              <p 
              className='font-secondary leading-tight'
              >
                {description}
                </p>
            </div>
              <div className='flex flex-col flex-1 items-end'>
                <a 
                href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                >
                  <BsArrowUpRight/>

                </a>
                <a href='#' className='text-gradient text-sm'>
                  {link}
                </a>
              </div>
            </div>
            ) 
          })}
          </div>
        </motion.div>
      </div>
    </div>
      </section>
  )
  
};

export default Services;
