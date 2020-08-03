import { Reducer } from 'redux';
import { POPULATE_MODAL, CLOSE_MODAL, ModalAction } from '../../Actions';
import { ModalState } from '../../Models';

export type ModalReducer = Reducer<ModalState, ModalAction>;

export const modalReducer: ModalReducer = (state = null, action) => {
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

export const modalReducerMapObject = {
  modal: modalReducer,
};
