import React from 'react';
import {Plus} from 'react-feather';

const Work = () => {
  return (
    <div className='h-screen w-screen bg-slate-900 flex flex-col justify-center place-items-center gap-4 pl-16 pb-24 font-main'>
      <div className='relative  w-48'>
          <h3 className='text-white text-2xl uppercase after:block after:absolute after:w-20 after:h-4 after:border-t-2 after:border-white after:right-0 after:top-1/2'>Work </h3>
      </div>
      <ul className='text-white list-none uppercase flex gap-4 sm:gap-10 no-underline pl-6 mb-8'>
        <li className=''><a href="temp" className='hover:border-b-4 border-b-4 border-yellow-500'>All</a></li>
        <li className=''><a href="temp" className='hover:border-b-4 border-yellow-500'>Web design</a> </li>
        <li className=''><a href="temp" className='hover:border-b-4 border-yellow-500'>Database design</a> </li>
        <li className=''><a href="temp" className='hover:border-b-4 border-yellow-500'>AI and machine learning</a></li>
      </ul>
      <div className="images grid overflow-hidden xl:grid-cols-4 sm:grid-cols-3 grid-cols-2  gap-8  w-3/5">
        <div className='aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-500'></div>
        <div className='aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-500'></div>
        <div className='aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-500'></div>
        <div className='aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-500'></div>
        <div className='aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-500'></div>
        <div className='aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-500'></div>
        <div className='aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-500'></div>
        <div className='aspect-[4/3] w-full rounded-2xl overflow-hidden bg-gray-500 relative'><Plus size="60" color="black" className='absolute top-0 left-0 bottom-0 right-0 m-auto'/></div>
      </div>
    </div>
  )
}

export default Work
