import React from 'react'
import { connect } from 'react-redux'
import { toggleRadio } from '../Actions'
import Radio from '../Components/Radio'

const ConnectedTraversalRadio = ({ dispatch, answer, answerId, questionAnswerIds }) =>
    (<Radio
        id={answerId}
        value={true} 
        checked={answer.controlChecked} 
        onChange={() => dispatch(toggleRadio(answerId, questionAnswerIds))} />)

ConnectedTraversalRadio.defaultProps =  Radio.defaultProps

export default connect()(ConnectedTraversalRadio)
