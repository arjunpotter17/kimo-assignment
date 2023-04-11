import React from 'react'


const HeroBanner = () => {
  return (
    <div className='flex justify-center items-center h-[30rem] md:h-[35rem] w-full bg-[url(../../public/assets/Image.png)] bg-no-repeat bg-cover'>
        <div className='flex flex-col justify-center items-center'>
        <p className='banner-text md:text-[90px] xl:text-[140px]'>Welcome</p>
        <p className='banner-text md:text-[90px] xl:text-[140px]'>to Hawaii</p>
       
        </div>
        
    </div>
  )
}

export default HeroBanner