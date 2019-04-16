import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../Actions'
import ModalComp from '../../Components/Modal'

const Modal = ({ explanation, dispatch }) => 
    (<ModalComp explanation={explanation} closeModal={() => dispatch(closeModal())}/>)

const mapStateToProps = state => ({ explanation: state.modal })

export default connect(mapStateToProps)(Modal)
