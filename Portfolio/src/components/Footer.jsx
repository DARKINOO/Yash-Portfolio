import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-screen mx-auto flex flex-col items-center md:flex-row justify-between p-6 text-sm'>
        <div className='space-y-4'>
            <h3 className='text-2xl text-slate-700 dark:text-gray-200 font-semibold text-center md:text-left'>Yash Jain</h3>
            <div className='flex flex-row gap-6 text-slate-700 dark:text-gray-400 text-2xl md:text-4xl'>
                <a href="https://github.com/DARKINOO" className='hover:scale-125 duration-100 ease-in-out'><FaGithub/></a>
                <a href="https://www.instagram.com/beingzyash?igsh=M245YWJlYTQ5anNy" className='hover:scale-125 duration-100 ease-in-out'><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/yash-jain-38552828a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8WOMCZPoSCye%2FskDAlzSkQ%3D%3D" className='hover:scale-125 duration-100 ease-in-out'><FaLinkedin/></a>
                <a href="mailto:yashjain11sci@gmail.com" className='hover:scale-125 duration-100 ease-in-out'><FaEnvelope/></a>
            </div>

        </div>

        <p className='text-slate-700 dark:text-gray-400 mt-5 md:mt-16'>@2024 || Developed by Yash Jain</p>
        
    </div>
  )
}

export default Footer