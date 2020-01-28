import React from 'react'
import { useSelector } from 'react-redux'
import { Summary, buildSummaryActions } from '../../ComponentModules'

export default ({ containerRef }) => {
    const summary = useSelector(state => state.summary);
    return (<Summary 
        summary={summary} 
        actions={buildSummaryActions(summary, containerRef)} />)
}