import { modalReducer } from '../../src/Reducers/Modal';
import { closeModal, populateModal } from '../../src/Actions/Modal';
import { ModalState } from '@doctorlink/traversal-core';

describe('Modal Reducer', () => {
  test('populateModal should populate state', () => {
    // Arrange
    const state: ModalState = null;
    const action = populateModal('Some content', 'Title');

    // Act
    const updatedState = modalReducer(state, action);

    //Assert
    expect(updatedState).toEqual<ModalState>({
      title: 'Title',
      content: 'Some content',
    });
  });

  test('closeModal should return null', () => {
    // Arrange
    const state: ModalState = {
      content: 'test',
      title: 'test',
    };
    const action = closeModal();

    // Act
    const updatedState = modalReducer(state, action);

    //Assert
    expect(updatedState).toBe(null);
  });
});
