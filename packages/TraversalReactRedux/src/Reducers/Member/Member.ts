import { MEMBER_CREATE_SET } from '../../Actions';

const memberReference = (state: any = null, action: any) => {
  switch (action.type) {
    case MEMBER_CREATE_SET:
      return action.memberReference;
    default:
      return state;
  }
};

export default memberReference;
