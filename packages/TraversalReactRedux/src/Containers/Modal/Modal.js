import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../Actions'
import ModalComp from '../../Components/Modal'

const Modal = ({ modal, dispatch }) => 
    (<ModalComp modal={modal} closeModal={() => dispatch(closeModal())}/>)

const mapStateToProps = state => ({ modal: state.modal })

export default connect(mapStateToProps)(Modal)
