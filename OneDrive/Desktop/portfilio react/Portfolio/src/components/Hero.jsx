import React from 'react';
import ShinyEffect from './ShinyEffect';
import { TypeAnimation } from "react-type-animation";
import {
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineMail,
} from "react-icons/ai";
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';  



const Hero = () => {

  return (
    <>
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50}}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once:true }}
            transition={{ duration: 1}}
            >
                
                <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                viewport={{ once:true }}
                transition={{ duration: 1, delay: 0.5}}
                className="dark:text-gray-200 md:text-4xl text-2xl tracking-tight mb-4" id='int'>
                    Hey, I am <br />
                    <span className='dark:text-purple-500 md:text-7xl mt-2 text-4xl' id='int2'>Yash Jain</span>
                </motion.p>
                <TypeAnimation
                   sequence={[
                    "Frontend Dev",
                    1000,
                    "Web Designer",
                    1000,
                    "Writer",
                    1000
                   ]}
                   speed={50}
                   repeat={Infinity}
                   className='font-bold text-xl dark:text-gray-400 md:text-5xl italic mb-4'
                />
               

                <motion.p
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1 }}
                viewport={{ once:true }}
                transition={{ duration: 1, delay: 1}}
                className="dark:text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mt-4 mb-6">
                    I am a passionate frontend developer aspiring to be Full stack web developer.

                </motion.p>

                <motion.div
                 initial={{ opacity: 0, y: 50}}
                 whileInView={{ opacity: 1, y:0 }}
                 viewport={{ once:true }}
                 transition={{ duration: 1, delay: 1.5}}
                 className='flex flex-row items-center gap-6 my-4 md:mb-0'
                >
                    <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"}}
                      className='z-10 cursor-pointer font-bold text-slate-800 dark:text-gray-200 md:w-auto p-4 border border-purple-900 dark:border-purple-400 rounded-xl'
                    ><a href="https://1drv.ms/w/c/b4660f7142e86014/Ef9Ya-CgVhxEtFOXXgzpED4BKJKBPTubduq-AAWj54_eDA?e=AuPKd2">Resume</a>
                    </motion.button>

                    <div className='flex text-[27px] md:text-4xl gap-6 flex-row  text-purple-900 dark:text-purple-400 z-20'>
                        <motion.a className='dark:text-4xl' whileHover={{ scale: 1.2 }} href="https://github.com/DARKINOO">
                            <AiOutlineGithub/>
                        </motion.a>
                        <motion.a className='dark:text-4xl' whileHover={{ scale: 1.2 }} href="https://www.instagram.com/beingzyash?igsh=M245YWJlYTQ5anNy">
                            <AiOutlineInstagram/>
                        </motion.a>
                        <motion.a className='dark:text-4xl' whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/yash-jain-38552828a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6CTkIyurTW%2BF4jPZs8ARTA%3D%3D">
                            <AiOutlineLinkedin/>
                        </motion.a>
                        <motion.a className='dark:text-4xl' whileHover={{ scale: 1.2 }} href="mailto:yashjain11sci@gmail.com">
                            <AiOutlineMail/>
                        </motion.a>

                    </div>
                </motion.div>    
            </motion.div>

            <motion.img
              src={'https://media.licdn.com/dms/image/D5603AQFkCESriPkZWw/profile-displayphoto-shrink_800_800/0/1721652082579?e=1727308800&v=beta&t=lhyW4xKRL_pFSD2ym2-vbxU8jtX7DhcjBu0FHRAbMMQ'}
              className='w-[300px] md:w-[450px] rounded-[50%]'
              initial={{ opacity: 0, scale:0.8}}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once:true }}
              transition={{ duration: 1}} 
            />
        </div>

        <motion.div
         initial={{ opacity: 0}}
         whileInView={{ opacity: 1 }}
         viewport={{ once:true }}
         transition={{ duration: 1, delay: 2}} 
         className='flex flex-col gap-2 md:flex-row text-7xl px-12 cursor-pointer md:px-0 w-full justify-center items-center py-24 '
        >
        <p className='text-slate-900 font-bold dark:text-gray-200 md:mr-6 my-6'>My Tech Stack</p>
        <div className="grid grid-cols-2 gap-2 hover:scale-110 md:flex flex-row">
        <DiHtml5 className='text-orange-600 mx-2 icon'/>
        <DiCss3 className='text-blue-600 mx-2 icon'/>
        <DiJavascript1 className='text-yellow-500 mx-2 icon'/>
        <DiReact className='text-blue-500 mx-2 icon'/>
        <RiTailwindCssFill className='text-blue-400 mx-2 icon' />
        <DiNodejsSmall className='text-green-500 mx-2 icon'/>
        </div>
        </motion.div>

        <div className='absolute inset-0 hidden md:block'>
            <ShinyEffect left={0} top={0} size={1000} />
        </div>
    </div>
    </>
  )
}

export default Hero