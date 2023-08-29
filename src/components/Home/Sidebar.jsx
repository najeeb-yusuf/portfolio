import React from 'react'
import { Instagram, GitHub, Linkedin, Twitter } from "react-feather";
import { MotionWrap } from '../wrapper';

const Sidebar = () => {
    return (
        <>
                <a className="rounded-full bg-gray-600 w-auto p-1 transition ease-in-out hover:scale-110 duration-300" href='https://www.instagram.com/najeebyl/' target='_blank'>
                    <Instagram size="20" color="white" />
                </a>
                <a className="rounded-full bg-gray-600 w-auto p-1 transition ease-in-out hover:scale-110 duration-300" href='https://github.com/najeeb-yusuf'  target='_blank'>
                    <GitHub size="20" color="white" />
                </a>
                <a className="rounded-full bg-gray-600  w-auto p-1 transition ease-in-out hover:scale-110 duration-300" href='https://www.linkedin.com/in/najeeb-yusuf/'  target='_blank'>
                    <Linkedin size="20" color="white" />
                </a>
                <a className="rounded-full w-auto bg-gray-600 p-1 transition ease-in-out hover:scale-110 duration-300" href='twitter.com'  target='_blank'>
                    <Twitter size="20" color="white" />
                </a>
                <div className="border-l-2 border-yellow-400 h-40 ml-3"></div>
                <div className="vertical uppercase text-white h-auto w-auto rotate-180"> scroll down</div>
        </>
    )
}

export default MotionWrap(Sidebar, 'fixed flex flex-col gap-8')
