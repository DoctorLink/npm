import React from 'react'
import { connect } from 'react-redux'
import { toggleRadio, traversalAuto } from '../../Actions'
import RadioComp from '../../Components/Radio'
import HiddenInput from '../../Components/HiddenInput'

const Radio = ({ dispatch, answer, answerId, questionAnswerIds, hidden, ...props }) => {
    const Comp = hidden ? HiddenInput : RadioComp;
    const name = answerId.substring(0, answerId.lastIndexOf('_'));
    return (<Comp
        type="radio"
        id={answerId}
        name={name}
        value={true}                
        checked={answer.controlChecked} 
        onChange={()=>{}}
        {...props}
        onClick={(e) => { 
            dispatch(toggleRadio(answerId, questionAnswerIds, true));
            if (e.type === 'click' && e.clientX !== 0 && e.clientY !== 0) {
                dispatch(traversalAuto());
            }
        }} />)}

Radio.defaultProps =  RadioComp.defaultProps

export default connect()(Radio)
