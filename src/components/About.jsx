import React from 'react';
import naj from "../assets/naj.jpg";
import { useState } from 'react';
import { MotionWrap } from './wrapper';

const About = () => {
    return (
        <div className='h-screen bg-stone-900'>
                <div className="font-main ml-12 flex h-full sm:flex-row flex-col gap-16 justify-center">
                    <div className='w-80  min-w-[40%] relative hidden sm:flex items-center justify-end '>
                        <img src={naj} alt="najeeb" className='rounded-3xl w-4/6 -rotate-6  opacity-40' />
                        <img src={naj} alt="najeeb" className='absolute rounded-3xl w-4/6 ' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-10 p-4'>
                        <section className='text-white flex flex-col max-w-2xl gap-2 px-4'>
                            <h3 className='text-2xl'>About</h3>
                            <h2 className='text-yellow-400 font-secondary text-4xl '>Najeeb Yusuf </h2>
                            <p className=''>I am a Software Engineer with a passion for building websites and applications. 
                                I love learning new technologies and creating innovative solutions. 
                                </p>
                        </section>
                        <section className='text-white flex flex-col gap-2 w-full px-4'>
                            <h3 className='text-2xl'> Skills</h3>
                            <ul className='decorated | grid  grid-cols-2 md:grid-cols-3 gap-2 ml-1 list-disc'>
                                <li className="">HTML</li>
                                <li className="">CSS</li>
                                <li className="">Tailwind</li>
                                <li className="">Bootstrap</li>
                                <li className="">React JS</li>
                                <li className="">JavaScript</li>
                                <li className="">Django</li>
                                <li className="">PostgreSQL</li>
                                <li className="">PostgREST</li>
                            </ul>
                        </section>
                    </div>
                </div>
        </div>
    )
}


export default MotionWrap(
    About, ''
    );