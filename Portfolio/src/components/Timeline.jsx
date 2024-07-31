import React, { useState, useEffect, useRef } from 'react';

const timelineData = [
  {
    date: '2020-2022',
    title: 'Vidyathali Public School',
    description: 'Pursued 10th & 12th in CBSE Boards from VPS Jaipur, scoring 91% & 92% respectively.',
  },
  {
    date: '2022-2026',
    title: 'Jaipur Engineering College and Research Centre',
    description: 'Pursuing a B.Tech in Artificial Intelligence & Data Science at JECRC Foundation.',
  },
  {
    date: '2023',
    title: 'Xananoids',
    description: 'Leading web development initiatives at Xananoids, the robotics club of our college.',
  },
  {
    date: '2024',
    title: 'Caedmate',
    description: 'Gaining hands-on experience in React and dynamic development through an internship at Caedmate.',
  },
];

const TimelineItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-8`}>
      <div className={`w-[50vw] md:w-5/12 ${isEven ? 'text-right pl-3 md:pr-8' : 'text-left pr-3 md:pl-8'}`}>
        <div className="bg-purple-100 dark:bg-purple-600 p-4 rounded shadow hover:scale-110 duration-300 ease-out">
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </div>
      <div className="w-2/12 flex justify-center">
        <div className="w-4 md:h-4 bg-blue-500 ml-0.5 rounded-full z-10" />
      </div>
      <div className={`w-5/12 ${isEven ? 'text-left pl-8' : 'text-right pr-8'}`}>
        <p className="text-sm font-semibold">{item.date}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  const ref = useRef(null);

  return (
    <>
    <div ref={ref} className="max-w-4xl mx-auto py-12 relative">
      <h2 className="timeline text-3xl font-bold text-center mb-12
      ">Education</h2>
      <div className="absolute left-1/2 top-32 md:h-[100vh] h-[128vh] bottom-0 w-0.5 bg-gray-300" />
      {timelineData.map((item, index) => (
        <TimelineItem 
          key={index} 
          item={item} 
          index={index}
        />
      ))}
    </div>
    <hr className='m-[1px] mx-5 dark:border-white'/>
    </>
  );
};

export default Timeline;
