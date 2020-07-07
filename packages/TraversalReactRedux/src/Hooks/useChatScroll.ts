import { MutableRefObject, useState, useEffect } from 'react';
import usePrevious from './usePrevious';

export const useChatScroll = function(
  loading: boolean,
  totalQuestions: number,
  ref?: MutableRefObject<any>
) {
  const [height, setHeight] = useState(0);
  const [minHeight, setMinHeight] = useState(0);
  const prevHeight = usePrevious(height);
  const prevTotalQuestions = usePrevious(totalQuestions);
  useEffect(() => {
    if (!ref) return;
    if (ref.current && ref.current.clientHeight) {
      setHeight(ref.current.clientHeight);
      if (loading) setMinHeight(prevHeight ?? 0);
    }
    if (prevTotalQuestions !== totalQuestions) {
      const children = ref && ref.current && ref.current.children;
      if (children) {
        const lastChild = children.length > 0 && children[children.length - 1];
        if (lastChild) lastChild.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [loading, ref, totalQuestions, prevTotalQuestions, prevHeight]);

  return minHeight;
};
