import React from 'react'
import { connect } from 'react-redux'
import SymptomReport from '../../ComponentModules/SymptomReport'
import HealthAssessment from '../../ComponentModules/HealthAssessment'

const Conclusions = ({ traversalId, assessmentType }) => {
    switch (assessmentType) {
        case 2:
            return <HealthAssessment traversalId={traversalId} />;
        default:
            return <SymptomReport traversalId={traversalId} />;
    }
}

const mapStateToProps = state => ({ conclusion: state.conclusion });
export default connect(mapStateToProps)(Conclusions)