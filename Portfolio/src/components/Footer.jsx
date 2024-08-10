import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'
import dp from '/src/assets/dp.jpeg'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='max-w-screen mx-auto flex flex-col items-center md:flex-row justify-between p-6 text-sm'>
        <div className='space-y-4'>
          <div className="dp flex flex-row items-center gap-[15vw] md:gap-[20vw]">
            <div className="left hidden md:flex flex-col gap-3"> 
            <h3 className='hidden md:flex md:text-2xl text-slate-700 dark:text-gray-200 font-semibold text-center md:text-left'>Yash Jain</h3>
              <div className='hidden md:flex flex-row gap-6 text-slate-700 dark:text-gray-400 text-2xl md:text-4xl mx-[20vw] md:mx-0'>
                <a href="https://github.com/DARKINOO" className='hover:scale-125 duration-300 ease-in-out hover:text-purple-500 '><FaGithub/></a>
                <a href="https://www.instagram.com/beingzyash?igsh=M245YWJlYTQ5anNy" className='hover:scale-125 duration-300 ease-in-out hover:text-purple-500 '><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/yash-jain-38552828a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8WOMCZPoSCye%2FskDAlzSkQ%3D%3D" className='hover:scale-125 duration-300 ease-in-out hover:text-purple-500 '><FaLinkedin/></a>
                <a href="mailto:yashjain11sci@gmail.com" className='hover:scale-125 duration-300 ease-in-out hover:text-purple-500 '><FaEnvelope/></a>
              </div>
            </div>
            <div className="links">
            <ul className='grid grid-cols-2 gap-x-16 z-10 cursor-pointer'>
                        <li className='py-[4px] md:text-lg hover:text-purple-500 duration-300 ease-linear'><Link to='skills' smooth={true} offset={50} duration={500}>Skills</Link></li>
                        <li className='py-[4px] md:text-lg hover:text-purple-500 duration-300 ease-linear'><Link to='portfolio' smooth={true} offset={50} duration={500}>Projects</Link></li>
                        <li className='py-[4px] md:text-lg hover:text-purple-500 duration-300 ease-linear'><Link to='timeline' smooth={true} offset={50} duration={500}>Education</Link></li>
                        <li className='py-[4px] md:text-lg hover:text-purple-500 duration-300 ease-linear'><Link to='contact' smooth={true} offset={50} duration={500}>Contact</Link></li>
                        {/* <li className='py-[4px] md:text-lg hover:text-purple-500 duration-300 ease-linear'><a href="https://drive.google.com/file/d/1B_GASHnmLIswSfaAn1T2ZimQdEyWo1hh/view?usp=drive_link">Resume</a></li> */}
                    </ul>
                    </div> 
            <img src={dp} className='md:hidden w-[14vw] h-[7vh] rounded-[50%]' alt="" />
            </div>
            <div className='flex md:hidden flex-row gap-6 text-slate-700 dark:text-gray-400 text-2xl md:text-4xl mx-[20vw] md:mx-0'>
                <a href="https://github.com/DARKINOO" className='hover:scale-125 duration-300 ease-in-out hover:text-purple-500 '><FaGithub/></a>
                <a href="https://www.instagram.com/beingzyash?igsh=M245YWJlYTQ5anNy" className='hover:scale-125 duration-300 ease-in-out hover:text-purple-500 '><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/yash-jain-38552828a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8WOMCZPoSCye%2FskDAlzSkQ%3D%3D" className='hover:scale-125 duration-300 ease-in-out hover:text-purple-500 '><FaLinkedin/></a>
                <a href="mailto:yashjain11sci@gmail.com" className='hover:scale-125 duration-300 ease-in-out hover:text-purple-500 '><FaEnvelope/></a>
            </div>
        </div>
        <div className="right">
          <img className='hidden md:flex w-[16vw] h-[8vh] rounded-[50%] md:w-[5vw] md:h-[10vh] ml-[17vw]' src={dp} alt="" />
        <p className='text-slate-700 dark:text-gray-400 mt-3 text-[16px]'><span className='dark:text-gray-400 text-slate-700 text-[12px] mr-1'>@</span>2024 || Developed & Designed by Yash Jain.</p>
        </div>
    </div>
  )
}

export default Footer