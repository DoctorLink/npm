import { useState, useEffect, MutableRefObject } from 'react';
import { TraversalState } from '../Models/State';

export const useTraversalScroll = function(
  traversalState: TraversalState,
  ref?: MutableRefObject<any>
) {
  const offset: number = (ref && ref.current && ref.current.offsetTop) || 0;
  const [scrolling, setScrolling] = useState(false);
  const [traversalScrollState, setValue] = useState<TraversalState>();

  useEffect(() => {
    const checkScroll = () => {
      if (window.pageYOffset <= offset && scrolling) {
        setScrolling(false);
      }
    };
    if (!scrolling) {
      setValue(traversalState);
    }
    if (
      traversalScrollState &&
      traversalScrollState.loading &&
      window.pageYOffset > offset
    ) {
      setScrolling(true);
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [traversalState, traversalScrollState, scrolling, offset]);

  return traversalScrollState || traversalState;
};
