import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { GrView } from "react-icons/gr";
import xansite from "../assets/xansite.jpeg"
import movie from "../assets/movie.png"
import toolv from "../assets/toolv.png"
import Reveal from './Reveal'

const projects = [
  {
    img: movie,
    title: "Movie Recommendation Webpage",
    description: "Crafted an interactive movie recommendation hub leveraging Tailwind CSS and JavaScript. This responsive platform offers personalized film suggestions based on user preferences. Elevated user engagement through sleek GSAP animations.",
    links: {
      site: "https://movie-reco-page.vercel.app/",
      github: "https://github.com/DARKINOO/Movie-Rec-page",
    },
  },
  {
    img: toolv,
    title: "ToolVerse",
    description: "Developed a versatile web application using React and Tailwind CSS. This all-in-one platform integrates essential tools including a to-do list, calculator, and dictionary. Leveraged React's component-based architecture for seamless functionality and Tailwind for a sleek, responsive design.",
    links: {
      site: "https://tool-verse.vercel.app/",
      github: "https://github.com/DARKINOO/ToolVerse",
    },
  },
  {
    img: xansite,
    title: "Xananoids Website",
    description: "Designed and developed a responsive website for Xananoids robotics club using HTML, CSS, and JavaScript. Implemented GSAP animations,site showcases the club's activities and achievements, featuring a modern design, To be launched soon",
    links: {
      site: "#projects",
      github: "#projects",
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
          <p className='text-gray-600 text-[17px] font-medium dark:text-gray-300 mb-4'>{project.description}</p>
          <div className="flex space-x-4">
            <a href={project.links.site} className='px-4 py-3 text-md bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 hover:scale-110 transition duration-300' ><GrView /></a>
            <a href={project.links.github} className='px-4 py-3 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 hover:scale-110 transition duration-300 text-center' ><AiFillGithub className='text-[18px]'/></a>
          </div>
          </div>
        </div>
        </Reveal>
      ))}
    </div>
    <hr className='m-[20px] dark:border-white'/>
    </>
  )
}

export default Portfolio