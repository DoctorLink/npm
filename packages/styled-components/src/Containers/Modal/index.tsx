import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, useModalActions } from '../../ComponentModules';
import { RootState, ModalState } from '@doctorlink/traversal-core';

export const ModalConnected: React.FC = () => {
  const modal: ModalState = useSelector((state: RootState) => state.modal);
  const actions = useModalActions();
  return <Modal modal={modal} actions={actions} />;
};
