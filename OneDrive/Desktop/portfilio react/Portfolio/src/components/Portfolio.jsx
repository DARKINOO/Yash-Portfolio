import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import xansite from "../assets/xansite.jpeg"
import musicplayer from "../assets/musicplayer.png"
import toolv from "../assets/toolv.png"
import Reveal from './Reveal'

const projects = [
  {
    img: xansite,
    title: "Xananoids Website",
    description: "UI for Club Website using HTML,CSS,JS",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: musicplayer,
    title: "Music Player Webpage",
    description: "Initial Project using JS and React-DOM",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: toolv,
    title: "ToolVerse",
    description: "An React based platform with various tools.",
    links: {
      site: "#",
      github: "#",
    },
  },
]

const Portfolio = () => {
  return (
    <>
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
      <h2 className='text-3xl font-bold dark:text-gray-200 mb-8'>Projects</h2>
      {projects.map((project, index) =>(
        <Reveal>
        <div key={index} className={`flex flex-col md:flex-row ${index % 2 !==0 ? 'md:flex-row-reverse' : ''} mb-12`}>
          <div className='w-full md:w-1/2 p-4'>
            <img src={project.img} alt={project.title}
             className='w-full h-full object-cover rounded-lg shadow-lg
             hover:scale-105 transition duration-300 project'
             />
          </div>
          <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
          <h3 className='text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4'>{project.title}</h3>
          <p className='text-gray-600 font-medium dark:text-gray-300 mb-4'>{project.description}</p>
          <div className="flex space-x-4">
            <a href={project.links.site} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 hover:scale-110 transition duration-300' >View Site</a>
            <a href={project.links.github} className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 hover:scale-110 transition duration-300 text-center' ><AiFillGithub/></a>
          </div>
          </div>
        </div>
        </Reveal>
      ))}
    </div>
    </>
  )
}

export default Portfolio