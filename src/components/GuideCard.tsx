import React from 'react'


type GuideType = {
  name: string,
  guideSince: string,
  profilePic: string
}

const GuideCard: React.FC<{ guide: GuideType }> = ({ guide }) => {
  const guideSrc: string = ''
  return (
    <div className='flex flex-col bg-white rounded-[8px] border border-[rgba(0, 128, 128, 1)] h-[176px] justify-between max-w-[560px]'>
      <div className='flex justify-between p-[24px]'>
        <div className='flex flex-col min-h-full justify-between gap-5'>
          <div>
            <p className='guide-name mb-[8px]'>{guide.name}</p>
            <p className='category-title'>Guide Since {guide.guideSince}</p>
          </div>
          <button className='button-rev hover:button-rev-hover'>Contact</button>
        </div>
        <div className='rounded-[50%] w-[74px] h-[74px] lg:w-[128px] lg:h-[128px]'>
          <img src={guide.profilePic} alt='guide-profile-pic' />
        </div>
      </div>
    </div>
  )
}

export default GuideCard