import React from 'react'
import { MotionWrap } from './wrapper';


const Contact = () => {
  return (
    <div className='h-screen bg-stone-900 flex flex-col justify-center place-items-center'>
        <div className="relative w-48 sm:mb-24 mb-4">
            <h3 className='text-white text-2xl uppercase w-max after:block after:absolute after:w-20 after:h-4 after:border-t-2 after:border-white after:right-0 after:top-1/2'>Contact </h3>
        </div>
        <div className="flex flex-col sm:flex-row place-items-center justify-center sm:gap-32 ml-8">
            <div className="w-72 flex flex-col gap-6 ">
                <h1 className='font-secondary text-yellow-400 text-3xl'>Let's talk</h1>
                <p className='text-white font-main'>I'm always open to contribute to fun, impactful and meaningful projects! <br /> If you want to reach me, kindly use this form 
                to send me an email with your details and the proposition. <br /> You can also use the form to send any kind of message or feedback!</p>
            </div>
            <form action='mailto:yusufnajlawal@gmail.com' className="form w-72 h-80 flex flex-col gap-4" method='post' encType='text/plain'>
                <div>
                    <p className='text-white font-main pb-2'>Text</p>
                    <input type="text" className='bg-stone-700 w-72 h-12 rounded-lg border-none text-white ' placeholder='Write your name here' />
                </div>

                <div>
                    <p className='text-white font-main pb-2 '>Email</p>
                    <input type="email" className='bg-stone-700 w-72 h-12 rounded-lg border-none text-white ' placeholder='Enter your email' />
                </div>

                <div>
                    <p className='text-white font-main pb-2 '>Message</p>
                    <textarea className='bg-stone-700 w-72 h-24 rounded-lg border-none text-white' placeholder='Send a message!' />
                </div>
                <button type='submit' value='Send' className='text-black bg-yellow-400 w-max ml-auto p-2 px-4 font-light text-sm rounded-xl'>Send message</button>
            </form>
        </div> 
    </div>
  )
}

export default MotionWrap(Contact, "")
