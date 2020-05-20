export const MEMBER_CREATE = 'MEMBER_CREATE';
export const memberCreate = (memberReference: string): MemberAction => ({
  type: MEMBER_CREATE,
  memberReference,
});

export const MEMBER_CREATE_SET = 'MEMBER_CREATE_SET';
export const memberCreateSet = (memberReference: string): MemberAction => ({
  type: MEMBER_CREATE_SET,
  memberReference,
  receivedAt: new Date(),
});

export type MemberAction =
  | { type: typeof MEMBER_CREATE; memberReference: string }
  | {
      type: typeof MEMBER_CREATE_SET;
      memberReference: string;
      receivedAt: Date;
    };
