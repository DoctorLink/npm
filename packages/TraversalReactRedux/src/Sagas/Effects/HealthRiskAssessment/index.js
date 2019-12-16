import { takeLatest } from 'redux-saga/effects'
import * as actions from '../../../Actions'
import * as generators from '../../Generators'

export default hraApi => ([
    takeLatest(actions.HEALTH_AGE_GET, generators.createHealthAgeGenerator(hraApi)),
    takeLatest(actions.HEALTH_RISKS_GET, generators.createHealthRisksGenerator(hraApi)),
    takeLatest(actions.HRA_WELLNESS_GET, generators.createWellnessGenerator(hraApi)),
])