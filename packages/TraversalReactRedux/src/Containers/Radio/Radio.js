import React from 'react'
import { connect } from 'react-redux'
import { toggleRadio } from '../../Actions'
import RadioComp from '../../Components/Radio'
import HiddenInput from '../../Components/HiddenInput'

const Radio = ({ dispatch, answer, answerId, questionAnswerIds, hidden, ...props }) => {
    const Comp = hidden ? HiddenInput : RadioComp;
    return (<Comp
        type="radio"
        id={answerId}
        value={true} 
        checked={answer.controlChecked} 
        onChange={()=>{}}
        {...props}
        onClick={() => dispatch(toggleRadio(answerId, questionAnswerIds, true))} />)}

Radio.defaultProps =  RadioComp.defaultProps

export default connect()(Radio)
