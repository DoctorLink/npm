import {
  LABELS_SET,
  LABELS_RESTORE_DEFAULT,
  LabelsAction,
} from '../../Actions';
import { defaultLabels } from '../../Constants';
import { Labels } from 'Models';

const labels = (state = defaultLabels, action: LabelsAction): Labels => {
  switch (action.type) {
    case LABELS_SET:
      return action.labels;
    case LABELS_RESTORE_DEFAULT:
      return defaultLabels;
    default:
      return state;
  }
};

export default labels;
