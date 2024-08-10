import React from 'react'
import Reveal from './Reveal';
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
    DiBootstrap,
    DiMongodb,
    DiGithubBadge,
    DiJavascript,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiCplusplus } from "react-icons/si";
import { DiJava } from "react-icons/di";

const skills = [
    {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-700' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-700' /> },
      { name: 'Tailwind', icon: <RiTailwindCssFill className='text-blue-300'/> },
      { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-400' /> },
      { name: 'React', icon: <DiReact className='text-blue-800' /> },
    ]
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node Js', icon: <DiNodejsSmall className='text-green-600' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'React', icon: <DiReact className='text-blue-800' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
    ]
  }
]

const Skills = () => {
  return (
    <>
    <div className="md:max-w-[950px] mx-auto flex flex-col justify-center px-8 text-gray-700 dark:text-gray-200 pb-8 md:py-12" id="skills">
        <Reveal>
        <h2 className='text-3xl font-bold mb-4 py-4 text-center'>Skills</h2>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 ">
            {skills.map((skill, index) => (
                <div key={index} className='border border-black dark:border-white p-6 rounded-lg bg-gray-900/5 dark:bg-slate-900/20 shadow-lg w-full md:w-[270px] hover:scale-y-125 duration-100 ease-linear'>
                    <h3 className='text-xl font-bold mb-4 text-center'>{skill.category}</h3>
                    <div className='grid grid-cols-2 gap-4'>
                        {skill.technologies.map((tech, idx)=>(
                            <div key={idx} className='flex items-center space-x-2'>
                                <span className='text-2xl'>{tech.icon}</span>
                                <span className='text-gray-700 dark:text-slate-300'>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <div className='border border-black dark:border-white p-6 rounded-lg bg-gray-900/5 dark:bg-slate-900/20 shadow-lg w-full md:w-[270px] hover:scale-y-125 duration-100 ease-linear'>
            <h3 className='text-xl font-bold mb-4 text-center'>Languages</h3>
            <div className='grid grid-cols-2 gap-4 items-center'>
              <div className="flex gap-3"><span className='text-2xl dark:text-slate-300 text-slate-700'><SiCplusplus /></span>
              <span className='text-gray-700 dark:text-slate-300'>C++</span>
              </div>

              <div className="flex gap-3">
              <span className='text-2xl text-orange-900 dark:text-orange-600'><DiJava /></span>
              <span className='text-gray-700 dark:text-slate-300'>Java</span>
              </div>

              <div className="flex gap-3">
              <span className='text-2xl text-yellow-400'><DiJavascript1 /></span>
                                <span className='text-gray-700 dark:text-slate-300'>JavaScript</span>
              </div>
                                
                               
                </div>
            </div>
        </div>
        </Reveal>
        
    </div>
    <hr className='m-[20px] dark:border-white'/>
    </>
  )
}

export default Skills