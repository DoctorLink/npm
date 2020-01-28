import React from 'react';
import SymptomReport from '../../Containers/SymptomReport';
import HealthAssessment from '../../Containers/HealthAssessment';

export default ({ traversalId, assessmentType }) => {
    switch (assessmentType) {
        case 2:
            return <HealthAssessment traversalId={traversalId} />;
        default:
            return <SymptomReport traversalId={traversalId} />;
    }
}