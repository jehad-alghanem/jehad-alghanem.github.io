import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(strings, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentString = strings[stringIndex];

    if (!isDeleting) {
      setDisplayText(currentString.substring(0, charIndex + 1));
      setCharIndex(prev => prev + 1);

      if (charIndex + 1 === currentString.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentString.substring(0, charIndex - 1));
      setCharIndex(prev => prev - 1);

      if (charIndex - 1 === 0) {
        setIsDeleting(false);
        setStringIndex(prev => (prev + 1) % strings.length);
        return;
      }
    }
  }, [strings, stringIndex, charIndex, isDeleting, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return displayText;
}
