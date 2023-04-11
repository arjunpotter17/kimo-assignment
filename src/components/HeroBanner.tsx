import React from 'react'



const HeroBanner:React.FC = () => {

  const BannerSrc: string = '../assets/bannerimg.png';
  return (
    <div className='flex justify-center items-center w-full relative h-[30rem] md:h-[35rem]'>
        <div className='w-full absolute top-0 h-[30rem] md:h-[35rem]'>
        <img src={BannerSrc} alt='banner-img' className='w-full h-[30rem] md:h-[35rem] object-cover'/>
        </div>
       
        <div className='flex flex-col justify-center items-center z-20'>
        <p className='banner-text md:text-[90px] xl:text-[140px]'>Welcome</p>
        <p className='banner-text md:text-[90px] xl:text-[140px]'>to Hawaii</p>   
        </div>      
    </div>
  )
}

export default HeroBanner