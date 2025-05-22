import React from 'react'
import Menu from './sub_components/Menu'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-30 py-2 bg-white'>
      <a href="#home" className='flex-shrink-0'>
        <img 
          className='h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 transition-all duration-300' 
          src="/assets/logo.png" 
          alt="Logo: boy with glasses and Santa cap" 
        />
      </a>
      <div className='md:hidden absolute right-4 top-1/2 transform -translate-y-1/2'>
        {/* This empty div reserves space for the hamburger icon */}
      </div>
      <Menu />
    </header>
  )
}

export default Header