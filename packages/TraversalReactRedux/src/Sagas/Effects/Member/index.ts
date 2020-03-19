import { takeLatest } from 'redux-saga/effects';
import * as actions from '../../../Actions';
import * as generators from '../../Generators';

export default (memberApi: any) => [
  takeLatest(
    actions.MEMBER_CREATE,
    generators.createMemberGenerator(memberApi)
  ),
];
