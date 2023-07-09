import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 right-0 w-full'>

            <div className="flex justify-between font-main">
                <div className='pl-5 text-3xl pt-4'>
                    <span className='text-yellow-500'>&#60;</span>
                    <span className=' text-white'> NAJEEB </span>
                    <span className='text-yellow-500'>/</span>
                    <span className='text-yellow-500'>&#62;</span>
                </div>
                <ul className='text-white hidden sm:flex uppercase justify-end gap-7 px-16 font-main text-sm pt-8'>
                    <li><a href="works" className='border-b-4 hover:border-b-4 border-yellow-500'>Home</a></li>
                    <li><a href="works" className='hover:border-b-4 border-yellow-500'>About</a></li>
                    <li><a href="works" className='hover:border-b-4 border-yellow-500'>Work</a></li>
                    <li><a href="works" className='hover:border-b-4 border-yellow-500'>Blog</a></li>
                    <li><a href="works" className='hover:border-b-4 border-yellow-500'>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
