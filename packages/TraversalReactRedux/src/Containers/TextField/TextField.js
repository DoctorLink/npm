import React from 'react'
import { connect } from 'react-redux'
import { updateText } from '../../Actions'
import TextFieldComp from '../../Components/TextField'

const TextField = ({ dispatch, answer, answerId, questionAnswerIds, type, CustomComp }) => {
    const Comp = CustomComp ? CustomComp : TextFieldComp;
    const inputType = type ? type : 'text';
    return (
        <Comp
            type={inputType}
            value={answer.controlValue || ""}
            onChange={(e) => dispatch(updateText(answerId, questionAnswerIds, e.target.value))} />
    )
}

TextField.defaultProps = TextFieldComp.defaultProps

export default connect()(TextField)