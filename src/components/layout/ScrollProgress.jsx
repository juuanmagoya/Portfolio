import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="scrollProgress" 
      className="fixed top-0 left-0 h-1 bg-linear-to-r from-primary via-accent to-secondary z-40 transition-all duration-300"
      style={{ width: `${width}%` }}
    />
  );
};

export default ScrollProgress;