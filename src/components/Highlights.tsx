import React from 'react';
import Highlight from './Highlight';

type HighlightType = {
    title: string;
    description: string;
    image: string; 
}


const Highlights:React.FC<{highlights: HighlightType[]}> = ({highlights}) => {

  return (
    <div className='w-full bg-white flex justify-center items-center h-[504px]'>
      <div className=' w-full px-[24px] md:constant-width md:flex md:mx-5 lg:mx-auto md:flex-col  max-w-[1136px]'>
        <p className='mb-[24px] md:px-0 sub-heading'>Highlights</p>
        <div className='h-[360px] overflow-auto scrollbar-hide md:px-0 w-full'>
        <div className='flex justify-between w-[1000px] md:w-full gap-3'>
          {highlights.map(highlight => <Highlight highlight={highlight} key={highlight.title}/>)}
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Highlights