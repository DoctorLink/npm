import React from 'react'
import { connect } from 'react-redux'
import { updateText } from '../Actions'
import TextField from '../Components/TextField'

const ConnectedTraversalText = ({ dispatch, answer, answerId, questionAnswerIds }) => {
    return (
        <TextField
            value={answer.controlValue || ""}
            onChange={(e) => dispatch(updateText(answerId, questionAnswerIds, e))} />
    )
}

export default connect()(ConnectedTraversalText)