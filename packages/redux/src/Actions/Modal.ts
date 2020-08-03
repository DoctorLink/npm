import { Action } from 'redux';

export const POPULATE_MODAL = 'POPULATE_MODAL';
export interface PopulateModal extends Action<typeof POPULATE_MODAL> {
  content: string;
  title: string;
}
export const populateModal = (
  content: string,
  title: string
): PopulateModal => ({
  type: POPULATE_MODAL,
  content,
  title,
});

export const CLOSE_MODAL = 'CLOSE_MODAL';
export type CloseModal = Action<typeof CLOSE_MODAL>;
export const closeModal = (): CloseModal => ({ type: CLOSE_MODAL });

export type ModalAction = PopulateModal | CloseModal;
