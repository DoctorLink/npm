import React, { ComponentType, InputHTMLAttributes } from 'react';
import { UpdateValueCallback } from '../TraversalCallbacks';

export interface TraversalValueProps {
  Comp: ComponentType<InputHTMLAttributes<HTMLInputElement>>;
  answerId: string;
  value: string | null | undefined;
  siblingIds: string[];
  action: UpdateValueCallback;
}

export const TraversalValue: React.FC<TraversalValueProps> = ({
  Comp,
  answerId,
  value,
  siblingIds,
  action,
}) => (
  <Comp
    value={value || ''}
    onChange={(e: any) => action(answerId, siblingIds, e.target.value)}
  />
);
