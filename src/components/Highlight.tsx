import React from 'react'
import Link from 'next/link';

type HighlightType = {
    title: string,
    description: string,
    image: string 
}

const Highlight:React.FC<{highlight: HighlightType}> = ({highlight}) => {

    const Icon: string = '../assets/Group 1button.png';
  
  return (
    <Link href={`/highlights/${highlight.title}`}>
    <div className='flex flex-col max-w-[368px] min-w-[300px] h-[340px] rounded-[8px] bg-white box-shadow'>
        <div>
        <img src={highlight.image} alt='highlight-img' className='w-full h-[170px] rounded-t-[8px]'/>
        </div>
        <div className='p-5 flex flex-col justify-between h-full'>
            <p className='card-heading text-xl w-full'>{highlight.title}</p>
            <p className='card-desc'>{highlight.description}</p>
            <button className='justify-self-end self-end'><img src={Icon} alt='button'/></button>
        </div>
    </div>
    </Link>
  )
}

export default Highlight