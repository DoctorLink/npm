import React from 'react'
import { connect } from 'react-redux'
import { updateText } from '../../Actions'
import TextFieldComp from '../../Components/TextField'

const TextField = ({ dispatch, answer, answerId, questionAnswerIds }) => {
    return (
        <TextFieldComp
            value={answer.controlValue || ""}
            onChange={(e) => dispatch(updateText(answerId, questionAnswerIds, e))} />
    )
}

TextField.defaultProps = TextFieldFieldComp.defaultProps

export default connect()(TextField)