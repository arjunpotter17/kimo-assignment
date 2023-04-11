import React from 'react'


const Footer = () => {
  const logoSrc: string = '../assets/Aloha-white.png.png';
  return (
    <div className='w-full bg-[#001A1A] h-[80px] flex px-[24px] justify-center'>
      <div className=' flex items-center justify-start w-full max-w-[1136px]'>
            <img src={logoSrc} alt='logo' />
      </div>
    </div>
  )
}

export default Footer