import { modalReducer } from '../src/Reducers/Modal';
import { closeModal } from '../src/Actions/Modal';

const r = modalReducer(undefined, closeModal());

test('Modal Reducer', () => {
  expect(r).toBe(null);
});
