import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-oro rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{ 
          transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
          transition: 'transform 0.15s ease-out, width 0.2s, height 0.2s'
        }}
      />
      <div 
        className="fixed top-0 left-0 w-9 h-9 border-[1.5px] border-oro rounded-full pointer-events-none z-[99998] opacity-60"
        style={{ 
          transform: `translate(${position.x - 18}px, ${position.y - 18}px)`,
          transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.3s'
        }}
      />
    </>
  );
}
