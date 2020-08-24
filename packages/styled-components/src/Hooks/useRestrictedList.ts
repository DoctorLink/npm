import { useToggle } from './useToggle';
import { useMemo } from 'react';

export interface UseRestrictedListResult<T> {
  isRestricted: boolean;
  restrictedItems: T[];
  showAll: boolean;
  toggleShowAll: () => void;
}

export function useRestrictedList<T>(
  items: T[],
  limit: number | undefined
): UseRestrictedListResult<T> {
  const numberToShow = limit ?? items.length;
  const isRestricted = limit !== undefined && items.length > limit;

  const [showAll, toggleShowAll] = useToggle(false);

  const restrictedItems = useMemo(
    () => (showAll ? items : items.slice(0, numberToShow)),
    [items, showAll, numberToShow]
  );

  return { isRestricted, restrictedItems, showAll, toggleShowAll };
}
