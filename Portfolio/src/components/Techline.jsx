import React, { useEffect, useState } from 'react';
import './Techline.css'; // Make sure to import your CSS file
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiNodejsSmall,
    DiReact,
} from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";


const Timeline = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % 10); // Adjust based on the number of items
        }, 6000); // Adjust interval duration as needed

        return () => clearInterval(interval);
    }, []);

    const achievements = [
        { title: 'HTML', status: <DiHtml5 className='text-orange-600 mx-2 '/>, description: 'A markup language that structures web content, defining elements like headings, paragraphs, and links.' },
        { title: 'Css', status: <DiCss3 className='text-blue-600 mx-2 '/>, description: 'A stylesheet language that styles web content, controlling layouts, colors, fonts, and responsive design.' },
        { title: 'JavaScript', status: <DiJavascript1  className='text-yellow-500 mx-2 '/>, description: 'A high-level, dynamic programming language that is widely used for web development.' },
        { title: 'Tailwind CSS', status: <RiTailwindCssFill className='text-blue-400 mx-2 '/>, description: 'A utility-first CSS framework for creating custom designs quickly and efficiently.' },
        { title: 'React', status: <DiReact className='text-blue-500 mx-2 '/>, description: 'A JavaScript library for building user interfaces, maintained by Facebook and a community of developers.' },
        { title: 'Node.js', status: <DiNodejsSmall className='text-green-500 mx-2 ' />, description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine that helps in building scalable network applications.' }
    ];

    return (
        <>
        
        <div className="timeline">
            {achievements.map((achievement, index) => (
                <div
                    key={index}
                    className={`container ${index % 2 === 0 ? 'left-container' : 'right-container'} ${index <= visibleIndex ? 'show' : ''}`}
                >
                    <div className="text-box">
                        <div className="img flex flex-row  gap-[20vw] md:gap-10">
                        <h2>{achievement.title}</h2>
                        <small className='text-4xl'>{achievement.status}</small>
                        </div>
                        <p>{achievement.description}</p>
                        <span className={`${index % 2 === 0 ? 'left-container-arrow' : 'right-container-arrow'}`}></span>
                    </div>
                </div>
            ))}
        </div>
        <hr className='m-[20px] dark:border-white'/>
        </>
    );
};

export default Timeline;
