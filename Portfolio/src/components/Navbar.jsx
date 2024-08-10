// 
import React, { useState, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import music from "../assets/relaxed-vlog-night-street-131746.mp3"
import DarkModeToggle from './DarkModeToggle';
import './Navbar.css'; // Add your CSS file for custom styles
import dp from '/src/assets/dp.jpeg'
 

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const playMusic = () => {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15
            }
        }
    };

    return (
        <>
            <audio ref={audioRef} src = {music} />
            <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
                <div className="max-w-[100vw] mx-auto flex justify-between text-gray-900 font-bold dark:text-gray-100 text-xl items-center px-2 md:px-12 h-20">
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <img className='w-[16vw] h-[8vh] rounded-[50%] md:w-[5vw] md:h-[10vh]' src={dp} alt="" />
                        <a className='mx-5 md:mx-6' href="#">Yash Jain</a>
                     <button onClick={playMusic} className={`vertical-lines-button mr-5 md:mx-5 flex flex-row gap-1  ${playing ? 'bouncing' : ''}`}>
                       <div className="line dark:bg-slate-100"></div>
                       <div className="line dark:bg-slate-100"></div>
                       <div className="line dark:bg-slate-100"></div>
                       <div className="line dark:bg-slate-100"></div>
                     </button>
                        <DarkModeToggle />
                    </div>
                    <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                        <li className='nav-item'><Link to='skills' smooth={true} offset={50} duration={500}>Skills</Link></li>
                        <li className='nav-item'><Link to='portfolio' smooth={true} offset={50} duration={500}>Projects</Link></li>
                        <li className='nav-item'><Link to='timeline' smooth={true} offset={50} duration={500}>Education</Link></li>
                        <li className='nav-item'><Link to='contact' smooth={true} offset={50} duration={500}>Contact</Link></li>
                    </ul>

                    <div onClick={toggleNav} className='md:hidden z-50 dark:text-gray-200'>
                        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                    </div>

                    <motion.div
                        initial={false}
                        animate={nav ? 'open' : 'closed'}
                        variants={menuVariants}
                        className='fixed left-0 top-0 w-full min-h-screen backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80 bg-gray-300 dark:bg-gray-900 z-40'
                    >
                        <ul className='font-semibold text-4xl space-y-8 mt-24 text-center cursor-pointer'>
                            <li className='nav-item'><Link to='skills' onClick={closeNav} smooth={true} offset={50} duration={500}>Skills</Link></li>
                            <li className='nav-item'><Link to='portfolio' onClick={closeNav} smooth={true} offset={50} duration={500}>Projects</Link></li>
                            <li className='nav-item'><Link to='timeline' onClick={closeNav} smooth={true} offset={50} duration={500}>Education</Link></li>
                            <li className='nav-item'><Link to='contact' onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
                            {/* <li className='nav-item'><a href="https://drive.google.com/file/d/1B_GASHnmLIswSfaAn1T2ZimQdEyWo1hh/view?usp=drive_link">Resume</a></li> */}
                        </ul>
                    </motion.div>
                </div>
                <hr className='m-[1px] dark:border-white'/>
            </div>
        </>
    );
};

export default Navbar;
