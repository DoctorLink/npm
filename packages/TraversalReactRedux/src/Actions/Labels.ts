import { Labels } from '../Models';

export const LABELS_SET = 'LABELS_SET';
export const labelsSet = (labels: Labels) => ({ type: LABELS_SET, labels });

export const LABELS_RESTORE_DEFAULT = 'LABELS_RESTORE_DEFAULT';
export const labelsRestoreDefault = () => ({ type: LABELS_RESTORE_DEFAULT });

export type LabelsAction =
  | { type: typeof LABELS_SET; labels: Labels }
  | { type: typeof LABELS_RESTORE_DEFAULT };
