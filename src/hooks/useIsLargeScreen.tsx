import { useEffect, useState } from "react";

export const useIsLargeScreen = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
  
    useEffect(() => {
      if (typeof window === "undefined") return;
  
      const checkScreenSize = () => {
        setIsLargeScreen(window.matchMedia("(min-width: 1024px)").matches);
      };
  
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
  
    return isLargeScreen;
  }; 