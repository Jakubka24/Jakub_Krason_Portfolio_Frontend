import React, {useState} from 'react';
//motion
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants';


const Contact = () => {

  const [userEmail,setUserEmail] = useState('')
  const [userName,setUserName] = useState('')
  const [userMessage,setUserMessage] = useState('')


  const handleInputName = (e) => {
    setUserName(e.target.value)
  }

  const handleInputEmail = (e) => {
    setUserEmail(e.target.value)
  }

  const handleTextArea = (e) => {
    setUserMessage(e.target.value)
  }


  const handleBtn = async () => {
    const result = await fetch('http://localhost:3005/send-email',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email:userEmail,
        name: userName,
        message:userMessage
      })
    })
        .then(response => {
          if (response.ok) {
            console.log('Formularz został pomyślnie wysłany')
          } else {
            console.log('Wystąpił błąd podczas wysyłania formularza');
          }
        })
        .catch(error => {
          console.log('Wystąpił błąd podczas wysyłania formularza:', error);
        });
  }

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
        variants={fadeIn('up',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}  
        className='flex-1'>
          <div>
            <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>
          Get in touch
            </h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
          Let's work <br/>together!
            </h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.from
        variants={fadeIn('down',0.3)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once:false,amount:0.7}}  
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input
              onChange={handleInputName}
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all '
          type="text"
          placeholder='Your name'
          >
          </input>
          <input
              onChange={handleInputEmail}
          className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all '
          type="text"
          placeholder='Your email'
          >
          </input>
          <textarea
              onChange={handleTextArea}
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
          placeholder='Your massage'>

          </textarea>
          <button onClick={handleBtn} className='btn btn-sm'>Send message</button>
        </motion.from>
      </div>
      </div>
    </section>
  ) 
};

export default Contact;
