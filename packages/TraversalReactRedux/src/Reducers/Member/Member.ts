import { MEMBER_CREATE_SET, MemberAction } from '../../Actions';

const memberReference = (
  state: string | null = null,
  action: MemberAction
): string | null => {
  switch (action.type) {
    case MEMBER_CREATE_SET:
      return action.memberReference;
    default:
      return state;
  }
};

export default memberReference;
