import React from 'react'
import { connect } from 'react-redux'
import { updateText } from '../../Actions'
import NumberFieldComp from '../../Components/NumberField'

const NumberField = ({ dispatch, answer, answerId, questionAnswerIds }) => {
    return (
        <NumberFieldComp
            value={answer.controlValue || ""}
            onChange={(e) => dispatch(updateText(answerId, questionAnswerIds, e))} />
    )
}

NumberField.defaultProps =  NumberFieldComp.defaultProps

export default connect()(NumberField)