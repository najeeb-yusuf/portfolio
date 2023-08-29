import React from 'react'
import { MotionWrap } from '../wrapper';

const Info = () => {
    return (
        <>
            <img src={require('../icons/najeeb.jpeg')} alt="" className="center-image w-64 rounded-full" />
            <div className="pt-3 mt-3 ">
                <p className="text-yellow-400 font-secondary text-center text-5xl my-3">Najeeb Yusuf</p>
                <div className="flex h-16 font-tertiary pl-10 justify-between items-center text-xl">
                    <span className=" text-white shrink-0">I'm a </span>
                    <ul className=" text-yellow-400 list-none ml-3 overflow-hidden leading-8 h-8">
                        <li className=""><span className="relative after:absolute after:h-full after:border-l-2 after:left-0 after:bottom-0 after:animate-type after:border-yellow-800 after:w-full after:bg-slate-900 top-0 animate-slide">Web developer</span></li>
                        <li className=""><span className="relative after:absolute after:h-full after:border-l-2 after:left-0 after:bottom-0 after:animate-type after:border-yellow-800 after:w-full after:bg-slate-900 top-0 animate-slide">Mobile App Developer</span></li>
                        <li className=""><span className="relative after:absolute after:h-full after:border-l-2 after:left-0 after:bottom-0 after:animate-type after:border-yellow-800 after:w-full after:bg-slate-900 top-0 animate-slide">Backend Engineer</span></li>
                        <li className=""><span className="relative after:absolute after:h-full after:border-l-2 after:left-0 after:bottom-0 after:animate-type after:border-yellow-800 after:w-full after:bg-slate-900 top-0 animate-slide">Database designer</span></li>
                        <li className=""><span className="relative after:absolute after:h-full after:border-l-2 after:left-0 after:bottom-0 after:animate-type after:border-yellow-800 after:w-full after:bg-slate-900 top-0 animate-slide">Tech consultant</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default MotionWrap(Info, "flex flex-col grow place-items-center px-8")
