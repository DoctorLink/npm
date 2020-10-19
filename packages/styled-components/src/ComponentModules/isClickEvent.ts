import { SyntheticEvent, MouseEvent } from 'react';

export function isClickEvent<T extends Element>(
  event: SyntheticEvent<T>
): event is MouseEvent<T> {
  return event.type === 'click';
}
