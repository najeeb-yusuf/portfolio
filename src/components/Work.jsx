import React from 'react';
import { MotionWrap } from './wrapper';

import {Plus} from 'react-feather';

const Work = () => {
    const qrattendance = require('../assets/projects/qrattendance.jpg')
    const blog = require('../assets/projects/blog.jpg')
    const dima = require('../assets/projects/dima.jpg')
    const erpapi = require('../assets/projects/erpapi.jpg')
    const minesweeper = require('../assets/projects/minesweeper.jpg')
  return (
    <div className='h-screen w-screen bg-slate-900 flex flex-col justify-center place-items-center gap-4 pl-10 pt-16 pb-2  font-main'>
      <div className='relative  w-48'>
          <h3 className='text-white text-2xl uppercase after:block after:absolute after:w-20 after:h-4 after:border-t-2 after:border-white after:right-0 after:top-1/2'>Work </h3>
      </div>
      <ul className='text-white hidden md:flex list-none uppercase gap-4 sm:gap-10 no-underline pl-6 mb-8'>
        <li className=''><a href="temp" className='hover:text-yellow-400 text-yellow-400'>All</a></li>
        <li className=''><a href="temp" className='hover:text-yellow-400'>Web design</a> </li>
        <li className=''><a href="temp" className='hover:text-yellow-400'>Database design</a> </li>
        <li className=''><a href="temp" className='hover:text-yellow-400'>AI and machine learning</a></li>
      </ul>

        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white outline outline-1 outline-yellow-400 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex md:hidden items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">All <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
        </svg></button>
        <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Web design</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Database design</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">AI and machine learning</a>
            </li>
            </ul>
        </div>

      <div className="images grid xl:grid-cols-4  lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-4/5 overflow-scroll ">
        <div className='card | w-full h-48 relative rounded-2xl overflow-hidden bg-qr-attendance bg-cover grid items-end after:block after:bg-black after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-50 after:z-10'>
            <div className="content | px-4 pb-2 h-max z-20 bg-gradient-to-t from-black via-gray-900">
                <h5 className='title | text-white uppercase relative w-max py-1 after:block after:h-1 after:mb-1 after:absolute  after:-left-4 after:bg-yellow-400 '> QR attendance</h5>
                <p className='text  | text-xs text-white h-11 '>This was a collab with <i >khalifa </i>. It is built in flask using a PostgreSQL database <a href="none" className='text-[10px] text-yellow-400'>more</a></p>
            </div>
        </div>
 
        <div className='card | w-full h-48 relative rounded-2xl overflow-hidden bg-blog bg-cover grid items-end after:block after:bg-black after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-50 after:z-10'>
            <div className="content | px-4 pb-2 h-max z-20 bg-gradient-to-t from-black via-gray-900">
                <h5 className='title | text-white uppercase relative w-max py-1 after:block after:h-1 after:mb-1 after:absolute  after:-left-4 after:bg-yellow-400 '> Simple blog</h5>
                <p className='text  | text-xs text-white h-11 '>A blog with an sqlite database made for a friend <a href="none" className='text-[10px] text-yellow-400'>more</a></p>
            </div>
        </div>
        <div className='card | w-full h-48 relative rounded-2xl overflow-hidden bg-dima bg-cover grid items-end after:block after:bg-black after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-50 after:z-10'>
            <div className="content | px-4 pb-2 h-max z-20 bg-gradient-to-t from-black via-gray-900">
                <h5 className='title | text-white uppercase relative w-max py-1 after:block after:h-1 after:mb-1 after:absolute  after:-left-4 after:bg-yellow-400 '> Dima Quiz</h5>
                <p className='text  | text-xs text-white h-11 '>A questionnaire built in english and portugese using bootstrap and Django <a href="none" className='text-[10px] text-yellow-400'>more</a></p>
            </div>
        </div>
        <div className='card | w-full h-48 relative rounded-2xl overflow-hidden bg-api bg-cover grid items-end after:block after:bg-black after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-50 after:z-10'>
            <div className="content | px-4 pb-2 h-max z-20 bg-gradient-to-t from-black via-gray-900">
                <h5 className='title | text-white uppercase relative w-max py-1 after:block after:h-1 after:mb-1 after:absolute  after:-left-4 after:bg-yellow-400 '> ERP API</h5>
                <p className='text  | text-xs text-white h-11 '>This was a collab with <i >Udo, Seun and Mustapha </i>. Made with Django, PostgreSQL and PostgREST <a href="none" className='text-[10px] text-yellow-400'>more</a></p>
            </div>
        </div>
        <div className='card | w-full h-48 relative rounded-2xl overflow-hidden bg-minesweeper bg-cover grid items-end after:block after:bg-black after:absolute after:w-full after:h-full after:top-0 after:left-0 after:opacity-50 after:z-10'>
            <div className="content | px-4 pb-2 h-max z-20 bg-gradient-to-t from-black via-gray-900">
                <h5 className='title | text-white uppercase relative w-max py-1 after:block after:h-1 after:mb-1 after:absolute  after:-left-4 after:bg-yellow-400 '> Minesweeper</h5>
                <p className='text  | text-xs text-white h-11 '>As part of an edX project, I made an AI model which plays the minesweeper game <a href="none" className='text-[10px] text-yellow-400'>more</a></p>
            </div>
        </div>

       </div>
    </div>
  )
}

export default MotionWrap(Work, "")
