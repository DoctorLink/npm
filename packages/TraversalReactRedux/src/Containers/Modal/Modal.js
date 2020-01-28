import React from 'react';
import { useSelector } from 'react-redux';
import { Modal, buildModalActions } from '../../ComponentModules';

export default () => {
    const modal  = useSelector(state => state.modal);
    return (<Modal modal={modal} actions={buildModalActions()} />)
}