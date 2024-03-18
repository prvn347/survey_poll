import  { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

 
  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded-full font-merat font-semibold ${
        darkMode ? 'bg-yellow-400' : 'bg-black'
      } ${
        darkMode ? 'text-gray-900' : 'text-white'
      } transition-colors duration-200`}
    >
      {darkMode ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeSwitcher;