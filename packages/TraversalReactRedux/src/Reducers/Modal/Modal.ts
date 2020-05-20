import { POPULATE_MODAL, CLOSE_MODAL, ModalAction } from '../../Actions';
import { ModalState } from 'Models';

const modal = (state: ModalState = null, action: ModalAction): ModalState => {
  switch (action.type) {
    case POPULATE_MODAL:
      return {
        title: action.title,
        content: action.content,
      };
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
};
export default modal;
