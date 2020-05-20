export const POPULATE_MODAL = 'POPULATE_MODAL';
export const populateModal = (content: string, title: string): ModalAction => ({
  type: POPULATE_MODAL,
  content,
  title,
});

export const CLOSE_MODAL = 'CLOSE_MODAL';
export const closeModal = (): ModalAction => ({ type: CLOSE_MODAL });

export type ModalAction =
  | { type: typeof POPULATE_MODAL; content: string; title: string }
  | { type: typeof CLOSE_MODAL };
