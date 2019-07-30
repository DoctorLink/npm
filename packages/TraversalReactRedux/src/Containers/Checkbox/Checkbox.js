import React from 'react'
import { connect } from 'react-redux'
import { toggleCheckbox } from '../../Actions'
import CheckboxComp from '../../Components/Checkbox'
import HiddenInput from '../../Components/HiddenInput'

const Checkbox = ({ dispatch, answer, answerId, questionAnswerIds, hidden, ...props }) => {
    const Comp = hidden ? HiddenInput : CheckboxComp;
    return (<Comp
        type="checkbox"
        id={answerId}
        value={true}
        checked={answer.controlChecked}
        {...props}
        onChange={() => dispatch(toggleCheckbox(answerId, questionAnswerIds))} />)}

Checkbox.defaultProps =  CheckboxComp.defaultProps

export default connect()(Checkbox)