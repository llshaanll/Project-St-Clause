import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <section className='relative min-h-screen w-full flex flex-col bg-transparent'>
      {/* Typewriter Text - F-Layout Implementation */}
      <motion.div 
        className="w-full px-6 absolute z-10
                  top-20 left-0 text-center          /* Mobile: Top-center */
                  md:top-1/3 md:left-10 md:text-left /* Desktop: Left-aligned */
                  lg:left-20 xl:left-32"             /* Larger screens adjustment */
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="text-black dark:text-black font-mono 
                       text-2xl sm:text-3xl md:text-4xl
                       max-w-[90vw] md:max-w-[50vw]">
          <Typewriter
            options={{
              strings: ["Hello, I'm Shaan"],
              autoStart: true,
              delay: 100,
              loop: true,
              deleteSpeed: 70,
              pauseFor: 1200,
              cursor: '▌',
              wrapperClassName: 'font-bold tracking-tight',
              cursorClassName: 'text-black dark:text-white animate-blink'
            }}
          />
        </div>
      </motion.div>

      {/* 3D Model Container - Will occupy remaining space */}
      <div className="flex-1 w-full h-full">
        {/* Your 3D model component goes here */}
      </div>
    </section>
  );
};

export default HeroSection;