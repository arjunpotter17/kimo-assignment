import React from 'react';
import Link from 'next/link';
import { MobileNavbarProps } from '@/utils';

const MobileNavbar:React.FC<MobileNavbarProps> = ({ setMenuState, highlights}) => {


  return (
    <div className='w-[100vw] h-full bg-[rgba(0,0,0,0.7)] border border-red-500 fixed top-0'>
        <div className='bg-white w-[90vw] h-full fixed top-0 right-0 p-[24px] flex flex-col gap-12'>
            <div className='flex justify-end'>
            <button onClick={() => setMenuState(false)}>close</button>
            </div>
            <div>
            <ul className='flex flex-col gap-[40px] menu-item'>
                <Link href='/'><li>Home</li></Link>
                {highlights.map(highlight =><Link href={`/highlights/${highlight.title}`} onClick={() => setMenuState(false)} key={highlight.title}><li>{highlight.title}</li></Link> )}
            </ul>
            </div>
            <div>
            <button className='button booking-btn'>Book a trip</button>
          </div>
        </div>
    </div>
    
  )
}

export default MobileNavbar