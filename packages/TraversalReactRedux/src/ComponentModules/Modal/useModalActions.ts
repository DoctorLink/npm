import { useDispatch } from 'react-redux';
import * as actions from '../../Actions';
import { ModalCallbacks } from './ModalCallbacks';

export const useModalActions = (): ModalCallbacks => {
  const dispatch = useDispatch();
  return {
    close: () => dispatch(actions.closeModal()),
  };
};
