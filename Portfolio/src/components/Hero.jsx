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
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
    DiMongodb,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { motion } from 'framer-motion';  

const Hero = () => {
    const icons = [
        { Icon: DiJavascript1, color: 'text-yellow-500', glowColor: 'shadow-yellow-500/50' },
        { Icon: DiReact, color: 'text-blue-500', glowColor: 'shadow-blue-500/50' },
        { Icon: RiTailwindCssFill, color: 'text-blue-400', glowColor: 'shadow-blue-400/50' },
        { Icon: DiNodejsSmall, color: 'text-green-500', glowColor: 'shadow-green-500/50' },
        { Icon: DiMongodb, color: 'text-green-600', glowColor: 'shadow-green-600/50' },
        { Icon: SiFastapi, color: 'text-teal-500', glowColor: 'shadow-teal-500/50' },
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
                        "Full Stack Dev",
                        1000,
                        "Web Designer",
                        1000,
                        "Aspiring ML Engineer",
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
                       Full Stack Developer | Aspiring Software Engineer | AI/ML Enthusiast.
                    </motion.p>

                    <motion.div
                     initial={{ opacity: 0, y: 50}}
                     whileInView={{ opacity: 1, y:0 }}
                     viewport={{ once:true }}
                     transition={{ duration: 1, delay: 1.5}}
                     className='flex flex-row items-center gap-6 my-4 md:mb-0'
                    >
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
            {icons.map(({ Icon, color, glowColor }, index) => (
              <div
                key={index}
                className={`absolute w-12 h-12 hover:scale-110 md:w-16 md:h-16 rounded-[10%] 
                flex items-center justify-center ${color} transition-all duration-1000 ease-in-out
                bg-black/20 backdrop-blur-sm border border-gray-600/30 shadow-lg ${glowColor}
                hover:shadow-2xl hover:${glowColor.replace('/50', '/80')}`}
                style={{
                  transform: `rotate(${index * 60}deg) translateY(-120px) rotate(-${index * 60}deg)`,
                  animation: `revolve 20s linear infinite`,
                  animationDelay: `${-index * (20 / 6)}s`,
                  boxShadow: `0 0 20px ${color.includes('yellow') ? 'rgba(234, 179, 8, 0.5)' : 
                                       color.includes('blue-500') ? 'rgba(59, 130, 246, 0.5)' :
                                       color.includes('blue-400') ? 'rgba(96, 165, 250, 0.5)' :
                                       color.includes('green-500') ? 'rgba(34, 197, 94, 0.5)' :
                                       color.includes('green-600') ? 'rgba(22, 163, 74, 0.5)' :
                                       color.includes('teal') ? 'rgba(20, 184, 166, 0.5)' : 'rgba(255, 255, 255, 0.2)'}`,
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
