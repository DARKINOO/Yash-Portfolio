import { useEffect, useState } from 'react';
import { PiSunDuotone } from "react-icons/pi";
import { GiNightSleep } from "react-icons/gi";


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add('transition-all');
      setTimeout(() => {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }, 100); // 2 seconds delay
    } else {
      root.classList.add('transition-all');
      setTimeout(() => {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }, 100); // 2 seconds delay
    }

    return () => {
      root.classList.remove('transition-all');
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full focus:outline-none bg-transparent dark:bg-transparent"
    >
       {darkMode ? <PiSunDuotone/> : <GiNightSleep/>} 
    </button>
  );
};

export default DarkModeToggle;