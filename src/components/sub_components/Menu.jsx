import React, { useState } from 'react'
import {motion} from 'framer-motion'

const Menu = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <nav className='flex flex-row items-center justify-center gap-6'>
      {['About', 'Contact'].map((item, index)=>{
        const lowerCaseItem = item.toLowerCase()
        return (
          <motion.a
          key={item}
          href={`#${lowerCaseItem}`}
          initial={{y: -100}}
          animate={{y: 0}}
          transition={{
            type: 'spring',
            delay: 0.2 + index * 0.2
          }}
          onHoverStart={()=> setActiveItem(lowerCaseItem)}
          onHoverEnd={()=> setActiveItem(null)}
          >
            <span className='flex items-center justify-center text-sm md:text-base relative py-2 px-4 z-10 text-black transition-color duration-200 hover:text-white'>
              {item}

             {/* Animated Hover Effect  */}
            <motion.span 
            className="absolute inset-0 bg-red-500 rounded-full -z-10"
            initial={{scale: 0}}
            animate={{scale: activeItem === lowerCaseItem ? 1 : 0}}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
            }}
            ></motion.span>
            </span>
          </motion.a>
        )
      })}
    </nav>
  )
}

export default Menu