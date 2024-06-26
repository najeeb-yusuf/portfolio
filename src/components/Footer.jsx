import React from 'react'

const Footer = () => {
  return (
    <footer className='h-48 bg-yellow-400 place-items-center justify-center text-center font-main'>
        <ul className='justify-center flex sm:gap-16 gap-4 pt-8 font-thin uppercase text-sm'>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
        <h3 className="font-secondary text-3xl my-4">Najeeb Yusuf</h3>
        <p className='font-light text-xs mt-8 text-gray-700'>design by Louna Skylander 2022</p>
    </footer>
  )
}

export default Footer
