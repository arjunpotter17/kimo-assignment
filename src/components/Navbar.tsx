import React from 'react'
import { useState } from 'react';
import MobileNavbar from './MobileNavbar';
import Link from 'next/link';
import { HighlightType } from '@/utils';

const Navbar:React.FC<{highlights: HighlightType[]}> = ({highlights}) => {
 
  const logoSrc: string = '../assets/Aloha.png';
  const MenuSrc: string = '../assets/menu.png';
  const [menuState, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!menuState)
  }

  return (
    <div className='font-IBM-Plexo'>
      {
        <nav className='lg:hidden w-[100vw] flex justify-between px-[24px] items-center bg-white py-5'>
          <Link href='/'>
          <div>
            <img src={logoSrc} alt='logo' />
          </div>
          </Link>
          
          <div>
            <button onClick={toggleMenu}><img src={MenuSrc} alt='hamburger-menu'/></button>
          </div> 
        </nav>
        
      }
      {
        <nav className='hidden max-w-[1136px] px-[24px] navbar absolute bg-white rounded-[12px] lg:flex md:mx-5  lg:mx-auto justify-between items-center'>
          <div className='flex justify-between items-center gap-[80px]'>
            <Link href='/'><img src={logoSrc} alt='logo' /></Link>
            <ul className='flex gap-[40px] menu-item'>
            <Link href='/'><li>Home</li></Link>
              {highlights?.map(highlight =><Link href={`/highlights/${highlight.title}`} key={highlight.title}><li>{highlight.title}</li></Link> )}
            </ul>
          </div>
          <div>
            <button className='button booking-btn hover:button-hover'>Book a trip</button>
          </div>
        </nav>
      }

      {menuState && <MobileNavbar setMenuState = {setMenuState} highlights={highlights}/>}
    </div>
  )
}

export default Navbar