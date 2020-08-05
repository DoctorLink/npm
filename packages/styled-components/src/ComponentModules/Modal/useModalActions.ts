import { useDispatch } from 'react-redux';
import { ModalCallbacks } from './ModalCallbacks';
import { closeModal } from '@doctorlink/traversal-redux';

export const useModalActions = (): ModalCallbacks => {
  const dispatch = useDispatch();
  return {
    close: () => dispatch(closeModal()),
  };
};
