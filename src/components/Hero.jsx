import React from 'react'
import {motion} from "framer-motion";
import {styles} from "../style";
import {ComputersCanvas} from "./canvas"
import Ball from './canvas/Ball';
//import { duration } from '@material-ui/core';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-7xl mx-auto 
      flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Piotr</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my digital portfolio! I'm a civil and energy engineer passionate about crafting innovative web applications. Explore my projects blending C# and React for a glimpse into the intersection of construction expertise and cutting-edge technology.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-0 bottom-3 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[44px] rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2'
          >
            <motion.dev 
              animate={{
                y:[0,14,0]
              }}
              transition={{
                duration:1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero