import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far down the user has scrolled
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // If there's no scrollable area, keep it at 0
      if (totalHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call in case the page is already scrolled on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}
