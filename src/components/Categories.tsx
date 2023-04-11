import React from 'react'
import GuideCard from './GuideCard'
import Category from './Category'
import { CategoryType } from '@/utils'
import { guideDetails } from '@/utils'



const Categories:React.FC<{categories: CategoryType[]}> = ({categories}) => {
  return (
    <div className='flex flex-col md:flex-row justify-center md:gap-[32px] px-[24px] py-9 bg-[#E6F2F2] w-full'>
      <div className='flex flex-col w-full max-w-[544px]'>
        <p className='my-5 sub-heading'>Categories</p>
        <div className='flex flex-col gap-2'>
          {categories.map(category => <Category category={category} key={category.name}/>)}
        </div>
      </div>
      <div className='w-full max-w-[560px]'>
        <p className='my-9 md:my-5 sub-heading'>Travel Guide</p>
        <div>
          {guideDetails.map(guide => <GuideCard guide={guide} key={guide.name}/>)}
        </div>
      </div>
    </div>
  )
}

export default Categories