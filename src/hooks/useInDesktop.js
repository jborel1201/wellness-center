import { useState, useEffect } from 'react';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth > parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-medium'))
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(
        window.innerWidth > parseInt(getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-medium'))
      );
    };

    window.addEventListener('resize', handleResize);

    // Supprimez le gestionnaire d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktop;
};

export default useIsDesktop;
