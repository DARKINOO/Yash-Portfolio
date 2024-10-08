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
    const icons = [
        { Icon: DiHtml5, color: 'text-orange-600' },
        { Icon: DiCss3, color: 'text-blue-600' },
        { Icon: DiJavascript1, color: 'text-yellow-500' },
        { Icon: DiReact, color: 'text-blue-500' },
        { Icon: RiTailwindCssFill, color: 'text-blue-400' },
        { Icon: DiNodejsSmall, color: 'text-green-500' },
      ];

  return (
    <>
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center z-50">
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
                className="dark:text-gray-200 md:text-4xl text-2xl tracking-tight mb-4 mt-12" id='int'>
                    Hey, I am <br />
                    <span className='text-slate-800 dark:text-slate-400 md:text-7xl mt-2 text-4xl' id='int2'>Yash Jain</span>
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
                   className='font-bold text-xl text-gray-600 dark:text-gray-400 md:text-5xl italic mb-4'
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
                    {/* <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)"}}
                      className='z-10 cursor-pointer font-bold text-slate-800 dark:text-gray-200 md:w-auto p-4 border border-black dark:border-slate-400 rounded-xl '
                    ><a href="https://drive.google.com/file/d/1B_GASHnmLIswSfaAn1T2ZimQdEyWo1hh/view?usp=drive_link">Resume</a>
                    </motion.button> */}

                    <div className='flex text-[27px] md:text-4xl gap-6 flex-row text-gray-800 dark:text-slate-300 cursor-pointer z-40'>
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
           
           
            <div className="flex flex-col items-center justify-center">
                 <h2 className="text-2xl md:text-4xl font-medium text-gray-600 dark:text-gray-200 mb-44 mt-4">My Tech Stack</h2>
      <div className="relative w-16 h-40 md:w-24 md:h-44 ">
        {icons.map(({ Icon, color }, index) => (
          <div
            key={index}
            className={`absolute w-12 h-12 hover:scale-110 md:w-16 md:h-16 rounded-[10%] flex items-center justify-center ${color} transition-all duration-1000 ease-in-out`}
            style={{
              transform: `rotate(${index * 60}deg) translateY(-120px) rotate(-${index * 60}deg)`,
              animation: `revolve 20s linear infinite`,
              animationDelay: `${-index * (20 / 6)}s`,
            }}
          >
            <Icon className="text-4xl md:text-5xl" />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes revolve {
          from {
            transform: rotate(0deg) translateY(-120px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateY(-120px) rotate(-360deg);
          }
        }
      `}</style>
    </div>
            

            {/* <motion.img
              src={'https://media.licdn.com/dms/image/D5603AQFkCESriPkZWw/profile-displayphoto-shrink_800_800/0/1721652082579?e=1727308800&v=beta&t=lhyW4xKRL_pFSD2ym2-vbxU8jtX7DhcjBu0FHRAbMMQ'}
              className='w-[300px] md:w-[450px] rounded-[50%]'
              initial={{ opacity: 0, scale:0.8}}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once:true }}
              transition={{ duration: 1}} 
            /> */}
        </div>

       

        <div className='absolute inset-0 hidden md:block'>
            <ShinyEffect left={0} top={0} size={1000} />
        </div>
    </div>
    <hr className='m-[1px] mx-5 my-[50px] dark:border-white'/>
    </>
  )
}

export default Hero