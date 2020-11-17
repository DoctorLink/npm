import { RefObject, useState, useEffect } from 'react';

export function useChatMinHeight<E extends HTMLElement>(
  loading: boolean,
  ref: RefObject<E>
): number {
  const [latestHeight, setLatestHeight] = useState(0);
  const clientHeight = ref.current?.clientHeight;

  // Track the most recent height when not loading
  useEffect(() => {
    if (!loading) {
      setLatestHeight(clientHeight ?? 0);
    }
  }, [loading, clientHeight]);

  // Maintain that height while the next question is loading, to keep the questions in the same place while the answer options are removed from the DOM.
  // Once loaded, set the min height back to 0 to avoid dead space at the bottom (especially if we have jumped back to an earlier question).
  return loading ? latestHeight : 0;
}
