import React, { ComponentType } from 'react';
import { RadioProps } from '../../../Components/Radio';
import { ToggleRadioCallback } from '../TraversalCallbacks';

export interface TraversalRadioProps {
  Comp: ComponentType<RadioProps>;
  answerId: string;
  checked: boolean | undefined;
  siblingIds: string[];
  action: ToggleRadioCallback;
}

export const TraversalRadio: React.FC<TraversalRadioProps> = ({
  Comp,
  answerId,
  checked,
  siblingIds,
  action,
}) => (
  <Comp
    id={answerId}
    name={answerId.substring(0, answerId.lastIndexOf('_'))}
    checked={checked}
    onChange={() => {}}
    onClick={(e: any) => action(e, answerId, siblingIds, true)}
  />
);
