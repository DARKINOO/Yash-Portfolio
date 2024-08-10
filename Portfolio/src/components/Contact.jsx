import React from 'react'
import Reveal from './Reveal'

const Contact = () => {
  return (
    <>
    <div className='px-4 z-4 max-w-[1000px] overflow-hidden' id='contact'>
        <Reveal>
        <div className="md:w-[50vw]  md:ml-[25vw]">
            <form
                action="https://getform.io/f/blljqrwb"
                method="POST"
                className=" max-w-6xl p-5 md:p-12"
                id="form"
            >
            <h2 className="text-slate-700 dark:text-gray-100 font-bold text-[30px] text-center mb-6">
              Contact Me
            </h2>
            <input
                type="text"
                id="name"
                placeholder="Your Name ..."
                name="name"
                className="mb-2 w-full rounded-md border text-gray-900 border-slate-900 py-2 pl-2 pr-4"
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border text-gray-900 border-slate-900 py-2 pl-2 pr-4"
            />
            <textarea
              name="textarea"
              id="textarea"
              cols="30"
              rows="4"
              placeholder="How can i help you?"
              className="mb-2 w-full rounded-md border text-gray-900 border-slate-900 py-2 pl-2 pr-4"
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-gray-600 hover:bg-slate-800 transition duration-300 ease-linear"
            >
              Send 
            </button>
            
          </form>
        </div>
        </Reveal>
    </div>
    <hr className='m-[1px] dark:border-white'/>
    </>
  )
}

export default Contact