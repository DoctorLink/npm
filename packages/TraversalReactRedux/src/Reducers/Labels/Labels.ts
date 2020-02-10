import { LABELS_SET, LABELS_RESTORE_DEFAULT } from '../../Actions';
import { defaultLabels } from '../../Constants';

const labels = (state: any = defaultLabels, action: any) => {
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
