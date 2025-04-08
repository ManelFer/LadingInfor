// hooks/useSmoothScroll.ts
import { useEffect } from 'react';

const useSmoothScroll = () => {
  useEffect(() => {
    // Adiciona smooth scroll para links âncora
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = targetId ? document.querySelector(targetId) : null;
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};

export default useSmoothScroll;