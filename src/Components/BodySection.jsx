// eslint-disable-next-line no-unused-vars
import React from 'react'
import profilePic from "../assets/parth-profile-pic.jpeg";
import { motion } from 'framer-motion';

const container =(delay) =>({
  hidden :{x: -100 , opacity : 0},
  visible :{
    x:0,
    opacity : 1,
    transition : { duration : 0.5, delay : delay},
  },
});

const BodySection = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap ">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.5 , delay:2}} className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                      Parth Savjani
                    </motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3 xl ttracking-tight text-transparent">
                      Software Developer
                    </motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter ">
                      Software developer with extensive hands-on experience in Java, Spring Boot, 
                      React, and cloud technologies (Azure, AWS). Proven expertise in designing and implementing microservices, RESTful APIs, and database integration 
                      for scalable and secure applications. Skilled in Agile methodologies, collaborating with cross-functional teams, and delivering innovative technology solutions.
                      Eager to leverage expertise in system design, integration architectures, and technical troubleshooting to contribute to impactful IT systems and solutions</motion.p >
                </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                  <motion.img 
                  initial={{x:100 , opacity:0}}
                  animate={{x:0 ,opacity:1}}
                  transition={{duration:1 ,delay :1.2}}
                  src = {profilePic} />
                
                </div>
            </div>
        </div>     
    </div>
  )
}

export default BodySection;
