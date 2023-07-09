import React from 'react'
import { Instagram, GitHub, Linkedin, Twitter } from "react-feather";
import { MotionWrap } from '../wrapper';

const Sidebar = () => {
    return (
        <>
                <div className="rounded-full bg-gray-600 w-auto p-1 transition ease-in-out hover:scale-110 duration-300">
                    <Instagram size="20" color="white" />
                </div>
                <div className="rounded-full bg-gray-600 w-auto p-1 transition ease-in-out hover:scale-110 duration-300">
                    <GitHub size="20" color="white" />
                </div>
                <div className="rounded-full bg-gray-600  w-auto p-1 transition ease-in-out hover:scale-110 duration-300">
                    <Linkedin size="20" color="white" />
                </div>
                <div className="rounded-full w-auto bg-gray-600 p-1 transition ease-in-out hover:scale-110 duration-300">
                    <Twitter size="20" color="white" />
                </div>
                <div className="border-l-2 border-yellow-500 h-40 ml-3"></div>
                <div className="vertical uppercase text-white h-auto w-auto rotate-180"> scroll down</div>
        </>
    )
}

export default MotionWrap(Sidebar, 'fixed flex flex-col gap-8')
