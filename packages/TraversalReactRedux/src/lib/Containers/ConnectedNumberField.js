import React from 'react'
import { connect } from 'react-redux'
import { updateText } from '../Actions'
import NumberField from '../Components/NumberField'

const ConnectedNumberField = ({ dispatch, answer, answerId, questionAnswerIds }) => {
    return (
        <NumberField
            value={answer.controlValue || ""}
            onChange={(e) => dispatch(updateText(answerId, questionAnswerIds, e))} />
    )
}

export default connect()(ConnectedNumberField)