import React from 'react'
import { connect } from 'react-redux'
import { toggleRadio } from '../../Actions'
import RadioComp from '../../Components/Radio'

const Radio = ({ dispatch, answer, answerId, questionAnswerIds }) =>
    (<RadioComp
        id={answerId}
        value={true} 
        checked={answer.controlChecked} 
        onChange={() => dispatch(toggleRadio(answerId, questionAnswerIds))} />)

Radio.defaultProps =  RadioComp.defaultProps

export default connect()(Radio)
