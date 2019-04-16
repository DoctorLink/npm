import React from 'react'
import { connect } from 'react-redux'
import { traversalSummarySet, traversalPrevious } from '../../Actions'
import SummaryComponent from '../../Components/Summary'

const Summary = ({ summary, dispatch }) => 
    (<SummaryComponent 
        summary={summary} 
        close = {() => dispatch(traversalSummarySet(null))}
        jumpBack = {(traversalId, algoId, nodeId) => dispatch(traversalPrevious(traversalId, algoId, nodeId))} />)

const mapStateToProps = state => ({ summary: state.summary })

export default connect(mapStateToProps)(Summary)