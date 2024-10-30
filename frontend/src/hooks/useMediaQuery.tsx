import { useEffect, useState } from "react";

export function useMediaQuery(media : string){

const [isMatched, setIsMatched] = useState(false);

useEffect(() => {
  const mediaQuery = window.matchMedia(media);
  const handleMediaQueryChange = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setIsMatched(e.matches);

  setIsMatched(mediaQuery.matches);

  mediaQuery.addEventListener('change', handleMediaQueryChange);

  return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
}, []);
 
  return isMatched;
}