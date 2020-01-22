import React from 'react'
import { connect } from 'react-redux'
import { updateText } from '../../Actions'
import DateFieldComp from '../../Components/DateField'

const DateField = ({ dispatch, answer, answerId, questionAnswerIds }) => {
    return (
        <DateFieldComp
            value={answer.controlValue || ""}
            onChange={(e) => dispatch(updateText(answerId, questionAnswerIds, e.target.value))} />
    )
}

DateField.defaultProps =  DateFieldComp.defaultProps

export default connect()(DateField)