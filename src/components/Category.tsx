import React from 'react'
import { useState } from 'react'
import { CategoryType } from '@/utils'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import Link from 'next/link'


  const Category:React.FC<{category: CategoryType}> = ({category}) => {
    const [dropDown, setdropDown] = useState(false)

    const handleToggle = () =>{
        setdropDown(!dropDown)
    }

  

    
  return (
    <div className='flex flex-col justify-between items-center p-[24px] gap-[10px] w-full min-h-[68px] bg-white rounded-[8px] transition-all ease-in-out duration-300'>
        <div className='flex justify-between items-center w-full' >
        <p className='category-title'>{category.name}</p>
        <p onClick={handleToggle} className='hover:cursor-pointer'><BsFillArrowRightCircleFill/></p>
        </div>
        {dropDown &&
        <div className="flex flex-col" x-show="show">
            {category.activities.map(activity => {return(<p className='py-3' key={activity.title}>{activity.title}<hr></hr></p>)})}
            <Link href='/'><button className='mt-4 p-1 self-end button-rev hover:button-rev-hover'>More</button></Link>
        </div>
        }
    </div>
  )
}

export default Category