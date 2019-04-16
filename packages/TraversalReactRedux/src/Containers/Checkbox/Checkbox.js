import React from 'react'
import { connect } from 'react-redux'
import { toggleCheckbox } from '../../Actions'
import CheckboxComp from '../../Components/Checkbox'

const Checkbox = ({ dispatch, answer, answerId, questionAnswerIds }) =>
    (<CheckboxComp
        id={answerId}
        value={true}
        checked={answer.controlChecked}
        onChange={() => dispatch(toggleCheckbox(answerId, questionAnswerIds))} />)

Checkbox.defaultProps =  CheckboxComp.defaultProps

export default connect()(Checkbox)