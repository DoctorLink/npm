import { RefObject, useEffect } from 'react';
import usePrevious from './usePrevious';

export const useChatScroll = function <E extends HTMLElement>(
  totalQuestions: number,
  ref: RefObject<E>
): void {
  const prevTotalQuestions = usePrevious(totalQuestions);

  useEffect(() => {
    if (prevTotalQuestions !== totalQuestions) {
      const lastChild = ref.current?.lastElementChild;
      if (lastChild) {
        lastChild.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [ref, totalQuestions, prevTotalQuestions]);
};
