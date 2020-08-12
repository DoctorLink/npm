import React, { ComponentType } from 'react';
import { CheckboxProps } from '../../../Components/Checkbox';
import { ToggleCheckboxCallback } from '../TraversalCallbacks';

export interface TraversalCheckboxProps {
  Comp: ComponentType<CheckboxProps>;
  answerId: string;
  checked: boolean | undefined;
  siblingIds: string[];
  action: ToggleCheckboxCallback;
}

export const TraversalCheckbox: React.FC<TraversalCheckboxProps> = ({
  Comp,
  answerId,
  checked,
  siblingIds,
  action,
}) => (
  <Comp
    id={answerId}
    checked={checked}
    onChange={(e: any) => action(e, answerId, siblingIds)}
  />
);
