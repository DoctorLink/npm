import React from 'react'
import { connect } from 'react-redux'
import { toggleCheckbox } from '../Actions'
import Checkbox from '../Components/Checkbox'

const ConnectedTraversalCheckbox = ({ dispatch, answer, answerId, questionAnswerIds }) =>
    (<Checkbox
        id={answerId}
        value={true}
        checked={answer.controlChecked}
        onChange={() => dispatch(toggleCheckbox(answerId, questionAnswerIds))} />)

export default connect()(ConnectedTraversalCheckbox)