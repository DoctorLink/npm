import { POPULATE_MODAL, CLOSE_MODAL } from '../../Actions';

const modal = (state: any = null, action: any) => {
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
