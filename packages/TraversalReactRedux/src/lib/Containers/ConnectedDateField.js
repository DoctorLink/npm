import React from 'react'
import { connect } from 'react-redux'
import { updateText } from '../Actions'
import DateField from '../Components/DateField'

const ConnectedDateField = ({ dispatch, answer, answerId, questionAnswerIds }) => {
    return (
        <DateField
            value={answer.controlValue || ""}
            onChange={(e) => dispatch(updateText(answerId, questionAnswerIds, e))} />
    )
}

export default connect()(ConnectedDateField)