import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, BuildModalActions } from '../../ComponentModules';

export const ModalConnected: React.FC<{}> = () => {
  const modal = useSelector((state: any) => state.modal);
  return <Modal modal={modal} actions={BuildModalActions()} />;
};

export default ModalConnected;
